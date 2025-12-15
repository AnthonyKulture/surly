import { cn } from "@/lib/utils";
import React, { memo } from "react";

export interface FilterSelectProps {
    label: string;
    count?: number;
    active?: boolean;
}

export const FilterSelect = memo(({ label, count, active }: FilterSelectProps) => (
    <div className={cn(
        "border rounded-md px-3 py-2 text-sm flex justify-between items-center transition-all cursor-default",
        active
            ? "bg-primary/5 border-primary/30 text-primary font-semibold"
            : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
    )}>
        <span className="text-xs">{label}</span>
        <div className="flex items-center gap-2">
            {count && <span className="text-xs font-bold text-gray-400">{count}</span>}
            <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
    </div>
));

FilterSelect.displayName = "FilterSelect";
