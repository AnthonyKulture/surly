import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhySurlyHero } from "@/components/sections/WhySurlyHero";
import { MarketAnalysis } from "@/components/sections/MarketAnalysis";
import { Piliers } from "@/components/sections/Piliers";
import { Contact } from "@/components/sections/Contact";
import { FAQHighlights } from "@/components/sections/FAQHighlights";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from "next";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'whySurlyPage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: ["expertise bancaire", "pourquoi surly", "différence cabinet recrutement", "plateforme freelance spécialisée", "valeurs surly"],
        alternates: {
            canonical: "https://surly.fr/pourquoi-surly",
        },
    };
}

export default async function PourquoiSurly({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main>
                {/* Section 1: Hero - Redesigned to match homepage */}
                <WhySurlyHero />

                {/* Section 2: Market Analysis - No changes */}
                <MarketAnalysis />

                {/* Section 3: Les 3 Piliers - Copied from homepage */}
                <Piliers />

                {/* FAQ Highlights */}
                <FAQHighlights />

                {/* Section 4: Contact - Added as requested */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
