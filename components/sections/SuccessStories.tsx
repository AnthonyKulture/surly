"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const stories = [
    {
        sector: "Banque de Financement",
        context: "Mise en conformité Bâle III & Stress Testing",
        challenge: "Déficit structurel de 3 FTEs experts en risque de crédit sur le périmètre CIB pour l'exercice EBA Stress Test. Risque de non-conformité SREP.",
        solution: "Staffing d'une Task Force de 3 Experts Risque Senior (min. 12 ans exp.) en 72h. Profils ex-inspection générale.",
        results: [
            { label: "Délai de staffing", value: "72h", sub: "vs 4 mois habituels" },
            { label: "Qualité des livrables", value: "100%", sub: "Validation BCE sans réserve" },
            { label: "Économie réalisée", value: "-25%", sub: "vs Big Four" },
        ],
        techStack: ["SAS", "Python", "R"],
    },
    {
        sector: "Compagnie d'Assurance",
        context: "Clôture IFRS 17 & Optimisation CSM",
        challenge: "Départ inopiné du Responsable Actuariat Vie en pleine période de clôture 'Dry Run'. Blocage critique sur le calcul du Best Estimate.",
        solution: "Identification immédiate d'un Actuaire Certifié IA (Institut des Actuaires) spécialisé IFRS 17 disponible en inter-contrat.",
        results: [
            { label: "Continuité de service", value: "< 5j", sub: "Aucun retard de clôture" },
            { label: "Optimisation CSM", value: "+2.5M€", sub: "Impact P&L direct" },
            { label: "Transfert de compétences", value: "Doc.", sub: "Documentation complète" },
        ],
        techStack: ["Prophet", "ResQ", "Excel VBA"],
    },
    {
        sector: "Mutuelle Santé",
        context: "Digitalisation & Conformité DDA",
        challenge: "Refonte du parcours souscription pour conformité DDA (Directive Distribution Assurance). Besoin d'un PO expert métier + réglementaire.",
        solution: "Détachement d'un profil hybride 'Business Analyst / Compliance Officer' ayant déjà mené 2 projets similaires.",
        results: [
            { label: "Time-to-market", value: "3 mois", sub: "Lancement accéléré" },
            { label: "Conformité DDA", value: "100%", sub: "Audit interne validé" },
            { label: "Conversion", value: "+15%", sub: "Hausse souscriptions" },
        ],
        techStack: ["Jira", "Salesforce", "InsurTech"],
    },
];

export const SuccessStories = () => {
    return (
        <section className="relative py-24 lg:py-28 bg-primary text-background border-b border-primary/10 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag="Track Record"
                    title={
                        <>
                            Expertise prouvée
                            <br />
                            <span className="text-white">sur le terrain</span>
                        </>
                    }
                    subtitle="Des cas concrets où la spécialisation fait toute la différence."
                    centered
                    light
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
                    {stories.map((story, index) => (
                        <StoryCard key={index} story={story} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StoryCard = ({ story, index }: { story: typeof stories[number]; index: number }) => {
    return (
        <Reveal
            delay={index * 150}
            duration={800}
            className="h-full"
        >
            <div className="group relative bg-[#0D2B22] border border-[#1A4D3D] p-6 rounded-2xl h-full flex flex-col hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">

                {/* Header Sector */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {story.sector}
                    </span>
                    <div className="flex gap-1.5">
                        {story.techStack.map((tech) => (
                            <span key={tech} className="text-[9px] font-medium px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {story.context}
                </h3>

                {/* Challenge Section */}
                <div className="mb-4">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">Enjeu Critique</div>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                        {story.challenge}
                    </p>
                </div>

                {/* Solution Section */}
                <div className="mb-6 pb-6 border-b border-white/10 flex-grow">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">Réponse Surly</div>
                    <p className="text-sm text-white font-medium leading-relaxed">
                        {story.solution}
                    </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                    {story.results.map((result, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                            <div className="text-lg font-bold text-accent mb-0.5">{result.value}</div>
                            <div className="text-[9px] font-medium text-gray-400 uppercase leading-tight mb-1">{result.label}</div>
                            <div className="text-[8px] text-gray-500 leading-tight">{result.sub}</div>
                        </div>
                    ))}
                </div>

            </div>
        </Reveal>
    );
};
