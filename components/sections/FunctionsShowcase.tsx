"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

type FunctionData = {
    id: string;
    label: string;
    description: string;
    filters: string[];
    expertCount: number;
    experienceLevel: string;
    contractType: string;
    availability: string;
};

const FUNCTIONS: FunctionData[] = [
    {
        id: 'finance',
        label: 'Finance',
        description: 'Experts financiers',
        filters: ['SAP FI/CO', 'Excel avancé', 'Power BI', 'Normes IFRS', 'VBA/Macros', 'Bloomberg Terminal'],
        expertCount: 127,
        experienceLevel: 'Senior',
        contractType: 'Freelance',
        availability: 'Immédiate'
    },
    {
        id: 'gestion',
        label: 'Gestion',
        description: 'Pilotage & performance',
        filters: ['Agile/Scrum', 'Jira', 'MS Project', 'Lean Management', 'Six Sigma', 'Change Management'],
        expertCount: 89,
        experienceLevel: 'Expert (+10 ans)',
        contractType: 'CDI',
        availability: '< 2 semaines'
    },
    {
        id: 'it',
        label: 'IT',
        description: 'Experts techniques',
        filters: ['Java/Python', 'Cloud AWS/Azure', 'Docker/K8s', 'CI/CD', 'Microservices', 'Monétique'],
        expertCount: 203,
        experienceLevel: 'Confirmé',
        contractType: 'Freelance',
        availability: 'Immédiate'
    },
    {
        id: 'rh',
        label: 'RH',
        description: 'Ressources humaines',
        filters: ['Workday', 'SuccessFactors', 'LinkedIn Recruiter', 'Tests psychométriques', 'Paie Silae', 'GPEC'],
        expertCount: 64,
        experienceLevel: 'Senior',
        contractType: 'CDD',
        availability: '< 1 mois'
    },
    {
        id: 'marketing',
        label: 'Marketing',
        description: 'Marketing & communication',
        filters: ['Google Analytics', 'HubSpot', 'Adobe Suite', 'Social Media', 'SEO/SEM', 'Marketing Automation'],
        expertCount: 142,
        experienceLevel: 'Intermédiaire',
        contractType: 'Freelance',
        availability: '< 2 semaines'
    },
    {
        id: 'juridique',
        label: 'Juridique',
        description: 'Conformité & droit',
        filters: ['Droit bancaire', 'MiFID II', 'KYC/AML', 'Contrats ISDA', 'RGPD', 'LCB-FT'],
        expertCount: 56,
        experienceLevel: 'Expert (+15 ans)',
        contractType: 'CDI',
        availability: 'Immédiate'
    },
    {
        id: 'audit',
        label: 'Audit',
        description: 'Contrôle & risques',
        filters: ['SOX', 'Risk Management', 'ISO 27001', 'Audit financier', 'COSO Framework', 'Internal Controls'],
        expertCount: 78,
        experienceLevel: 'Senior',
        contractType: 'Portage',
        availability: '< 1 mois'
    }
];



export const FunctionsShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % FUNCTIONS.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentFunction = FUNCTIONS[currentIndex];

    return (
        <section id="fonctions" className="relative py-24 lg:py-28 overflow-hidden bg-white">
            <div className="container">

                {/* 50-20-30 layout matching screenshot with equal heights */}
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">

                    {/* LEFT COLUMN: Title & Subtitle (50% - 6 cols) */}
                    <div className="col-span-12 lg:col-span-7 laptop:col-span-6 flex flex-col justify-center pr-0 lg:pr-12 mb-8 lg:mb-0">
                        <SectionHeader
                            tag="Fonctions"
                            title={
                                <>
                                    Des experts qualifiés.
                                    <br />
                                    <span className="text-primary">Pour chaque expertise.</span>
                                </>
                            }
                            subtitle="Trouvez rapidement les experts spécialisés dont vous avez besoin dans tous les métiers de la banque et de l'assurance."
                            className="mb-8"
                        />

                        <Reveal delay={200} duration={800}>
                            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                                De la finance à l'audit, des profils{' '}
                                <span className="font-semibold text-foreground">certifiés</span> et{' '}
                                <span className="font-semibold text-foreground">immédiatement disponibles</span>.
                            </p>
                        </Reveal>
                    </div>

                    {/* MIDDLE COLUMN: Vertical Tabs (20% - 2 cols) */}
                    <div className="col-span-12 md:col-span-5 lg:col-span-2 laptop:col-span-2 flex flex-col">
                        <div className="space-y-1.5 flex-1">
                            {FUNCTIONS.map((func, index) => {
                                const isActive = index === currentIndex;

                                return (
                                    <div
                                        key={func.id}
                                        className={cn(
                                            "relative pl-3 py-3 transition-all duration-500 cursor-default rounded-lg",
                                            isActive && "bg-white/80"
                                        )}
                                    >
                                        {/* Left accent bar */}
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-r" />
                                        )}

                                        <div className="flex items-start gap-2.5">
                                            <div className={cn(
                                                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500",
                                                isActive
                                                    ? "bg-primary text-white"
                                                    : "bg-gray-200/80 text-gray-500"
                                            )}>
                                                {index + 1}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className={cn(
                                                    "text-xs font-semibold transition-all duration-500 leading-tight",
                                                    isActive ? "text-foreground" : "text-gray-500"
                                                )}>
                                                    {func.label}
                                                </div>
                                                <div className={cn(
                                                    "text-[10px] transition-all duration-500 mt-0.5 leading-tight",
                                                    isActive ? "text-gray-600" : "text-gray-400"
                                                )}>
                                                    {func.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Mini Mockup (30% - 4 cols) */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-3 laptop:col-span-4 flex flex-col">
                        <div className="bg-white rounded-lg border border-gray-200/80 shadow-sm p-4 transition-all duration-500 flex flex-col h-full">

                            {/* Mini Header */}
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                                <h3 className="text-xs font-bold text-foreground tracking-tight">
                                    Filtrer les profils
                                </h3>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                </div>
                            </div>

                            {/* Compact Filters */}
                            <div className="space-y-1.5 flex-1">
                                {currentFunction.filters.map((filter, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "flex items-center justify-between px-2.5 py-1.5 rounded-md border text-[10px] transition-all duration-500",
                                            idx === 0
                                                ? "bg-primary/5 border-primary/20 shadow-sm"
                                                : "bg-gray-50/80 border-gray-200/60"
                                        )}
                                    >
                                        <span className={cn(
                                            "font-medium",
                                            idx === 0 ? "text-primary" : "text-gray-700"
                                        )}>
                                            {filter}
                                        </span>
                                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                ))}
                            </div>

                            {/* Compact Settings */}
                            <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5">
                                <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-gray-500">Niveau d'expérience</span>
                                    <span className="font-semibold text-foreground">{currentFunction.experienceLevel}</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-gray-500">Type de contrat</span>
                                    <span className="font-semibold text-foreground">{currentFunction.contractType}</span>
                                </div>
                            </div>

                            {/* Results display */}
                            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-xl font-bold text-foreground tracking-tight">{currentFunction.expertCount}</span>
                                    <span className="text-[10px] text-gray-500 font-medium">experts</span>
                                </div>
                                <div className="flex items-center gap-1 px-2 py-0.5 bg-primary/5 rounded-full">
                                    <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">Live</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Harmonized CTA */}
                <Reveal delay={300} duration={800}>
                    <div className="mt-12 text-center relative z-10">
                        <Button as="a" href="/sourcing-expert#expertises" variant="outline" className="pointer-events-auto">
                            <span>Explorer toutes les fonctions</span>
                            <ArrowIcon />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
