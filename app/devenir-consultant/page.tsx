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

                {/* Section 5.5: Mission Examples Teaser */}
                <section className="py-12 sm:py-16 bg-gray-50">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Découvrez des exemples de missions
                        </h2>
                        <p className="text-base text-foreground-muted mb-6 max-w-2xl mx-auto">
                            Conformité Bâle III, Actuariat IFRS 17, Transformation Digitale, Cybersécurité, Risques de Marché...
                            Consultez des exemples concrets de missions disponibles sur Surly.
                        </p>
                        <a
                            href="/missions-exemples"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
                        >
                            Voir les exemples de missions
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* Section 6: Final CTA - Action Finale */}
                <ConsultantFinalCTA />
            </main>
            <Footer />
        </>
    );
}
