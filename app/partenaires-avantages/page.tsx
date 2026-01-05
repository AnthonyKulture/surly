import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PartnersHero } from "@/components/sections/PartnersHero";
import { PartnersGrid } from "@/components/sections/PartnersGrid";

export default function PartnairesAvantages() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <PartnersHero />

                {/* Partners Grid Section */}
                <PartnersGrid />
            </main>
            <Footer />
        </>
    );
}
