"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface Partner {
    name: string;
    logo: string;
    description: string;
    features: string[];
    benefit: string;
}

export const PartnersGrid = () => {
    const t = useTranslations('partnersGrid');
    const partners = t.raw('partners') as Partner[];

    return (
        <section
            id="partners-grid"
            className="relative py-20 lg:py-24 bg-background-off overflow-hidden"
        >
            <div className="container relative z-[1]">
                <SectionHeader
                    tag={t('tag')}
                    title={
                        <>
                            {t.rich('title', {
                                br: () => <br />,
                                span: (chunks) => <span className="text-primary">{chunks}</span>
                            })}
                        </>
                    }
                    subtitle={t('subtitle')}
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={partner.name}
                            partner={partner}
                            index={index}
                            benefitLabel={t('benefitLabel')}
                            ctaLabel={t('cta')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface PartnerCardProps {
    partner: Partner;
    index: number;
    benefitLabel: string;
    ctaLabel: string;
}

const PartnerCard = ({ partner, index, benefitLabel, ctaLabel }: PartnerCardProps) => {
    return (
        <Reveal
            delay={index * 100}
            duration={800}
            className="h-full"
        >
            <div
                className={cn(
                    "relative p-6 md:p-8 rounded-xl transition-all duration-300 h-full flex flex-col",
                    "bg-white border-2 border-primary/5 hover:border-primary/20",
                    "shadow-sm hover:shadow-lg hover:-translate-y-1"
                )}
            >
                {/* Logo */}
                <div className="mb-6 flex items-center justify-center h-16 bg-gray-50 rounded-lg p-3">
                    <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={200}
                        height={64}
                        className="object-contain"
                    />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold leading-tight mb-3 text-foreground text-center">
                    {partner.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    {partner.description}
                </p>

                {/* Features */}
                {partner.features.length > 0 && (
                    <div className="mb-4 flex-grow">
                        <ul className="space-y-2">
                            {partner.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-foreground-muted">
                                    <svg
                                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Benefit Highlight */}
                <div className="mt-auto mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                    <div className="flex items-start gap-2">
                        <svg
                            className="w-5 h-5 text-accent-dim flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div>
                            <p className="text-xs font-semibold text-primary mb-1">
                                {benefitLabel}
                            </p>
                            <p className="text-xs text-foreground-muted leading-relaxed">
                                {partner.benefit}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Button
                    as="a"
                    href="http://app.surly.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="default"
                    className="w-full"
                >
                    <span>{ctaLabel}</span>
                    <ArrowIcon />
                </Button>
            </div>
        </Reveal>
    );
};
