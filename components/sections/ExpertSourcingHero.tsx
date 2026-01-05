"use client";

import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "@/components/ui/HeroBackground";

export const ExpertSourcingHero = () => {
    return (
        <section
            id="hero"
            className="relative w-full h-[60vh] min-h-[650px] max-h-[850px] pt-40 pb-16 md:pt-44 md:pb-20 flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            <HeroBackground />
            <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4">

                {/* Simple Badge */}
                <Reveal delay={0} duration={800} direction="down">
                    <div className="mb-6 w-full flex justify-center items-center px-4">
                        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all max-w-full text-center">
                            <span className="text-xs sm:text-sm font-medium text-foreground">
                                Sourcing de talents ultra-spécialisés
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Title */}
                <Reveal delay={100} duration={1000}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-5 md:mb-6 tracking-tight lg:leading-[1.1] max-w-4xl mx-auto px-2">
                        Trouvez votre expert
                        <span className="text-primary block mt-2">Banque & Assurance</span>
                    </h1>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={200} duration={1000}>
                    <h2 className="text-base sm:text-lg md:text-xl text-foreground-muted text-center max-w-3xl mx-auto font-normal leading-relaxed text-balance px-4">
                        <strong className="text-foreground font-semibold">Grandes banques, compagnies d'assurance, ESN et cabinets de conseil</strong>&nbsp;: nous agissons soit en cabinet spécialisé, soit via notre plateforme autonome. Choisissez la formule qui correspond à votre organisation.
                    </h2>
                </Reveal>

            </div>
        </section>
    );
};
