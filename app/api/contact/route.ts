
import { NextResponse } from "next/server";
import { sendContactNotification, sendContactAutoReply } from "@/lib/email-service";
import { checkRateLimit } from "@/lib/rate-limiter";
import { validateMessage, sanitizeMessage } from "@/lib/input-validator";

function getClientIP(req: Request): string {
    const forwarded = req.headers.get("x-forwarded-for");
    const realIP = req.headers.get("x-real-ip");
    if (forwarded) return forwarded.split(",")[0].trim();
    if (realIP) return realIP;
    return "unknown";
}

export async function POST(req: Request) {
    try {
        // Rate limiting
        const clientIP = getClientIP(req);
        const rateLimit = checkRateLimit(`contact:${clientIP}`);
        if (!rateLimit.isAllowed) {
            return NextResponse.json(
                { error: "Trop de demandes. Veuillez réessayer plus tard." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { type, name, company, email, message } = body;

        // Validation
        if (!type || !name || !email || !message) {
            return NextResponse.json(
                { error: "Champs obligatoires manquants" },
                { status: 400 }
            );
        }

        // Sanitization
        const sanitizedData = {
            type: sanitizeMessage(type),
            name: sanitizeMessage(name),
            company: sanitizeMessage(company || ""),
            email: sanitizeMessage(email).toLowerCase(),
            message: sanitizeMessage(message)
        };

        // Send Admin Notification
        const adminNotif = await sendContactNotification(sanitizedData);

        // Send User Auto-Reply (don't block if admin notif fails, or do both parallel)
        const userReply = await sendContactAutoReply(sanitizedData.email, sanitizedData.name);

        if (!adminNotif) {
            console.error("Failed to send admin notification for contact form");
            // We return success anyway if at least user reply worked? Or maybe error?
            // Usually better to return error if admin didn't get it.
            return NextResponse.json(
                { error: "Erreur lors de l'envoi du message. Veuillez nous contacter par téléphone." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue." },
            { status: 500 }
        );
    }
}
