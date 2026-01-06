"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const DOMAINS = [
    {
        icon: "💻",
        title: "IT & Digital",
        skills: ["DevOps", "Data Engineering", "Architecture SI", "Product Owner", "Cloud AWS/Azure", "Cybersécurité"]
    },
    {
        icon: "💰",
        title: "Finance & Actuariat",
        skills: ["Actuariat", "IFRS 17", "Solvabilité II", "Pillar 3", "Contrôle de gestion", "ALM"]
    },
    {
        icon: "⚖️",
        title: "Risques & Conformité",
        skills: ["Risk Manager", "Bâle III", "LCB-FT", "KYC/AML", "Conformité", "Audit interne"]
    },
    {
        icon: "👥",
        title: "RH & Organisation",
        skills: ["SIRH", "Transformation RH", "Paie", "Gestion talents", "Recrutement", "Conduite du changement"]
    },
    {
        icon: "📊",
        title: "Commercial & Marketing",
        skills: ["Relation client", "Digital Marketing", "Distribution", "CRM", "Analytics", "Développement commercial"]
    },
    {
        icon: "⚙️",
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
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                                    🎯
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2">
                                        Le profil type de nos experts
                                    </h3>
                                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                                        Vous avez <strong className="text-foreground font-semibold">une expérience en banque ou assurance</strong> ? C'est exactement ce que recherchent nos clients. Que vous soyez en CDI, freelance, ou veniez d'un cabinet de conseil, votre connaissance du secteur bancassurance est précieuse.
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
                                {/* Icon */}
                                <div className="text-4xl mb-4">{domain.icon}</div>

                                {/* Title */}
                                <h4 className="font-bold text-lg text-foreground mb-4">
                                    {domain.title}
                                </h4>

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

                                {/* Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                        <span className="text-[9px] font-bold text-primary uppercase tracking-wide">
                                            Banque & Assurance
                                        </span>
                                    </div>
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
                            Ce qui compte, c'est votre expérience concrète dans le secteur bancassurance.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
