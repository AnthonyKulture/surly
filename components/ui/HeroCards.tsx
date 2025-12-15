"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

export const HeroCards = () => {
    return (
        <div className="relative w-full max-w-[1200px] mx-auto perspective-1000 mt-10">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* MAIN DASHBOARD UI */}
            <Reveal delay={200} duration={1000} className="relative z-10 w-full">
                <div className="bg-[#FAFBF9] border border-border/10 rounded-xl shadow-2xl overflow-hidden flex h-[600px] md:h-[700px]">

                    {/* LEFT SIDEBAR (Desktop Only) */}
                    <div className="hidden md:flex flex-col w-[260px] border-r border-border/10 bg-white p-4">
                        {/* Logo Area */}
                        <div className="flex items-center gap-2 mb-10 px-2">
                            <Logo className="w-[100px]" variant="black" />
                        </div>

                        {/* Navigation */}
                        <div className="space-y-1">
                            <NavItem icon="home" label="Mon profil" />
                            <NavItem icon="search" label="Trouver un postulant" active />
                            <NavItem icon="heart" label="Profils favoris" />
                            <NavItem icon="plus" label="Poster une annonce" />
                            <NavItem icon="list" label="Mes annonces" />
                            <NavItem icon="inbox" label="Candidatures reçues" />
                            <NavItem icon="briefcase" label="Mes offres de mission" />
                            <NavItem icon="sparkles" label="Scoring IA" />
                            <NavItem icon="check-circle" label="Qualification Candidat" />
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
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                                    JS
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
                                        placeholder="Essayez 'Chargé d'étude', 'Gestionnaire d'actifs', 'Conseiller banque privée'..."
                                        className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 h-10"
                                        disabled
                                    />
                                </div>

                                {/* Filters */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <FilterSelect label="Métiers Banque..." />
                                    <FilterSelect label="Branches Banque..." />
                                    <FilterSelect label="Branches Assurance..." />
                                    <FilterSelect label="Fonctions..." />
                                    <FilterSelect label="Outils Gestion..." />
                                    <FilterSelect label="Outils RH..." />
                                </div>



                                {/* CARDS GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                    {/* Card 1: Thomas - Finance/IFRS17 */}
                                    <CandidateCard
                                        initials="TB"
                                        color="bg-indigo-700"
                                        name="Thomas"
                                        title="Expert IFRS 17 & Consolidation"
                                        location="Paris & Télétravail"
                                        tags={["Finance", "Comptabilité"]}
                                        exp="Plus de 10 ans"
                                        status="Freelance"
                                        rate="950 € HT"
                                        isNew
                                    />

                                    {/* Card 2: Sarah - Juridique/Compliance */}
                                    <CandidateCard
                                        initials="SM"
                                        color="bg-emerald-800"
                                        image="/path-to-image"
                                        hasImage={true}
                                        name="Sarah"
                                        title="Juriste Droit des Assurances & Conformité"
                                        location="Lyon"
                                        tags={["Juridique", "Conformité"]}
                                        exp="5 à 10 ans"
                                        status="Dispo imméd."
                                        rate="650 € HT"
                                        online
                                    />

                                    {/* Card 3: Alexandre - Actuariat */}
                                    <CandidateCard
                                        initials="AD"
                                        color="bg-blue-800"
                                        name="Alexandre"
                                        title="Actuaire Senior Vie & Modélisation"
                                        location="Île-de-France"
                                        tags={["Actuariat", "Risques"]}
                                        exp="Expert (+15 ans)"
                                        status="Portage"
                                        rate="1100 € HT"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
};

// UI Components for the Mockup

const NavItem = ({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) => {
    return (
        <div className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-default",
            active
                ? "bg-accent/20 text-foreground border-l-4 border-accent pl-2"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        )}>
            {/* Simple SVG Icons based on name */}
            <div className="w-5 h-5 opacity-70">
                {getIcon(icon)}
            </div>
            {label}
        </div>
    );
};

const FilterSelect = ({ label }: { label: string }) => (
    <div className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-500 flex justify-between items-center shadow-sm">
        <span>{label}</span>
        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </div>
);

const CandidateCard = ({
    initials, color = "bg-gray-700", name, title, location, tags, exp, status, rate, isNew, online, hasImage
}: any) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center hover:shadow-md transition-shadow relative group">
            <div className="absolute top-4 left-4 text-emerald-500 opacity-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>

            <div className="relative mb-3">
                {hasImage && name === 'Sarah' ? (
                    <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-sm flex items-center justify-center">
                        <span className="text-2xl">👩🏻‍💼</span>
                    </div>
                ) : (
                    <div className={cn("w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-sm", color)}>
                        {name === 'Sarah' ? '👩🏻' : '👨🏻'}
                    </div>
                )}
                {online && <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>}
            </div>

            <div className="text-center w-full mb-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{name}</h3>
                <p className="text-xs font-bold text-emerald-800 mb-2 min-h-[40px] flex items-center justify-center">{title}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {location}
                </div>
            </div>

            <div className="flex gap-2 mb-6">
                {tags.map((tag: string) => (
                    <span key={tag} className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                        tag === "Assurance" ? "bg-emerald-100/80 text-emerald-700" : "bg-blue-100/80 text-blue-700"
                    )}>
                        {tag}
                    </span>
                ))}
            </div>

            <div className="w-full space-y-2 text-xs border-t border-gray-50 pt-4">
                <div className="flex justify-between">
                    <span className="text-gray-500">Expérience :</span>
                    <span className="font-semibold text-emerald-700">{exp}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Contrat :</span>
                    <span className="font-semibold text-gray-700">{status}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">TJM <span className="text-[10px] bg-gray-100 rounded-full w-4 h-4 inline-flex items-center justify-center">?</span> :</span>
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
