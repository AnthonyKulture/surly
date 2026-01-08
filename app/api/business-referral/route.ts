import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limiter";
import { validateMessage, sanitizeMessage } from "@/lib/input-validator";

// Lazy initialization to avoid build errors when env var is not set
let resendInstance: Resend | null = null;

function getResendClient(): Resend {
    if (!resendInstance) {
        resendInstance = new Resend(process.env.RESEND_API_KEY || '');
    }
    return resendInstance;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@surly.fr';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@surly.fr';

interface BusinessReferralData {
    secteur: "banque" | "assurance";
    fonction: string;
    autrefonction?: string;
    description: string;
    estInscrit: "oui" | "non";
    nom: string;
    email?: string;
    telephone?: string;
}

function formatBusinessReferralEmail(data: BusinessReferralData): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A5C4C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .section { background: #f9f9f9; padding: 20px; margin-bottom: 10px; border-left: 4px solid #D4FF00; }
        .section h2 { margin-top: 0; color: #0A5C4C; font-size: 18px; }
        .info-row { margin: 10px 0; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
        .badge { display: inline-block; background: #D4FF00; color: #0A5C4C; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; margin-left: 10px; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💼 Nouvelle opportunité d'apport d'affaires</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
        </div>

        <div class="section">
            <h2>📋 Détails du projet</h2>
            <div class="info-row"><span class="label">Secteur:</span> <span class="value">${data.secteur.toUpperCase()}<span class="badge">${data.secteur}</span></span></div>
            <div class="info-row"><span class="label">Fonction concernée:</span> <span class="value">${data.fonction}</span></div>
            ${data.autrefonction ? `<div class="info-row"><span class="label">Précision fonction:</span> <span class="value">${data.autrefonction}</span></div>` : ''}
            <div class="info-row">
                <span class="label">Description complète:</span>
                <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${data.description}</div>
            </div>
        </div>

        <div class="section">
            <h2>👤 Informations de contact</h2>
            <div class="info-row"><span class="label">Nom:</span> <span class="value">${data.nom}</span></div>
            <div class="info-row"><span class="label">Inscrit sur Surly:</span> <span class="value">${data.estInscrit === "oui" ? "✅ Oui" : "❌ Non"}</span></div>
            ${data.email ? `<div class="info-row"><span class="label">Email:</span> <span class="value">${data.email}</span></div>` : ''}
            ${data.telephone ? `<div class="info-row"><span class="label">Téléphone:</span> <span class="value">${data.telephone}</span></div>` : ''}
        </div>

        <div class="footer">
            Surly - Programme d'apport d'affaires • 3% de commission
        </div>
    </div>
</body>
</html>
    `;
}

/**
 * Get client IP address from request headers
 */
function getClientIP(req: NextRequest): string {
    const forwarded = req.headers.get("x-forwarded-for");
    const realIP = req.headers.get("x-real-ip");
    if (forwarded) return forwarded.split(",")[0].trim();
    if (realIP) return realIP;
    return "unknown";
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const clientIP = getClientIP(request);
        const rateLimit = checkRateLimit(`business-referral:${clientIP}`);
        if (!rateLimit.isAllowed) {
            return NextResponse.json(
                { error: "Trop de requêtes. Veuillez réessayer dans quelques minutes." },
                { status: 429 }
            );
        }

        const data: BusinessReferralData = await request.json();

        // Validation
        if (!data.secteur || !data.fonction || !data.description || !data.estInscrit || !data.nom) {
            return NextResponse.json(
                { error: "Champs requis manquants" },
                { status: 400 }
            );
        }

        // Validate description field for malicious content
        const descValidation = validateMessage(data.description);
        if (!descValidation.isValid) {
            return NextResponse.json(
                { error: descValidation.error },
                { status: 400 }
            );
        }

        // Sanitize text fields
        data.description = sanitizeMessage(data.description);
        data.nom = data.nom.substring(0, 100).trim();

        if (data.estInscrit === "non") {
            if (!data.email || !data.telephone) {
                return NextResponse.json(
                    { error: "Email et téléphone requis pour les non-inscrits" },
                    { status: 400 }
                );
            }
        }

        // Send email using Resend
        const resend = getResendClient();
        const subject = `💼 Apport d'affaires - ${data.secteur.toUpperCase()} / ${data.fonction}`;

        const { data: emailData, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject,
            html: formatBusinessReferralEmail(data),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: "Erreur lors de l'envoi de l'email" },
                { status: 500 }
            );
        }

        console.log('Business referral email sent successfully:', emailData);

        return NextResponse.json(
            { success: true, message: "Opportunité transmise avec succès" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error processing business referral:", error);
        return NextResponse.json(
            { error: "Erreur serveur" },
            { status: 500 }
        );
    }
}

