"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

export const ServiceOptions = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-primary text-white overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial-dark pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag="Deux formules adaptées"
                    title={
                        <>
                            Surly s'adapte à
                            <br />
                            <span className="text-accent">votre organisation</span>
                        </>
                    }
                    centered
                    light
                />

                <Reveal delay={100} duration={1000}>
                    <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0">
                        Que vous ayez besoin d'un accompagnement sur-mesure ou que vous préfériez gérer vos recrutements en autonomie,
                        Surly vous propose la solution qui correspond à vos besoins en ressources spécialisées.
                    </p>
                </Reveal>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:gap-8 max-w-7xl mx-auto">

                    {/* Option 1: Cabinet de Conseil */}
                    <Reveal delay={200} duration={1000}>
                        <div className="bg-white border-2 border-primary/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                                Cabinet de conseil spécialisé
                            </h3>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                    🎯 Accompagnement sur-mesure
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-base text-foreground-muted leading-relaxed mb-6">
                                Nos talent managers qualifient votre besoin, sourcent les meilleurs profils, gèrent l'administratif et assurent le suivi de mission. Vous vous concentrez sur votre projet, nous gérons le reste.
                            </p>

                            {/* Advantages List */}
                            <div className="space-y-3 mb-8 flex-grow">
                                {[
                                    "Qualification experte de votre besoin",
                                    "Présélection de 2-3 profils pertinents maximum",
                                    "Gestion administrative complète (contrats, facturation, suivi)",
                                    "Accompagnement dédié tout au long de la mission",
                                    "Garantie de remplacement en cas d'imprévu"
                                ].map((advantage, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-foreground leading-relaxed">{advantage}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <Button
                                    as="a"
                                    href="/contact"
                                    variant="primary"
                                    size="large"
                                    className="flex-1"
                                >
                                    Nous contacter
                                </Button>
                                <Button
                                    as="a"
                                    href="/ai"
                                    variant="outline"
                                    size="large"
                                    className="flex-1"
                                >
                                    Besoin urgent ?
                                </Button>
                            </div>
                        </div>
                    </Reveal>

                    {/* Option 2: Accès Plateforme */}
                    <Reveal delay={300} duration={1000}>
                        <div className="bg-white border-2 border-primary/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                                Accès plateforme autonome
                            </h3>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-accent/20 text-primary text-xs font-semibold rounded-full">
                                    🚀 Technologie & autonomie
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-base text-foreground-muted leading-relaxed mb-6">
                                Accédez directement à notre base de 3 300+ experts pré-qualifiés. Recherchez, filtrez, et contactez les profils qui correspondent à vos critères. Vous gardez le contrôle, nous fournissons les outils.
                            </p>

                            {/* Advantages List */}
                            <div className="space-y-3 mb-8 flex-grow">
                                {[
                                    "Accès illimité à tous les profils vérifiés",
                                    "Recherche avancée par compétences, disponibilité, TJM",
                                    "Matching IA instantané 24/7",
                                    "Transparence totale sur les tarifs",
                                    "Commission fixe de 15% uniquement"
                                ].map((advantage, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-foreground leading-relaxed">{advantage}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <Button
                                    as="a"
                                    href="https://app.surly.fr/client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                    size="large"
                                    className="flex-1"
                                >
                                    S'inscrire gratuitement
                                </Button>
                                <Button
                                    as="a"
                                    href="/ai"
                                    variant="outline"
                                    size="large"
                                    className="flex-1"
                                >
                                    Tester Surly AI
                                </Button>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};
