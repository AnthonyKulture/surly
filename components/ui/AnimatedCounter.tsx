"use client";

import { useCounter } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  target,
  duration = 1500,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) => {
  const { ref, count } = useCounter(target, duration);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

interface StatTickerProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  className?: string;
}

export const StatTicker = ({
  value,
  suffix = "",
  label,
  description,
  className,
}: StatTickerProps) => {
  const { ref, count } = useCounter(value, 2000);

  return (
    <div className={cn("text-center", className)}>
      <div className="flex items-baseline justify-center gap-1 mb-sm">
        <span
          ref={ref}
          className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-accent leading-none tabular-nums"
        >
          {count.toLocaleString()}
        </span>
        {suffix && (
          <span className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-accent opacity-70">
            {suffix}
          </span>
        )}
      </div>
      <span className="block text-body font-semibold text-background mb-xs">
        {label}
      </span>
      {description && (
        <p className="text-micro text-background/60 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

