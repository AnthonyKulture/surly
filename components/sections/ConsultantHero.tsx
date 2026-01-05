"use client";

import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Button } from "@/components/ui/Button";

export const ConsultantHero = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const target = document.getElementById(targetId);
        if (target) {
            const navHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative w-full h-[60vh] min-h-[650px] max-h-[850px] pt-32 pb-16 md:pt-36 md:pb-20 flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            <HeroBackground />
            <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4 max-w-6xl">

                {/* Badge */}
                <Reveal delay={0} duration={800} direction="down">
                    <div className="mb-6 w-full flex justify-center items-center">
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs sm:text-sm font-medium text-foreground/80">
                                Rejoignez la communauté des experts bancassurance
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Main Title */}
                <Reveal delay={100} duration={1000}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-5 tracking-tight lg:leading-[1.1] max-w-5xl mx-auto">
                        <span className="block text-foreground">
                            Trouvez vos prochaines
                        </span>
                        <span className="block mt-1 text-primary">
                            missions et postes
                        </span>
                    </h1>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={250} duration={1000}>
                    <p className="text-sm sm:text-base md:text-lg text-foreground-muted text-center max-w-3xl mx-auto font-normal leading-relaxed px-4 mb-4">
                        Vous avez une expérience en <strong className="text-foreground font-semibold">banque ou assurance</strong>&nbsp;?
                    </p>
                </Reveal>

                {/* Value Proposition */}
                <Reveal delay={300} duration={1000}>
                    <p className="text-base sm:text-lg md:text-xl text-center max-w-4xl mx-auto font-bold leading-relaxed px-4 py-3">
                        <span className="text-primary">
                            Accédez aux meilleures missions freelance<br className="hidden sm:block" /> et postes salariés
                        </span>
                        <span className="text-foreground"> du secteur bancassurance</span>
                    </p>
                </Reveal>

                {/* CTA */}
                <Reveal delay={350} duration={1000}>
                    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                        <Button
                            as="a"
                            href="https://app.surly.fr"
                            size="large"
                            className="px-8 min-w-[200px]"
                        >
                            Je m'inscris maintenant
                        </Button>
                        <a
                            href="#inscription"
                            onClick={(e) => handleSmoothScroll(e, "#inscription")}
                            className="text-sm text-foreground-muted hover:text-primary font-medium underline-offset-4 hover:underline transition-colors duration-200"
                        >
                            En savoir plus
                        </a>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};
