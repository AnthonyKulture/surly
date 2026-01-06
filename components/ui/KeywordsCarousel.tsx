"use client";

import { cn } from "@/lib/utils";

// Extended keywords with descriptions for Banking & Insurance sector
const ROW_1_KEYWORDS = [
    { skill: "IFRS 17", desc: "Actuaires & Comptables" },
    { skill: "Bâle III", desc: "Risk Managers" },
    { skill: "Solvabilité II", desc: "Experts Prudentiels" },
    { skill: "LCB-FT", desc: "Conformité & AML" },
    { skill: "KYC", desc: "Onboarding Client" },
    { skill: "SEPA", desc: "Paiements Européens" },
    { skill: "ISO 20022", desc: "Messagerie Financière" },
    { skill: "Monétique", desc: "Cartes & Terminaux" },
    { skill: "ALM", desc: "Gestion Actif-Passif" },
    { skill: "Stress Testing", desc: "Scénarios de Crise" },
    { skill: "ICAAP", desc: "Adéquation Capital" },
    { skill: "Pillar 3", desc: "Reporting Réglementaire" },
];

const ROW_2_KEYWORDS = [
    { skill: "Actuaire", desc: "Pricing & Tarification" },
    { skill: "Souscription", desc: "IARD & Vie" },
    { skill: "Sinistres", desc: "Gestion & Indemnisation" },
    { skill: "Réassurance", desc: "Traités & Facultatives" },
    { skill: "Commercial B2B", desc: "Développement Grands Comptes" },
    { skill: "CRM", desc: "Relation Client" },
    { skill: "Marketing Digital", desc: "Growth & Acquisition" },
    { skill: "Data Marketing", desc: "Segmentation & Ciblage" },
    { skill: "Courtage", desc: "Distribution Assurance" },
    { skill: "Prévoyance", desc: "Santé & Protection" },
    { skill: "Banque Privée", desc: "Gestion de Patrimoine" },
    { skill: "Crédit", desc: "Analyse & Scoring" },
];

const ROW_3_KEYWORDS = [
    { skill: "Data Engineering", desc: "Big Data & Analytics" },
    { skill: "DevOps", desc: "Cloud & Infrastructure" },
    { skill: "Architecture SI", desc: "Modernisation & API" },
    { skill: "Product Owner", desc: "Agile & Produit" },
    { skill: "Business Analyst", desc: "Core Banking & SI" },
    { skill: "Risk Manager", desc: "Crédit, Marché, Opérationnel" },
    { skill: "Cybersécurité", desc: "ISO 27001 & DORA" },
    { skill: "Machine Learning", desc: "IA & Prédictif" },
    { skill: "Python", desc: "Data Science" },
    { skill: "PMO", desc: "Pilotage Projet" },
    { skill: "Scrum Master", desc: "Agilité & Transformation" },
    { skill: "AMOA", desc: "Maîtrise d'Ouvrage" },
];

const KeywordCard = ({ skill, desc }: { skill: string; desc: string }) => (
    <div className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 hover:border-primary/20 hover:shadow-md transition-all shadow-sm min-w-[180px] sm:min-w-[200px]">
        <p className="font-bold text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1">{skill}</p>
        <p className="text-[10px] sm:text-xs text-foreground-muted leading-relaxed">{desc}</p>
    </div>
);

const InfiniteRow = ({
    keywords,
    direction = "left",
}: {
    keywords: { skill: string; desc: string }[];
    direction?: "left" | "right";
}) => {
    // Duplicate keywords for seamless loop
    const duplicatedKeywords = [...keywords, ...keywords];

    return (
        <div className="relative overflow-hidden py-2">
            {/* Gradient masks for smooth fade effect - WHITE background */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
                className={cn(
                    "flex gap-3 sm:gap-4",
                    direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
                )}
                style={{
                    width: "fit-content"
                }}
            >
                {duplicatedKeywords.map((item, i) => (
                    <KeywordCard key={`${item.skill}-${i}`} skill={item.skill} desc={item.desc} />
                ))}
            </div>
        </div>
    );
};

export const KeywordsCarousel = () => {
    return (
        <div className="w-full space-y-3 sm:space-y-4 py-4 mb-8 sm:mb-12">
            {/* Row 1 - moves right */}
            <InfiniteRow keywords={ROW_1_KEYWORDS} direction="right" />

            {/* Row 2 - moves left */}
            <InfiniteRow keywords={ROW_2_KEYWORDS} direction="left" />

            {/* Row 3 - moves right */}
            <InfiniteRow keywords={ROW_3_KEYWORDS} direction="right" />
        </div>
    );
};
