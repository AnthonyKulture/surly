"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
    {
        number: "01",
        title: "Profils pré-qualifiés",
        desc: "Tous nos experts justifient d'au moins une expérience significative en Banque ou Assurance. Terminé les profils généralistes qui ne comprennent pas vos enjeux réglementaires.",
        stat: "0 CV hors-sujet"
    },
    {
        number: "02",
        title: "Matching instantané",
        desc: "Notre intelligence artificielle qualifie votre besoin 24/7 et vous propose les profils pertinents en quelques secondes. Plus besoin d'attendre des jours pour trier des centaines de CVs.",
        stat: "-80% temps"
    },
    {
        number: "03",
        title: "Spécialisation exclusive",
        desc: "Contrairement aux cabinets généralistes, Surly se concentre à 100% sur la Banque et l'Assurance. Nos talent managers parlent le même langage technique que vous.",
        stat: "100% sectoriel"
    },
    {
        number: "04",
        title: "Gain de productivité",
        desc: "Réduisez drastiquement vos délais de recrutement et concentrez-vous sur l'essentiel : la validation du fit humain. Nos équipes gèrent l'administratif et la qualification technique.",
        stat: "48h max"
    }
];

export const PlatformBenefits = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-white">
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

                <Reveal delay={100} duration={1000}>
                    <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                        Fini les jobboards généralistes et les CVs hors-sujet. Surly est la seule marketplace
                        <strong className="text-foreground"> ultra-spécialisée Banque & Assurance</strong>,
                        conçue par des experts du secteur pour des besoins pointus.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {BENEFITS.map((benefit, i) => (
                        <Reveal key={i} delay={i * 150} duration={800}>
                            <div className="relative p-8 rounded-xl bg-white border-2 border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                                <div className="absolute top-6 right-6 py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    {benefit.number}
                                </div>

                                <h3 className="font-bold text-lg text-foreground mb-3 mt-6">{benefit.title}</h3>
                                <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-grow">{benefit.desc}</p>

                                <div className="mt-auto p-3 bg-primary/5 rounded-lg text-center">
                                    <span className="text-lg font-bold text-primary">{benefit.stat}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
