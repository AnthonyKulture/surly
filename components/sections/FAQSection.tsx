"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import type { FAQItem } from "@/lib/faq-data";

interface FAQCategoryProps {
    title: string;
    icon: React.ReactNode;
    items: FAQItem[];
    defaultOpen?: boolean;
}

const FAQAccordionItem = ({
    item,
    isOpen,
    onToggle,
    index,
}: {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}) => {
    return (
        <Reveal delay={50 + index * 30} duration={500}>
            <div
                className={cn(
                    "group transition-all duration-300",
                    index > 0 && "border-t border-gray-100/80"
                )}
            >
                <button
                    onClick={onToggle}
                    className="w-full flex items-start justify-between py-5 text-left transition-colors"
                    aria-expanded={isOpen}
                >
                    <span
                        className={cn(
                            "text-[15px] sm:text-base font-medium leading-relaxed pr-6 transition-colors",
                            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                        )}
                    >
                        {item.question}
                    </span>
                    <div
                        className={cn(
                            "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300",
                            isOpen
                                ? "bg-primary text-white rotate-180"
                                : "bg-primary/5 text-primary group-hover:bg-primary/10"
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
                        <p className="text-foreground-muted leading-relaxed pb-5 text-sm pr-8">
                            {item.answer}
                        </p>
                        {item.link && (
                            <div className="pb-5">
                                <Link
                                    href={item.link.url}
                                    className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1.5"
                                >
                                    {item.link.text}
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export const FAQCategory = ({ title, icon, items, defaultOpen = false }: FAQCategoryProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ? 0 : null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {/* Category Header */}
            <Reveal delay={0} duration={500}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                        {icon}
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                        {title}
                    </h2>
                </div>
            </Reveal>

            {/* FAQ Items Container */}
            <div className="bg-white rounded-xl border border-primary/5 px-5 sm:px-6">
                {items.map((item, index) => (
                    <FAQAccordionItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

// Icons for categories - Refined, minimal style
export const ClientIcon = () => (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

export const ConsultantIcon = () => (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const GeneralIcon = () => (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
