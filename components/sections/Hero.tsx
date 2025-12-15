"use client";

import { Button, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWords } from "@/components/ui/RotatingWords";

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
      className="relative pt-24 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-white"
    >
      <div className="container relative z-[2] flex flex-col items-center">

        {/* Dynamic Badge */}
        <Reveal delay={0} duration={800} direction="down">
          <div className="mb-8 mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all">
              <RotatingWords
                words={[
                  "Bâle III", "IFRS 17", "Solvabilité II", "Data Engineering", "Cybersécurité",
                  "Risk Management", "Architecture SI", "Actuariat", "Pricing", "Conformité",
                  "Monétique", "Product Management", "Transformation Digitale", "DevOps",
                  "Cloud Banking", "KYC/AML", "Pillar 3", "ALM", "Marketing Analytics",
                  "Gestion de Projet", "Change Management", "API Banking", "IA & Machine Learning",
                  "Blockchain Finance", "RegTech", "InsurTech"
                ]}
                className="text-sm font-medium text-foreground/80"
              />
            </div>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={100} duration={1000}>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-center mb-6 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Recrutez les meilleurs experts <br className="hidden md:block" />
            <span className="text-primary">Banque & Assurance.</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={200} duration={1000}>
          <h2 className="text-xl text-foreground-muted text-center mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
            La seule marketplace <strong className="text-foreground font-semibold">ultra-spécialisée</strong> qui réunit l&apos;intégralité des experts et des opportunités et missions du secteur <strong className="text-foreground font-semibold">Bancassurance</strong>. <span className="text-foreground font-medium">Freelance, CDI, CDD...</span>
          </h2>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={300} duration={1000}>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="large"
              className="bg-primary text-white hover:bg-primary-dark border-none font-bold px-8 shadow-primary-md hover:shadow-primary-lg transition-all duration-300 min-w-[200px]"
              onClick={(e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
            >
              <span>Trouver un Expert</span>
            </Button>

            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              variant="outline"
              size="large"
              className="border-primary text-primary hover:bg-primary/5 font-semibold px-8 min-w-[200px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Voir les Missions</span>
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};


