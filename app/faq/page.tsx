import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import {
    FAQCategory,
    ClientIcon,
    ConsultantIcon,
    GeneralIcon,
} from "@/components/sections/FAQSection";
import { FAQ_CLIENTS, FAQ_CONSULTANTS, FAQ_GENERAL } from "@/lib/faq-data";

export const metadata: Metadata = {
    title: "FAQ - Questions Fréquentes | Surly - Experts Banque & Assurance",
    description:
        "Trouvez les réponses à vos questions sur Surly : recrutement d'experts bancassurance, inscription consultants, tarification, missions freelance et CDI en Banque et Assurance.",
    keywords: [
        "FAQ Surly",
        "recrutement banque assurance",
        "consultant freelance banque",
        "expert assurance",
        "mission bancassurance",
        "TJM consultant banque",
        "plateforme recrutement finance",
    ],
    openGraph: {
        title: "FAQ - Questions Fréquentes | Surly",
        description:
            "Toutes les réponses à vos questions sur le recrutement d'experts en Banque et Assurance via Surly.",
        type: "website",
    },
};

// Generate JSON-LD Schema for FAQPage
const generateFAQSchema = () => {
    const allFAQs = [...FAQ_CLIENTS, ...FAQ_CONSULTANTS, ...FAQ_GENERAL];

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFAQs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
};

export default function FAQPage() {
    const faqSchema = generateFAQSchema();

    return (
        <>
            <Navigation />

            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="pt-20 sm:pt-24">
                {/* Hero Section - Clean and minimal */}
                <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-primary/5">
                    <div className="container">
                        <SectionHeader
                            tag="Centre d'aide"
                            title={
                                <>
                                    Foire aux
                                    <br />
                                    <span className="text-primary">questions</span>
                                </>
                            }
                            centered
                        />

                        {/* Quick Navigation Pills */}
                        <Reveal delay={100} duration={600}>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl mx-auto mt-8">
                                <a
                                    href="#clients"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                                >
                                    <ClientIcon />
                                    <span>Entreprises</span>
                                </a>
                                <a
                                    href="#consultants"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                                >
                                    <ConsultantIcon />
                                    <span>Consultants</span>
                                </a>
                                <a
                                    href="#general"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                                >
                                    <GeneralIcon />
                                    <span>Général</span>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* FAQ Content - Clean background */}
                <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFC]">
                    <div className="container max-w-3xl">
                        {/* Clients Section */}
                        <div id="clients" className="scroll-mt-28">
                            <FAQCategory
                                title="Pour les entreprises"
                                icon={<ClientIcon />}
                                items={FAQ_CLIENTS}
                                defaultOpen
                            />
                        </div>

                        {/* Consultants Section */}
                        <div id="consultants" className="scroll-mt-28 mt-16">
                            <FAQCategory
                                title="Pour les consultants"
                                icon={<ConsultantIcon />}
                                items={FAQ_CONSULTANTS}
                            />
                        </div>

                        {/* General Section */}
                        <div id="general" className="scroll-mt-28 mt-16">
                            <FAQCategory
                                title="Questions générales"
                                icon={<GeneralIcon />}
                                items={FAQ_GENERAL}
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section - Harmonized with site */}
                <section className="py-16 sm:py-20 bg-primary text-white">
                    <div className="container max-w-3xl text-center">
                        <Reveal delay={0} duration={600}>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                                Vous n'avez pas trouvé votre réponse ?
                            </h2>
                            <p className="text-base sm:text-lg opacity-80 max-w-xl mx-auto mb-8 leading-relaxed">
                                Notre équipe est disponible pour répondre à toutes vos questions.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3">
                                <Button
                                    as="a"
                                    href="/contact"
                                    variant="white"
                                    size="large"
                                >
                                    Nous contacter
                                    <ArrowIcon />
                                </Button>
                                <Button
                                    as="a"
                                    href="/ai"
                                    variant="outline-light"
                                    size="large"
                                >
                                    Essayer Surly AI
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
