import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SwissGridBackground } from "@/components/ui/SwissGridBackground";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surly.fr"),
  title: {
    default: "Surly — L'écosystème Recrutement & Freelance Bancassurance",
    template: "%s | Surly",
  },
  description:
    "La marketplace ultra-spécialisée qui réunit l'intégralité des experts et opportunités du secteur Banque & Assurance. +3300 experts certifiés.",
  keywords: [
    "recrutement bancaire",
    "freelance assurance",
    "consultant IFRS",
    "actuaire",
    "conformité bancaire",
    "KYC AML",
    "Solvabilité II",
    "Bâle III",
  ],
  authors: [{ name: "Surly" }],
  creator: "Surly",
  publisher: "Surly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Surly — L'écosystème Recrutement & Freelance Bancassurance",
    description:
      "La marketplace ultra-spécialisée qui réunit l'intégralité des experts et opportunités du secteur Banque & Assurance.",
    url: "https://surly.fr",
    siteName: "Surly",
    locale: "fr_FR",
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
  twitter: {
    card: "summary_large_image",
    title: "Surly — L'écosystème Recrutement & Freelance Bancassurance",
    description:
      "La seule marketplace ultra-spécialisée Banque & Assurance. Trouvez votre expert ou votre mission en moins de 48h.",
    creator: "@surly_fr",
    images: ["/surly-hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      areaServed: "FR",
      availableLanguage: "French"
    }
  };

  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="text-foreground" suppressHydrationWarning>
        <Script id="axeptio-settings" strategy="afterInteractive">
          {`
            window.axeptioSettings = {
              clientId: "690e0942b48e4a03c7b9b3f8",
              cookiesVersion: "1dfd07d5-8c81-4f7c-8d76-dffc0f3160d3",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                }
              }
            };
          `}
        </Script>
        <Script
          id="axeptio-script"
          strategy="afterInteractive"
          src="//static.axept.io/sdk.js"
        />
        <Script id="brevo-init" strategy="lazyOnload">
          {`
            window.BrevoConversationsID = '6814dc6c0c14195d74019e8e';
            window.BrevoConversations = window.BrevoConversations || function() {
                (window.BrevoConversations.q = window.BrevoConversations.q || []).push(arguments);
            };
          `}
        </Script>
        <Script
          id="brevo-script"
          strategy="lazyOnload"
          src="https://conversations-widget.brevo.com/brevo-conversations.js"
        />
        <SwissGridBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
