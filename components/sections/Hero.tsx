"use client";

import { Button, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroBackground } from "@/components/ui/HeroBackground";

export const Hero = () => {
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
      className="relative w-full min-h-screen pt-40 pb-28 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      <HeroBackground />
      <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4">

        {/* Dynamic Badge */}
        <Reveal delay={0} duration={800} direction="down">
          <div className="mb-8 w-full flex justify-center items-center px-4">
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all max-w-full text-center">
              <RotatingWords
                words={[
                  "Bâle III", "IFRS 17", "Solvabilité II", "Data Engineering", "Cybersécurité",
                  "Risk Management", "Architecture SI", "Actuariat", "Pricing", "Conformité",
                  "Monétique", "Product Management", "Transformation Digitale", "DevOps",
                  "Cloud Banking", "KYC/AML", "Pillar 3", "ALM", "Marketing Analytics",
                  "Gestion de Projet", "Change Management", "API Banking", "IA & Machine Learning",
                  "Blockchain Finance", "RegTech", "InsurTech"
                ]}
                className="text-xs sm:text-sm font-medium text-foreground/80"
              />
            </div>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={100} duration={1000}>
          <h1 className="text-[1.75rem] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-5 md:mb-6 tracking-tight lg:leading-[1.1] max-w-4xl mx-auto px-2">
            Recrutez les meilleurs experts <br className="hidden md:block" />
            <span className="text-primary block mt-1 md:inline md:mt-0">Banque & Assurance.</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={200} duration={1000}>
          <h2 className="text-base sm:text-lg md:text-xl text-foreground-muted text-center mb-8 md:mb-10 max-w-3xl mx-auto font-normal leading-relaxed text-balance px-4">
            La seule marketplace <strong className="text-foreground font-semibold">ultra-spécialisée</strong> qui réunit l&apos;intégralité des experts et des opportunités du secteur <strong className="text-foreground font-semibold">Bancassurance</strong>.
          </h2>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={300} duration={1000}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-24 md:mb-16 justify-center w-full px-4">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="large"
              className="px-8 min-w-[200px]"
              onClick={(e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
            >
              <span>Trouver un Expert</span>
            </Button>

            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              variant="outline"
              size="large"
              className="px-8 min-w-[200px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Voir les Missions</span>
            </Button>
          </div>
        </Reveal>

      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-20">
        <ScrollIndicator />
      </div>
    </section>
  );
};


