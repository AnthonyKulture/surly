"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';

export const MarketAnalysis = () => {
    const t = useTranslations('marketAnalysis');

    return (
        <section
            id="market-analysis"
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

                <Reveal delay={100} duration={1000}>
                    <p className="text-lg text-background/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                        {t('intro')}
                    </p>
                </Reveal>

                {/* The Comparison Grid */}
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 lg:gap-12 mb-20 items-stretch">
                    {/* Left: The Reality */}
                    <Reveal delay={200} duration={1000} className="h-full">
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-accent rounded-full"></span>
                                {t('reality.title')}
                            </h3>

                            <div className="flex flex-col gap-4 flex-1">
                                {[0, 1, 2].map((i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                        <h4 className="text-accent font-semibold mb-2">{t(`reality.items.${i}.title`)}</h4>
                                        <p
                                            className="text-background/70 text-sm leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: t.raw(`reality.items.${i}.description`) }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: The Diagnosis */}
                    <Reveal delay={300} duration={1000} className="h-full">
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                                {t('generalist.title')}
                            </h3>

                            <div className="flex flex-col gap-4 flex-1">
                                {/* Volume sans pertinence - with stats */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg relative flex-1 hover:bg-white/10 transition-colors flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-red-400 font-semibold mb-2">{t('generalist.items.0.title')}</h4>
                                        <p className="text-background/70 text-sm leading-relaxed mb-4">
                                            {t('generalist.items.0.description')}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-background/10 rounded border border-white/5 flex items-center justify-between gap-4 mt-2">
                                        <div className="flex flex-col">
                                            <div className="text-xl font-bold text-white">{t.raw('generalist.items.0.stats.results')}</div>
                                            <div className="text-sm font-medium text-white/90">{t.raw('generalist.items.0.stats.resultsLabel')}</div>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <div className="text-lg font-bold text-accent">{t.raw('generalist.items.0.stats.qualified')}</div>
                                            <div className="text-sm font-medium text-white/90">{t.raw('generalist.items.0.stats.qualifiedLabel')}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Approche de masse destructive */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-red-400 font-semibold mb-2">{t('generalist.items.1.title')}</h4>
                                    <p
                                        className="text-background/70 text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: t.raw('generalist.items.1.description') }}
                                    />
                                </div>

                                {/* Absence de validation */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-red-400 font-semibold mb-2">{t('generalist.items.2.title')}</h4>
                                    <p className="text-background/70 text-sm leading-relaxed">
                                        {t('generalist.items.2.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Conclusion / Surly Context */}
                <Reveal delay={400} duration={1000}>
                    <div className="relative mt-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center overflow-hidden">
                        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {t('conclusion.title')}
                            </h3>
                            <p className="text-lg text-background/80 leading-relaxed">
                                {t('conclusion.description')}
                            </p>
                            <div className="pt-4 flex flex-wrap justify-center gap-4 text-sm font-medium text-background/60">
                                {[0, 1, 2].map((i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                        {t(`conclusion.badges.${i}`)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Dual CTAs */}
                <Reveal delay={500} duration={1000}>
                    <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
                        {/* CTA Client */}
                        <div className="bg-white/10 border border-white/20 p-8 rounded-2xl text-center hover:bg-white/15 transition-all group">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {t('ctaClient.title')}
                            </h3>
                            <p className="text-background/80 mb-6 leading-relaxed">
                                {t('ctaClient.description')}
                            </p>
                            <Button
                                as="a"
                                href="/sourcing-expert"
                                variant="white"
                                size="large"
                            >
                                <span>{t('ctaClient.button')}</span>
                                <ArrowIcon />
                            </Button>
                        </div>

                        {/* CTA Consultant */}
                        <div className="bg-white/10 border border-white/20 p-8 rounded-2xl text-center hover:bg-white/15 transition-all group">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {t('ctaConsultant.title')}
                            </h3>
                            <p className="text-background/80 mb-6 leading-relaxed">
                                {t('ctaConsultant.description')}
                            </p>
                            <Button
                                as="a"
                                href="/devenir-consultant"
                                variant="white"
                                size="large"
                            >
                                <span>{t('ctaConsultant.button')}</span>
                                <ArrowIcon />
                            </Button>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};
