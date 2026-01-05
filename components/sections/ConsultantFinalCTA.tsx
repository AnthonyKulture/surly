"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

export const ConsultantFinalCTA = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <Reveal delay={100} duration={800}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Prêt à rejoindre l'élite des consultants
                            <span className="text-accent block mt-2">bancassurance ?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={200} duration={800}>
                        <p className="text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Inscrivez-vous en 5 minutes et accédez aux meilleures missions du secteur bancassurance.
                        </p>
                    </Reveal>

                    {/* CTAs */}
                    <Reveal delay={300} duration={800}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button
                                as="a"
                                href="https://app.surly.fr"
                                size="large"
                                variant="white"
                            >
                                Créer mon profil expert
                            </Button>
                            <Button
                                as="a"
                                href="/pourquoi-surly"
                                size="large"
                                variant="outline-light"
                            >
                                <span>En savoir plus</span>
                                <ArrowIcon />
                            </Button>
                        </div>
                    </Reveal>

                    {/* Reassurance */}
                    <Reveal delay={400} duration={800}>
                        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Inscription gratuite</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Aucune exclusivité</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Validation sous 48h</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
