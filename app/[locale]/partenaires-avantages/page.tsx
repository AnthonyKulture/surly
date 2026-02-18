import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PartnersHero } from "@/components/sections/PartnersHero";
import { PartnersGrid } from "@/components/sections/PartnersGrid";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'partnersPage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
    };
}

export default async function PartnairesAvantages({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <PartnersHero />

                {/* Partners Grid Section */}
                <PartnersGrid />
            </main>
            <Footer />
        </>
    );
}
