'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleLocaleChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <div className="flex items-center space-x-2 text-sm font-medium">
            <button
                onClick={() => handleLocaleChange('fr')}
                disabled={isPending}
                className={`transition-colors ${locale === 'fr'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
            >
                FR
            </button>
            <span className="text-muted-foreground">|</span>
            <button
                onClick={() => handleLocaleChange('en')}
                disabled={isPending}
                className={`transition-colors ${locale === 'en'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
