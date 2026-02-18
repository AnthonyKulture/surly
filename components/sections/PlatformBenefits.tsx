"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from 'next-intl';

const BENEFIT_KEYS = ['qualified', 'matching', 'expertise', 'productivity'] as const;
const NUMBERS = ['01', '02', '03', '04'];

export const PlatformBenefits = () => {
    const t = useTranslations('home');

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container">
                <SectionHeader
                    tag={t('platformBenefits.tag')}
                    title={
                        <>{t.rich('platformBenefits.title', {
                            br: () => <br />,
                            primary: (chunks) => <span className="text-primary">{chunks}</span>
                        })}</>
                    }
                    centered
                />

                <Reveal delay={100} duration={800}>
                    <p className="text-base sm:text-lg text-foreground-muted text-center max-w-2xl mx-auto mb-12 sm:mb-14 leading-relaxed">
                        {t('platformBenefits.expertSubtitle')}
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {BENEFIT_KEYS.map((key, i) => (
                        <Reveal key={key} delay={i * 80} duration={600}>
                            <div className="group relative p-6 rounded-xl bg-white border border-gray-100 h-full flex flex-col hover:border-primary/20 hover:shadow-md transition-all duration-300">

                                {/* Number */}
                                <span className="text-[10px] font-semibold text-primary/60 tracking-wider mb-4">
                                    {NUMBERS[i]}
                                </span>

                                {/* Title */}
                                <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-2 leading-snug">
                                    {t(`platformBenefits.items.${key}.title`)}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-foreground-muted leading-relaxed mb-5 flex-grow">
                                    {t(`platformBenefits.items.${key}.desc`)}
                                </p>

                                {/* Stat */}
                                <div className="pt-4 border-t border-gray-50">
                                    <span className="text-base sm:text-lg font-bold text-primary">
                                        {t(`platformBenefits.items.${key}.stat`)}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
