import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
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

            {/* Hidden FAQ content for search engines - visually hidden but crawlable */}
            <div className="sr-only" aria-hidden="true">
                <h1>Questions Fréquentes Surly - Experts Banque & Assurance</h1>

                <section>
                    <h2>Pour les entreprises</h2>
                    {FAQ_CLIENTS.map((faq, index) => (
                        <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <h3 itemProp="name">{faq.question}</h3>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>Pour les consultants</h2>
                    {FAQ_CONSULTANTS.map((faq, index) => (
                        <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <h3 itemProp="name">{faq.question}</h3>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>Questions générales</h2>
                    {FAQ_GENERAL.map((faq, index) => (
                        <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <h3 itemProp="name">{faq.question}</h3>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            <main>
                {/* Hero Section - Custom compact hero for FAQ */}
                <section
                    id="hero"
                    className="relative w-full min-h-[40vh] sm:min-h-[55vh] md:min-h-[65vh] pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col items-center justify-center overflow-hidden bg-white"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 pattern-grid-large opacity-30 pointer-events-none" />

                    <div className="container relative z-[2] flex flex-col items-center px-6 md:px-4 max-w-5xl">
                        {/* Badge */}
                        <Reveal delay={0} duration={600} direction="down">
                            <div className="mb-5 sm:mb-6 w-full text-center">
                                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                                    <span className="text-xs sm:text-sm font-medium text-primary">
                                        Centre d'aide
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Title */}
                        <Reveal delay={100} duration={800}>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-foreground text-center mb-4 sm:mb-5 tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto">
                                Foire aux
                                <span className="text-primary block mt-1">questions</span>
                            </h1>
                        </Reveal>
                    </div>
                </section>

                {/* Quick Navigation Pills */}
                <section className="py-6 bg-white border-b border-primary/5">
                    <div className="container">
                        <Reveal delay={100} duration={600}>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl mx-auto">
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
