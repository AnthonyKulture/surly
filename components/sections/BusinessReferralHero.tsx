"use client";

import { Reveal } from "@/components/ui/Reveal";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Button } from "@/components/ui/Button";

export const BusinessReferralHero = () => {
    return (
        <section
            id="hero"
            className="relative w-full min-h-[70vh] pt-32 pb-20 md:pt-36 md:pb-24 flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            <HeroBackground />
            <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4">

                {/* Simple Badge */}
                <Reveal delay={0} duration={800} direction="down">
                    <div className="mb-6 w-full flex justify-center items-center px-4">
                        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all max-w-full text-center">
                            <span className="text-xs sm:text-sm font-medium text-foreground">
                                Partagez une opportunité
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Title */}
                <Reveal delay={100} duration={1000}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-5 md:mb-6 tracking-tight lg:leading-[1.1] max-w-4xl mx-auto px-2">
                        Programme d'apport d'affaires
                    </h1>
                </Reveal>

                {/* Commission Highlight */}
                <Reveal delay={200} duration={1000}>
                    <div className="mb-6 md:mb-8 bg-gradient-to-br from-primary to-primary-dark text-white px-8 py-6 rounded-2xl shadow-xl border-2 border-accent/20">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                            Gagnez <span className="text-accent">3%</span> du montant facturé*
                        </p>
                        <p className="text-sm mt-2 text-center text-white/90">
                            en partageant une opportunité
                        </p>
                    </div>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={300} duration={1000}>
                    <h2 className="text-base sm:text-lg md:text-xl text-foreground-muted text-center max-w-3xl mx-auto font-normal leading-relaxed text-balance px-4 mb-8">
                        Vous connaissez un client avec un besoin en <strong className="text-foreground font-semibold">expertise Banque ou Assurance</strong> ?
                        Partagez l'opportunité et soyez récompensé pour chaque mission conclue.
                    </h2>
                </Reveal>

                {/* CTA */}
                <Reveal delay={400} duration={1000}>
                    <Button
                        as="a"
                        href="/formulaire-apport-affaires"
                        size="large"
                        className="shadow-lg hover:shadow-xl"
                    >
                        Je partage une opportunité
                    </Button>
                </Reveal>

            </div>
        </section>
    );
};
