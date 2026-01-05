"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FLEXIBILITY_OPTIONS = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "TJM Freelance",
        description: "Vous fixez votre taux journalier moyen librement selon votre profil et expertise."
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "SAB Salariat",
        description: "Vous définissez votre salaire annuel brut souhaité pour des postes en CDI ou CDD."
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Les deux",
        description: "Recherchez simultanément des missions freelance ET des postes salariés pour maximiser vos opportunités."
    }
];

export const CompensationFlexibility = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-white">
            <div className="container">
                <SectionHeader
                    tag="Rémunération"
                    title={
                        <>
                            Vous décidez
                            <br />
                            <span className="text-primary">de tout</span>
                        </>
                    }
                    subtitle="TJM freelance, salaire annuel, ou les deux ? C'est vous qui choisissez."
                    centered
                />

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
                    {FLEXIBILITY_OPTIONS.map((option, i) => (
                        <Reveal key={i} delay={200 + (i * 150)} duration={800}>
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all h-full flex flex-col group">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    {option.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-xl text-foreground mb-3 leading-tight">
                                    {option.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    {option.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Reassurance */}
                <Reveal delay={650} duration={800}>
                    <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 rounded-2xl border border-primary/10 max-w-3xl mx-auto">
                        <p className="text-base sm:text-lg text-foreground leading-relaxed">
                            <strong className="font-semibold">Aucune exclusivité demandée.</strong><br />
                            Vous gardez le contrôle total sur votre carrière et vos choix professionnels.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
