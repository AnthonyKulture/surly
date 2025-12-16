"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Inscrivez-vous",
    description:
      "Créez votre profil en 2 minutes via LinkedIn ou manuellement. Nos algorithmes analysent vos compétences sectorielles.",
    feature: "Connexion LinkedIn en 1 clic",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="20" r="8" />
        <path d="M8 40c0-8.84 7.16-16 16-16s16 7.16 16 16" />
        <path
          d="M32 16l4-4m0 0l4-4m-4 4l-4-4m4 4l4 4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Matching intelligent",
    description:
      "Notre IA analyse les besoins et trouve les profils correspondants parmi +3 300 experts vérifiés.",
    feature: "72h de délai moyen",
    aiPowered: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M16 24h16M24 16v16" />
        <circle cx="36" cy="12" r="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Contractualisez en toute transparence avec notre commission fixe de 15%*. Zéro surprise, zéro frais cachés.",
    feature: "15%* commission unique",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 24l8 8 16-16" />
        <circle cx="24" cy="24" r="20" />
      </svg>
    ),
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-28 bg-background-off border-b border-primary/10 overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-grid-large opacity-30 pointer-events-none" />

      <div className="container relative z-[1]">
        <SectionHeader
          tag="Comment ça marche"
          title={
            <>
              Trois étapes vers
              <br />
              <span className="text-gradient-green">l'excellence</span>
            </>
          }
          centered
        />

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-foreground-muted/60 italic">
            *Commission client à la contractualisation, lors de l'utilisation autonome de la plateforme (l'expert reçoit 100% du taux/salaire négocié)
          </p>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}

const ProcessStep = ({ step, index, isLast }: ProcessStepProps) => {
  return (
    <>
      <Reveal
        delay={index * 150}
        duration={800}
        className="flex-1 max-w-[360px]"
      >
        <div
          className={cn(
            "p-10 text-center border border-primary/10 bg-background rounded-xl shadow-md relative transition-all duration-300 group h-full",
            "hover:border-primary hover:shadow-xl hover:-translate-y-1"
          )}
        >
          {/* Step Number */}
          <div className="absolute -top-4 left-8 py-1.5 px-5 bg-primary text-background text-xs font-bold rounded-full shadow-md">
            {step.number}
          </div>

          {/* Icon */}
          <div className="w-20 h-20 mx-auto mt-6 mb-8 text-primary">
            {step.icon}
          </div>

          <h3 className="text-title font-semibold text-foreground mb-3">
            {step.title}
          </h3>

          <p className="text-sm text-foreground/70 leading-relaxed mb-8">
            {step.description}
          </p>

          {/* Feature Badge */}
          <div className="inline-flex items-center gap-2 py-2.5 px-5 bg-accent/20 text-xs font-semibold text-primary rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span>{step.feature}</span>
          </div>
        </div>
      </Reveal>

      {/* Connector */}
      {
        !isLast && (
          <div className="hidden lg:flex items-center px-2 self-center">
            <div className="w-8 h-0.5 bg-primary/20" />
            <div className="w-3 h-3 bg-accent rounded-full -ml-1" />
          </div>
        )
      }
    </>
  );
};
