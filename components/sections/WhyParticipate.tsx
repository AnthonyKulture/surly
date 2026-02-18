"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SurlyContactEmail } from "@/components/ui/ObfuscatedEmail";
import { useTranslations } from 'next-intl';

export const WhyParticipate = () => {
    const t = useTranslations('whyParticipate');

    // Note: benefits keys are b1, b2, b3
    const benefits = [
        {
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: t('benefits.b1.title'),
            description: t('benefits.b1.description'),
            highlight: t('benefits.b1.highlight')
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: t('benefits.b2.title'),
            description: t('benefits.b2.description'),
            highlight: t('benefits.b2.highlight')
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            title: t('benefits.b3.title'),
            description: t('benefits.b3.description'),
            highlight: t('benefits.b3.highlight')
        }
    ];

    const stats = [
        { number: t('stats.0.number'), label: t('stats.0.label') },
        { number: t('stats.1.number'), label: t('stats.1.label') },
        { number: t('stats.2.number'), label: t('stats.2.label') }
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-white">
            <div className="container">
                <SectionHeader
                    tag={t('tag')}
                    title={
                        <>
                            {t.rich('title', {
                                span: (chunks) => <span className="text-primary">{chunks}</span>,
                                br: () => <br />
                            })}
                        </>
                    }
                    centered
                />

                <Reveal delay={100} duration={1000}>
                    <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0">
                        {t.rich('subtitle', {
                            strong: (chunks) => <strong className="text-foreground">{chunks}</strong>
                        })}
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {benefits.map((benefit, i) => (
                        <Reveal key={i} delay={200 + (i * 150)} duration={800}>
                            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all h-full flex flex-col group">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-xl text-foreground mb-3 leading-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-grow">
                                    {benefit.description}
                                </p>

                                {/* Highlight Badge */}
                                <div className="mt-auto p-3 bg-accent/20 rounded-lg text-center border border-accent/30">
                                    <span className="text-sm font-bold text-primary">
                                        {benefit.highlight}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Additional Stats */}
                <Reveal delay={650} duration={800}>
                    <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl text-center shadow-lg">
                                <p className="text-3xl sm:text-4xl font-bold mb-2 text-accent">
                                    {stat.number}
                                </p>
                                <p className="text-sm font-medium opacity-90">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Final CTA */}
                <Reveal delay={750} duration={800}>
                    <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 rounded-2xl border border-primary/10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            {t('cta.title')}
                        </h3>
                        <p className="text-base sm:text-lg text-foreground-muted mb-6 max-w-2xl mx-auto">
                            {t('cta.description')}
                        </p>
                        <Button
                            as="a"
                            href="/formulaire-apport-affaires"
                            size="large"
                            className="shadow-lg hover:shadow-xl"
                        >
                            {t('cta.button')}
                        </Button>
                        <p className="text-xs text-foreground-muted mt-4">
                            {t('cta.questions')}{" "}
                            <SurlyContactEmail label={t('cta.contactUs')} className="text-primary hover:underline font-medium" />
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
