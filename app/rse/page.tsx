import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { RSEHero } from "@/components/sections/RSEHero";
import { FundamentalCommitments } from "@/components/sections/FundamentalCommitments";
import { ResponsiblePractices } from "@/components/sections/ResponsiblePractices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engagements RSE & Impact Positif | Surly Bancassurance",
    description: "Découvrez les engagements RSE de Surly : Numérique Responsable, label French Tech, achats inclusifs et conformité bancaire stricte. Une approche éthique et durable du recrutement.",
    keywords: ["rse assurance", "banque durable", "numérique responsable", "french tech", "achats responsables", "conformité bancaire", "éthique recrutement"],
    alternates: {
        canonical: "https://surly.fr/rse",
    },
};

export default function RSE() {
    return (
        <>
            <Navigation />
            <main>
                {/* Section 1: Hero */}
                <RSEHero />

                {/* Section 2: 4 Fundamental Commitments */}
                <FundamentalCommitments />

                {/* Section 3: Responsible Practices (Purchasing, French Tech, Digital, Ethics, Well-being) */}
                <ResponsiblePractices />
            </main>
            <Footer />
        </>
    );
}
