"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslations } from 'next-intl';

export const CompensationFlexibility = () => {
    const t = useTranslations('consultantPage.compensation');

    const icons = [
        <svg key="tjm" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="sab" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        <svg key="both" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-white">
            <div className="container">
                <SectionHeader
                    tag={t('tag')}
                    title={
                        <>
                            {t('titleLine1')}
                            <br />
                            <span className="text-primary">{t('titleLine2')}</span>
                        </>
                    }
                    subtitle={t('subtitle')}
                    centered
                />

                <div className="grid tablet:grid-cols-3 gap-5 tablet:gap-6 laptop:gap-8 max-w-6xl mx-auto mb-12">
                    {[0, 1, 2].map((i) => (
                        <Reveal key={i} delay={200 + (i * 150)} duration={800}>
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all h-full flex flex-col group">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    {icons[i]}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-xl text-foreground mb-3 leading-tight">
                                    {t(`options.${i}.title`)}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    {t(`options.${i}.description`)}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Reassurance */}
                <Reveal delay={650} duration={800}>
                    <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 rounded-2xl border border-primary/10 max-w-3xl mx-auto">
                        <p
                            className="text-base sm:text-lg text-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t.raw('reassurance') }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
