import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultantHero } from "@/components/sections/ConsultantHero";
import { QuickRegistration } from "@/components/sections/QuickRegistration";
import { ExpertRequirements } from "@/components/sections/ExpertRequirements";
import { CompensationFlexibility } from "@/components/sections/CompensationFlexibility";
import { DualOpportunities } from "@/components/sections/DualOpportunities";
import { ConsultantFinalCTA } from "@/components/sections/ConsultantFinalCTA";

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
