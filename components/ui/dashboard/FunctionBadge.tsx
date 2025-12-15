import { cn } from "@/lib/utils";
import React, { memo } from "react";

export interface FunctionBadgeProps {
    label: string;
    color: string;
}

export const FunctionBadge = memo(({ label, color }: FunctionBadgeProps) => {
    const colorClasses = {
        blue: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:shadow-blue-200/50",
        purple: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:border-purple-300 hover:shadow-purple-200/50",
        cyan: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 hover:shadow-cyan-200/50",
        pink: "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300 hover:shadow-pink-200/50",
        orange: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300 hover:shadow-orange-200/50",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-emerald-200/50",
        indigo: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-indigo-200/50",
    };

    return (
        <span className={cn(
            "px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 cursor-default",
            "hover:scale-105 hover:shadow-lg",
            colorClasses[color as keyof typeof colorClasses]
        )}>
            {label}
        </span>
    );
});

FunctionBadge.displayName = "FunctionBadge";
