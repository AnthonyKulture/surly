import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhySurlyHero } from "@/components/sections/WhySurlyHero";
import { MarketAnalysis } from "@/components/sections/MarketAnalysis";
import { Piliers } from "@/components/sections/Piliers";
import { Contact } from "@/components/sections/Contact";

export default function PourquoiSurly() {
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
                {/* Section 4: Contact - Added as requested */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
