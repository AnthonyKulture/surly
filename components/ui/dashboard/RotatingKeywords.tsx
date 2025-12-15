import React, { useState, useEffect, memo } from "react";
import { Reveal } from "@/components/ui/Reveal";

// Industry-specific keywords
const BANQUE_KEYWORDS = [
    "Bâle III", "SEPA", "PSD2", "KYC/AML", "Crédit Corporate", "Banque Privée",
    "Gestion d'Actifs", "Trading", "ALM", "Pillar 3", "ICAAP", "Monétique",
    "Core Banking", "API Banking", "Open Banking", "Risque de Crédit",
    "Conformité RGPD", "MiFID II", "EMIR", "Benchmark Regulation"
];

const ASSURANCE_KEYWORDS = [
    "IFRS 17", "Solvabilité II", "Actuariat Vie", "Actuariat Non-Vie",
    "Tarification", "Souscription", "Gestion Sinistres", "Réassurance",
    "SCR", "ORSA", "QRT", "Pilier 3", "Best Estimate", "Risk Margin",
    "InsurTech", "Distribution", "Product Management", "Underwriting",
    "Claims Management", "Pricing"
];

interface RotatingKeywordsProps {
    mode: 'banque' | 'assurance';
}

export const RotatingKeywords = memo(({ mode }: RotatingKeywordsProps) => {
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
    const keywords = mode === 'banque' ? BANQUE_KEYWORDS : ASSURANCE_KEYWORDS;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [keywords.length]);

    // Reset keyword index when mode changes
    useEffect(() => {
        setCurrentKeywordIndex(0);
    }, [mode]);

    return (
        <Reveal delay={150} duration={800}>
            <div className="flex justify-center mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gray-50 rounded-full border border-gray-200/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Expertise</span>
                    <span className="text-sm font-semibold text-foreground transition-all duration-300">
                        {keywords[currentKeywordIndex]}
                    </span>
                </div>
            </div>
        </Reveal>
    );
});

RotatingKeywords.displayName = "RotatingKeywords";
