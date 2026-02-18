import { PageHero } from "@/components/ui/PageHero";
import { useTranslations } from 'next-intl';

export const RSEHero = () => {
    const t = useTranslations('rsePage.hero');
    return (
        <PageHero
            badge={t('badge')}
            title={
                <>
                    {t.rich('title', {
                        span: (chunks) => <span className="text-primary">{chunks}</span>
                    })}
                </>
            }
            subtitle={
                <>
                    {t.rich('subtitle', {
                        strong: (chunks) => <strong className="text-foreground font-semibold">{chunks}</strong>
                    })}
                </>
            }
            highlight={
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-sm font-semibold text-primary">{t('highlight1')}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-sm font-semibold text-primary">{t('highlight2')}</span>
                    </div>
                </div>
            }
        />
    );
};
