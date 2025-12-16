import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BusinessReferralHero } from "@/components/sections/BusinessReferralHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyParticipate } from "@/components/sections/WhyParticipate";

export default function ApportAffaires() {
    return (
        <>
            <Navigation showAnnouncementBar={false} />
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
