"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Mode = 'banque' | 'assurance';

// Industry-specific keywords
const BANQUE_KEYWORDS = [
    "Bâle III", "SEPA", "PSD2", "KYC/AML", "Crédit Corporate", "Banque Privée",
    "Gestion d'Actifs", "Trading", "ALM", "Pillar 3", "ICAAP", "Monétique",
    "Core Banking", "API Banking", "Open Banking", "Risque de Crédit",
    "Conformité RGPD", "MiFID II", "EMIR", "Benchmark Regulation"
];

const ASSURANCE_KEYWORDS = [
    "IFRS 17", "Solvabilité II", "Actuariat Vie", "Actuariat Non-Vie",
    "Tarification", "Souscription", "Gestion Sinistres", "Réassurance",
    "SCR", "ORSA", "QRT", "Pilier 3", "Best Estimate", "Risk Margin",
    "InsurTech", "Distribution", "Product Management", "Underwriting",
    "Claims Management", "Pricing"
];

export const DashboardShowcase = () => {
    const [mode, setMode] = useState<Mode>('banque');
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

    const keywords = mode === 'banque' ? BANQUE_KEYWORDS : ASSURANCE_KEYWORDS;

    // Rotate keywords every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [keywords.length]);

    // Reset keyword index when mode changes
    useEffect(() => {
        setCurrentKeywordIndex(0);
    }, [mode]);

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

                {/* Rotating Keywords */}
                <Reveal delay={150} duration={800}>
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gray-50 rounded-full border border-gray-200/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Expertise</span>
                            <span className="text-sm font-semibold text-foreground transition-all duration-300">
                                {keywords[currentKeywordIndex]}
                            </span>
                        </div>
                    </div>
                </Reveal>

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

// Function Badge Component
const FunctionBadge = ({ label, color }: { label: string, color: string }) => {
    const colorClasses = {
        blue: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:shadow-blue-200/50",
        purple: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:border-purple-300 hover:shadow-purple-200/50",
        cyan: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 hover:shadow-cyan-200/50",
        pink: "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300 hover:shadow-pink-200/50",
        orange: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300 hover:shadow-orange-200/50",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-emerald-200/50",
        indigo: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-indigo-200/50",
    };

    return (
        <span className={cn(
            "px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 cursor-default",
            "hover:scale-105 hover:shadow-lg",
            colorClasses[color as keyof typeof colorClasses]
        )}>
            {label}
        </span>
    );
};

// UI Components for the Mockup

const NavItem = ({ icon, label, active = false, badge, notification, isNew }: { icon: string, label: string, active?: boolean, badge?: string, notification?: boolean, isNew?: boolean }) => {
    return (
        <div className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-default relative",
            active
                ? "bg-accent/20 text-foreground border-l-4 border-accent pl-2"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        )}>
            {/* Simple SVG Icons based on name */}
            <div className="w-5 h-5 opacity-70">
                {getIcon(icon)}
            </div>
            <span className="flex-1">{label}</span>
            {badge && (
                <span className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                    notification ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
                )}>
                    {badge}
                </span>
            )}
            {isNew && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-primary text-white uppercase">
                    New
                </span>
            )}
        </div>
    );
};

const FilterSelect = ({ label, count, active }: { label: string, count?: number, active?: boolean }) => (
    <div className={cn(
        "border rounded-md px-3 py-2 text-sm flex justify-between items-center transition-all cursor-default",
        active
            ? "bg-primary/5 border-primary/30 text-primary font-semibold"
            : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
    )}>
        <span className="text-xs">{label}</span>
        <div className="flex items-center gap-2">
            {count && <span className="text-xs font-bold text-gray-400">{count}</span>}
            <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
    </div>
);

const CandidateCard = ({
    initials, color = "bg-gray-700", name, title, location, tags, exp, status, rate, isNew, online, image, skills, certifications, matchScore
}: any) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center hover:shadow-md transition-shadow relative group">
            {/* Top indicators */}
            <div className="absolute top-4 left-4 flex gap-2">
                {isNew && (
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-emerald-500 text-white uppercase">
                        Nouveau
                    </span>
                )}
                {matchScore && (
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Match {matchScore}%
                    </span>
                )}
            </div>

            <div className="absolute top-4 right-4 text-emerald-500 opacity-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>

            <div className="relative mb-3 mt-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100">
                    <img src={image} alt={name} className="object-cover w-full h-full" />
                </div>
                {online && <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>}
            </div>

            <div className="text-center w-full mb-3">
                <h3 className="font-bold text-gray-900 text-base mb-0.5">{name}</h3>
                <p className="text-[10px] font-bold text-emerald-800 mb-1 flex items-center justify-center leading-tight px-1">{title}</p>
                <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {location}
                </div>
            </div>

            <div className="flex gap-1 mb-2">
                {tags.map((tag: string) => (
                    <span key={tag} className={cn(
                        "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase",
                        tag === "Assurance" ? "bg-emerald-100/80 text-emerald-700" : "bg-blue-100/80 text-blue-700"
                    )}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Skills/Keywords */}
            {skills && (
                <div className="w-full mb-2">
                    <div className="flex flex-wrap gap-1 justify-center">
                        {skills.map((skill: string, idx: number) => (
                            <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-600 font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
                <div className="w-full mb-2 flex items-center justify-center gap-1">
                    <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-[9px] text-gray-500 font-semibold">{certifications.join(', ')}</span>
                </div>
            )}

            <div className="w-full space-y-1.5 text-[10px] border-t border-gray-50 pt-2">
                <div className="flex justify-between">
                    <span className="text-gray-500">Expérience :</span>
                    <span className="font-semibold text-emerald-700">{exp}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Contrat :</span>
                    <span className="font-semibold text-gray-700">{status}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">TJM <span className="text-[9px] bg-gray-100 rounded-full w-3 h-3 inline-flex items-center justify-center">?</span> :</span>
                    <span className="font-bold text-emerald-700">{rate}</span>
                </div>
            </div>

        </div>
    );
};

// Icon Helper
const getIcon = (name: string) => {
    switch (name) {
        case 'home': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
        case 'search': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
        case 'heart': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
        case 'plus': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
        case 'list': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
        case 'inbox': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414a1 1 0 00-.707-.293H4" /></svg>;
        case 'briefcase': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
        case 'file-text': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
        case 'sparkles': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
        case 'check-circle': return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
        default: return null;
    }
};
