"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import Link from "next/link";

export const WhySurlyAbstract = () => {
    return (
        <section
            id="why-surly"
            className="relative py-24 lg:py-32 bg-primary text-background overflow-hidden"
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
                <div className="max-w-7xl mx-auto mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                        {/* LEFT COLUMN - Image as background with text overlay */}
                        <Reveal delay={100} duration={1000} className="h-full">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 h-full min-h-[700px] flex flex-col justify-end">
                                {/* Background Image - Full height */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="/surly-hero.jpg"
                                        alt="Surly Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Gradient Overlay - Transparent top, opaque bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/95 z-[1]" />

                                {/* Decorative corner effect - top left */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/30 rounded-br-[100px] blur-3xl z-[2] pointer-events-none" />
                                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-accent/50 rounded-tl-3xl z-[2]" />

                                {/* Content Layer - All at bottom */}
                                <div className="relative z-10 p-6 lg:p-10">
                                    <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-2 lg:mb-4">
                                        Des experts qui changent
                                        <br />
                                        <span className="text-accent">la donne.</span>
                                    </h3>
                                    <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-md mb-4 lg:mb-6">
                                        Que vous soyez expert en recherche d'opportunités ou entreprise à la recherche d'experts, Surly est la plateforme 100% dédiée à la bancassurance qui vous correspond.
                                    </p>

                                    <Button
                                        as="a"
                                        href="/pourquoi-surly"
                                        variant="white"
                                        size="large"
                                        className="px-8"
                                    >
                                        <span>Découvrir Surly</span>
                                    </Button>
                                </div>
                            </div>
                        </Reveal>

                        {/* RIGHT COLUMN - 2x2 Grid of Benefits - Equal Heights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr h-full min-h-[700px]">

                            {/* Benefit 1 */}
                            <Reveal delay={200} duration={1000}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">3 300+ experts</h4>
                                    <p className="text-background/70 text-sm leading-relaxed flex-grow">
                                        Une communauté exclusive, 100% banque & assurance. Des profils vérifiés, des opportunités qualifiées.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Benefit 2 - Pertinence Immédiate */}
                            <Reveal delay={250} duration={1000}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">Pertinence immédiate</h4>
                                    <p className="text-background/70 text-sm leading-relaxed flex-grow">
                                        Un matching intelligent qui comprend votre environnement et votre culture métier dès le premier jour.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Benefit 3 - Gain de Temps */}
                            <Reveal delay={300} duration={1000}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">Gain de temps</h4>
                                    <p className="text-background/70 text-sm leading-relaxed flex-grow">
                                        Fini le tri de centaines de profils. Pour les experts, des offres ciblées. Pour les recruteurs, des candidats qualifiés.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Benefit 4 - Transparent Pricing */}
                            <Reveal delay={350} duration={1000}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">Transparence totale</h4>
                                    <p className="text-background/70 text-sm leading-relaxed mb-4 flex-grow">
                                        Transparence totale. Aucun frais caché, commission fixe uniquement.
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-accent mb-1">15%*</div>
                                            <div className="text-xs text-white/70">Com. fixe</div>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-accent mb-1">0€</div>
                                            <div className="text-xs text-white/70">Frais d'entrée</div>
                                        </div>
                                    </div>
                                    <p className="text-[9px] text-white/50 italic mt-2">
                                        *Commission client à la contractualisation, lors de l'utilisation autonome de la plateforme (l'expert reçoit 100% du taux/salaire négocié)
                                    </p>
                                </div>
                            </Reveal>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
