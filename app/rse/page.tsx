import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { RSEHero } from "@/components/sections/RSEHero";
import { FundamentalCommitments } from "@/components/sections/FundamentalCommitments";
import { ResponsiblePractices } from "@/components/sections/ResponsiblePractices";

export default function RSE() {
    return (
        <>
            <Navigation />
            <main>
                {/* Section 1: Hero */}
                <RSEHero />

                {/* Section 2: 4 Fundamental Commitments */}
                <FundamentalCommitments />

                {/* Section 3: Responsible Practices (Purchasing, Digital, Ethics, Well-being) */}
                <ResponsiblePractices />
            </main>
            <Footer />
        </>
    );
}
