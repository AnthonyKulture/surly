import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhySurlyHero } from "@/components/sections/WhySurlyHero";
import { MarketAnalysis } from "@/components/sections/MarketAnalysis";
import { Piliers } from "@/components/sections/Piliers";
import { Contact } from "@/components/sections/Contact";
import { FAQHighlights } from "@/components/sections/FAQHighlights";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pourquoi choisir Surly ? L'Expertise Sectorielle Avant Tout",
    description: "Conçue par des experts pour des experts. Découvrez pourquoi les leaders de la Banque et de l'Assurance choisissent Surly pour leurs recrutements stratégiques.",
    keywords: ["expertise bancaire", "pourquoi surly", "différence cabinet recrutement", "plateforme freelance spécialisée", "valeurs surly"],
    alternates: {
        canonical: "https://surly.fr/pourquoi-surly",
    },
};

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

                {/* FAQ Highlights */}
                <FAQHighlights />

                {/* Section 4: Contact - Added as requested */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
