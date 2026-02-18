import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BusinessReferralHero } from "@/components/sections/BusinessReferralHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'businessReferralPage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
    };
}

export default async function ApportAffaires({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main>
                {/* Section 1: Hero with 3% Commission */}
                <BusinessReferralHero />

                {/* Section 2: How It Works - 3 Steps */}
                <HowItWorks />

                {/* Section 3: Why Participate - Benefits */}
                <WhyParticipate />
            </main>
            <Footer />
        </>
    );
}
