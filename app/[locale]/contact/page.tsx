import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contactPage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
    };
}

export default async function ContactPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navigation />
            <main className="pt-32">
                {/* Contact Section */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
