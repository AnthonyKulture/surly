"use client";

import { PageHero } from "@/components/ui/PageHero";
import { useTranslations } from 'next-intl';

export const WhySurlyHero = () => {
    const t = useTranslations('whySurlyPage.hero');

    return (
        <PageHero
            badge={t('badge')}
            title={
                <>
                    Pourquoi <span className="text-primary">Surly</span> ?
                </>
            }
            subtitle={
                <>
                    {t.rich('subtitle', {
                        strong: (chunks) => <strong className="text-primary font-semibold">{chunks}</strong>
                    })}
                </>
            }
        />
    );
};
