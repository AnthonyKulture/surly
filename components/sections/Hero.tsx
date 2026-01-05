"use client";

import { Button, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { HeroCards } from "@/components/ui/HeroCards";

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
      className="relative w-full min-h-[100dvh] pt-32 pb-32 md:pb-32 laptop:pb-24 flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      <HeroBackground />
      <div className="container relative z-[2] px-6 md:px-4">

        {/* Two-column layout - 60/40 split */}
        <div className="grid grid-cols-1 laptop:grid-cols-[60fr_40fr] gap-8 md:gap-12 laptop:gap-16 items-center max-w-7xl mx-auto">

          {/* LEFT COLUMN: Hero Content */}
          <div className="order-1 laptop:order-1 flex flex-col items-center laptop:items-start text-center laptop:text-left">


            {/* Dynamic Badge */}
            <Reveal delay={0} duration={800} direction="down">
              <div className="mb-6 w-full flex justify-center lg:justify-start">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all max-w-full text-center laptop:justify-start">
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
              <h1 className="text-xl leading-[1.2] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-5 tracking-tight lg:leading-[1.1] max-w-2xl">
                L'écosystème Recrutement & Freelance<br />
                pour <span className="text-primary">la Banque & l'Assurance</span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={200} duration={1000}>
              <h2 className="text-sm sm:text-base md:text-lg text-foreground-muted mb-6 md:mb-8 max-w-xl font-normal leading-relaxed">
                La seule marketplace <strong className="text-foreground font-semibold">ultra-spécialisée</strong> qui réunit l&apos;intégralité des experts et des opportunités du secteur <strong className="text-foreground font-semibold">Bancassurance</strong>.
              </h2>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={300} duration={1000}>
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center laptop:justify-start w-full">
                <Button
                  as="a"
                  href="/ai"
                  variant="primary"
                  size="large"
                  className="px-8 min-w-[200px]"
                >
                  <span>Trouver un expert</span>
                </Button>

                <Button
                  as="a"
                  href="/devenir-consultant"
                  variant="primary"
                  size="large"
                  className="px-8 min-w-[200px]"
                >
                  <span>Trouver des missions</span>
                </Button>
              </div>
            </Reveal>

          </div>

          {/* RIGHT COLUMN: Platform Mockup */}
          <div className="order-2 laptop:order-2 mb-16 laptop:mb-0">
            {/* Platform Mockup */}
            <Reveal delay={100} duration={1000}>
              <div className="w-full">
                <HeroCards />
              </div>
            </Reveal>
          </div>

        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-[100]">
        <ScrollIndicator />
      </div>
    </section>
  );
};


