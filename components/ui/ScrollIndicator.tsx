"use client";

import { motion } from "framer-motion";

export const ScrollIndicator = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center gap-2 cursor-pointer mb-16 md:mb-8"
            onClick={() => {
                const constats = document.getElementById('constat');
                if (constats) {
                    constats.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            <span className="text-[11px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/70 mb-2">
                Découvrir
            </span>
            <div className="w-[30px] h-[50px] border-2 border-primary/30 rounded-full flex justify-center p-2 bg-white/50 backdrop-blur-sm shadow-sm">
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                    className="w-1.5 h-1.5 bg-primary rounded-full mb-1"
                />
            </div>
        </motion.div>
    );
};
