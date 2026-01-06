"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Expert = {
    image: string;
    name: string;
    title: string;
    sector: "Banque" | "Assurance" | "Banque & Assurance";
    tags: string[];
    tjm: string;
    availability: string;
    experience: string;
    seniority: "Junior" | "Confirmé" | "Senior";
    company: string;
    online?: boolean;
};

const EXPERTS: Expert[] = [
    {
        image: "/avatars/profile_expert_4_1765802699392.png",
        name: "Thomas B.",
        title: "Expert IFRS 17 & Consolidation",
        sector: "Banque & Assurance",
        seniority: "Senior",
        tags: ["Finance", "Comptabilité"],
        tjm: "950",
        availability: "Immédiate",
        experience: "12 ans",
        company: "Grande banque française",
        online: true,
    },
    {
        image: "/avatars/profile_expert_1_1765802590256.png",
        name: "Sarah M.",
        title: "Risk Manager Bâle III",
        sector: "Banque",
        seniority: "Confirmé",
        tags: ["Risques", "Conformité"],
        tjm: "750",
        availability: "< 1 semaine",
        experience: "8 ans",
        company: "Banque d'investissement",
    },
    {
        image: "/avatars/profile_expert_claire_new.png",
        name: "Claire D.",
        title: "Architecte SI Cloud",
        sector: "Banque",
        seniority: "Senior",
        tags: ["IT", "Architecture"],
        tjm: "1100",
        availability: "< 2 semaines",
        experience: "15 ans",
        company: "Banque mutualiste",
        online: true,
    },
    {
        image: "/avatars/profile_expert_6_1765802756821.png",
        name: "Marc L.",
        title: "Actuaire Solvabilité II",
        sector: "Assurance",
        seniority: "Senior",
        tags: ["Actuariat", "Risques"],
        tjm: "1050",
        availability: "Immédiate",
        experience: "10 ans",
        company: "Leader assurance",
    },
    {
        image: "/avatars/profile_expert_3_1765802652999.png",
        name: "Julie R.",
        title: "Responsable RH Talents",
        sector: "Banque & Assurance",
        seniority: "Confirmé",
        tags: ["RH", "Formation"],
        tjm: "720",
        availability: "< 1 mois",
        experience: "9 ans",
        company: "Mutuelle internationale",
        online: true,
    },
    {
        image: "/avatars/pierre_m_profile.png",
        name: "Pierre M.",
        title: "Chef de Projet InsurTech",
        sector: "Assurance",
        seniority: "Confirmé",
        tags: ["Digital", "Innovation"],
        tjm: "820",
        availability: "< 3 semaines",
        experience: "7 ans",
        company: "Assureur innovant",
    },
    {
        image: "/avatars/sophie_l_profile.png",
        name: "Sophie L.",
        title: "Compliance Officer KYC/AML",
        sector: "Banque",
        seniority: "Senior",
        tags: ["Juridique", "Conformité"],
        tjm: "990",
        availability: "Immédiate",
        experience: "11 ans",
        company: "Banque internationale",
    },
    {
        image: "/avatars/profile_expert_2_1765802613092.png",
        name: "Alexandre V.",
        title: "Data Engineer Finance",
        sector: "Banque",
        seniority: "Junior",
        tags: ["IT", "Data"],
        tjm: "550",
        availability: "< 2 semaines",
        experience: "3 ans",
        company: "Fintech bancaire",
        online: true,
    },
    {
        image: "/avatars/profile_expert_3_1765802652999.png",
        name: "Camille P.",
        title: "Directrice Marketing Digital",
        sector: "Assurance",
        seniority: "Senior",
        tags: ["Marketing", "Digital"],
        tjm: "1050",
        availability: "< 1 semaine",
        experience: "13 ans",
        company: "Assurance mutualiste",
    },
    {
        image: "/avatars/laurent_s_profile.png",
        name: "Laurent S.",
        title: "Responsable ALM",
        sector: "Banque",
        seniority: "Senior",
        tags: ["Finance", "Risques"],
        tjm: "1150",
        availability: "Immédiate",
        experience: "16 ans",
        company: "Banque de réseau",
    },
    {
        image: "/avatars/emma_t_profile.png",
        name: "Emma T.",
        title: "Experte Tarification Vie",
        sector: "Assurance",
        seniority: "Confirmé",
        tags: ["Actuariat", "Pricing"],
        tjm: "850",
        availability: "< 1 semaine",
        experience: "9 ans",
        company: "Assureur vie",
        online: true,
    },
    {
        image: "/avatars/testimonial_1_1765803183944.png",
        name: "Nicolas G.",
        title: "Product Owner Monétique",
        sector: "Banque",
        seniority: "Junior",
        tags: ["Gestion", "Agile"],
        tjm: "580",
        availability: "< 2 semaines",
        experience: "4 ans",
        company: "Banque en ligne",
    },
];

export const HeroCards = () => {
    const [indices, setIndices] = useState([0, 4, 8]);

    // Helper function to get next unique index
    const getNextUniqueIndex = (currentIndex: number, otherIndices: number[]): number => {
        let nextIndex = (currentIndex + 1) % EXPERTS.length;
        // Keep incrementing until we find an index not used by other cards
        while (otherIndices.includes(nextIndex)) {
            nextIndex = (nextIndex + 1) % EXPERTS.length;
        }
        return nextIndex;
    };

    useEffect(() => {
        // Card 1 changes every 3.5 seconds
        const interval1 = setInterval(() => {
            setIndices(prev => {
                const newIndex = getNextUniqueIndex(prev[0], [prev[1], prev[2]]);
                return [newIndex, prev[1], prev[2]];
            });
        }, 3500);

        // Card 2 changes every 4 seconds (offset by 1s)
        const timeout2 = setTimeout(() => {
            const interval2 = setInterval(() => {
                setIndices(prev => {
                    const newIndex = getNextUniqueIndex(prev[1], [prev[0], prev[2]]);
                    return [prev[0], newIndex, prev[2]];
                });
            }, 4000);
            return () => clearInterval(interval2);
        }, 1000);

        // Card 3 changes every 4.5 seconds (offset by 2s)
        const timeout3 = setTimeout(() => {
            const interval3 = setInterval(() => {
                setIndices(prev => {
                    const newIndex = getNextUniqueIndex(prev[2], [prev[0], prev[1]]);
                    return [prev[0], prev[1], newIndex];
                });
            }, 4500);
            return () => clearInterval(interval3);
        }, 2000);

        return () => {
            clearInterval(interval1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    return (
        <div className="relative w-full max-w-2xl mx-auto tablet:max-w-none">
            <div className="space-y-2 tablet:space-y-3 laptop:space-y-4">
                <div className="ml-0 mr-8 tablet:mr-12 laptop:mr-16">
                    <ExpertCard expert={EXPERTS[indices[0]]} compact />
                </div>
                <div className="hidden tablet:block ml-12 tablet:ml-16 laptop:ml-20 mr-0">
                    <ExpertCard expert={EXPERTS[indices[1]]} compact />
                </div>
                <div className="hidden laptop:block ml-4 tablet:ml-6 laptop:ml-8 mr-4 tablet:mr-6 laptop:mr-8">
                    <ExpertCard expert={EXPERTS[indices[2]]} />
                </div>
            </div>
        </div>
    );
};

const ExpertCard = ({ expert, compact = false }: { expert: Expert; compact?: boolean }) => {
    const getSectorColor = (sector: Expert["sector"]) => {
        switch (sector) {
            case "Banque":
                return "bg-blue-50 text-blue-700 border-blue-200";
            case "Assurance":
                return "bg-purple-50 text-purple-700 border-purple-200";
            case "Banque & Assurance":
                return "bg-gradient-to-r from-blue-50 to-purple-50 text-primary border-primary/20";
            default:
                return "bg-gray-50 text-gray-700 border-gray-200";
        }
    };

    const getSeniorityColor = (seniority: Expert["seniority"]) => {
        switch (seniority) {
            case "Junior":
                return "bg-emerald-50 text-emerald-700";
            case "Confirmé":
                return "bg-amber-50 text-amber-700";
            case "Senior":
                return "bg-red-50 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className={cn(
            "group relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300",
            compact ? "p-2 laptop:p-3" : "p-3"
        )}>
            <div className="flex items-start gap-2 laptop:gap-3">
                {/* Avatar - Animated */}
                <div className="relative flex-shrink-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={expert.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm",
                                compact ? "w-10 h-10 laptop:w-12 laptop:h-12" : "w-12 h-12"
                            )}
                        >
                            <Image
                                src={expert.image}
                                alt={expert.name}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {expert.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                            <motion.div
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 bg-white rounded-full"
                            />
                        </div>
                    )}
                </div>

                {/* Content - Animated */}
                <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={expert.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <h3 className="font-bold text-foreground text-sm leading-tight">
                                        {expert.name}
                                    </h3>
                                    <span className="text-[9px] font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded uppercase tracking-wide">
                                        {expert.experience}
                                    </span>
                                    <span className={cn(
                                        "text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide",
                                        getSeniorityColor(expert.seniority)
                                    )}>
                                        {expert.seniority}
                                    </span>
                                </div>
                                <p className="text-[11px] text-primary font-semibold leading-tight mb-1">
                                    {expert.title}
                                </p>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <p className="text-[10px] text-gray-500 leading-tight">
                                        Ex-{expert.company}
                                    </p>
                                    <span className={cn(
                                        "text-[9px] font-bold px-2 py-0.5 rounded-full border leading-tight",
                                        getSectorColor(expert.sector)
                                    )}>
                                        {expert.sector}
                                    </span>
                                </div>
                            </div>

                            {/* Tags - Hidden on compact tablet */}
                            <div className={cn(
                                "flex flex-wrap gap-1 mb-2",
                                compact && "hidden laptop:flex"
                            )}>
                                {expert.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide bg-primary/5 text-primary border border-primary/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Details */}
                            <div className="flex items-center gap-4 text-xs text-gray-600">
                                <div className="flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-semibold text-foreground">{expert.tjm}€</span>
                                    <span className="text-gray-400">/jour</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-emerald-700 font-medium whitespace-nowrap">
                                        {expert.availability}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Subtle hover effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
};
