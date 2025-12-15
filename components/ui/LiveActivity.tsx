"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const activities = [
    "Jean vient de recruter un Expert IFRS 17",
    "Marie a trouvé son Consultant Solvabilité II",
    "Thomas a rejoint la plateforme en tant qu'Actuaire",
    "Sophie vient de poster une mission Bâle III",
    "Laurent a validé un profil Risk Manager",
];

export const LiveActivity = () => {
    const [currentActivity, setCurrentActivity] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show first activity after 3 seconds
        const showTimer = setTimeout(() => setIsVisible(true), 3000);

        // Rotate activities every 8 seconds
        const rotateTimer = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentActivity((prev) => (prev + 1) % activities.length);
                setIsVisible(true);
            }, 500);
        }, 8000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(rotateTimer);
        };
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-8 left-8 z-50 max-w-sm transition-all duration-500",
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            )}
        >
            <div className="flex items-start gap-3 p-4 bg-background border border-primary/20 rounded-lg shadow-lg backdrop-blur-sm">
                {/* Icon */}
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-accent/20 text-primary rounded-full">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground leading-snug">
                        {activities[currentActivity]}
                    </p>
                    <span className="text-xs text-foreground/50 mt-1 block">Il y a quelques instants</span>
                </div>

                {/* Close button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-foreground/40 hover:text-foreground/70 transition-colors"
                    aria-label="Fermer"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
