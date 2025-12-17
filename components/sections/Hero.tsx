"use client";

import { useState } from "react";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { HeroCards } from "@/components/ui/HeroCards";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<"banque" | "assurance">("banque");

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
      className="relative w-full min-h-screen pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      <HeroBackground />
      <div className="container relative z-[2] px-6 md:px-4">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* LEFT COLUMN: Hero Content */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">


            {/* Dynamic Badge */}
            <Reveal delay={0} duration={800} direction="down">
              <div className="mb-6 w-full flex justify-center lg:justify-start">
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
              <h1 className="text-[1.5rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-5 tracking-tight lg:leading-[1.1] max-w-2xl">
                Recrutez les meilleurs experts
                <span className="text-primary block mt-1">Banque & Assurance.</span>
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full">
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

          {/* RIGHT COLUMN: Platform Mockup with Switch */}
          <div className="order-2 lg:order-2 flex flex-col">
            {/* Bank/Insurance Switch */}
            <Reveal delay={0} duration={800}>
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="relative inline-flex items-center gap-1 p-1 rounded-full bg-white border border-primary/10 shadow-sm">
                  {/* Animated Background */}
                  <div
                    className={cn(
                      "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary transition-all duration-300 ease-out",
                      activeTab === "banque" ? "left-1" : "left-[calc(50%+3px)]"
                    )}
                  />

                  {/* Buttons */}
                  <button
                    onClick={() => setActiveTab("banque")}
                    className={cn(
                      "relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300",
                      activeTab === "banque" ? "text-white" : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    Banque
                  </button>
                  <button
                    onClick={() => setActiveTab("assurance")}
                    className={cn(
                      "relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300",
                      activeTab === "assurance" ? "text-white" : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    Assurance
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Platform Mockup */}
            <Reveal delay={100} duration={1000}>
              <div className="w-full">
                <HeroCards />
              </div>
            </Reveal>
          </div>

        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-20">
        <ScrollIndicator />
      </div>
    </section>
  );
};


