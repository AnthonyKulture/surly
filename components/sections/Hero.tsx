"use client";

import { Button, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWords } from "@/components/ui/RotatingWords";
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
      className="relative w-full min-h-[85vh] pt-28 pb-12 md:pt-32 md:pb-16 laptop:pt-36 laptop:pb-20 flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      <HeroBackground />
      <div className="container relative z-[2] px-4 md:px-6">

        {/* Two-column layout - 60/40 split */}
        <div className="grid grid-cols-1 tablet:grid-cols-[55fr_45fr] laptop:grid-cols-[60fr_40fr] gap-8 tablet:gap-4 laptop:gap-16 items-center max-w-5xl laptop:max-w-7xl mx-auto px-0 tablet:px-8 laptop:px-0">

          {/* LEFT COLUMN: Hero Content */}
          <div className="order-2 tablet:order-1 flex flex-col items-center tablet:items-start text-center tablet:text-left">


            {/* Dynamic Badge - Hidden on mobile */}
            <Reveal delay={0} duration={800} direction="down">
              <div className="mb-5 md:mb-5 laptop:mb-6 w-full hidden tablet:flex tablet:justify-start">
                <div className="flex items-center gap-2 px-3 laptop:px-4 py-1.5 laptop:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all max-w-full">
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
              <h1 className="text-[1.35rem] leading-[1.3] tablet:text-[1.35rem] laptop:text-4xl font-bold text-foreground mb-6 md:mb-4 laptop:mb-5 tracking-tight laptop:leading-[1.1] max-w-2xl">
                {/* Mobile version - 3 lines forced */}
                <span className="tablet:hidden block">
                  L'écosystème<br />
                  Recrutement & Freelance<br />
                  pour <span className="text-primary">la Banque & l'Assurance</span>
                </span>
                {/* Tablet+ version - original */}
                <span className="hidden tablet:block">
                  L'écosystème Recrutement & Freelance<br />
                  pour <span className="text-primary">la Banque & l'Assurance</span>
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={200} duration={1000}>
              <h2 className="text-base tablet:text-sm laptop:text-base xl:text-lg text-foreground-muted mb-7 md:mb-6 laptop:mb-8 max-w-xl font-normal leading-relaxed px-2 tablet:px-0">
                La seule marketplace <strong className="text-foreground font-semibold">ultra-spécialisée</strong> qui réunit l&apos;intégralité des experts et des opportunités du secteur <strong className="text-foreground font-semibold">Bancassurance</strong>.
              </h2>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={300} duration={1000}>
              <div className="flex flex-col tablet:flex-row gap-3 laptop:gap-4 justify-center tablet:justify-start w-full">
                <Button
                  as="a"
                  href="/sourcing-expert"
                  variant="primary"
                  size="default"
                >
                  <span>Trouver un expert</span>
                </Button>

                <Button
                  as="a"
                  href="/devenir-consultant"
                  variant="primary"
                  size="default"
                >
                  <span>Trouver des missions</span>
                </Button>
              </div>
            </Reveal>

          </div>

          {/* RIGHT COLUMN: Platform Mockup */}
          <div className="order-1 tablet:order-2 mb-0 tablet:mb-0">
            {/* Platform Mockup */}
            <Reveal delay={100} duration={1000}>
              <div className="w-full">
                <HeroCards />
              </div>
            </Reveal>
          </div>

        </div>


      </div>
    </section>
  );
};


