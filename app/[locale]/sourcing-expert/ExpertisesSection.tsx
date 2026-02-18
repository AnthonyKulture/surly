"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { KeywordsCarousel } from "@/components/ui/KeywordsCarousel";
import { useTranslations } from 'next-intl';

export const ExpertisesSection = () => {
    const t = useTranslations('sourcingExpertPage.expertises');

    return (
        <section id="expertises" className="relative py-16 sm:py-20 lg:py-28 bg-white">
            <div className="container">
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
                    centered
                />

                <Reveal delay={100} duration={1000}>
                    <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                        {t('description')}
                    </p>
                </Reveal>

                {/* Keywords Carousel - Dynamic Effect */}
                <KeywordsCarousel />

                <Reveal delay={500} duration={800}>
                    <div className="text-center bg-white p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm">
                        <p
                            className="text-xs sm:text-sm text-foreground-muted leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t.raw('stats') }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
