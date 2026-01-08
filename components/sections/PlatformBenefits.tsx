"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
    {
        number: "01",
        title: "Profils pré-qualifiés",
        desc: "Tous nos experts justifient d'au moins une expérience significative en Banque ou Assurance.",
        stat: "0 CV hors-sujet"
    },
    {
        number: "02",
        title: "Matching instantané",
        desc: "Notre IA qualifie votre besoin 24/7 et propose les profils pertinents en quelques secondes.",
        stat: "-80% temps"
    },
    {
        number: "03",
        title: "Spécialisation exclusive",
        desc: "Surly se concentre à 100% sur la Banque et l'Assurance. Nos talent managers parlent votre langage.",
        stat: "100% sectoriel"
    },
    {
        number: "04",
        title: "Gain de productivité",
        desc: "Concentrez-vous sur le fit humain. Nous gérons l'administratif et la qualification technique.",
        stat: "48h max"
    }
];

export const PlatformBenefits = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container">
                <SectionHeader
                    tag="Avantages Plateforme"
                    title={
                        <>
                            Pourquoi Surly est le choix
                            <br />
                            <span className="text-primary">des meilleurs décideurs</span>
                        </>
                    }
                    centered
                />

                <Reveal delay={100} duration={800}>
                    <p className="text-base sm:text-lg text-foreground-muted text-center max-w-2xl mx-auto mb-12 sm:mb-14 leading-relaxed">
                        La seule marketplace <strong className="text-foreground">ultra-spécialisée Banque &amp; Assurance</strong>,
                        conçue par des experts pour des besoins pointus.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {BENEFITS.map((benefit, i) => (
                        <Reveal key={i} delay={i * 80} duration={600}>
                            <div className="group relative p-6 rounded-xl bg-white border border-gray-100 h-full flex flex-col hover:border-primary/20 hover:shadow-md transition-all duration-300">

                                {/* Number */}
                                <span className="text-[10px] font-semibold text-primary/60 tracking-wider mb-4">
                                    {benefit.number}
                                </span>

                                {/* Title */}
                                <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-2 leading-snug">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-foreground-muted leading-relaxed mb-5 flex-grow">
                                    {benefit.desc}
                                </p>

                                {/* Stat */}
                                <div className="pt-4 border-t border-gray-50">
                                    <span className="text-base sm:text-lg font-bold text-primary">
                                        {benefit.stat}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
