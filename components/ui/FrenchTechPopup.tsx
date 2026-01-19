'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function FrenchTechPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check if previously dismissed
        const dismissed = localStorage.getItem('surly_french_tech_popup_dismissed');
        if (!dismissed) {
            // Delay appearance for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('surly_french_tech_popup_dismissed', 'true');
    };

    if (!isMounted) return null;

    return (
        <div
            className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
                }`}
        >
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-4 max-w-sm flex items-center gap-4 group hover:scale-[1.02] transition-transform">
                <button
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-full p-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Fermer"
                >
                    <X size={14} />
                </button>

                <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-gray-100">
                        <Image
                            src="/french-tech-logo.jpg"
                            alt="Logo French Tech"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wider">
                        Annonce officielle
                    </p>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-2">
                        Surly rejoint l'initiative<br />"Je choisis la French Tech" 🇫🇷
                    </h3>
                    <Link
                        href="/blog/surly-rejoint-je-choisis-la-french-tech"
                        className="inline-block text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-red-600 px-3 py-1.5 rounded-full hover:shadow-lg transition-all duration-300 hover:brightness-110"
                        onClick={handleDismiss}
                    >
                        Lire l'article
                    </Link>
                </div>
            </div>
        </div>
    );
}
