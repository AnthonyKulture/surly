"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import {
    FAQCategory,
    ClientIcon,
    ConsultantIcon,
    GeneralIcon,
} from "@/components/sections/FAQSection";
import type { FAQItem } from "@/components/sections/FAQSection";
import { useTranslations } from 'next-intl';

export const FAQPageContent = () => {
    const t = useTranslations('faqPage');

    // Retrieve FAQ items from translations
    // t.raw() returns the underlying object/array from the JSON
    const clientsItems = t.raw('items.clients') as FAQItem[];
    const consultantsItems = t.raw('items.consultants') as FAQItem[];
    const generalItems = t.raw('items.general') as FAQItem[];

    return (
        <>
            {/* Hero Section - Custom compact hero for FAQ */}
            <section
                id="hero"
                className="relative w-full min-h-[40vh] sm:min-h-[55vh] md:min-h-[65vh] pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col items-center justify-center overflow-hidden bg-white"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 pattern-grid-large opacity-30 pointer-events-none" />

                <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4 max-w-5xl">
                    {/* Badge */}
                    <Reveal delay={0} duration={600} direction="down">
                        <div className="mb-5 sm:mb-6 w-full text-center">
                            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                                <span className="text-xs sm:text-sm font-medium text-primary">
                                    {t('badge')}
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Title */}
                    <Reveal delay={100} duration={800}>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-foreground text-center mb-4 sm:mb-5 tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto">
                            {t('titleLine1')}
                            <span className="text-primary block mt-1">{t('titleLine2')}</span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Quick Navigation Pills */}
            <section className="py-6 bg-white border-b border-primary/5">
                <div className="container">
                    <Reveal delay={100} duration={600}>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl mx-auto">
                            <a
                                href="#clients"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <ClientIcon />
                                <span>{t('categories.companies')}</span>
                            </a>
                            <a
                                href="#consultants"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <ConsultantIcon />
                                <span>{t('categories.consultants')}</span>
                            </a>
                            <a
                                href="#general"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <GeneralIcon />
                                <span>{t('categories.general')}</span>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQ Content - Clean background */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFC]">
                <div className="container max-w-3xl">
                    {/* Clients Section */}
                    <div id="clients" className="scroll-mt-28">
                        <FAQCategory
                            title={t('categories.companies')}
                            icon={<ClientIcon />}
                            items={clientsItems}
                            defaultOpen
                        />
                    </div>

                    {/* Consultants Section */}
                    <div id="consultants" className="scroll-mt-28 mt-16">
                        <FAQCategory
                            title={t('categories.consultants')}
                            icon={<ConsultantIcon />}
                            items={consultantsItems}
                        />
                    </div>

                    {/* General Section */}
                    <div id="general" className="scroll-mt-28 mt-16">
                        <FAQCategory
                            title={t('categories.general')}
                            icon={<GeneralIcon />}
                            items={generalItems}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section - Harmonized with site */}
            <section className="py-16 sm:py-20 bg-primary text-white">
                <div className="container max-w-3xl text-center">
                    <Reveal delay={0} duration={600}>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                            {t('cta.title')}
                        </h2>
                        <p className="text-base sm:text-lg opacity-80 max-w-3xl mx-auto mb-8 leading-relaxed">
                            {t('cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <Button
                                as="a"
                                href="/contact"
                                variant="white"
                                size="large"
                            >
                                {t('cta.contact')}
                                <ArrowIcon />
                            </Button>
                            <Button
                                as="a"
                                href="/ai"
                                variant="outline-light"
                                size="large"
                            >
                                {t('cta.ai')}
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
};
