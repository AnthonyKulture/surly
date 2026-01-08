import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { validateMessage, sanitizeMessage } from "@/lib/input-validator";
import { checkRateLimit } from "@/lib/rate-limiter";

const API_KEY = process.env.GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * Get client IP address from request headers
 */
function getClientIP(req: Request): string {
    const forwarded = req.headers.get("x-forwarded-for");
    const realIP = req.headers.get("x-real-ip");

    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }
    if (realIP) {
        return realIP;
    }
    return "unknown";
}

const SYSTEM_PROMPT = `
Tu es un expert en recrutement spécialisé dans la Banque et l'Assurance pour le cabinet Surly.
Ton objectif est de qualifier un prospect (client potentiel) de manière structurée et efficace.

RÈGLE CRITIQUE : INTELLIGENCE CONTEXTUELLE
**AVANT de poser n'importe quelle question, tu DOIS analyser ce que l'utilisateur a DÉJÀ fourni.**
- Si l'utilisateur donne plusieurs informations d'un coup (ex: profil complet avec secteur, rôle, compétences, durée, date), tu dois les RECONNAÎTRE.
- Ne JAMAIS redemander une information déjà donnée.
- Aller directement à l'étape suivante ou demander uniquement ce qui MANQUE.

INFORMATIONS À COLLECTER (par ordre de priorité) :

1.  **SECTEUR & RÔLE** :
    *   Secteur : Banque, Assurance, ou les Deux ?
    *   Rôle recherché (ex: Business Analyst, Actuaire, etc.)

2.  **DÉTAILS DU PROFIL** :
    *   Séniorité (Junior, Confirmé, Senior, Expert)
    *   Compétences clés
    *   Outils maîtrisés
    *   Méthodologies

3.  **CONTEXTE MISSION** :
    *   Durée de la mission
    *   Date de démarrage
    *   Motif (renfort, remplacement, projet spécifique)

4.  **CONTACT (OBLIGATOIRE)** :
    *   Email professionnel (BLOQUANT)
    *   Nom et Téléphone (OPTIONNEL mais à demander)

STRATÉGIE ADAPTATIVE :
*   **Message riche en détails** : Si l'utilisateur donne déjà secteur + rôle + compétences + contexte → Passe DIRECTEMENT à la demande de contact.
*   **Message partiel** : Demande uniquement les informations MANQUANTES.
*   **Message vague** : Commence par Secteur & Rôle.

EXEMPLES :

**Cas 1 - Profil complet fourni** :
User: "Je cherche un Business Analyst Banque, 10+ ans d'expérience, SQL et JIRA, mission 9 mois à partir d'octobre."
AI: "Parfait, j'ai bien noté : Business Analyst Banque, senior avec SQL/JIRA, 9 mois dès octobre. Pour valider votre demande, quel est votre email pro ? (Vous pouvez aussi m'indiquer votre nom et téléphone si vous le souhaitez)."

**Cas 2 - Info partielle** :
User: "Un actuaire senior."
AI: "Noté, actuaire senior. Pour quelle compagnie : Banque ou Assurance ? Et quels outils doit-il maîtriser (ex: Prophet, Python) ?"

**Cas 3 - Vague** :
User: "Je cherche quelqu'un."
AI: "Bonjour ! Votre recherche concerne-t-elle la Banque ou l'Assurance, et quel type de poste visez-vous ?"

RÈGLES DE COMPORTEMENT :
*   Sois professionnel, direct et concis.
*   ANALYSE toujours le message avant de répondre.
*   Ne pose qu'UNE question/étape à la fois (sauf si groupées).
*   **CONCLUSION (STRATÉGIE DE FIN)** : Quand tu as toutes les infos (Secteur, Rôle, Compétences, Contexte, Contact) :
    1.  Récapitule très brièvement les points clés.
    2.  **Simule une action** : "Je lance immédiatement une recherche de sourcing ciblée dans notre réseau..."
    3.  **Confirme l'action (paragraphe séparé)** : "Recherche activée. Un de nos experts reviendra vers vous très rapidement avec une sélection de profils."
    *   *IMPORTANT : Sois concis. Sépare bien visuellement le lancement de la recherche et la confirmation.*
`;


export async function POST(req: Request) {
    try {
        // Get client IP for rate limiting
        const clientIP = getClientIP(req);

        // Check rate limit
        const rateLimit = checkRateLimit(clientIP);
        if (!rateLimit.isAllowed) {
            const resetDate = new Date(rateLimit.resetTime);
            return NextResponse.json(
                {
                    error: "Trop de requêtes. Veuillez réessayer dans quelques minutes.",
                    resetTime: resetDate.toISOString()
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
                        'X-RateLimit-Limit': '10',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': resetDate.toISOString(),
                    }
                }
            );
        }

        if (!API_KEY) {
            return NextResponse.json(
                { error: "Configuration manquante (API KEY)" },
                { status: 500 }
            );
        }

        const { history, message } = await req.json();

        // Validate input
        const validation = validateMessage(message);
        if (!validation.isValid) {
            return NextResponse.json(
                { error: validation.error },
                { status: 400 }
            );
        }

        // Sanitize message
        const sanitizedMessage = sanitizeMessage(message);

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: SYSTEM_PROMPT }],
                },
                {
                    role: "model",
                    parts: [{ text: "Bien reçu. Je suis prêt à qualifier le prospect selon vos règles strictes." }],
                },
                ...history.map((msg: any) => ({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: msg.content }],
                })),
            ],
        });


        const result = await chat.sendMessage(sanitizedMessage);
        const response = result.response.text();

        // Check if conversation is complete (AI sent closing message)
        // Check if conversation is complete (AI sent closing message)
        const isConversationComplete = /\b(je lance immédiatement une recherche|recherche activée|reviendra.*vers vous|reviendront.*vers vous)\b/i.test(response);

        // If conversation complete, submit lead asynchronously (don't block response)
        if (isConversationComplete) {
            const allMessages = [
                ...history,
                { role: 'user', content: sanitizedMessage },
                { role: 'assistant', content: response }
            ];

            // Submit lead asynchronously (fire and forget)
            const origin = new URL(req.url).origin;
            fetch(`${origin}/api/submit-lead`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: allMessages }),
            }).catch(err => {
                console.error('Failed to submit lead:', err);
            });
        }

        return NextResponse.json(
            { response },
            {
                headers: {
                    'X-RateLimit-Limit': '10',
                    'X-RateLimit-Remaining': rateLimit.remaining.toString(),
                    'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
                }
            }
        );
    } catch (error) {
        console.error("Gemini Error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la communication avec l'IA." },
            { status: 500 }
        );
    }
}
