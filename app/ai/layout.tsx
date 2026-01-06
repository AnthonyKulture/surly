import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Surly IA — Trouvez votre Expert Bancassurance en quelques secondes",
    description:
        "Notre intelligence artificielle spécialisée Banque & Assurance vous aide à trouver l'expert idéal. IFRS 17, Bâle III, Actuariat, Risk Management, Data Engineering, DevOps. Matching instantané parmi +3000 profils certifiés.",
    keywords: [
        // Réglementation
        "IFRS 17", "Bâle III", "Solvabilité II", "LCB-FT", "KYC", "AML",
        "ICAAP", "Pillar 3", "DORA", "ISO 27001",
        // Métiers Finance
        "actuaire", "risk manager", "conformité bancaire", "stress testing", "ALM",
        // Métiers Assurance  
        "souscription", "sinistres", "réassurance", "courtage", "prévoyance",
        // Tech
        "data engineering", "devops", "cybersécurité", "machine learning", "python",
        "architecture SI", "business analyst", "product owner", "PMO", "AMOA",
        // Commercial
        "consultant banque", "freelance assurance", "expert bancassurance",
        "recrutement bancaire", "talent banque assurance"
    ],
    openGraph: {
        title: "Surly IA — Trouvez votre Expert Bancassurance instantanément",
        description:
            "IA spécialisée Banque & Assurance. IFRS 17, Bâle III, Actuariat, DevOps, Data Engineering. +3000 experts certifiés disponibles.",
        type: "website",
    },
};

export default function AILayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
