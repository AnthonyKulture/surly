import { PageHero } from "@/components/ui/PageHero";
import { useTranslations } from 'next-intl';

export const BusinessReferralHero = () => {
    const t = useTranslations('businessReferralPage.hero');
    // Note: <accent> tag handling. JSON has <accent>3%</accent>.
    // t.rich handles tags. We just need to map them.

    return (
        <PageHero
            badge={t('badge')}
            title={t('title')}
            highlight={
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white px-6 sm:px-8 py-5 sm:py-6 rounded-2xl shadow-xl border-2 border-accent/20">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                        {t.rich('highlightAmount', {
                            accent: (chunks) => <span className="text-accent">{chunks}</span>
                        })}
                    </p>
                    <p className="text-sm mt-2 text-center text-white/90">
                        {t('highlightSub')}
                    </p>
                </div>
            }
            subtitle={
                <>
                    {t.rich('subtitle', {
                        strong: (chunks) => <strong className="text-foreground font-semibold">{chunks}</strong>
                    })}
                </>
            }
            cta={{
                text: t('cta'),
                href: "/formulaire-apport-affaires"
            }}
        />
    );
};
