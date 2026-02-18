"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

interface KeywordCardProps {
    skill: string;
    desc: string;
    variant: "light" | "green";
}

const KeywordCard = ({ skill, desc, variant }: KeywordCardProps) => (
    <div
        className={cn(
            "rounded-lg p-3 sm:p-4 transition-all shadow-sm min-w-[180px] sm:min-w-[200px]",
            variant === "light"
                ? "bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md"
                : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg shadow-md"
        )}
    >
        <p
            className={cn(
                "font-bold text-xs sm:text-sm mb-0.5 sm:mb-1",
                variant === "light" ? "text-foreground" : "text-white"
            )}
        >
            {skill}
        </p>
        <p
            className={cn(
                "text-[10px] sm:text-xs leading-relaxed",
                variant === "light" ? "text-foreground-muted" : "text-white/80"
            )}
        >
            {desc}
        </p>
    </div>
);

interface InfiniteRowProps {
    keywords: { skill: string; desc: string }[];
    direction?: "left" | "right";
    variant: "light" | "green";
}

const InfiniteRow = ({ keywords, direction = "left", variant }: InfiniteRowProps) => {
    // Duplicate keywords for seamless loop
    const duplicatedKeywords = [...keywords, ...keywords];

    return (
        <div className="relative overflow-hidden py-2">
            {/* Gradient masks for smooth fade effect */}
            <div
                className={cn(
                    "absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none",
                    variant === "light"
                        ? "bg-gradient-to-r from-white to-transparent"
                        : "bg-gradient-to-r from-primary to-transparent"
                )}
            />
            <div
                className={cn(
                    "absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none",
                    variant === "light"
                        ? "bg-gradient-to-l from-white to-transparent"
                        : "bg-gradient-to-l from-primary to-transparent"
                )}
            />

            <div
                className={cn(
                    "flex gap-3 sm:gap-4",
                    direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
                )}
                style={{
                    width: "fit-content"
                }}
            >
                {duplicatedKeywords.map((item, i) => (
                    <KeywordCard
                        key={`${item.skill}-${i}`}
                        skill={item.skill}
                        desc={item.desc}
                        variant={variant}
                    />
                ))}
            </div>
        </div>
    );
};

interface KeywordsCarouselProps {
    variant?: "light" | "green";
}

export const KeywordsCarousel = ({ variant = "light" }: KeywordsCarouselProps) => {
    const t = useTranslations('home');
    const row1 = t.raw('keywordsCarousel.row1') as { skill: string; desc: string }[];
    const row2 = t.raw('keywordsCarousel.row2') as { skill: string; desc: string }[];
    const row3 = t.raw('keywordsCarousel.row3') as { skill: string; desc: string }[];

    return (
        <div className="w-full space-y-3 sm:space-y-4 py-4 mb-8 sm:mb-12">
            {/* Row 1 - moves right */}
            <InfiniteRow keywords={row1} direction="right" variant={variant} />

            {/* Row 2 - moves left */}
            <InfiniteRow keywords={row2} direction="left" variant={variant} />

            {/* Row 3 - moves right */}
            <InfiniteRow keywords={row3} direction="right" variant={variant} />
        </div>
    );
};

// Backward compatibility export
export const KeywordsCarouselGreen = () => <KeywordsCarousel variant="green" />;
