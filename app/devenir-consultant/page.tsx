import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultantHero } from "@/components/sections/ConsultantHero";
import { QuickRegistration } from "@/components/sections/QuickRegistration";
import { ExpertRequirements } from "@/components/sections/ExpertRequirements";
import { CompensationFlexibility } from "@/components/sections/CompensationFlexibility";
import { DualOpportunities } from "@/components/sections/DualOpportunities";
import { ConsultantFinalCTA } from "@/components/sections/ConsultantFinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Missions Freelance & Emploi Banque Assurance | Rejoindre Surly",
    description: "Accédez aux meilleures missions freelance et postes CDI en Banque, Finance et Assurance. TJM attractifs, clients grands comptes, inscription gratuite en 2 min.",
    keywords: ["mission freelance banque", "emploi assurance", "consultant bancaire", "freelance finance", "portage salarial banque", "tjm freelance assurance"],
    alternates: {
        canonical: "https://surly.fr/devenir-consultant",
    },
};

export default function DevenirConsultant() {
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

                {/* Section 6: Final CTA - Action Finale */}
                <ConsultantFinalCTA />
            </main>
            <Footer />
        </>
    );
}
