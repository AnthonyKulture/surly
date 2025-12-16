"use client";

import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "@/components/ui/HeroBackground";

export const RSEHero = () => {
    return (
        <section
            id="hero"
            className="relative w-full h-[60vh] min-h-[500px] max-h-[700px] pt-32 pb-16 md:pt-36 md:pb-20 flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            <HeroBackground />
            <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4">

                {/* Badge */}
                <Reveal delay={0} duration={800} direction="down">
                    <div className="mb-6 w-full flex justify-center items-center px-4">
                        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all max-w-full text-center">
                            <span className="text-xs sm:text-sm font-medium text-foreground/80">
                                Marketplace éthique • Intermédiation transparente • Impact mesurable
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Title */}
                <Reveal delay={100} duration={1000}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-4 md:mb-5 tracking-tight lg:leading-[1.1] max-w-4xl mx-auto px-2">
                        <span className="whitespace-nowrap">Nos <span className="text-primary">engagements</span></span>
                    </h1>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={200} duration={1000}>
                    <h2 className="text-base sm:text-lg md:text-xl text-foreground-muted text-center mb-6 md:mb-8 max-w-3xl mx-auto font-normal leading-relaxed text-balance px-4">
                        Chez Surly, la <strong className="text-foreground font-semibold">responsabilité sociétale et environnementale (RSE)</strong> est au cœur de notre ADN. En tant que plateforme innovante spécialisée dans le secteur banque-assurance, nous nous engageons à offrir un service éthique, durable et transparent.
                    </h2>
                </Reveal>

                {/* Certifications badges */}
                <Reveal delay={300} duration={1000}>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="text-sm font-semibold text-primary">Charte Achats Responsables</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="text-sm font-semibold text-primary">Charte Numérique Responsable</span>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};
