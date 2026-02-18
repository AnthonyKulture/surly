"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CandidateCard } from "@/components/ui/dashboard/CandidateCard";
import { FunctionBadge } from "@/components/ui/dashboard/FunctionBadge";
import { FilterSelect } from "@/components/ui/dashboard/FilterSelect";
import { NavItem } from "@/components/ui/dashboard/NavItem";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useTranslations } from 'next-intl';

type Mode = 'banque' | 'assurance';

export const DashboardShowcase = () => {
    const [mode, setMode] = useState<Mode>('banque');
    const t = useTranslations('dashboard_showcase');

    // Fetch mock profiles from translations
    const bankProfiles = t.raw('mock_profiles.bank') as any[];
    const insuranceProfiles = t.raw('mock_profiles.insurance') as any[];

    // Profile images mapping (since they are not in JSON)
    const profileImages = {
        bank: [
            "/avatars/profile_expert_1_1765802590256.png",
            "/avatars/profile_expert_2_1765802613092.png",
            "/avatars/profile_expert_claire_new.png"
        ],
        insurance: [
            "/avatars/profile_expert_6_1765802756821.png",
            "/avatars/profile_expert_3_1765802652999.png",
            "/avatars/profile_expert_4_1765802699392.png"
        ]
    };

    // Profile initials mapping
    const profileInitials = {
        bank: ["ML", "JD", "CB"],
        insurance: ["AD", "SM", "PL"]
    };

    // Profile names (only first name needed if defined in code, but taken from JSON title usually, 
    // actually JSON has 'title' like "Corporate Credit Manager", but name matches the mock data "Marie", "Jean" etc.
    // The previous code had hardcoded names "Marie", "Jean", etc.
    // The JSON doesn't seem to have "name" field, only "title".
    // I need to check if JSON has "name" or if I should keep them hardcoded or add them to JSON.
    // Checking en.json, line 454: "title": "Corporate Credit Manager". No name.
    // I will add names to the local mapping or assume they are generic.
    // Actually, distinct names are better for realism.

    const profileNames = {
        bank: ["Marie", "Jean", "Claire"],
        insurance: ["Alexandre", "Sarah", "Pierre"]
    };

    return (
        <section
            id="dashboard"
            className="relative py-24 lg:py-28 overflow-hidden bg-white"
        >
            <div className="container relative z-[2]">

                {/* Title */}
                <SectionHeader
                    tag={t('tag')}
                    title={
                        <>
                            {t('title')}
                            <br />
                            <span className="text-primary">{t('titleHighlight')}</span>
                        </>
                    }
                    subtitle={t('subtitle')}
                    centered
                />

                {/* Main Functions - Cross-sector */}
                <Reveal delay={125} duration={800}>
                    <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
                        <FunctionBadge label={t('functions.finance')} color="blue" />
                        <FunctionBadge label={t('functions.gestion')} color="purple" />
                        <FunctionBadge label={t('functions.it')} color="cyan" />
                        <FunctionBadge label={t('functions.rh')} color="pink" />
                        <FunctionBadge label={t('functions.marketing')} color="orange" />
                        <FunctionBadge label={t('functions.juridique')} color="emerald" />
                        <FunctionBadge label={t('functions.audit')} color="indigo" />
                    </div>
                </Reveal>
                {/* Mode Switcher */}
                <Reveal delay={200} duration={800}>
                    <div className="flex flex-col items-center mb-12">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-4">
                            {t('mode.explore')}
                        </p>
                        <div className="relative">
                            <div className="relative inline-flex items-center gap-1 p-1 rounded-xl overflow-hidden bg-transparent">
                                <div className="absolute inset-[-100%] animate-spin-medium bg-[conic-gradient(from_90deg_at_50%_50%,#0000_75%,#005e53_100%)]" />
                                <div className="absolute inset-[2px] bg-white rounded-lg z-0" />
                                <div className="relative z-10 flex gap-1">
                                    <button
                                        onClick={() => setMode('banque')}
                                        className={cn(
                                            "relative px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300",
                                            "flex items-center gap-2.5 hover:scale-105 active:scale-95",
                                            mode === 'banque'
                                                ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-200"
                                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50"
                                        )}
                                    >
                                        <svg className={cn("w-5 h-5", mode === 'banque' && "text-blue-600")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        <span>{t('mode.bank')}</span>
                                        {mode === 'banque' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
                                    </button>

                                    <button
                                        onClick={() => setMode('assurance')}
                                        className={cn(
                                            "relative px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300",
                                            "flex items-center gap-2.5 hover:scale-105 active:scale-95",
                                            mode === 'assurance'
                                                ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-200"
                                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50"
                                        )}
                                    >
                                        <svg className={cn("w-5 h-5", mode === 'assurance' && "text-emerald-600")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                        <span>{t('mode.insurance')}</span>
                                        {mode === 'assurance' && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Dashboard Mockup */}
                <div className="relative w-full max-w-[1200px] mx-auto perspective-1000">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                    {/* MAIN DASHBOARD UI */}
                    <Reveal delay={300} duration={1000} className="relative z-10 w-full">
                        <div className={cn(
                            "bg-[#FAFBF9] rounded-xl shadow-2xl overflow-hidden flex h-[800px] md:h-[700px] transition-all duration-500",
                            mode === 'banque'
                                ? "border-2 border-blue-200/60"
                                : "border-2 border-emerald-200/60"
                        )}>

                            {/* LEFT SIDEBAR (Desktop Only) */}
                            <div className="hidden md:flex flex-col w-[260px] border-r border-border/10 bg-white p-4">
                                {/* Logo Area */}
                                <div className="flex items-center gap-2 mb-10 px-2">
                                    <Logo className="w-[100px]" variant="black" />
                                </div>

                                {/* Navigation */}
                                <div className="space-y-1">
                                    <NavItem icon="home" label={t('sidebar.profile')} />
                                    <NavItem icon="search" label={t('sidebar.findExpert')} active />
                                    <NavItem icon="heart" label={t('sidebar.favorites')} badge="12" />
                                    <NavItem icon="plus" label={t('sidebar.postAd')} />
                                    <NavItem icon="list" label={t('sidebar.myAds')} badge="3" />
                                    <NavItem icon="inbox" label={t('sidebar.applications')} badge="24" notification />
                                    <NavItem icon="briefcase" label={t('sidebar.missions')} badge="5" />
                                    <NavItem icon="sparkles" label={t('sidebar.scoring')} isNew />
                                    <NavItem icon="check-circle" label={t('sidebar.qualification')} />
                                </div>

                                {/* Sidebar Stats */}
                                <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold px-2">{t('sidebar.activity')}</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between px-2 text-xs">
                                            <span className="text-gray-500">{t('sidebar.profileViews')}</span>
                                            <span className="font-bold text-emerald-600">+127</span>
                                        </div>
                                        <div className="flex items-center justify-between px-2 text-xs">
                                            <span className="text-gray-500">{t('sidebar.aiMatch')}</span>
                                            <span className="font-bold text-primary">98%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MAIN CONTENT AREA */}
                            <div className="flex-1 flex flex-col min-w-0 bg-[#F5F7FA]">

                                {/* Top Navigation / Header */}
                                <div className={cn(
                                    "h-16 bg-white border-b flex items-center justify-between px-6 transition-colors duration-500",
                                    mode === 'banque' ? "border-blue-100" : "border-emerald-100"
                                )}>
                                    <div className="flex items-center gap-3">
                                        <div className="md:hidden">
                                            {/* Mobile Menu Icon */}
                                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                        </div>
                                        <span className="font-semibold text-sm text-gray-700 hidden sm:block">{t('header.searchExperts')}</span>
                                        {/* Sector Badge */}
                                        <span className={cn(
                                            "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide transition-all duration-300 hidden sm:inline-flex items-center gap-1.5",
                                            mode === 'banque'
                                                ? "bg-blue-100/80 text-blue-700"
                                                : "bg-emerald-100/80 text-emerald-700"
                                        )}>
                                            <span className={cn(
                                                "w-2 h-2 rounded-full",
                                                mode === 'banque' ? "bg-blue-500" : "bg-emerald-500"
                                            )} />
                                            {mode === 'banque' ? t('mode.bank') : t('mode.insurance')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            {t('header.online')}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs overflow-hidden relative">
                                            <Image
                                                src="/avatars/testimonial_1_1765803183944.png"
                                                alt="Profile"
                                                width={32}
                                                height={32}
                                                className="object-cover w-full h-full"
                                                loading="lazy"
                                                quality={85}
                                            />
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
                                                    ? t('search.placeholder.bank')
                                                    : t('search.placeholder.insurance')
                                                }
                                                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 h-10"
                                                disabled
                                            />
                                        </div>

                                        {/* Filters - Different for Banque and Assurance */}
                                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{t('filters.title')}</span>
                                                <span className="text-xs text-primary font-bold">
                                                    {t('filters.results', { count: mode === 'banque' ? 847 : 623 })}
                                                </span>
                                            </div>
                                            {mode === 'banque' ? (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    <FilterSelect label={t('filters.labels.bankJobs')} count={234} active />
                                                    <FilterSelect label={t('filters.labels.bankBranches')} count={189} />
                                                    <FilterSelect label={t('filters.labels.functions')} count={456} />
                                                    <FilterSelect label={t('filters.labels.managementTools')} count={167} />
                                                    <FilterSelect label={t('filters.labels.hrTools')} count={98} />
                                                    <FilterSelect label={t('filters.labels.certifications')} count={145} />
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    <FilterSelect label={t('filters.labels.insuranceBranches')} count={178} active />
                                                    <FilterSelect label={t('filters.labels.insuranceJobs')} count={201} />
                                                    <FilterSelect label={t('filters.labels.specialties')} count={156} />
                                                    <FilterSelect label={t('filters.labels.products')} count={134} />
                                                    <FilterSelect label={t('filters.labels.actuarialTools')} count={89} />
                                                    <FilterSelect label={t('filters.labels.regulations')} count={112} />
                                                </div>
                                            )}
                                        </div>

                                        {/* CARDS GRID - Different profiles for each mode */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6">
                                            {mode === 'banque' ? (
                                                bankProfiles.map((profile, index) => (
                                                    <CandidateCard
                                                        key={`bank-profile-${index}`}
                                                        initials={profileInitials.bank[index]}
                                                        image={profileImages.bank[index]}
                                                        name={profileNames.bank[index]}
                                                        title={profile.title}
                                                        location={index === 0 ? "Paris La Défense" : index === 1 ? "Lyon" : "Paris"}
                                                        tags={profile.tags}
                                                        exp={index === 0 ? t('cards.exp.senior') : index === 1 ? t('cards.exp.expert') : t('cards.exp.mid')}
                                                        status={index === 0 ? t('cards.status.freelance') : index === 1 ? t('cards.status.portage') : t('cards.status.cdi')}
                                                        rate={index === 0 ? "850 € HT" : index === 1 ? "1050 € HT" : "Négociable"}
                                                        skills={profile.skills}
                                                        certifications={index === 0 ? ["Certified Credit Analyst"] : index === 1 ? ["FRM", "CFA Level II"] : ["CGPC"]}
                                                        matchScore={index === 0 ? 94 : index === 1 ? 98 : 89}
                                                        isNew={index === 0}
                                                        online={index === 1}
                                                    />
                                                ))
                                            ) : (
                                                insuranceProfiles.map((profile, index) => (
                                                    <CandidateCard
                                                        key={`insurance-profile-${index}`}
                                                        initials={profileInitials.insurance[index]}
                                                        image={profileImages.insurance[index]}
                                                        name={profileNames.insurance[index]}
                                                        title={profile.title}
                                                        location={index === 0 ? "Île-de-France" : index === 1 ? "Lyon" : "Paris"}
                                                        tags={profile.tags}
                                                        exp={index === 0 ? t('cards.exp.expert') : index === 1 ? t('cards.exp.mid') : t('cards.exp.senior')}
                                                        status={index === 0 ? t('cards.status.portage') : index === 1 ? t('cards.status.freelance') : t('cards.status.available')}
                                                        rate={index === 0 ? "1100 € HT" : index === 1 ? "750 € HT" : "950 € HT"}
                                                        skills={profile.skills}
                                                        certifications={index === 0 ? ["IA", "FSAG"] : index === 1 ? ["CIP"] : ["IA", "CERA"]}
                                                        matchScore={index === 0 ? 96 : index === 1 ? 91 : 93}
                                                        isNew={index === 0}
                                                        online={index === 1}
                                                    />
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Dual CTA - For both roles */}
                <Reveal delay={400} duration={800}>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            as="a"
                            href="/devenir-consultant"
                            variant="outline"
                            className="pointer-events-auto w-full sm:w-auto"
                        >
                            <span>{t('cta.findMissions')}</span>
                            <ArrowIcon />
                        </Button>
                        <Button
                            as="a"
                            href="/sourcing-expert"
                            variant="primary"
                            className="pointer-events-auto w-full sm:w-auto"
                        >
                            <span>{t('cta.findExpert')}</span>
                            <ArrowIcon />
                        </Button>
                    </div>
                </Reveal>
            </div>

        </section >
    );
};
