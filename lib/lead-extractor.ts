import { GoogleGenAI } from "@google/genai";



export interface LeadInfo {
    // Contact
    email: string;
    name?: string;
    phone?: string;

    // Job details
    sector?: string; // Banque, Assurance, or Both
    role?: string; // Business Analyst, Actuaire, etc.
    seniority?: string; // Junior, Senior, etc.
    skills?: string[]; // SQL, Python, etc.
    tools?: string[]; // JIRA, ALM, etc.

    // Mission context
    duration?: string; // 6 mois, 1 an, etc.
    startDate?: string; // ASAP, Octobre 2025, etc.
    type?: string; // Renfort, Remplacement, etc.

    // Full conversation
    fullConversation: string;
}

/**
 * Extracts structured lead information from conversation using Gemini
 */
export async function extractLeadInfo(messages: any[]): Promise<LeadInfo | null> {
    try {
        const API_KEY = process.env.GEMINI_API_KEY || "";
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        // Format conversation for context
        const conversationText = messages
            .map(msg => `${msg.role === 'user' ? 'Client' : 'Surly AI'}: ${msg.content}`)
            .join('\n');

        const prompt = `
        Tu es un expert en extraction de données. Analyse cette conversation de qualification entre un recruteur IA (Surly AI) et un client.
        
        Objectif : Extraire les informations finales validées.
        Règles :
        1. **Corrections** : Si le client se corrige (ex: donne un mauvais email puis le bon), prends UNIQUEMENT la dernière valeur valide.
        2. **Négations** : Si le client dit "Non" ou "Pas d'info" pour un champ optionnel (Nom, Tel), laisse le champ vide.
        3. **Contexte** : Déduis le Secteur, Rôle, Séniorité, etc. du contexte global.
        
        Format de sortie attendu (JSON uniquement) :
        {
            "email": "string (obligatoire)",
            "name": "string (optionnel)",
            "phone": "string (optionnel)",
            "sector": "string (Banque / Assurance / Mixte)",
            "role": "string",
            "seniority": "string",
            "skills": ["skill1", "skill2"],
            "tools": ["tool1", "tool2"],
            "duration": "string",
            "startDate": "string",
            "type": "string"
        }

        Conversation :
        ${conversationText}
        `;

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            }
        });

        const responseText = result.text ?? "";
        const data = JSON.parse(responseText);

        if (!data.email) {
            return null;
        }

        return {
            ...data,
            fullConversation: conversationText // Keep the full log for admin reference
        };

    } catch (error) {
        console.error("LLM Extraction Failed:", error);
        return null;
    }
}
