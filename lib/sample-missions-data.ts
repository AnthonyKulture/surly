// Sample missions data for SEO and demonstration purposes
// These are fictional examples to showcase the types of missions available on Surly

export interface SampleMission {
    id: string;
    title: string;
    company: string; // Anonymized
    location: string;
    remoteType: "Remote" | "Hybride" | "Présentiel";
    employmentType: "Freelance" | "CDI" | "CDD";
    tjm?: number; // For freelance
    salary?: number; // For CDI/CDD (annual)
    duration?: string; // For freelance missions
    description: string;
    requirements: string[];
    category: "Conformité & Réglementation" | "IT & Data" | "Risques" | "Finance & Marchés" | "Transformation" | "Actuariat";
    skills: string[];
    datePosted: string; // ISO format
}

export const SAMPLE_MISSIONS: SampleMission[] = [
    {
        id: "mission-001",
        title: "Expert Conformité Bâle III/CRR III",
        company: "Grande Banque Française",
        location: "Paris / La Défense",
        remoteType: "Hybride",
        employmentType: "Freelance",
        tjm: 650,
        duration: "6 mois (renouvelable)",
        description: "Accompagnement de la mise en conformité Bâle III et CRR III. Analyse des impacts réglementaires, définition du plan de transformation et coordination des équipes métier. Mission stratégique au sein de la Direction des Risques.",
        requirements: [
            "5+ ans d'expérience en conformité bancaire",
            "Expertise Bâle III, CRR, CRD",
            "Expérience en gestion de projet réglementaire",
            "Excellente communication avec les régulateurs (ACPR)"
        ],
        category: "Conformité & Réglementation",
        skills: ["Bâle III", "CRR III", "Réglementation bancaire", "ACPR", "Risk Management"],
        datePosted: "2026-01-08"
    },
    {
        id: "mission-002",
        title: "Actuaire Senior IFRS 17",
        company: "Compagnie d'Assurance Vie",
        location: "Lyon",
        remoteType: "Hybride",
        employmentType: "CDI",
        salary: 75000,
        description: "Pilotage de la conformité IFRS 17 pour l'ensemble des contrats d'assurance vie. Responsabilité de la production des états financiers, amélioration continue des modèles de valorisation et accompagnement des équipes finance.",
        requirements: [
            "Diplôme d'actuaire (IA, ISFA, ENSAE)",
            "3-5 ans d'expérience en assurance vie",
            "Maîtrise IFRS 17, Solvabilité II",
            "Compétences en modélisation actuarielle (Prophet, Moses)"
        ],
        category: "Actuariat",
        skills: ["IFRS 17", "Solvabilité II", "Actuariat", "Assurance Vie", "Prophet", "Excel VBA"],
        datePosted: "2026-01-07"
    },
    {
        id: "mission-003",
        title: "Consultant Transformation Digitale",
        company: "Banque Régionale",
        location: "Toulouse",
        remoteType: "Présentiel",
        employmentType: "Freelance",
        tjm: 700,
        duration: "4 mois",
        description: "Accompagnement de la transformation digitale du parcours client. Refonte de l'expérience utilisateur sur les canaux digitaux (web, mobile), intégration API bancaires et coordination avec les équipes IT et métier.",
        requirements: [
            "Expérience en transformation digitale bancaire",
            "Connaissance des parcours clients banque/assurance",
            "Maîtrise méthodologies agiles (Scrum, Kanban)",
            "Compétences en conduite du changement"
        ],
        category: "Transformation",
        skills: ["Transformation Digitale", "UX/UI", "Agilité", "API Banking", "Change Management"],
        datePosted: "2026-01-06"
    },
    {
        id: "mission-004",
        title: "Data Scientist - Risque de Crédit",
        company: "Établissement Financier",
        location: "Remote",
        remoteType: "Remote",
        employmentType: "Freelance",
        tjm: 750,
        duration: "8 mois",
        description: "Développement de modèles de scoring crédit et détection de fraude. Utilisation de techniques de Machine Learning (Random Forest, XGBoost, réseaux de neurones) pour améliorer la prédiction du risque de défaut.",
        requirements: [
            "Master en Data Science / Statistiques",
            "3+ ans d'expérience en modélisation risque crédit",
            "Maîtrise Python (scikit-learn, pandas, matplotlib)",
            "Connaissance réglementation Bâle (IRB)"
        ],
        category: "IT & Data",
        skills: ["Machine Learning", "Python", "Risque de Crédit", "Bâle IRB", "SQL", "Power BI"],
        datePosted: "2026-01-05"
    },
    {
        id: "mission-005",
        title: "Expert LCB-FT / AML Compliance",
        company: "Banque Privée",
        location: "Monaco / Nice",
        remoteType: "Hybride",
        employmentType: "CDI",
        salary: 68000,
        description: "Supervision du dispositif de lutte contre le blanchiment et le financement du terrorisme. Suivi réglementaire (TRACFIN, ACPR), amélioration des processus KYC/CDD et formation des équipes commerciales.",
        requirements: [
            "5+ ans en conformité LCB-FT",
            "Certification CAMS ou équivalent (apprécié)",
            "Maîtrise réglementation 3ème directive, FATF",
            "Expérience banque privée / gestion de fortune"
        ],
        category: "Conformité & Réglementation",
        skills: ["LCB-FT", "AML", "KYC", "TRACFIN", "ACPR", "CAMS"],
        datePosted: "2026-01-04"
    },
    {
        id: "mission-006",
        title: "Architecte Solutions Cloud Banking",
        company: "Fintech / Néobanque",
        location: "Paris",
        remoteType: "Hybride",
        employmentType: "Freelance",
        tjm: 800,
        duration: "12 mois",
        description: "Conception et déploiement de l'architecture cloud (AWS/Azure) pour les services bancaires. Migration des systèmes legacy vers le cloud, sécurisation des infrastructures et mise en conformité DORA.",
        requirements: [
            "7+ ans d'expérience en architecture IT",
            "Expertise cloud AWS ou Azure (certification)",
            "Connaissance sécurité bancaire et DORA",
            "Expérience microservices, Kubernetes, DevOps"
        ],
        category: "IT & Data",
        skills: ["AWS", "Azure", "Kubernetes", "Microservices", "DORA", "DevSecOps", "Banking APIs"],
        datePosted: "2026-01-03"
    },
    {
        id: "mission-007",
        title: "Chef de Projet MOA - Lutte Anti-Fraude",
        company: "Groupe Bancaire International",
        location: "Paris",
        remoteType: "Hybride",
        employmentType: "CDD",
        salary: 55000,
        duration: "18 mois",
        description: "Pilotage de projet de refonte du système de détection de fraude carte bancaire. Rédaction des spécifications fonctionnelles, coordination MOA/MOE, tests et recette utilisateur.",
        requirements: [
            "3-5 ans en MOA bancaire",
            "Connaissance métiers paiements / monétique",
            "Expérience gestion de projet IT",
            "Maîtrise outils de gestion (JIRA, Confluence)"
        ],
        category: "Transformation",
        skills: ["MOA", "Lutte Anti-Fraude", "Monétique", "Gestion de Projet", "JIRA", "Tests UAT"],
        datePosted: "2026-01-02"
    },
    {
        id: "mission-008",
        title: "Analyste Risques de Marché",
        company: "Banque d'Investissement",
        location: "Paris / La Défense",
        remoteType: "Présentiel",
        employmentType: "Freelance",
        tjm: 720,
        duration: "6 mois",
        description: "Calcul et suivi des risques de marché (VaR, stress tests) sur le portefeuille de trading. Reporting quotidien aux comités risques, amélioration des modèles de valorisation et participation aux exercices EBA.",
        requirements: [
            "Formation quantitative (ingénieur, master finance)",
            "3+ ans en risques de marché (front office risk)",
            "Maîtrise VaR historique, Monte Carlo, Greeks",
            "Excellente maîtrise Excel, VBA, Python"
        ],
        category: "Risques",
        skills: ["Risques de Marché", "VaR", "Stress Testing", "Python", "Excel VBA", "Bloomberg"],
        datePosted: "2026-01-01"
    },
    {
        id: "mission-009",
        title: "Responsable Contrôle Interne",
        company: "Mutuelle d'Assurance",
        location: "Bordeaux",
        remoteType: "Hybride",
        employmentType: "CDI",
        salary: 62000,
        description: "Pilotage du dispositif de contrôle interne permanent (niveau 1 et 2). Animation du réseau des correspondants contrôle, cartographie des risques opérationnels, suivi du plan de contrôle et reporting ACPR.",
        requirements: [
            "5+ ans en contrôle interne / audit",
            "Connaissance Solvabilité II et ACPR",
            "Capacité à animer des réseaux transverses",
            "Certifications CIA, COSO (appréciées)"
        ],
        category: "Risques",
        skills: ["Contrôle Interne", "Solvabilité II", "ACPR", "Cartographie des Risques", "Audit"],
        datePosted: "2025-12-30"
    },
    {
        id: "mission-010",
        title: "Expert Cyber Sécurité - SOC Bancaire",
        company: "Banque Nationale",
        location: "Lyon / Remote",
        remoteType: "Remote",
        employmentType: "Freelance",
        tjm: 780,
        duration: "10 mois",
        description: "Renforcement de la sécurité du SOC (Security Operations Center). Détection et réponse aux incidents cyber, amélioration des processus de supervision, mise en conformité DORA et NIS2.",
        requirements: [
            "5+ ans en cybersécurité (SOC, SIEM)",
            "Certifications CEH, CISSP ou OSCP",
            "Maîtrise outils SIEM (Splunk, QRadar)",
            "Connaissance réglementations DORA, NIS2"
        ],
        category: "IT & Data",
        skills: ["Cybersécurité", "SOC", "SIEM", "DORA", "NIS2", "Incident Response", "Splunk"],
        datePosted: "2025-12-28"
    },
    {
        id: "mission-011",
        title: "Consultant Finance Durable / ESG",
        company: "Asset Manager",
        location: "Paris",
        remoteType: "Hybride",
        employmentType: "CDI",
        salary: 58000,
        description: "Intégration des critères ESG dans les processus d'investissement. Analyse extra-financière des émetteurs, reporting SFDR et Taxonomie européenne, accompagnement des gérants dans la transition verte.",
        requirements: [
            "Formation finance / développement durable",
            "2-4 ans en finance durable ou analyse ESG",
            "Connaissance SFDR, Taxonomie, CSRD",
            "Anglais courant (lecture rapports ESG)"
        ],
        category: "Finance & Marchés",
        skills: ["ESG", "Finance Durable", "SFDR", "Taxonomie", "Analyse Extra-Financière", "Reporting"],
        datePosted: "2025-12-27"
    },
    {
        id: "mission-012",
        title: "Product Owner - Assurance Digital",
        company: "Insurtech",
        location: "Remote",
        remoteType: "Remote",
        employmentType: "Freelance",
        tjm: 680,
        duration: "6 mois",
        description: "Définition de la roadmap produit pour une solution d'assurance 100% digitale. Priorisation du backlog, coordination avec les équipes tech, analyse des KPIs et amélioration continue de l'expérience utilisateur.",
        requirements: [
            "3+ ans en Product Management",
            "Expérience assurance ou insurtech",
            "Maîtrise méthodologies agiles (Scrum)",
            "Compétences UX/UI et data-driven decision"
        ],
        category: "Transformation",
        skills: ["Product Management", "Assurance", "Agile", "UX/UI", "Analytics", "A/B Testing"],
        datePosted: "2025-12-26"
    }
];

// Helper function to generate JobPosting schema
export const generateJobPostingSchema = (mission: SampleMission) => {
    const baseSalary = mission.employmentType === "Freelance" && mission.tjm
        ? {
            "@type": "MonetaryAmount",
            currency: "EUR",
            value: {
                "@type": "QuantitativeValue",
                value: mission.tjm,
                unitText: "DAY"
            }
        }
        : mission.salary
            ? {
                "@type": "MonetaryAmount",
                currency: "EUR",
                value: {
                    "@type": "QuantitativeValue",
                    value: mission.salary,
                    unitText: "YEAR"
                }
            }
            : undefined;

    const employmentTypeMap = {
        "Freelance": "CONTRACTOR",
        "CDI": "FULL_TIME",
        "CDD": "TEMPORARY"
    };

    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: mission.title,
        description: mission.description,
        identifier: {
            "@type": "PropertyValue",
            name: "Surly",
            value: mission.id
        },
        datePosted: mission.datePosted,
        employmentType: employmentTypeMap[mission.employmentType],
        hiringOrganization: {
            "@type": "Organization",
            name: "Surly",
            sameAs: "https://surly.fr",
            logo: "https://surly.fr/logo.png"
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: mission.location,
                addressCountry: "FR"
            }
        },
        baseSalary: baseSalary,
        skills: mission.skills.join(", "),
        qualifications: mission.requirements.join(". ")
    };
};
