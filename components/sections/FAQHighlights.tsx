"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

// 6 questions phares pour expliquer Surly
const FAQ_HIGHLIGHTS = [
    {
        question: "Qu'est-ce que Surly ?",
        answer: "Surly, c’est le One Stop Shop du sourcing en bancassurance : une marketplace qui connecte banques & assureurs avec des experts du secteur (freelance ou CDI/CDD). Rapide, simple, efficace : vous déposez votre besoin et recevez des profils ultra-ciblés avec un modèle simple, transparent et pensé pour aller vite.",
        category: "client"
    },
    {
        question: "Quels sont les tarifs de Surly ?",
        answer: "L’accès à Surly est 100% gratuit pour les entreprises comme pour les experts : vous pouvez publier un besoin, consulter les profils et échanger sans frais. Les TJM et salaires sont affichés en toute transparence. Surly se rémunère via une commission appliquée uniquement en cas de contractualisation (mission ou recrutement).",
        category: "client"
    },
    {
        question: "Quelle différence avec les solutions généralistes ?",
        answer: "La différence, c’est la spécialisation. Surly est conçu uniquement pour la bancassurance : profils ciblés, pré-qualification, et interlocuteurs qui comprennent vos enjeux. Vous obtenez une sélection pertinente plus vite, sans “bruit” ni profils hors sujet — pour du freelance comme pour du CDI/CDD.",
        category: "client"
    },
    {
        question: "Je suis candidat : Comment m'inscrire sur Surly ?",
        answer: "L'inscription se fait en 5 minutes. Vous remplissez vos expériences (import automatique depuis LinkedIn ou CV), vos compétences et outils maîtrisés, puis vous fixez vos critères de recherche.",
        category: "consultant"
    },
    {
        question: "Quel est le délai moyen pour recevoir des profils ?",
        answer: "Avec l'accès plateforme, recherchez instantanément via notre moteur de recherche boosté par algorithme de matching. Avec le cabinet, recevez une proposition détaillée avec dossiers de compétences sous 48h.",
        category: "client"
    },
    {
        question: "Comment sont fixés mon TJM ou mon SAB ?",
        answer: "Vous fixez librement votre TJM (freelance) ou votre SAB (CDI/CDD). Surly ne les impose pas : vous gardez la main et pouvez les modifier quand vous le souhaitez. Aucune exclusivité. Besoin d’un repère ? Nos talent managers peuvent vous aider à positionner votre TJM/SAB selon le type de mission ou de poste.",
        category: "consultant"
    },
];

const FAQHighlightItem = ({
    item,
    isOpen,
    onToggle,
    index,
}: {
    item: typeof FAQ_HIGHLIGHTS[0];
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}) => {
    return (
        <Reveal delay={100 + index * 50} duration={500}>
            <div
                className={cn(
                    "bg-white rounded-xl border-2 transition-all duration-300",
                    isOpen
                        ? "border-primary/20 shadow-lg"
                        : "border-primary/5 hover:border-primary/15 shadow-sm hover:shadow-md"
                )}
            >
                <button
                    onClick={onToggle}
                    className="w-full flex items-start justify-between p-5 text-left"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-start gap-3 pr-4">
                        {/* Category indicator */}
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span
                            className={cn(
                                "text-[15px] font-medium leading-relaxed transition-colors",
                                isOpen ? "text-primary" : "text-foreground"
                            )}
                        >
                            {item.question}
                        </span>
                    </div>
                    <div
                        className={cn(
                            "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300",
                            isOpen
                                ? "bg-primary text-white rotate-180"
                                : "bg-primary/5 text-primary"
                        )}
                    >
                        <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>
                <div
                    className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                >
                    <div className="overflow-hidden">
                        <p className="text-foreground-muted leading-relaxed px-5 pb-5 pl-10 text-sm">
                            {item.answer}
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export const FAQHighlights = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 lg:py-28 bg-[#FAFBFC] border-t border-primary/5">
            <div className="container">
                <SectionHeader
                    tag="Questions fréquentes"
                    title={
                        <>
                            Tout ce que vous devez
                            <br />
                            <span className="text-primary">savoir sur Surly</span>
                        </>
                    }
                    centered
                />

                {/* FAQ Grid - 2 columns on desktop */}
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {FAQ_HIGHLIGHTS.map((item, index) => (
                        <FAQHighlightItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA */}
                <Reveal delay={400} duration={600}>
                    <div className="text-center mt-12">
                        <Button
                            as="a"
                            href="/faq"
                            variant="ghost"
                            size="large"
                        >
                            Voir toutes les questions
                            <ArrowIcon />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
