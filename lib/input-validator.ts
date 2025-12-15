/**
 * Input validation utility for AI chat
 * Protects against malicious input and ensures data quality
 */

export interface ValidationResult {
    isValid: boolean;
    error?: string;
}

const MAX_MESSAGE_LENGTH = 1000;
const MIN_MESSAGE_LENGTH = 1;

// Suspicious patterns to block
const SUSPICIOUS_PATTERNS = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onload=, etc.
    /(union|select|insert|update|delete|drop|create|alter)\s+(from|into|table|database)/i, // SQL injection
    /\{\{.*\}\}/g, // Template injection
    /<iframe/i,
    /<object/i,
    /<embed/i,
];

/**
 * Validates user input for security and quality
 */
export function validateMessage(message: string): ValidationResult {
    // Check if message exists
    if (!message) {
        return { isValid: false, error: "Le message ne peut pas être vide." };
    }

    // Trim whitespace
    const trimmed = message.trim();

    // Check minimum length
    if (trimmed.length < MIN_MESSAGE_LENGTH) {
        return { isValid: false, error: "Le message est trop court." };
    }

    // Check maximum length
    if (trimmed.length > MAX_MESSAGE_LENGTH) {
        return {
            isValid: false,
            error: `Le message ne peut pas dépasser ${MAX_MESSAGE_LENGTH} caractères.`
        };
    }

    // Check for suspicious patterns
    for (const pattern of SUSPICIOUS_PATTERNS) {
        if (pattern.test(trimmed)) {
            return {
                isValid: false,
                error: "Le message contient du contenu non autorisé."
            };
        }
    }

    return { isValid: true };
}

/**
 * Sanitizes message by trimming and removing potential threats
 */
export function sanitizeMessage(message: string): string {
    return message
        .trim()
        .substring(0, MAX_MESSAGE_LENGTH);
}

export { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH };
