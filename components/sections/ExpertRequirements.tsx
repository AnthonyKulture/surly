"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const DOMAINS = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "IT & Digital",
        skills: ["DevOps", "Data Engineering", "Architecture SI", "Product Owner", "Cloud AWS/Azure", "Cybersécurité"]
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Finance & Actuariat",
        skills: ["Actuariat", "IFRS 17", "Solvabilité II", "Pillar 3", "Contrôle de gestion", "ALM"]
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
        title: "Risques & Conformité",
        skills: ["Risk Manager", "Bâle III", "LCB-FT", "KYC/AML", "Conformité", "Audit interne"]
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "RH & Organisation",
        skills: ["SIRH", "Transformation RH", "Paie", "Gestion talents", "Recrutement", "Conduite du changement"]
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Commercial & Marketing",
        skills: ["Relation client", "Digital Marketing", "Distribution", "CRM", "Analytics", "Développement commercial"]
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Opérations & Support",
        skills: ["Gestion des opérations", "Middle Office", "Back Office", "Qualité", "Process", "Excellence opérationnelle"]
    }
];

export const ExpertRequirements = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white to-primary/5">
            <div className="container">
                <SectionHeader
                    tag="Profils recherchés"
                    title={
                        <>
                            Votre profil correspond ?
                            <br />
                            <span className="text-primary">Vous êtes au bon endroit</span>
                        </>
                    }
                    subtitle="Nos experts partagent une caractéristique commune"
                    centered
                />

                {/* Profile Type */}
                <Reveal delay={100} duration={800}>
                    <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
                        <div className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2">
                                        Le profil type de nos experts
                                    </h3>
                                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                                        Vous avez <strong className="text-foreground font-semibold">une expérience en banque ou assurance</strong> ? C&apos;est exactement ce que recherchent nos clients. Que vous soyez en CDI, freelance, ou veniez d&apos;un cabinet de conseil, votre connaissance du secteur bancassurance est précieuse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Domains Grid */}
                <Reveal delay={200} duration={800}>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
                        Domaines d'expertise acceptés
                    </h3>
                </Reveal>

                <div className="grid sm:grid-cols-2 tablet:grid-cols-3 gap-4 tablet:gap-5 laptop:gap-6 max-w-6xl mx-auto mb-12">
                    {DOMAINS.map((domain, i) => (
                        <Reveal key={i} delay={250 + (i * 100)} duration={800}>
                            <div className="relative p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-primary/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all h-full">

                                {/* Header with Title and Badge (Flex) */}
                                <div className="flex justify-between items-start gap-3 mb-4">
                                    {/* Title */}
                                    <h4 className="font-bold text-lg text-foreground flex-1 leading-snug">
                                        {domain.title}
                                    </h4>

                                    {/* Badge */}
                                    <div className="flex-shrink-0 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                                        <span className="text-[9px] font-bold text-primary uppercase tracking-wide text-center leading-none">
                                            Banque & Assurance
                                        </span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="space-y-2">
                                    {domain.skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-xs text-foreground-muted"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Additional Info */}
                <Reveal delay={800} duration={800}>
                    <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10 shadow-sm max-w-3xl mx-auto">
                        <p className="text-sm text-foreground-muted leading-relaxed">
                            <strong className="text-foreground font-semibold">Tous les niveaux sont les bienvenus</strong> : du Junior au Senior Expert.
                            Ce qui compte, c&apos;est votre expérience concrète dans le secteur bancassurance.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
