'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';

export default function FrenchTechPopup() {
    const t = useTranslations('navigation.frenchTechPopup');
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        // Check if previously dismissed
        const dismissed = localStorage.getItem('surly_french_tech_popup_dismissed');

        // If user is on the article page, mark as dismissed and don't show
        if (pathname === '/blog/surly-rejoint-je-choisis-la-french-tech') {
            if (!dismissed) {
                localStorage.setItem('surly_french_tech_popup_dismissed', 'true');
            }
            return;
        }

        if (!dismissed) {
            // Appear after 10 seconds (increased from 2s)
            const appearTimer = setTimeout(() => {
                setIsVisible(true);
            }, 10000);

            return () => clearTimeout(appearTimer);
        }
    }, [pathname]);

    // Auto-dismiss after 40 seconds of visibility
    useEffect(() => {
        if (isVisible) {
            const dismissTimer = setTimeout(() => {
                setIsVisible(false);
            }, 40000);
            return () => clearTimeout(dismissTimer);
        }
    }, [isVisible]);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('surly_french_tech_popup_dismissed', 'true');
    };

    if (!isMounted) return null;

    return (
        <div
            className={`fixed z-40 transition-all duration-500 transform 
            left-4 right-4 bottom-24 md:left-4 md:right-auto md:bottom-4 md:w-auto
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
                }`}
        >
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-5 max-w-md flex items-center gap-5 group hover:scale-[1.02] transition-transform">
                <button
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-full p-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                    aria-label={t('close')}
                >
                    <X size={14} />
                </button>

                <div className="flex-shrink-0">
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden border border-gray-100">
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
                        {t('label')}
                    </p>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-3">
                        {t.rich('title', {
                            br: () => <br />
                        })}
                    </h3>
                    <Link
                        href="/blog/surly-rejoint-je-choisis-la-french-tech"
                        className="inline-block text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-red-600 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:brightness-110"
                        onClick={handleDismiss}
                    >
                        {t('cta')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
