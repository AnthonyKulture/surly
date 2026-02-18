import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FAQPageContent } from "./FAQPageContent";
import type { FAQItem } from "@/components/sections/FAQSection";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'faqPage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
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
            title: t('metadata.ogTitle'),
            description: t('metadata.ogDescription'),
            type: "website",
        },
    };
}

// Generate JSON-LD Schema for FAQPage
const generateFAQSchema = (clients: FAQItem[], consultants: FAQItem[], general: FAQItem[]) => {
    const allFAQs = [...clients, ...consultants, ...general];

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

export default async function FAQPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'faqPage' });

    // Retrieve FAQ items from translations
    const clients = t.raw('items.clients') as FAQItem[];
    const consultants = t.raw('items.consultants') as FAQItem[];
    const general = t.raw('items.general') as FAQItem[];

    const faqSchema = generateFAQSchema(clients, consultants, general);

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
                <h1>{t('titleLine1')} {t('titleLine2')}</h1>

                <section>
                    <h2>{t('categories.companies')}</h2>
                    {clients.map((faq, index) => (
                        <div key={`client-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <h3 itemProp="name">{faq.question}</h3>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>{t('categories.consultants')}</h2>
                    {consultants.map((faq, index) => (
                        <div key={`consultant-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <h3 itemProp="name">{faq.question}</h3>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>{t('categories.general')}</h2>
                    {general.map((faq, index) => (
                        <div key={`general-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <h3 itemProp="name">{faq.question}</h3>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            <main>
                <FAQPageContent />
            </main>
            <Footer />
        </>
    );
}
