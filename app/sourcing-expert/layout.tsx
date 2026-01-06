import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sourcing d'Experts Bancassurance — Cabinet & Plateforme | Surly",
    description:
        "Trouvez les meilleurs experts Banque & Assurance. Actuaires, Risk Managers, Business Analysts, Data Engineers, DevOps. Cabinet spécialisé ou accès direct à +3000 profils. IFRS 17, Bâle III, Solvabilité II, LCB-FT.",
    keywords: [
        // Réglementation
        "IFRS 17", "Bâle III", "Solvabilité II", "LCB-FT", "KYC", "AML",
        "SEPA", "ISO 20022", "monétique", "stress testing", "ICAAP", "Pillar 3",
        // Métiers Finance
        "actuaire", "risk manager", "conformité bancaire", "ALM", "crédit scoring",
        // Métiers Assurance
        "souscription IARD", "gestion sinistres", "réassurance", "courtage assurance", "prévoyance",
        // Commercial & Marketing
        "commercial B2B banque", "CRM bancaire", "marketing digital assurance", "data marketing",
        // Tech & Data
        "data engineering banque", "devops bancaire", "cybersécurité DORA", "ISO 27001",
        "machine learning finance", "python data science", "architecture SI banque",
        "business analyst core banking", "product owner fintech",
        // Recrutement
        "sourcing expert bancaire", "recrutement assurance", "freelance banque",
        "consultant bancassurance", "cabinet recrutement banque"
    ],
    openGraph: {
        title: "Sourcing d'Experts Bancassurance | Surly",
        description:
            "Les meilleurs experts Banque & Assurance. Actuaires, Risk Managers, Data Engineers. IFRS 17, Bâle III. +3000 profils certifiés.",
        type: "website",
    },
};

export default function SourcingExpertLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
