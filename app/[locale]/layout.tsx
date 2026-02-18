import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import "../globals.css";
import { SwissGridBackground } from "@/components/ui/SwissGridBackground";
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";
import FrenchTechPopup from "@/components/ui/FrenchTechPopup";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
    fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
    adjustFontFallback: true,
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'seo' });

    return {
        title: {
            default: t('defaultTitle'),
            template: `%s | Surly`
        },
        description: t('defaultDescription'),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'fr': '/fr',
                'en': '/en',
                'x-default': '/fr'
            }
        },
        openGraph: {
            title: t('defaultTitle'),
            description: t('defaultDescription'),
            url: "https://surly.fr",
            siteName: "Surly",
            locale: locale === 'fr' ? 'fr_FR' : 'en_US',
            type: "website",
            images: [
                {
                    url: "/surly-hero.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Surly - Experts Banque & Assurance",
                },
            ],
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: Props) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Surly",
        url: "https://surly.fr",
        logo: "https://surly.fr/logo-neon.svg",
        description: "L'écosystème de référence pour le recrutement et le freelance en Banque & Assurance.",
        sameAs: [
            "https://www.linkedin.com/company/surly-fr",
            "https://twitter.com/surly_fr"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+33-1-00-00-00-00",
            contactType: "customer service",
            areaServed: locale === 'fr' ? 'FR' : 'GB',
            availableLanguage: locale === 'fr' ? 'French' : 'English'
        }
    };

    return (
        <html lang={locale} className={inter.variable}>
            <head>
                {/* DNS Preconnect for performance */}
                <link rel="dns-prefetch" href="//tarteaucitron.io" />
                <link rel="preconnect" href="https://tarteaucitron.io" crossOrigin="" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* Preload LCP image - Critical for mobile performance */}
                <link
                    rel="preload"
                    as="image"
                    href="/surly-hero.jpg"
                    type="image/jpeg"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="text-foreground" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <ThirdPartyScripts />
                    <SwissGridBackground />
                    <div className="relative z-10">
                        {children}
                    </div>
                    <FrenchTechPopup />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
