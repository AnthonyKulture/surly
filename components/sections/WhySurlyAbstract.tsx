"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import Link from "next/link";

const BENEFITS = [
    {
        color: "from-accent/20 to-accent/5",
        title: "3 300+ experts",
        desc: "Une communauté exclusive, 100% banque & assurance. Des profils vérifiés, des opportunités qualifiées."
    },
    {
        color: "from-blue-400/20 to-blue-400/5",
        title: "Pertinence immédiate",
        desc: "Un matching intelligent qui comprend votre environnement métier dès le premier jour."
    },
    {
        color: "from-purple-400/20 to-purple-400/5",
        title: "Gain de temps",
        desc: "Fini le tri de centaines de profils. Des offres ciblées pour tous."
    },
    {
        color: "from-accent/20 to-accent/5",
        title: "Transparence totale",
        desc: "Aucun frais caché, commission fixe uniquement.",
        stats: [
            { value: "15%*", label: "Com. fixe" },
            { value: "0€", label: "Frais d'entrée" }
        ],
        footnote: "*Commission client à la contractualisation, lors de l'utilisation autonome de la plateforme"
    }
];

export const WhySurlyAbstract = () => {
    return (
        <section
            id="why-surly"
            className="relative py-16 sm:py-20 lg:py-28 bg-primary text-background overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial-dark pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag="Pourquoi Surly ?"
                    title={
                        <>
                            Le recrutement en Banque & Assurance
                            <br />
                            <span className="text-accent">mérite mieux.</span>
                        </>
                    }
                    light
                    centered
                />

                {/* Two Column Layout */}
                <div className="max-w-7xl mx-auto mt-10 sm:mt-12 lg:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

                        {/* LEFT COLUMN - Image as background with text overlay */}
                        <Reveal delay={100} duration={1000} className="h-full">
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 h-full min-h-[400px] md:min-h-[500px] flex flex-col justify-end">
                                {/* Background Image - Full height */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="/surly-hero.jpg"
                                        alt="Surly Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/95 z-[1]" />

                                {/* Decorative corner effect */}
                                <div className="absolute top-0 left-0 w-24 h-24 bg-accent/30 rounded-br-[80px] blur-2xl z-[2] pointer-events-none" />
                                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/50 rounded-tl-2xl z-[2]" />

                                {/* Content Layer */}
                                <div className="relative z-10 p-5 sm:p-6 lg:p-8">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2 lg:mb-4">
                                        Des experts qui changent
                                        <br />
                                        <span className="text-accent">la donne.</span>
                                    </h3>
                                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md mb-4 lg:mb-6">
                                        Que vous soyez expert en recherche d'opportunités ou entreprise à la recherche d'experts, Surly est la plateforme 100% dédiée à la bancassurance.
                                    </p>

                                    <Button
                                        as="a"
                                        href="/pourquoi-surly"
                                        variant="white"
                                        size="default"
                                    >
                                        <span>Découvrir Surly</span>
                                    </Button>
                                </div>
                            </div>
                        </Reveal>

                        {/* RIGHT COLUMN - 2x2 Grid of Benefits */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                            {BENEFITS.map((benefit, i) => (
                                <Reveal key={i} delay={200 + i * 50} duration={800} className="h-full">
                                    <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                                        {/* Modern gradient badge */}
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0`}>
                                            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/80" />
                                        </div>

                                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                                            {benefit.title}
                                        </h4>

                                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed flex-grow">
                                            {benefit.desc}
                                        </p>

                                        {/* Stats for Transparence card */}
                                        {benefit.stats && (
                                            <>
                                                <div className="grid grid-cols-2 gap-2 mt-3">
                                                    {benefit.stats.map((stat, j) => (
                                                        <div key={j} className="bg-white/5 rounded-lg p-2 sm:p-2.5 text-center">
                                                            <div className="text-lg sm:text-xl font-bold text-accent">{stat.value}</div>
                                                            <div className="text-[10px] sm:text-xs text-white/60">{stat.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-[8px] sm:text-[9px] text-white/40 italic mt-2 leading-tight">
                                                    {benefit.footnote}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

