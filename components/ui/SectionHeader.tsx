"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useIntersectionObserver";

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeader = ({
  tag,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) => {
  const { ref, shouldAnimate } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 mb-12 transition-all duration-300",
        centered && "text-center max-w-[540px] mx-auto",
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className
      )}
    >
      <div
        className={cn(
          "accent-line",
          centered && "mx-auto"
        )}
      />
      {/* Tag - Small and subtle */}
      <span
        className={cn(
          "inline-block py-1 px-3 border text-tag font-medium uppercase tracking-[0.12em] mb-4",
          light
            ? "border-white/20 text-background/80"
            : "border-primary/10 text-primary/70"
        )}
      >
        {tag}
      </span>
      {/* Title - Visibly larger than tag */}
      <h2
        className={cn(
          "font-sans text-section-title font-bold mb-4",
          light ? "text-background" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-sm",
          light ? "text-background/80" : "text-foreground-muted",
          centered && "max-w-md mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const SectionTag = ({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-block py-1 px-3 border text-tag font-medium uppercase tracking-[0.12em] mb-4",
      light
        ? "border-white/20 text-background/80"
        : "border-primary/10 text-primary/70",
      className
    )}
  >
    {children}
  </span>
);

