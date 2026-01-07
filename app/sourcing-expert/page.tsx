import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ExpertSourcingHero } from "@/components/sections/ExpertSourcingHero";
import { ServiceOptions } from "@/components/sections/ServiceOptions";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Piliers } from "@/components/sections/Piliers";
import { Experts } from "@/components/sections/Experts";
import { ExpertSourcingCTA } from "@/components/sections/ExpertSourcingCTA";
import { KeywordsCarousel } from "@/components/ui/KeywordsCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";

export default function SourcingExpert() {
    return (
        <>
            <Navigation />
            <main>
                {/* 1. Hero Section */}
                <ExpertSourcingHero />

                {/* 2. Service Options - Cabinet vs Plateforme */}
                <ServiceOptions />

                {/* 3. Expertises Section - From AI page */}
                <section id="expertises" className="relative py-16 sm:py-20 lg:py-28 bg-white">
                    <div className="container">
                        <SectionHeader
                            tag="Expertise Sectorielle"
                            title={
                                <>
                                    Tous les métiers experts de la
                                    <br />
                                    <span className="text-primary">Banque & Assurance</span>
                                </>
                            }
                            centered
                        />

                        <Reveal delay={100} duration={1000}>
                            <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                                De la conformité réglementaire (Bâle III, IFRS 17, LCB-FT) aux transformations digitales,
                                notre plateforme vous connecte aux <strong className="text-foreground">meilleurs profils</strong> spécialisés
                                du secteur bancassurance. Chaque expert possède une expérience significative validée dans son domaine.
                            </p>
                        </Reveal>

                        {/* Keywords Carousel - Dynamic Effect */}
                        <KeywordsCarousel />

                        <Reveal delay={500} duration={800}>
                            <div className="text-center bg-white p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm">
                                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                                    <strong className="text-foreground font-semibold">Plus de 3 000 experts</strong> référencés •
                                    <strong className="text-foreground font-semibold"> 100% vérifiés</strong> •
                                    Disponibles <strong className="text-foreground font-semibold">sous 48h</strong>
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </section>


                {/* 4. Piliers - Why Surly? */}
                <Piliers />

                {/* 5. Track Record - Success Stories */}
                <SuccessStories />

                {/* 6. Experts vedettes */}
                <Experts />

                {/* 6. Final CTA Section */}
                <ExpertSourcingCTA />
            </main>
            <Footer />
        </>
    );
}
