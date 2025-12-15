"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useIntersectionObserver";
import React from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    threshold?: number;
    triggerOnce?: boolean;
}

export const Reveal = ({
    children,
    className,
    delay = 0,
    duration = 800,
    direction = "up",
    threshold = 0.1,
    triggerOnce = true,
}: RevealProps) => {
    const { ref, shouldAnimate } = useScrollAnimation(delay); // useScrollAnimation handles the intersection logic

    // Base transition styles
    // We use inline styles for transition-duration and transition-delay to allow dynamic values
    // but we can also use Tailwind classes if we prefer a fixed set.
    // Given the requirements, we want "silky" feel so let's enforce the cubic-bezier here or via class.

    const getTransform = () => {
        switch (direction) {
            case "up":
                return "translate-y-8";
            case "down":
                return "-translate-y-8";
            case "left":
                return "translate-x-8";
            case "right":
                return "-translate-x-8";
            case "none":
                return "";
            default:
                return "translate-y-8";
        }
    };

    const hiddenState = `opacity-0 ${getTransform()}`;
    const visibleState = "opacity-100 translate-x-0 translate-y-0";

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-in-out-subtle will-change-[opacity,transform]",
                shouldAnimate ? visibleState : hiddenState,
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                // The delay is heavily handled by the hook (setting state after delay), 
                // but we can also add a CSS delay if we want purely CSS-based staggering controlled by props.
                // The hook method is safer for ensuring the element is actually in view before counting down.
            }}
        >
            {children}
        </div>
    );
};
