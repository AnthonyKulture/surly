"use client";

import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Button } from "@/components/ui/Button";

interface PageHeroProps {
    badge?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    cta?: {
        text: string;
        href: string;
        variant?: "primary" | "white";
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
    highlight?: ReactNode;
}

/**
 * Unified PageHero component for all secondary pages
 * Used on: pourquoi-surly, devenir-consultant, sourcing-expert, partenaires-avantages, apport-affaires, faq
 */
export const PageHero = ({
    badge,
    title,
    subtitle,
    cta,
    secondaryCta,
    highlight,
}: PageHeroProps) => {
    return (
        <section
            id="hero"
            className="relative w-full min-h-[65vh] sm:min-h-[65vh] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            <HeroBackground />
            <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4 max-w-5xl">

                {/* Badge */}
                {badge && (
                    <Reveal delay={0} duration={600} direction="down">
                        <div className="mb-5 sm:mb-6 w-full text-center">
                            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                                <span className="text-xs sm:text-sm font-medium text-primary">
                                    {badge}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                )}

                {/* Title - Smaller on mobile to prevent orphan words */}
                <Reveal delay={100} duration={800}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-foreground text-center mb-4 sm:mb-5 tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto">
                        {title}
                    </h1>
                </Reveal>

                {/* Highlight Block (optional - for special content like commission) */}
                {highlight && (
                    <Reveal delay={150} duration={800}>
                        <div className="mb-5 sm:mb-6">
                            {highlight}
                        </div>
                    </Reveal>
                )}

                {/* Subtitle - Centered on all screen sizes */}
                {subtitle && (
                    <Reveal delay={200} duration={800}>
                        <p className="text-base sm:text-lg md:text-xl text-foreground-muted text-center max-w-3xl mx-auto font-normal leading-relaxed px-4 sm:px-0">
                            {subtitle}
                        </p>
                    </Reveal>
                )}

                {/* CTAs */}
                {(cta || secondaryCta) && (
                    <Reveal delay={300} duration={800}>
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                            {cta && (
                                <Button
                                    as="a"
                                    href={cta.href}
                                    variant={cta.variant || "primary"}
                                    size="large"
                                    className="min-w-[200px]"
                                >
                                    {cta.text}
                                </Button>
                            )}
                            {secondaryCta && (
                                <a
                                    href={secondaryCta.href}
                                    className="text-sm text-foreground-muted hover:text-primary font-medium underline-offset-4 hover:underline transition-colors duration-200"
                                >
                                    {secondaryCta.text}
                                </a>
                            )}
                        </div>
                    </Reveal>
                )}

            </div>
        </section>
    );
};
