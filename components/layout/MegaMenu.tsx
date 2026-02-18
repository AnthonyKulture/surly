"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    showAnnouncementBar?: boolean;
}

export const MegaMenu = ({ isOpen, onClose, showAnnouncementBar = true }: MegaMenuProps) => {
    const t = useTranslations('navigation.megaMenu');
    const tButtons = useTranslations('navigation.buttons');

    if (!isOpen) return null;

    const topPosition = showAnnouncementBar ? 'top-[120px]' : 'top-[80px]';

    const clientSections = [
        {
            title: t('companies.sourcing'),
            abstract: t('companies.sourcingDesc'),
            href: "/sourcing-expert",
        },
        {
            title: t('companies.compliance'),
            abstract: t('companies.complianceDesc'),
            href: "/rse",
        },
    ];

    const consultantSections = [
        {
            title: t('consultants.findMission'),
            abstract: t('consultants.findMissionDesc'),
            href: "/devenir-consultant",
        },
        {
            title: t('consultants.benefits'),
            abstract: t('consultants.benefitsDesc'),
            href: "/partenaires-avantages",
        },
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className="hidden tablet:block fixed inset-0 bg-black/20 z-[999] transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Mega Menu Content */}
            <div className={`hidden tablet:block fixed left-0 right-0 ${topPosition} z-[1000] bg-white border-b border-primary/10 shadow-xl`}>
                <div className="max-w-[1200px] mx-auto px-4 laptop:px-6 py-6 laptop:py-8">
                    <div className="grid grid-cols-2 gap-4 laptop:gap-8 mb-6">
                        {/* Companies Column */}
                        <div className="flex flex-col">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 px-1 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                {t('companies.title')}
                            </h3>

                            <div className="grid grid-rows-2 gap-3 flex-1 auto-rows-fr">
                                {clientSections.map((section, index) => (
                                    <a
                                        key={section.href}
                                        href={section.href}
                                        onClick={onClose}
                                        className="group relative p-3 laptop:p-4 rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/[0.02] hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col min-h-[80px] laptop:min-h-[100px] h-full"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="relative flex-1 flex flex-col">
                                            <h4 className="text-sm font-bold text-primary mb-1.5 group-hover:text-primary-600 transition-colors">
                                                {section.title}
                                            </h4>
                                            <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2">
                                                {section.abstract}
                                            </p>
                                        </div>
                                        <svg className="absolute bottom-3 right-3 w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Vertical separator */}
                        <div className="hidden tablet:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

                        {/* Consultants Column */}
                        <div className="flex flex-col">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 px-1 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                {t('consultants.title')}
                            </h3>
                            <div className="grid grid-rows-2 gap-3 flex-1 auto-rows-fr">
                                {consultantSections.map((section, index) => (
                                    <a
                                        key={section.href}
                                        href={section.href}
                                        onClick={onClose}
                                        className="group relative p-3 laptop:p-4 rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/[0.02] hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col min-h-[80px] laptop:min-h-[100px]"
                                        style={{ animationDelay: `${(index + clientSections.length) * 50}ms` }}
                                    >
                                        <div className="relative flex-1 flex flex-col">
                                            <h4 className="text-sm font-bold text-primary mb-1.5 group-hover:text-primary-600 transition-colors">
                                                {section.title}
                                            </h4>
                                            <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2">
                                                {section.abstract}
                                            </p>
                                        </div>
                                        <svg className="absolute bottom-3 right-3 w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highlighted CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-6 border-t border-primary/10">
                        <Button
                            as="a"
                            href="/ai"
                            variant="primary"
                            size="default"
                            className="relative overflow-hidden group/urgent w-full sm:w-auto sm:min-w-[200px]"
                            onClick={onClose}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/20 to-primary opacity-0 group-hover/urgent:opacity-100 transition-opacity duration-300" />
                            <span className="relative flex items-center justify-center gap-2 text-xs">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {t('urgentCTA')}
                            </span>
                        </Button>

                        <Button
                            as="a"
                            href="/documents/plaquette-surly.pdf"
                            variant="outline"
                            size="default"
                            className="w-full sm:w-auto sm:min-w-[200px] group/pdf hover:border-accent/40"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                        >
                            <span className="flex items-center justify-center gap-2 text-xs">
                                <svg className="w-4 h-4 group-hover/pdf:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {t('brochure')}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
