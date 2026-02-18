"use client";

import { PageHero } from "@/components/ui/PageHero";
import { useTranslations } from 'next-intl';

export const PartnersHero = () => {
    const t = useTranslations('partnersPage');

    return (
        <PageHero
            badge={t('hero.badge')}
            title={
                <>
                    {t.rich('hero.title', {
                        span: (chunks) => <span className="text-primary block mt-1">{chunks}</span>
                    })}
                </>
            }
            subtitle={t('hero.subtitle')}
        />
    );
};
