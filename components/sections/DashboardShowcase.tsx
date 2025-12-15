"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CandidateCard } from "@/components/ui/dashboard/CandidateCard";
import { FunctionBadge } from "@/components/ui/dashboard/FunctionBadge";
import { FilterSelect } from "@/components/ui/dashboard/FilterSelect";
import { NavItem } from "@/components/ui/dashboard/NavItem";
import { RotatingKeywords } from "@/components/ui/dashboard/RotatingKeywords";

type Mode = 'banque' | 'assurance';

export const DashboardShowcase = () => {
    const [mode, setMode] = useState<Mode>('banque');

    return (
        <section
            id="dashboard"
            className="relative py-24 lg:py-28 overflow-hidden bg-white"
        >
            <div className="container relative z-[2]">

                {/* Title */}
                <SectionHeader
                    tag="La Solution"
                    title={
                        <>
                            Une plateforme pensée pour{' '}
                            <span className="text-primary">votre métier</span>
                        </>
                    }
                    subtitle="Découvrez une expérience de recrutement sur-mesure, adaptée aux spécificités de la banque et de l'assurance."
                    centered
                />

                {/* Main Functions - Cross-sector */}
                <Reveal delay={125} duration={800}>
                    <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
                        <FunctionBadge label="Finance" color="blue" />
                        <FunctionBadge label="Gestion" color="purple" />
                        <FunctionBadge label="IT" color="cyan" />
                        <FunctionBadge label="RH" color="pink" />
                        <FunctionBadge label="Marketing" color="orange" />
                        <FunctionBadge label="Juridique" color="emerald" />
                        <FunctionBadge label="Audit" color="indigo" />
                    </div>
                </Reveal>

                {/* Rotating Keywords - Isolated Component */}
                <RotatingKeywords mode={mode} />

                {/* Platform Stats */}
                <Reveal delay={175} duration={800}>
                    <div className="flex justify-center gap-12 mb-12 flex-wrap">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">3,300+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Experts certifiés</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">850+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Missions actives</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">95%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Taux de satisfaction</div>
                        </div>
                    </div>
                </Reveal>

                {/* Mode Switcher */}
                <Reveal delay={200} duration={800}>
                    <div className="flex flex-col items-center mb-12">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-4">
                            Explorez par secteur
                        </p>
                        <div className="inline-flex items-center gap-1 p-1 bg-gray-50 rounded-xl border border-gray-200/60 shadow-sm">
                            <button
                                onClick={() => setMode('banque')}
                                className={cn(
                                    "relative px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300",
                                    "flex items-center gap-2.5",
                                    mode === 'banque'
                                        ? "bg-white text-foreground shadow-sm border border-gray-200/40"
                                        : "text-gray-500 hover:text-gray-700"
                                )}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                <span>Banque</span>
                            </button>

                            <button
                                onClick={() => setMode('assurance')}
                                className={cn(
                                    "relative px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300",
                                    "flex items-center gap-2.5",
                                    mode === 'assurance'
                                        ? "bg-white text-foreground shadow-sm border border-gray-200/40"
                                        : "text-gray-500 hover:text-gray-700"
                                )}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                <span>Assurance</span>
                            </button>
                        </div>
                    </div>
                </Reveal>

                {/* Dashboard Mockup */}
                <div className="relative w-full max-w-[1200px] mx-auto perspective-1000">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                    {/* MAIN DASHBOARD UI */}
                    <Reveal delay={300} duration={1000} className="relative z-10 w-full">
                        <div className="bg-[#FAFBF9] border border-border/10 rounded-xl shadow-2xl overflow-hidden flex h-[600px] md:h-[700px]">

                            {/* LEFT SIDEBAR (Desktop Only) */}
                            <div className="hidden md:flex flex-col w-[260px] border-r border-border/10 bg-white p-4">
                                {/* Logo Area */}
                                <div className="flex items-center gap-2 mb-10 px-2">
                                    <div className="text-2xl font-bold font-serif">Surly<span className="text-primary text-4xl leading-3">.</span></div>
                                </div>

                                {/* Navigation */}
                                <div className="space-y-1">
                                    <NavItem icon="home" label="Mon profil" />
                                    <NavItem icon="search" label="Trouver un expert" active />
                                    <NavItem icon="heart" label="Profils favoris" badge="12" />
                                    <NavItem icon="plus" label="Poster une annonce" />
                                    <NavItem icon="list" label="Mes annonces" badge="3" />
                                    <NavItem icon="inbox" label="Candidatures reçues" badge="24" notification />
                                    <NavItem icon="briefcase" label="Mes offres de mission" badge="5" />
                                    <NavItem icon="sparkles" label="Scoring IA" isNew />
                                    <NavItem icon="check-circle" label="Qualification Candidat" />
                                </div>

                                {/* Sidebar Stats */}
                                <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold px-2">Activité</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between px-2 text-xs">
                                            <span className="text-gray-500">Vues profil</span>
                                            <span className="font-bold text-emerald-600">+127</span>
                                        </div>
                                        <div className="flex items-center justify-between px-2 text-xs">
                                            <span className="text-gray-500">Match IA</span>
                                            <span className="font-bold text-primary">98%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MAIN CONTENT AREA */}
                            <div className="flex-1 flex flex-col min-w-0 bg-[#F5F7FA]">

                                {/* Top Navigation / Header */}
                                <div className="h-16 bg-white border-b border-border/10 flex items-center justify-between px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="md:hidden">
                                            {/* Mobile Menu Icon */}
                                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                        </div>
                                        <span className="font-semibold text-sm text-gray-700 hidden sm:block">Recherche de talents</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            En ligne
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs overflow-hidden relative">
                                            <img src="/avatars/testimonial_1_1765803183944.png" alt="Profile" className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* SCROLLABLE DASHBOARD CONTENT */}
                                <div className="flex-1 overflow-hidden p-6 relative">
                                    {/* Gradient Overlay for bottom fade */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F7FA] to-transparent z-20 pointer-events-none" />

                                    <div className="max-w-5xl mx-auto space-y-6">

                                        {/* Search Bar */}
                                        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            <input
                                                type="text"
                                                placeholder={mode === 'banque'
                                                    ? "Essayez 'Chargé d'étude', 'Gestionnaire d'actifs', 'Conseiller banque privée'..."
                                                    : "Essayez 'Actuaire', 'Souscripteur', 'Gestionnaire sinistres'..."
                                                }
                                                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 h-10"
                                                disabled
                                            />
                                        </div>

                                        {/* Filters - Different for Banque and Assurance */}
                                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Filtres spécialisés</span>
                                                <span className="text-xs text-primary font-bold">
                                                    {mode === 'banque' ? '847 résultats' : '623 résultats'}
                                                </span>
                                            </div>
                                            {mode === 'banque' ? (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    <FilterSelect label="Métiers Banque" count={234} active />
                                                    <FilterSelect label="Branches Banque" count={189} />
                                                    <FilterSelect label="Fonctions" count={456} />
                                                    <FilterSelect label="Outils Gestion" count={167} />
                                                    <FilterSelect label="Outils RH" count={98} />
                                                    <FilterSelect label="Certifications" count={145} />
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    <FilterSelect label="Branches Assurance" count={178} active />
                                                    <FilterSelect label="Métiers Assurance" count={201} />
                                                    <FilterSelect label="Spécialités" count={156} />
                                                    <FilterSelect label="Produits" count={134} />
                                                    <FilterSelect label="Outils Actuariat" count={89} />
                                                    <FilterSelect label="Normes & Réglementations" count={112} />
                                                </div>
                                            )}
                                        </div>

                                        {/* CARDS GRID - Different profiles for each mode */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {mode === 'banque' ? (
                                                <>
                                                    {/* Banque Profiles */}
                                                    <CandidateCard
                                                        initials="ML"
                                                        image="/avatars/profile_expert_1_1765802590256.png"
                                                        name="Marie"
                                                        title="Responsable Crédit Corporate"
                                                        location="Paris La Défense"
                                                        tags={["Banque", "Crédit"]}
                                                        exp="Plus de 10 ans"
                                                        status="Freelance"
                                                        skills={["Bâle III", "Crédit Scoring", "ALM"]}
                                                        certifications={["Certified Credit Analyst"]}
                                                        matchScore={94}
                                                        rate="850 € HT"
                                                        isNew
                                                    />

                                                    <CandidateCard
                                                        initials="JD"
                                                        image="/avatars/profile_expert_2_1765802613092.png"
                                                        name="Jean"
                                                        title="Expert Gestion des Risques & Bâle III"
                                                        location="Lyon"
                                                        tags={["Banque", "Risk"]}
                                                        exp="Expert (+15 ans)"
                                                        status="Portage"
                                                        rate="1050 € HT"
                                                        online
                                                        skills={["ICAAP", "Stress Testing", "VaR"]}
                                                        certifications={["FRM", "CFA Level II"]}
                                                        matchScore={98}
                                                    />

                                                    <CandidateCard
                                                        initials="CB"
                                                        image="/avatars/profile_expert_claire_new.png"
                                                        name="Claire"
                                                        title="Conseiller Banque Privée & Gestion Patrimoine"
                                                        location="Paris"
                                                        tags={["Banque", "Patrimoine"]}
                                                        exp="5 à 10 ans"
                                                        status="CDI"
                                                        rate="Négociable"
                                                        skills={["MiFID II", "Asset Allocation", "Family Office"]}
                                                        certifications={["CGPC"]}
                                                        matchScore={89}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {/* Assurance Profiles */}
                                                    <CandidateCard
                                                        initials="AD"
                                                        image="/avatars/profile_expert_6_1765802756821.png"
                                                        name="Alexandre"
                                                        title="Actuaire Senior Vie & Modélisation"
                                                        location="Île-de-France"
                                                        tags={["Assurance", "Actuariat"]}
                                                        exp="Expert (+15 ans)"
                                                        status="Portage"
                                                        rate="1100 € HT"
                                                        isNew
                                                        skills={["Prophet", "Python", "IFRS 17"]}
                                                        certifications={["IA", "FSAG"]}
                                                        matchScore={96}
                                                    />

                                                    <CandidateCard
                                                        initials="SM"
                                                        image="/avatars/profile_expert_3_1765802652999.png"
                                                        name="Sarah"
                                                        title="Souscriptrice Risques d'Entreprise"
                                                        location="Lyon"
                                                        tags={["Assurance", "Souscription"]}
                                                        exp="5 à 10 ans"
                                                        status="Freelance"
                                                        rate="750 € HT"
                                                        online
                                                        skills={["RC Pro", "Cyber", "D&O"]}
                                                        certifications={["CIP"]}
                                                        matchScore={91}
                                                    />

                                                    <CandidateCard
                                                        initials="PL"
                                                        image="/avatars/profile_expert_4_1765802699392.png"
                                                        name="Pierre"
                                                        title="Expert IFRS 17 & Solvabilité II"
                                                        location="Paris"
                                                        tags={["Assurance", "Conformité"]}
                                                        exp="Plus de 10 ans"
                                                        status="Dispo imméd."
                                                        rate="950 € HT"
                                                        skills={["QRT", "ORSA", "SCR"]}
                                                        certifications={["IA", "CERA"]}
                                                        matchScore={93}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
