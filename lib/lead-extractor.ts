/**
 * Lead extraction utility
 * Extracts structured information from AI chat conversation
 */

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
 * Extracts email from conversation history
 */
function extractEmail(messages: any[]): string | null {
    for (const msg of messages) {
        if (msg.role === 'user') {
            // Email regex pattern
            const emailMatch = msg.content.match(/[\w.-]+@[\w.-]+\.\w+/);
            if (emailMatch) {
                return emailMatch[0];
            }
        }
    }
    return null;
}

/**
 * Extracts name from conversation
 */
function extractName(messages: any[]): string | null {
    for (const msg of messages) {
        if (msg.role === 'user') {
            // Look for common name patterns after email
            const namePatterns = [
                /(?:je suis|je m'appelle|mon nom est)\s+([A-ZÀ-Ÿ][a-zà-ÿ]+(?:\s+[A-ZÀ-Ÿ][a-zà-ÿ]+)?)/i,
                /^([A-ZÀ-Ÿ][a-zà-ÿ]+\s+[A-ZÀ-Ÿ][a-zà-ÿ]+)$/,
            ];

            for (const pattern of namePatterns) {
                const match = msg.content.match(pattern);
                if (match && match[1]) {
                    return match[1];
                }
            }
        }
    }
    return null;
}

/**
 * Extracts phone number from conversation
 */
function extractPhone(messages: any[]): string | null {
    for (const msg of messages) {
        if (msg.role === 'user') {
            // French phone number patterns
            const phoneMatch = msg.content.match(/(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}/);
            if (phoneMatch) {
                return phoneMatch[0];
            }
        }
    }
    return null;
}

/**
 * Extracts sector (Banque/Assurance) from conversation
 */
function extractSector(messages: any[]): string | null {
    const conversationText = messages.map(m => m.content).join(' ').toLowerCase();

    const hasBanque = /\b(banque|bancaire|banking)\b/i.test(conversationText);
    const hasAssurance = /\b(assurance|insurance|iard)\b/i.test(conversationText);

    if (hasBanque && hasAssurance) return 'Banque & Assurance';
    if (hasBanque) return 'Banque';
    if (hasAssurance) return 'Assurance';

    return null;
}

/**
 * Extracts role/position from conversation
 */
function extractRole(messages: any[]): string | null {
    const conversationText = messages.map(m => m.content).join(' ');

    // Common roles
    const roles = [
        'Business Analyst', 'Actuaire', 'Analyste', 'Développeur', 'Chef de projet',
        'PMO', 'Product Owner', 'Scrum Master', 'Responsable', 'Manager',
        'Expert', 'Consultant', 'Auditeur', 'Contrôleur', 'Risk Manager',
        'Compliance Officer', 'Data Analyst', 'Data Scientist'
    ];

    for (const role of roles) {
        if (new RegExp(role, 'i').test(conversationText)) {
            return role;
        }
    }

    return null;
}

/**
 * Extracts skills and tools from conversation
 */
function extractSkillsAndTools(messages: any[]): { skills: string[], tools: string[] } {
    const conversationText = messages.map(m => m.content).join(' ');

    const commonSkills = ['SQL', 'Python', 'Java', 'JavaScript', 'C#', 'R', 'Excel', 'VBA'];
    const commonTools = ['JIRA', 'Confluence', 'ALM', 'Octane', 'Prophet', 'SAS', 'Tableau'];

    const skills = commonSkills.filter(skill =>
        new RegExp(`\\b${skill}\\b`, 'i').test(conversationText)
    );

    const tools = commonTools.filter(tool =>
        new RegExp(`\\b${tool}\\b`, 'i').test(conversationText)
    );

    return { skills, tools };
}

/**
 * Extracts mission duration from conversation
 */
function extractDuration(messages: any[]): string | null {
    const conversationText = messages.map(m => m.content).join(' ');

    const durationMatch = conversationText.match(/(\d+)\s*(mois|an|année)/i);
    if (durationMatch) {
        return durationMatch[0];
    }

    return null;
}

/**
 * Extracts start date from conversation
 */
function extractStartDate(messages: any[]): string | null {
    const conversationText = messages.map(m => m.content).join(' ');

    if (/\b(asap|immédiatement|urgent)\b/i.test(conversationText)) {
        return 'ASAP';
    }

    const monthMatch = conversationText.match(/\b(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s*(\d{4})?\b/i);
    if (monthMatch) {
        return monthMatch[0];
    }

    return null;
}

/**
 * Main function to extract lead information from conversation
 */
export function extractLeadInfo(messages: any[]): LeadInfo | null {
    const email = extractEmail(messages);

    // Email is mandatory
    if (!email) {
        return null;
    }

    const { skills, tools } = extractSkillsAndTools(messages);

    // Format full conversation
    const fullConversation = messages
        .map(msg => `${msg.role === 'user' ? 'Client' : 'Surly AI'}: ${msg.content}`)
        .join('\n\n');

    return {
        email,
        name: extractName(messages),
        phone: extractPhone(messages),
        sector: extractSector(messages),
        role: extractRole(messages),
        seniority: null, // Can be enhanced
        skills,
        tools,
        duration: extractDuration(messages),
        startDate: extractStartDate(messages),
        type: null, // Can be enhanced
        fullConversation,
    };
}
