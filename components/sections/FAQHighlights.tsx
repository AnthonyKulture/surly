"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

const FAQHighlightItem = ({
    question,
    answer,
    isOpen,
    onToggle,
    index,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}) => {
    return (
        <Reveal delay={100 + index * 50} duration={500}>
            <div
                className={cn(
                    "bg-white rounded-xl border-2 transition-all duration-300",
                    isOpen
                        ? "border-primary/20 shadow-lg"
                        : "border-primary/5 hover:border-primary/15 shadow-sm hover:shadow-md"
                )}
            >
                <button
                    onClick={onToggle}
                    className="w-full flex items-start justify-between p-5 text-left"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-start gap-3 pr-4">
                        {/* Category indicator */}
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span
                            className={cn(
                                "text-[15px] font-medium leading-relaxed transition-colors",
                                isOpen ? "text-primary" : "text-foreground"
                            )}
                        >
                            {question}
                        </span>
                    </div>
                    <div
                        className={cn(
                            "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300",
                            isOpen
                                ? "bg-primary text-white rotate-180"
                                : "bg-primary/5 text-primary"
                        )}
                    >
                        <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>
                <div
                    className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                >
                    <div className="overflow-hidden">
                        <p className="text-foreground-muted leading-relaxed px-5 pb-5 pl-10 text-sm">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export const FAQHighlights = () => {
    const t = useTranslations('home');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 lg:py-28 bg-[#FAFBFC] border-t border-primary/5">
            <div className="container">
                <SectionHeader
                    tag={t('faqHighlights.tag')}
                    title={
                        <span dangerouslySetInnerHTML={{ __html: t.raw('faqHighlights.title') }} />
                    }
                    centered
                />

                {/* FAQ Grid - 2 columns on desktop */}
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {FAQ_KEYS.map((key, index) => (
                        <FAQHighlightItem
                            key={key}
                            question={t(`faqHighlights.items.${key}.question`)}
                            answer={t(`faqHighlights.items.${key}.answer`)}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA */}
                <Reveal delay={400} duration={600}>
                    <div className="text-center mt-12">
                        <Button
                            as="a"
                            href="/faq"
                            variant="ghost"
                            size="large"
                        >
                            {t('faqHighlights.cta')}
                            <ArrowIcon />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
