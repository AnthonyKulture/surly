"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingWordsProps {
    words: string[];
    className?: string;
    interval?: number;
}

export const RotatingWords = ({
    words,
    className,
    interval = 1500
}: RotatingWordsProps) => {
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Set mounted to true after initial render
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return; // Don't start rotation until mounted

        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words.length, interval, mounted]);

    return (
        <div className={cn("inline-flex items-center", className)} aria-label={`Votre expertise en ${words[index]} mérite les meilleures opportunités`}>
            <span className="mr-1 sm:mr-1.5 whitespace-nowrap text-[10px] sm:text-xs">Votre expertise en</span>

            {/* Animated container with dynamic width */}
            <div className="relative inline-flex h-[1.5em] overflow-hidden align-middle">
                <motion.div
                    className="relative flex items-center h-full"
                    layout
                    transition={{ duration: 0.5, ease: "circOut" }}
                    style={{ width: "auto" }} // Dynamic width based on content
                >
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={words[index]}
                            initial={mounted ? { y: "100%" } : { y: "0%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "-100%" }}
                            transition={{
                                y: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute left-0 top-0 bottom-0 flex items-center whitespace-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 px-1"
                        >
                            {words[index]}
                        </motion.span>
                        {/* Invisible duplicate to force container width */}
                        <span className="invisible font-bold px-1 flex items-center h-full">{words[index]}</span>
                    </AnimatePresence>
                </motion.div>
            </div>

            <span className="ml-1 sm:ml-1.5 whitespace-nowrap text-[10px] sm:text-xs hidden sm:inline">mérite les meilleures opportunités</span>
        </div>
    );
};
