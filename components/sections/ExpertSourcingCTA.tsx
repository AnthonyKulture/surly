"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const ExpertSourcingCTA = () => {
    return (
        <section className="relative py-20 lg:py-28 bg-white border-t border-gray-100">
            <div className="container">
                <Reveal delay={0} duration={800}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Prêt à trouver votre expert idéal ?
                        </h2>
                        <p className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                            Quelle que soit votre approche, Surly vous accompagne dans votre recherche de talents spécialisés Banque & Assurance.
                        </p>
                    </div>
                </Reveal>

                {/* Triple CTA Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* CTA 1: Contact Commercial */}
                    <Reveal delay={100} duration={800} className="flex h-full">
                        <div className="group relative bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer flex flex-col w-full">
                            <a href="/contact" className="absolute inset-0 z-10" aria-label="Discuter de mon besoin"></a>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-2">Contact commercial</h3>
                            <p className="text-sm text-white/80 mb-4 flex-grow">
                                Discutez de votre besoin avec nos experts
                            </p>

                            {/* Inline CTA */}
                            <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                                <span>Discuter de mon besoin</span>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Reveal>

                    {/* CTA 2: Besoin Urgent - Surly AI */}
                    <Reveal delay={200} duration={800} className="flex h-full">
                        <div className="group relative bg-gradient-to-br from-accent/80 to-accent text-primary rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer flex flex-col w-full">
                            <a href="/ai" className="absolute inset-0 z-10" aria-label="Essayer Surly AI"></a>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                                <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L14.8 8.2L21 11L14.8 13.8L12 20L9.2 13.8L3 11L9.2 8.2L12 2Z" />
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-2">Besoin urgent</h3>
                            <p className="text-sm text-primary/80 mb-4 flex-grow">
                                Qualifiez votre besoin instantanément avec notre IA
                            </p>

                            {/* Inline CTA */}
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                                <span>Essayer Surly AI</span>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Reveal>

                    {/* CTA 3: S'inscrire sur la plateforme */}
                    <Reveal delay={300} duration={800} className="flex h-full">
                        <div className="group relative bg-white border-2 border-primary/20 text-foreground rounded-2xl p-8 hover:shadow-2xl hover:border-primary transition-all hover:scale-105 cursor-pointer flex flex-col w-full">
                            <a href="https://app.surly.fr/client" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="S'inscrire gratuitement"></a>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all">
                                <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-2">Accès plateforme</h3>
                            <p className="text-sm text-foreground-muted mb-4 flex-grow">
                                Accédez à 3 300+ experts en autonomie
                            </p>

                            {/* Inline CTA */}
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                                <span>S'inscrire gratuitement</span>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};
