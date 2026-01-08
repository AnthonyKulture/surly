/**
 * Email service using Resend
 * Sends lead notifications to admin
 */

import { Resend } from 'resend';
import { LeadInfo } from './lead-extractor';

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

/**
 * Formats lead information into HTML email
 */
function formatLeadEmail(lead: LeadInfo): string {
    const skillsList = lead.skills && lead.skills.length > 0
        ? lead.skills.map(s => `<li>${s}</li>`).join('')
        : '<li><em>Non précisé</em></li>';

    const toolsList = lead.tools && lead.tools.length > 0
        ? lead.tools.map(t => `<li>${t}</li>`).join('')
        : '<li><em>Non précisé</em></li>';

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A5C4C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .section { background: #f9f9f9; padding: 20px; margin-bottom: 10px; border-left: 4px solid #0A5C4C; }
        .section h2 { margin-top: 0; color: #0A5C4C; font-size: 18px; }
        .info-row { margin: 10px 0; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
        .conversation { background: white; padding: 15px; border-radius: 4px; font-size: 14px; white-space: pre-wrap; }
        ul { margin: 10px 0; padding-left: 20px; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Nouveau Lead - AI Chat</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">${new Date().toLocaleString('fr-FR')}</p>
        </div>

        <div class="section">
            <h2>📧 Contact</h2>
            <div class="info-row"><span class="label">Email:</span> <span class="value">${lead.email}</span></div>
            ${lead.name ? `<div class="info-row"><span class="label">Nom:</span> <span class="value">${lead.name}</span></div>` : ''}
            ${lead.phone ? `<div class="info-row"><span class="label">Téléphone:</span> <span class="value">${lead.phone}</span></div>` : ''}
        </div>

        <div class="section">
            <h2>💼 Besoin</h2>
            ${lead.sector ? `<div class="info-row"><span class="label">Secteur:</span> <span class="value">${lead.sector}</span></div>` : ''}
            ${lead.role ? `<div class="info-row"><span class="label">Poste:</span> <span class="value">${lead.role}</span></div>` : ''}
            ${lead.seniority ? `<div class="info-row"><span class="label">Séniorité:</span> <span class="value">${lead.seniority}</span></div>` : ''}
        </div>

        <div class="section">
            <h2>🛠️ Compétences & Outils</h2>
            <div class="info-row">
                <span class="label">Compétences:</span>
                <ul>${skillsList}</ul>
            </div>
            <div class="info-row">
                <span class="label">Outils:</span>
                <ul>${toolsList}</ul>
            </div>
        </div>

        ${lead.duration || lead.startDate ? `
        <div class="section">
            <h2>📅 Mission</h2>
            ${lead.duration ? `<div class="info-row"><span class="label">Durée:</span> <span class="value">${lead.duration}</span></div>` : ''}
            ${lead.startDate ? `<div class="info-row"><span class="label">Démarrage:</span> <span class="value">${lead.startDate}</span></div>` : ''}
            ${lead.type ? `<div class="info-row"><span class="label">Type:</span> <span class="value">${lead.type}</span></div>` : ''}
        </div>
        ` : ''}

        <div class="section">
            <h2>💬 Conversation Complète</h2>
            <div class="conversation">${lead.fullConversation}</div>
        </div>

        <div class="footer">
            Surly AI Chat • Lead qualifié automatiquement
        </div>
    </div>
</body>
</html>
    `;
}

/**
 * Sends lead notification email to admin
 */
export async function sendLeadNotification(lead: LeadInfo): Promise<boolean> {
    try {
        const resend = getResendClient();
        const subject = `🎯 Nouveau lead - ${lead.role || 'Profil'} ${lead.sector || ''}`.trim();

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject,
            html: formatLeadEmail(lead),
        });

        if (error) {
            console.error('Resend error:', error);
            return false;
        }

        console.log('Lead email sent successfully:', data);
        return true;
    } catch (error) {
        console.error('Failed to send lead email:', error);
        return false;
    }
}

/**
 * Sends contact form notification to admin
 */
export async function sendContactNotification(data: { type: string; name: string; company: string; email: string; message: string }): Promise<boolean> {
    try {
        const resend = getResendClient();
        const subject = `📬 Nouveau contact - ${data.type} - ${data.name}`;

        const html = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A5C4C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .section { background: #f9f9f9; padding: 20px; margin-bottom: 10px; border-left: 4px solid #0A5C4C; }
        .info-row { margin: 10px 0; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
        .message { background: white; padding: 15px; border-radius: 4px; white-space: pre-wrap; border: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 Nouveau Message Contact</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">${new Date().toLocaleString('fr-FR')}</p>
        </div>

        <div class="section">
            <div class="info-row"><span class="label">Type:</span> <span class="value">${data.type}</span></div>
            <div class="info-row"><span class="label">Nom:</span> <span class="value">${data.name}</span></div>
            <div class="info-row"><span class="label">Entreprise:</span> <span class="value">${data.company || 'Non renseigné'}</span></div>
            <div class="info-row"><span class="label">Email:</span> <span class="value">${data.email}</span></div>
        </div>

        <div class="section">
            <h3>Message :</h3>
            <div class="message">${data.message}</div>
        </div>
    </div>
</body>
</html>
        `;

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject,
            html,
        });

        if (error) {
            console.error('Contact email error:', error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Failed to send contact email:', error);
        return false;
    }
}

/**
 * Sends auto-reply confirmation to user
 */
export async function sendContactAutoReply(email: string, name: string): Promise<boolean> {
    try {
        const resend = getResendClient();
        const firstName = name.split(' ')[0];

        const html = `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #0A5C4C;">Message bien reçu !</h1>
    </div>
    
    <p>Bonjour ${firstName},</p>
    
    <p>Nous avons bien reçu votre message via notre formulaire de contact et nous vous en remercions.</p>
    
    <p>Notre équipe va étudier votre demande et reviendra vers vous sous <strong>24 heures ouvrées</strong>.</p>
    
    <p>En attendant, n'hésitez pas à consulter nos offres ou nos experts disponibles sur notre plateforme.</p>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #999;">
        <p>L'équipe Surly<br>Spécialistes Banque & Assurance</p>
    </div>
</body>
</html>
        `;

        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: 'Confirmation de réception - Surly',
            html,
        });

        return true;
    } catch (error) {
        console.error('Failed to send auto-reply:', error);
        return false;
    }
}
