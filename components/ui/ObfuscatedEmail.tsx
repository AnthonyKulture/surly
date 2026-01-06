"use client";

import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
    user: string;
    domain: string;
    tld: string;
    className?: string;
    showMailto?: boolean;
}

/**
 * Obfuscated email component that protects against spam bots.
 * The email is assembled client-side via JavaScript, making it invisible to crawlers.
 * 
 * Usage: <ObfuscatedEmail user="contact" domain="surly" tld="fr" />
 * Renders: contact@surly.fr with mailto link
 */
export const ObfuscatedEmail = ({
    user,
    domain,
    tld,
    className = "",
    showMailto = true,
}: ObfuscatedEmailProps) => {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        // Assemble email client-side only (invisible to bots)
        setEmail(`${user}@${domain}.${tld}`);
    }, [user, domain, tld]);

    if (!email) {
        // SSR fallback - shows nothing to bots
        return (
            <span className={className}>
                [Activer JavaScript pour voir l'email]
            </span>
        );
    }

    if (showMailto) {
        return (
            <a
                href={`mailto:${email}`}
                className={className || "text-primary hover:underline font-medium"}
            >
                {email}
            </a>
        );
    }

    return <span className={className}>{email}</span>;
};

// Pre-configured component for contact@surly.fr
export const SurlyContactEmail = ({ className }: { className?: string }) => (
    <ObfuscatedEmail user="contact" domain="surly" tld="fr" className={className} />
);
