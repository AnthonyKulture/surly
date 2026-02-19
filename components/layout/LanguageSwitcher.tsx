'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useTransition, useState, useRef, useEffect } from 'react';

const languageConfig: Record<string, { flag: string; label: string }> = {
    fr: { flag: '🇫🇷', label: 'FR' },
    en: { flag: '🇬🇧', label: 'EN' },
    es: { flag: '🇪🇸', label: 'ES' },
    pt: { flag: '🇵🇹', label: 'PT' },
};

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLocaleChange = (newLocale: string) => {
        setIsOpen(false);
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const currentLang = languageConfig[locale];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none"
                aria-label="Select language"
            >
                <span className="text-lg leading-none">{currentLang?.flag}</span>
                <span>{currentLang?.label}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-background border border-border rounded-md shadow-lg py-1 z-50">
                    {routing.locales.map((cur) => (
                        <button
                            key={cur}
                            onClick={() => handleLocaleChange(cur)}
                            disabled={isPending}
                            className={`w-full text-left px-3 py-2 text-sm flex items-center space-x-2 hover:bg-muted transition-colors ${locale === cur ? 'bg-muted/50 font-medium' : ''
                                }`}
                        >
                            <span className="text-lg leading-none">{languageConfig[cur].flag}</span>
                            <span>{languageConfig[cur].label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
