"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface MegaMenuSection {
    title: string;
    abstract: string;
    href: string;
}

// Sections pour les clients / entreprises
const clientSections: MegaMenuSection[] = [
    {
        title: "Pourquoi Surly ?",
        abstract: "Découvrez comment Surly révolutionne le sourcing d'experts",
        href: "/pourquoi-surly",
    },
    {
        title: "Sourcing d'expert",
        abstract: "Grands comptes et cabinets : découvrez nos solutions pour recruter vos talents",
        href: "/sourcing-expert",
    },
    {
        title: "Conformité, RSE et Sécurité",
        abstract: "Nos engagements pour un recrutement responsable",
        href: "/rse",
    },
];

// Sections pour les consultants
const consultantSections: MegaMenuSection[] = [
    {
        title: "Trouver des missions et postes",
        abstract: "Consultants et experts : accédez aux meilleures missions freelance et postes salariés du secteur bancassurance",
        href: "/devenir-consultant",
    },
    {
        title: "Programme apport d'affaires",
        abstract: "Partagez les opportunités que vous ne pouvez réaliser et percevez une rémunération",
        href: "/apport-affaires",
    },
    {
        title: "Partenaires et Avantages",
        abstract: "Découvrez nos partenaires et les avantages exclusifs réservés à nos membres",
        href: "/partenaires-avantages",
    },
];

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    showAnnouncementBar?: boolean;
}

export const MegaMenu = ({ isOpen, onClose, showAnnouncementBar = true }: MegaMenuProps) => {
    if (!isOpen) return null;

    // Dynamic top position based on announcement bar
    const topPosition = showAnnouncementBar ? 'top-[120px]' : 'top-[80px]';

    return (
        <>
            {/* Backdrop - visible uniquement sur desktop */}
            <div
                className="hidden laptop:block fixed inset-0 bg-black/20 z-[999] transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Mega Menu Content - visible uniquement sur desktop */}
            <div className={`hidden laptop:block fixed left-0 right-0 ${topPosition} z-[1000] bg-white border-b border-primary/10 shadow-xl`}>
                <div className="max-w-[1200px] mx-auto px-6 py-8">
                    {/* Two column layout: Clients | Consultants */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-6">
                        {/* Colonne Clients / Entreprises */}
                        <div className="flex flex-col">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 px-1 flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Pour les entreprises
                            </h3>
                            <div className="grid grid-rows-3 gap-3 flex-1 auto-rows-fr">
                                {clientSections.map((section, index) => (
                                    <a
                                        key={section.href}
                                        href={section.href}
                                        onClick={onClose}
                                        className="group relative p-4 rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/[0.02] hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col min-h-[100px] h-full"
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                        }}
                                    >
                                        <div className="relative flex-1 flex flex-col">
                                            <h4 className="text-sm font-bold text-primary mb-1.5 group-hover:text-primary-600 transition-colors">
                                                {section.title}
                                            </h4>
                                            <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2">
                                                {section.abstract}
                                            </p>
                                        </div>

                                        {/* Hover arrow */}
                                        <svg
                                            className="absolute bottom-3 right-3 w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Séparateur vertical - visible seulement sur XL */}
                        <div className="hidden xl:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

                        {/* Colonne Consultants */}
                        <div className="flex flex-col">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 px-1 flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Pour les consultants
                            </h3>
                            <div className="grid grid-rows-3 gap-3 flex-1 auto-rows-fr">
                                {consultantSections.map((section, index) => (
                                    <a
                                        key={section.href}
                                        href={section.href}
                                        onClick={onClose}
                                        className="group relative p-4 rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/[0.02] hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col min-h-[100px]"
                                        style={{
                                            animationDelay: `${(index + clientSections.length) * 50}ms`,
                                        }}
                                    >
                                        <div className="relative flex-1 flex flex-col">
                                            <h4 className="text-sm font-bold text-primary mb-1.5 group-hover:text-primary-600 transition-colors">
                                                {section.title}
                                            </h4>
                                            <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2">
                                                {section.abstract}
                                            </p>
                                        </div>

                                        {/* Hover arrow */}
                                        <svg
                                            className="absolute bottom-3 right-3 w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
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
                            {/* Animated gradient background with lime accent */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/20 to-primary opacity-0 group-hover/urgent:opacity-100 transition-opacity duration-300" />

                            <span className="relative flex items-center justify-center gap-2 text-xs">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                                Besoin urgent ?
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
                                <svg
                                    className="w-4 h-4 group-hover/pdf:scale-110 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                Plaquette Présentation (PDF)
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
