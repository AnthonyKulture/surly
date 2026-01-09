"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type RegistrationStep = {
    id: number;
    label: string;
    description: string;
    mockupContent: {
        title: string;
        items: string[];
        status?: string;
    };
};

const STEPS: RegistrationStep[] = [
    {
        id: 1,
        label: "Profil",
        description: "Création de votre compte consultant",
        mockupContent: {
            title: "Créez votre profil",
            items: ["👤 Nom et prénom", "📧 Email professionnel", "📱 Téléphone", "📍 Localisation"],
        }
    },
    {
        id: 2,
        label: "Expériences",
        description: "Renseignement du profil (CV ou LinkedIn)",
        mockupContent: {
            title: "Expériences",
            items: ["📄 Upload CV (PDF, DOCX)", "💼 Import LinkedIn", "⚡ Remplissage automatique"],
        }
    },
    {
        id: 3,
        label: "Compétences",
        description: "Extraction automatique des mots-clés",
        mockupContent: {
            title: "Analyse automatique",
            items: ["✓ Compétences (Python, Java, SAP...)", "✓ Méthodologies (Agile, Scrum...)", "✓ Outils (Jira, Excel, Power BI...)", "✓ Certifications (PMP, CISSP...)"],
        }
    },
    {
        id: 4,
        label: "Vérification",
        description: "Validation manuelle équipe Surly (48h)",
        mockupContent: {
            title: "En cours de vérification",
            items: ["👤 Revue par notre équipe", "📞 Vérification expériences", "⏱️ Délai: sous 48h"],
            status: "En cours"
        }
    },
    {
        id: 5,
        label: "Activation",
        description: "Profil actif sur la plateforme",
        mockupContent: {
            title: "Profil activé",
            items: ["🎉 Félicitations !", "✅ Profil 100% validé", "🚀 Visible par les clients"],
            status: "Actif"
        }
    }
];

export const QuickRegistration = () => {
    const [currentStep, setCurrentStep] = useState(0);

    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % STEPS.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const activeStep = STEPS[currentStep];

    return (
        <section id="inscription" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-white">
            <div className="container">

                {/* 3-column layout matching FunctionsShowcase (50%-20%-30%) */}
                <div className="grid grid-cols-12 gap-4 tablet:gap-6 laptop:gap-8 items-center max-w-7xl mx-auto">

                    {/* LEFT COLUMN: Title & Description (50% - 6 cols) */}
                    <div className="col-span-12 tablet:col-span-6 flex flex-col justify-center pr-0 tablet:pr-8 laptop:pr-12">
                        <SectionHeader
                            tag="Inscription"
                            title={
                                <>
                                    Inscription en
                                    <br />
                                    <span className="text-primary">5 minutes chrono</span>
                                </>
                            }
                            subtitle="CV parser OU LinkedIn - profil validé sous 48h"
                            className="mb-8"
                        />

                        <Reveal delay={200} duration={800}>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-white to-primary/5 border border-primary/10 rounded-lg">
                                    <div className="text-2xl">📄</div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-foreground mb-1">Upload CV</h3>
                                        <p className="text-xs text-foreground-muted leading-relaxed">
                                            Déposez votre CV (PDF/DOCX) et vos expériences sont remplies automatiquement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-white to-primary/5 border border-primary/10 rounded-lg">
                                    <div className="text-2xl">💼</div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-foreground mb-1">Connexion LinkedIn</h3>
                                        <p className="text-xs text-foreground-muted leading-relaxed">
                                            Importez LinkedIn en un clic : expériences remplies instantanément
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={300} duration={800}>
                            <Button
                                as="a"
                                href="https://app.surly.fr"
                                size="large"
                                className="shadow-lg hover:shadow-xl w-full tablet:w-auto justify-center"
                            >
                                Commencer mon inscription
                            </Button>
                        </Reveal>
                    </div>

                    {/* MIDDLE COLUMN: Vertical Steps (20% - 2 cols) - Hidden on mobile */}
                    <div className="hidden tablet:flex col-span-12 tablet:col-span-3 flex-col">
                        <div className="space-y-1.5 flex-1">
                            {STEPS.map((step, index) => {
                                const isActive = index === currentStep;

                                return (
                                    <div
                                        key={step.id}
                                        className={cn(
                                            "relative pl-3 py-2 transition-all duration-500 cursor-default rounded-lg",
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
                                                {step.id}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className={cn(
                                                    "text-xs font-semibold transition-all duration-500 leading-tight",
                                                    isActive ? "text-foreground" : "text-gray-500"
                                                )}>
                                                    {step.label}
                                                </div>
                                                <div className={cn(
                                                    "text-[10px] transition-all duration-500 mt-0.5 leading-tight",
                                                    isActive ? "text-gray-600" : "text-gray-400"
                                                )}>
                                                    {step.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Mini Mockup (30% - 4 cols) - Hidden on mobile */}
                    <div className="hidden tablet:flex col-span-12 tablet:col-span-3 flex-col">
                        <div className="bg-white rounded-lg border border-gray-200/80 shadow-sm p-3 transition-all duration-500 flex flex-col">

                            {/* Mini Header */}
                            <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
                                <h3 className="text-xs font-bold text-foreground tracking-tight">
                                    {activeStep.mockupContent.title}
                                </h3>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                </div>
                            </div>

                            {/* Content Items */}
                            <div className="space-y-1.5">
                                {activeStep.mockupContent.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "flex items-center gap-2 px-2.5 py-1.5 rounded-md border text-[10px] transition-all duration-500",
                                            idx === 0
                                                ? "bg-primary/5 border-primary/20 shadow-sm"
                                                : "bg-gray-50/80 border-gray-200/60"
                                        )}
                                    >
                                        <span className={cn(
                                            "font-medium leading-relaxed",
                                            idx === 0 ? "text-primary" : "text-gray-700"
                                        )}>
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Status Badge */}
                            {activeStep.mockupContent.status && (
                                <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-center">
                                    <div className={cn(
                                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                                        activeStep.mockupContent.status === "Actif"
                                            ? "bg-primary/10 border border-primary/20"
                                            : "bg-gray-100 border border-gray-200"
                                    )}>
                                        <div className={cn(
                                            "w-1.5 h-1.5 rounded-full",
                                            activeStep.mockupContent.status === "Actif"
                                                ? "bg-primary animate-pulse"
                                                : "bg-gray-400 animate-pulse"
                                        )}></div>
                                        <span className={cn(
                                            "text-[10px] font-semibold uppercase tracking-wide",
                                            activeStep.mockupContent.status === "Actif"
                                                ? "text-primary"
                                                : "text-gray-600"
                                        )}>
                                            {activeStep.mockupContent.status}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
