"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export const FundamentalCommitments = () => {
    const t = useTranslations('fundamentalCommitments');

    const commitments = [
        {
            number: "01",
            title: t('commitments.c1.title'),
            description: t('commitments.c1.description'),
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="14" width="36" height="24" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 22h36" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="14" cy="30" r="2" fill="currentColor" />
                    <path d="M20 30h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            number: "02",
            title: t('commitments.c2.title'),
            description: t('commitments.c2.description'),
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="24" cy="24" r="20" />
                    <path d="M24 4v40M4 24h40" strokeLinecap="round" />
                    <path d="M10 10c8 8 8 20 0 28M38 10c-8 8-8 20 0 28" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            number: "03",
            title: t('commitments.c3.title'),
            description: t('commitments.c3.description'),
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="24" cy="14" r="6" />
                    <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
                    <circle cx="38" cy="18" r="4" />
                    <circle cx="10" cy="18" r="4" />
                    <path d="M32 38c0-3.314-2.686-6-6-6M16 38c0-3.314 2.686-6 6-6" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            number: "04",
            title: t('commitments.c4.title'),
            description: t('commitments.c4.description'),
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M24 4L8 10v12c0 9.941 6.477 18.718 15.5 21.79a2 2 0 001 0C33.523 40.718 40 31.941 40 22V10L24 4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            features: [
                t('commitments.c4.features.0'),
                t('commitments.c4.features.1'),
                t('commitments.c4.features.2'),
            ],
        },
    ];

    return (
        <section
            id="commitments"
            className="relative py-24 lg:py-32 bg-primary text-background overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial-dark pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag={t('tag')}
                    title={
                        <>
                            {t.rich('title', {
                                br: () => <br />,
                                span: (chunks) => <span className="text-accent">{chunks}</span>
                            })}
                        </>
                    }
                    light
                    centered
                />

                <Reveal delay={100} duration={800}>
                    <p className="text-center text-lg text-background/80 max-w-3xl mx-auto mb-16 leading-relaxed">
                        {t('subtitle')}
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
                    {commitments.map((commitment, index) => (
                        <CommitmentCard
                            key={commitment.number}
                            commitment={commitment}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CommitmentCardProps {
    commitment: any; // Using any for simplicity as structure is consistent but diverse
    index: number;
}

const CommitmentCard = ({ commitment, index }: CommitmentCardProps) => {
    return (
        <Reveal
            delay={index * 100}
            duration={800}
            className="h-full"
        >
            <div
                className={cn(
                    "relative p-8 rounded-xl transition-all duration-300 h-full flex flex-col",
                    "bg-white/5 border border-white/10 hover:bg-white/10",
                    "shadow-sm hover:shadow-lg hover:-translate-y-1"
                )}
            >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 py-1 px-3 bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {commitment.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 p-3 bg-white/10 text-white rounded-xl mb-6 flex items-center justify-center">
                    {commitment.icon}
                </div>

                <h3 className="text-xl font-bold leading-tight mb-3 text-white">
                    {commitment.title}
                </h3>

                <p className="text-sm text-background/70 leading-relaxed mb-6 flex-grow">
                    {commitment.description}
                </p>

                {/* Features (for commitment 4) */}
                {commitment.features && (
                    <div className="flex flex-col gap-2 mt-auto">
                        {commitment.features.map((feature: string) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-8 h-8 flex items-center justify-center bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-colors rounded-lg flex-shrink-0">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-background/70 group-hover:text-white transition-colors">{feature}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Reveal>
    );
};
