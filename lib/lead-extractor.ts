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
 * Dynamically discovers active, supported models for the user's API key
 */
export async function getAvailableModelList(ai: GoogleGenAI): Promise<string[]> {
    try {
        const response = await ai.models.list();
        const validModelNames: string[] = [];

        for await (const m of response) {
            const rawName = m.name || "";
            const cleanName = rawName.replace(/^models\//, "");
            if (cleanName) {
                validModelNames.push(cleanName);
            }
        }

        // Sort to prefer flash models
        validModelNames.sort((a, b) => {
            if (a.includes("flash") && !b.includes("flash")) return -1;
            if (!a.includes("flash") && b.includes("flash")) return 1;
            return b.localeCompare(a);
        });

        if (validModelNames.length > 0) {
            return validModelNames;
        }
    } catch (err) {
        console.warn("Could not list models dynamically:", err);
    }

    return ["gemini-2.0-flash", "gemini-1.5-flash-latest", "gemini-1.5-pro-latest"];
}

/**
 * Extracts structured lead information from conversation using Gemini
 * Includes regex fallback to guarantee notification if an email is detected
 */
export async function extractLeadInfo(messages: any[]): Promise<LeadInfo | null> {
    // Format conversation for context
    const conversationText = messages
        .map(msg => `${msg.role === 'user' ? 'Client' : 'Surly AI'}: ${msg.content}`)
        .join('\n');

    // Regex extractors for guaranteed fallback
    const emailMatch = conversationText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = conversationText.match(/(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}/);
    const extractedEmail = emailMatch ? emailMatch[0] : "";

    try {
        const API_KEY = process.env.GEMINI_API_KEY || "";
        if (API_KEY) {
            const ai = new GoogleGenAI({ apiKey: API_KEY });
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

            const modelsToTry = await getAvailableModelList(ai);
            let responseText = "";

            for (const modelName of modelsToTry) {
                try {
                    const result = await ai.models.generateContent({
                        model: modelName,
                        contents: prompt,
                        config: {
                            responseMimeType: "application/json",
                        }
                    });
                    responseText = result.text ?? "";
                    if (responseText) break;
                } catch (e) {
                    console.warn(`Extraction model ${modelName} failed, trying next...`);
                }
            }

            if (responseText) {
                const data = JSON.parse(responseText);
                if (data && (data.email || extractedEmail)) {
                    return {
                        ...data,
                        email: data.email || extractedEmail,
                        phone: data.phone || (phoneMatch ? phoneMatch[0] : undefined),
                        fullConversation: conversationText
                    };
                }
            }
        }
    } catch (error) {
        console.error("LLM Extraction Failed:", error);
    }

    // Fallback: If LLM fails but an email address was found in conversation, send lead anyway!
    if (extractedEmail) {
        console.log("Using fallback regex extraction for lead notification");
        return {
            email: extractedEmail,
            phone: phoneMatch ? phoneMatch[0] : undefined,
            fullConversation: conversationText
        };
    }

    return null;
}
