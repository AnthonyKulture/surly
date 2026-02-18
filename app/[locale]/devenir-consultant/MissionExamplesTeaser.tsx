"use client";

import { useTranslations } from 'next-intl';

export const MissionExamplesTeaser = () => {
    const t = useTranslations('consultantPage.missionExamples');

    return (
        <section className="py-12 sm:py-16 bg-gray-50">
            <div className="container max-w-4xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {t('title')}
                </h2>
                <p className="text-base text-foreground-muted mb-6 max-w-2xl mx-auto">
                    {t('description')}
                </p>
                <a
                    href="/missions-exemples"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
                >
                    {t('link')}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};
