"use client";

import { PageHero } from "@/components/ui/PageHero";
import { useTranslations } from 'next-intl';

export const ExpertSourcingHero = () => {
    const t = useTranslations('sourcingExpertPage.hero');

    return (
        <PageHero
            badge={t('badge')}
            title={
                <>
                    {t('titleLine1')}
                    <span className="text-primary block mt-1">{t('titleLine2')}</span>
                </>
            }
            subtitle={
                <>
                    {t.rich('subtitle', {
                        strong: (chunks) => <strong className="text-foreground font-semibold">{chunks}</strong>
                    })}
                </>
            }
        />
    );
};
