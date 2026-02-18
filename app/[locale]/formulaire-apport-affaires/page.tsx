import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BusinessReferralForm } from "@/components/forms/BusinessReferralForm";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'referralFormPage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
    };
}

export default async function FormulaireApportAffaires({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'referralFormPage' });

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-24 sm:py-32 px-4">
                <div className="container max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-lg text-foreground-muted max-w-2xl mx-auto"
                            dangerouslySetInnerHTML={{
                                __html: t.raw('subtitle')
                                    .replace('<accent>', '<span class="text-primary font-bold">')
                                    .replace('</accent>', '</span>')
                            }}
                        />
                    </div>

                    {/* Form */}
                    <BusinessReferralForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
