import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultantHero } from "@/components/sections/ConsultantHero";
import { QuickRegistration } from "@/components/sections/QuickRegistration";
import { ExpertRequirements } from "@/components/sections/ExpertRequirements";
import { CompensationFlexibility } from "@/components/sections/CompensationFlexibility";
import { DualOpportunities } from "@/components/sections/DualOpportunities";
import { ConsultantFinalCTA } from "@/components/sections/ConsultantFinalCTA";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from "next";
import { MissionExamplesTeaser } from "./MissionExamplesTeaser";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'consultantPage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: ["mission freelance banque", "emploi assurance", "consultant bancaire", "freelance finance", "portage salarial banque", "tjm freelance assurance"],
        alternates: {
            canonical: "https://surly.fr/devenir-consultant",
        },
    };
}

export default async function DevenirConsultant({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main>
                {/* Section 1: Hero - Attention */}
                <ConsultantHero />

                {/* Section 2: Dual Opportunities - Interest */}
                <DualOpportunities />

                {/* Section 3: Compensation Flexibility - Desire */}
                <CompensationFlexibility />

                {/* Section 4: Quick Registration - Action Facilitée */}
                <QuickRegistration />

                {/* Section 5: Expert Requirements - Qualification Douce */}
                <ExpertRequirements />

                {/* Section 5.5: Mission Examples Teaser */}
                <MissionExamplesTeaser />

                {/* Section 6: Final CTA - Action Finale */}
                <ConsultantFinalCTA />
            </main>
            <Footer />
        </>
    );
}
