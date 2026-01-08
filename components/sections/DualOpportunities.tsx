"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const OPPORTUNITY_TYPES = [
    {
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Postuler aux offres",
        description: "Les clients postent régulièrement des missions sur la plateforme Surly",
        features: [
            "Nouvelles missions chaque semaine",
            "Postulez directement via votre dashboard",
            "Réponse sous 48h en moyenne",
            "Accompagnement durant le processus"
        ],
        badge: "Mode actif"
    },
    {
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: "Être trouvé par les clients",
        description: "Votre profil est visible 24/7 dans notre moteur de recherche",
        features: [
            "Visibilité permanente auprès des grands comptes",
            "Les clients vous trouvent selon leurs besoins",
            "Contacté directement par clients intéressés",
            "Profil toujours visible, même sans nouvelles offres"
        ],
        badge: "Mode passif"
    }
];

export const DualOpportunities = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-primary">
            <div className="container">
                <SectionHeader
                    tag="Opportunités"
                    title={
                        <>
                            <span className="text-accent">Comment obtenir</span>
                            <br />
                            <span className="text-white">des missions ?</span>
                        </>
                    }
                    subtitle="Deux façons complémentaires de décrocher vos prochaines missions"
                    centered
                    light={true}
                />

                {/* Two Columns */}
                <div className="grid tablet:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {OPPORTUNITY_TYPES.map((type, i) => (
                        <Reveal key={i} delay={200 + (i * 150)} duration={800}>
                            <div className="relative p-6 sm:p-8 rounded-2xl bg-white border-2 border-white/10 hover:border-accent/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all h-full flex flex-col items-center text-center">

                                {/* Badge - Relative on mobile, absolute on sm+ */}
                                <div className="sm:absolute sm:top-6 sm:right-6 mb-4 sm:mb-0">
                                    <div className="px-3 py-1.5 bg-accent/20 border border-accent/40 rounded-full">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wide">
                                            {type.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-5 sm:mb-6 shadow-lg mx-auto">
                                    {type.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-lg sm:text-xl tablet:text-2xl text-foreground mb-3 leading-tight">
                                    {type.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-foreground-muted leading-relaxed mb-5 sm:mb-6 text-center">
                                    {type.description}
                                </p>

                                {/* Features - Improved spacing */}
                                <div className="space-y-4 flex-grow w-full">
                                    {type.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-center sm:text-left">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-foreground leading-relaxed">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
