import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ExpertSourcingHero } from "@/components/sections/ExpertSourcingHero";
import { ServiceOptions } from "@/components/sections/ServiceOptions";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Piliers } from "@/components/sections/Piliers";
import { Experts } from "@/components/sections/Experts";
import { ExpertSourcingCTA } from "@/components/sections/ExpertSourcingCTA";

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
                <section className="relative py-16 sm:py-20 lg:py-28 bg-white">
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

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                            {[
                                { skill: "IFRS 17", desc: "Actuaires & Comptables" },
                                { skill: "Bâle III", desc: "Risk Managers" },
                                { skill: "Solvabilité II", desc: "Experts Prudentiels" },
                                { skill: "Business Analyst", desc: "Core Banking & SI" },
                                { skill: "Actuaire", desc: "Pricing & Tarification" },
                                { skill: "Risk Manager", desc: "Crédit, Marché, Opérationnel" },
                                { skill: "Conformité LCB-FT", desc: "KYC & AML" },
                                { skill: "Data Engineering", desc: "Big Data & Analytics" },
                                { skill: "DevOps", desc: "Cloud & Infrastructure" },
                                { skill: "Architecture SI", desc: "Modernisation & API" },
                                { skill: "Product Owner", desc: "Agile & Produit" },
                                { skill: "Pillar 3", desc: "Reporting Réglementaire" }
                            ].map((item, i) => (
                                <Reveal key={i} delay={200 + (i * 30)} duration={600}>
                                    <div className="bg-white border border-gray-100 rounded-lg p-2.5 sm:p-3 hover:border-primary/20 hover:shadow-sm transition-all shadow-sm">
                                        <p className="font-bold text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1">{item.skill}</p>
                                        <p className="text-[10px] sm:text-xs text-foreground-muted leading-relaxed">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

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

                {/* 5. Experts vedettes */}
                <Experts />

                {/* 6. Final CTA Section */}
                <ExpertSourcingCTA />
            </main>
            <Footer />
        </>
    );
}
