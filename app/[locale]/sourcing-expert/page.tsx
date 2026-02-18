import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ExpertSourcingHero } from "@/components/sections/ExpertSourcingHero";
import { ServiceOptions } from "@/components/sections/ServiceOptions";
import { Piliers } from "@/components/sections/Piliers";
import { Experts } from "@/components/sections/Experts";
import { ExpertSourcingCTA } from "@/components/sections/ExpertSourcingCTA";
import { KeywordsCarousel } from "@/components/ui/KeywordsCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from "next";
import { ExpertisesSection } from "./ExpertisesSection";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'sourcingExpertPage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: ["recrutement expert banque", "chasseur de tête assurance", "cabinet recrutement bancaire", "sourcing freelance finance", "assistance technique banque", "profils ifrs17"],
        alternates: {
            canonical: "https://surly.fr/sourcing-expert",
        },
    };
}

export default async function SourcingExpert({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main>
                {/* 1. Hero Section */}
                <ExpertSourcingHero />

                {/* 2. Service Options - Cabinet vs Plateforme */}
                <ServiceOptions />

                {/* 3. Expertises Section */}
                <ExpertisesSection />

                {/* 4. Piliers - Why Surly? */}
                <Piliers />

                {/* 5. Track Record - Success Stories */}
                <SuccessStories />

                {/* 6. Experts vedettes */}
                <Experts />

                {/* 7. Final CTA Section */}
                <ExpertSourcingCTA />
            </main>
            <Footer />
        </>
    );
}
