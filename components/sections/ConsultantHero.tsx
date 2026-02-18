"use client";

import { PageHero } from "@/components/ui/PageHero";
import { useTranslations } from 'next-intl';

export const ConsultantHero = () => {
    const t = useTranslations('consultantPage.hero');

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
                    <span className="block mt-2 text-primary font-semibold">{t('subtitleHighlight')}</span>
                </>
            }
            cta={{
                text: t('ctaPrimary'),
                href: "https://app.surly.fr"
            }}
            secondaryCta={{
                text: t('ctaSecondary'),
                href: "#inscription"
            }}
        />
    );
};
