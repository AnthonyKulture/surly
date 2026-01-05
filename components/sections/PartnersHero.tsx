"use client";

import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "@/components/ui/HeroBackground";

export const PartnersHero = () => {
    return (
        <section
            id="partners-hero"
            className="relative w-full h-[60vh] min-h-[650px] max-h-[850px] pt-40 pb-16 md:pt-44 md:pb-20 flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            <HeroBackground />
            <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4 max-w-4xl">

                {/* Badge */}
                <Reveal delay={0} duration={800} direction="down">
                    <div className="mb-6 w-full flex justify-center items-center">
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs sm:text-sm font-medium text-foreground/80">
                                Pour les consultants Surly
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Main Title */}
                <Reveal delay={100} duration={1000}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-5 tracking-tight lg:leading-[1.1] max-w-4xl mx-auto">
                        <span className="block text-foreground">
                            Partenaires premium &
                        </span>
                        <span className="block mt-1 text-primary">
                            avantages exclusifs
                        </span>
                    </h1>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={250} duration={1000}>
                    <p className="text-base sm:text-lg md:text-xl text-foreground-muted text-center max-w-3xl mx-auto font-normal leading-relaxed px-4">
                        Nos partenaires ont été sélectionnés avec soin et leurs offres négociées aux meilleurs tarifs pour faciliter votre vie professionnelle et personnelle.
                    </p>
                </Reveal>

            </div>
        </section>
    );
};
