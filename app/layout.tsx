import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SwissGridBackground from "@/components/ui/ClientSwissGridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surly — L'écosystème Recrutement & Freelance Bancassurance",
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
  openGraph: {
    title: "Surly — L'écosystème Recrutement & Freelance Bancassurance",
    description:
      "La marketplace ultra-spécialisée qui réunit l'intégralité des experts et opportunités du secteur Banque & Assurance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="text-foreground" suppressHydrationWarning>
        <SwissGridBackground />
        <div className="relative z-10">
          {children}


        </div>
      </body>
    </html>
  );
}
