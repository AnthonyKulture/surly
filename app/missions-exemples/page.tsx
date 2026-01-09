import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { MissionCard } from "@/components/sections/MissionCard";
import { SAMPLE_MISSIONS, generateJobPostingSchema } from "@/lib/sample-missions-data";

export const metadata: Metadata = {
    title: "Exemples de Missions Banque & Assurance | Freelance & CDI - Surly",
    description: "Découvrez des exemples de missions disponibles sur Surly : conformité Bâle III, actuariat IFRS 17, transformation digitale, cybersécurité. TJM 650-800€/jour, salaires 55-75K€.",
    keywords: [
        "mission freelance banque",
        "emploi assurance",
        "consultant banque",
        "mission conformité",
        "freelance IFRS 17",
        "emploi cybersécurité banque",
        "mission transformation digitale",
        "TJM consultant banque"
    ],
    alternates: {
        canonical: "https://surly.fr/missions-exemples",
    },
};

export default function MissionsExemplesPage() {
    // Generate JobPosting schemas for all sample missions
    const jobPostingSchemas = {
        "@context": "https://schema.org",
        "@graph": SAMPLE_MISSIONS.map(mission => generateJobPostingSchema(mission))
    };

    return (
        <>
            <Navigation />

            {/* JSON-LD Schema for SEO - JobPosting for each mission */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchemas) }}
            />

            <main>
                {/* Hero Section */}
                <section
                    id="hero"
                    className="relative w-full min-h-[45vh] pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 flex flex-col items-center justify-center overflow-hidden bg-white"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 pattern-grid-large opacity-30 pointer-events-none" />

                    <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4 max-w-5xl">
                        {/* Badge */}
                        <Reveal delay={0} duration={600} direction="down">
                            <div className="mb-5 sm:mb-6 w-full text-center">
                                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                                    <span className="text-xs sm:text-sm font-medium text-primary">
                                        Exemples de Missions
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Title */}
                        <Reveal delay={100} duration={800}>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-foreground text-center mb-4 sm:mb-5 tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto">
                                Missions Banque &
                                <span className="text-primary block mt-1">Assurance</span>
                            </h1>
                        </Reveal>

                        {/* Subtitle */}
                        <Reveal delay={200} duration={800}>
                            <p className="text-base sm:text-lg text-foreground-muted text-center max-w-2xl mx-auto leading-relaxed">
                                Découvrez des exemples représentatifs des opportunités disponibles sur Surly
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Disclaimer Alert */}
                <section className="py-6 bg-blue-50 border-y border-blue-100">
                    <div className="container max-w-5xl">
                        <Reveal delay={0} duration={600}>
                            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
                                <div className="flex-shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-blue-900 mb-1">
                                        Missions Exemples
                                    </h3>
                                    <p className="text-sm text-blue-800 leading-relaxed">
                                        Les missions présentées ci-dessous sont des <strong>exemples fictifs</strong> représentatifs des types d'opportunités disponibles sur Surly.
                                        Pour accéder aux <strong>missions réelles</strong> et postuler, inscrivez-vous gratuitement sur notre plateforme.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-8 bg-white border-b border-gray-100">
                    <div className="container max-w-5xl">
                        <Reveal delay={100} duration={600}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">12</div>
                                    <div className="text-xs sm:text-sm text-foreground-muted">Exemples de missions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">6</div>
                                    <div className="text-xs sm:text-sm text-foreground-muted">Catégories métier</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">650-800€</div>
                                    <div className="text-xs sm:text-sm text-foreground-muted">TJM Freelance</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">55-75K€</div>
                                    <div className="text-xs sm:text-sm text-foreground-muted">Salaires CDI</div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Missions Grid */}
                <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFC]">
                    <div className="container max-w-7xl">
                        {/* Section Header */}
                        <Reveal delay={0} duration={600}>
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                                    Exemples de Missions par Catégorie
                                </h2>
                                <p className="text-base text-foreground-muted max-w-2xl mx-auto">
                                    Conformité, IT & Data, Risques, Actuariat, Transformation, Finance Durable
                                </p>
                            </div>
                        </Reveal>

                        {/* Missions Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SAMPLE_MISSIONS.map((mission, index) => (
                                <MissionCard key={mission.id} mission={mission} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 bg-primary text-white">
                    <div className="container max-w-3xl text-center">
                        <Reveal delay={0} duration={600}>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                                Prêt à voir les vraies missions ?
                            </h2>
                            <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto mb-8 leading-relaxed">
                                Inscrivez-vous gratuitement pour accéder à toutes les missions disponibles et postuler en un clic.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3">
                                <Button
                                    as="a"
                                    href="/devenir-consultant"
                                    variant="white"
                                    size="large"
                                >
                                    S'inscrire gratuitement
                                    <ArrowIcon />
                                </Button>
                                <Button
                                    as="a"
                                    href="/"
                                    variant="outline-light"
                                    size="large"
                                >
                                    En savoir plus sur Surly
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
