"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const piliers = [
  {
    number: "01",
    title: "100% Spécialisé, 0% Généraliste",
    description:
      "Fini les CVs hors-sujet. Chaque profil proposé justifie d'au moins une expérience significative dans le secteur Bancaire ou Assurantiel. On parle le même langage.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 14v10l6 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    benefits: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: "Pertinence immédiate",
        description:
          "Des candidats qui comprennent votre environnement et votre culture métier dès le premier jour.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "Gain de temps",
        description: "Ne perdez plus des heures à trier des profils qui ne correspondent pas.",
      },
    ],
  },
  {
    number: "02",
    title: "Technologie & humain",
    description:
      "Notre plateforme élimine les tâches administratives pour permettre à nos talent managers de se concentrer sur ce qui compte vraiment : le fit humain et la compréhension fine du besoin.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14l20 10 20-10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 44V24" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    features: [
      { icon: "zap", label: "Qualification 24/7 par IA" },
      { icon: "search", label: "Matching instantané" },
      { icon: "user", label: "Validation finale par un expert" },
    ],
    featured: true,
  },
  {
    number: "03",
    title: "Une transparence radicale",
    description:
      "Nous brisons l'opacité des cabinets / ESN traditionnels. Surly instaure un nouveau standard de confiance.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="14" width="36" height="24" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 22h36" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="30" r="2" fill="currentColor" />
        <path d="M20 30h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    transparency: {
      stats: [
        { value: "15%*", label: "Com. fixe", sublabel: "" },
        { value: "0€", label: "Frais d'entrée", sublabel: "ni abonnement caché" },
      ],
      highlight: {
        title: "TJM & SAB affichés",
        description:
          "Le consultant sait ce qu'il gagne, le client sait ce qu'il paie.",
      },
    },
  },
];

export const Piliers = () => {
  return (
    <section
      id="piliers"
      className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
    >
      <div className="container relative z-[1]">
        <SectionHeader
          tag="Notre Approche"
          title={
            <>
              La différence
              <br />
              <span className="text-primary">Surly</span>
            </>
          }
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6 md:gap-8">
          {piliers.map((pilier, index) => (
            <PilierCard
              key={pilier.number}
              pilier={pilier}
              index={index}
            />
          ))}
        </div>

        {/* Harmonized CTA */}
        <Reveal delay={600} duration={800}>
          <div className="mt-12 text-center">
            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="large"
            >
              <span>Rejoindre la plateforme</span>
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

interface PilierCardProps {
  pilier: (typeof piliers)[number];
  index: number;
}

const PilierCard = ({ pilier, index }: PilierCardProps) => {
  const isFeatured = "featured" in pilier && pilier.featured;

  return (
    <Reveal
      delay={index * 150}
      duration={800}
      className="h-full"
    >
      <div
        className={cn(
          "relative p-8 rounded-xl transition-all duration-300 h-full flex flex-col",
          "bg-white border-2 border-primary/5 hover:border-primary/20",
          "shadow-sm hover:shadow-lg hover:-translate-y-1",
          isFeatured && "ring-2 ring-primary/5 bg-primary/[0.02]"
        )}
      >
        {/* Number Badge */}
        <div className="absolute top-6 right-6 py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
          Pilier {pilier.number}
        </div>

        {/* Icon */}
        <div className="w-14 h-14 p-3 bg-primary/5 text-primary rounded-xl mb-6 flex items-center justify-center">
          {pilier.icon}
        </div>

        <h3 className="text-xl font-bold leading-tight mb-3 text-foreground">
          {pilier.title}
        </h3>

        <p className="text-sm text-foreground-muted leading-relaxed mb-8 flex-grow">
          {pilier.description}
        </p>

        {/* Benefits (for pilier 1) */}
        {"benefits" in pilier && pilier.benefits && (
          <div className="flex flex-col gap-3 mt-auto">
            {pilier.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-primary/20 transition-all"
              >
                <div className="w-8 h-8 bg-primary/5 text-primary flex items-center justify-center rounded-lg flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <strong className="block text-xs font-semibold text-foreground mb-0.5">
                    {benefit.title}
                  </strong>
                  <p className="text-[11px] text-foreground-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features (for pilier 2) */}
        {"features" in pilier && pilier.features && (
          <div className="flex flex-col gap-2 mt-auto">
            {pilier.features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors rounded-lg flex-shrink-0">
                  <FeatureIcon type={feature.icon} />
                </div>
                <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">{feature.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Transparency (for pilier 3) */}
        {"transparency" in pilier && pilier.transparency && (
          <div className="space-y-3 mt-auto">
            <div className="grid grid-cols-2 gap-3">
              {pilier.transparency.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 text-center bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-all"
                >
                  <div className="text-xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium text-foreground-muted uppercase tracking-tight leading-snug">
                    {stat.label}
                    <span className="block text-[9px] opacity-60 normal-case mt-0.5">{stat.sublabel}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-foreground-muted/60 italic mt-2 px-1">
              *Commission client à la contractualisation, lors de l'utilisation autonome de la plateforme (l'expert reçoit 100% du taux/salaire négocié)
            </p>
            <div className="flex items-center gap-3 p-3 bg-primary/5 border border-primary/10 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0 rounded-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <strong className="block text-xs font-semibold text-primary">
                  {pilier.transparency.highlight.title}
                </strong>
                <p className="text-[10px] text-primary/70">
                  {pilier.transparency.highlight.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
};

const FeatureIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "zap":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H9v1.38a5.5 5.5 0 0 0 2.7 4.9A8.64 8.64 0 0 1 7 21z" />
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
};

