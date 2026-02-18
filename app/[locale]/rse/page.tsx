import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { RSEHero } from "@/components/sections/RSEHero";
import { FundamentalCommitments } from "@/components/sections/FundamentalCommitments";
import { ResponsiblePractices } from "@/components/sections/ResponsiblePractices";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'rsePage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        keywords: ["rse assurance", "banque durable", "numérique responsable", "french tech", "achats responsables", "conformité bancaire", "éthique recrutement"],
        alternates: {
            canonical: "https://surly.fr/rse",
        },
    };
}

export default async function RSE({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main>
                {/* Section 1: Hero */}
                <RSEHero />

                {/* Section 2: 4 Fundamental Commitments */}
                <FundamentalCommitments />

                {/* Section 3: Responsible Practices (Purchasing, French Tech, Digital, Ethics, Well-being) */}
                <ResponsiblePractices />
            </main>
            <Footer />
        </>
    );
}
