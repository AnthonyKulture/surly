import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { WhySurlyAbstract } from "@/components/sections/WhySurlyAbstract";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { PlatformBenefits } from "@/components/sections/PlatformBenefits";
import { FunctionsShowcase } from "@/components/sections/FunctionsShowcase";
import { Contact } from "@/components/sections/Contact";
import { IntermediateCTA } from "@/components/ui/IntermediateCTA";
import { FAQHighlights } from "@/components/sections/FAQHighlights";
import { KeywordsCarouselGreen } from "@/components/ui/KeywordsCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emplois & Missions Banque Assurance | Surly - Freelance & CDI",
  description: "La 1ère plateforme dédiée aux experts de la Banque et de l'Assurance. +3000 consultants certifiés disponibles sous 48h. Missions freelance, recrutement CDI/CDD.",
  keywords: ["emploi banque", "mission freelance banque", "recrutement assurance", "freelance bancassurance", "consultant banque", "emploi finance", "expert ifrs17", "conformité", "TJM banque"],
  alternates: {
    canonical: "https://surly.fr",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* 1. HERO - Blanc */}
        <Hero />

        {/* 2. LOGO CAROUSEL - Social Proof */}
        <LogoCarousel />

        {/* 3. POURQUOI SURLY? - Abstract - Vert 🟩 */}
        <WhySurlyAbstract />

        {/* 4. AVANTAGES PLATEFORME - Pourquoi Surly est le choix des meilleurs décideurs */}
        <PlatformBenefits />

        {/* CTA INTERMÉDIAIRE : Options Client */}
        <IntermediateCTA
          title="Besoin d'un expert bancassurance ?"
          description="Essayez notre IA pour un matching instantané ou contactez nos talent managers pour un accompagnement sur-mesure"
          buttonText="Découvrir nos solutions"
          buttonHref="/sourcing-expert"
          variant="urgent"
        />

        {/* 5. LA SOLUTION - Dashboard - Blanc */}
        <DashboardShowcase />

        {/* 6. EXPERTISE SECTORIELLE - VERT 🟩 */}
        <section id="expertises" className="relative py-16 sm:py-20 lg:py-28 bg-primary">
          <div className="container">
            {/* Header with white text for green background */}
            <div className="text-center mb-8 sm:mb-12">
              <Reveal delay={0} duration={600} direction="down">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5 sm:mb-6 shadow-lg">
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Expertise Sectorielle
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100} duration={800}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight leading-tight">
                  Tous les métiers experts de la
                  <br />
                  <span className="text-accent">Banque &amp; Assurance</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={100} duration={1000}>
              <p className="text-base sm:text-lg text-white/90 text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                De la conformité réglementaire (Bâle III, IFRS 17, LCB-FT) aux transformations digitales,
                notre plateforme vous connecte aux <strong className="text-white font-semibold">meilleurs profils</strong> spécialisés
                du secteur bancassurance. Chaque expert possède une expérience significative validée dans son domaine.
              </p>
            </Reveal>

            {/* Keywords Carousel - Green Variant */}
            <KeywordsCarouselGreen />

            <Reveal delay={500} duration={800}>
              <div className="text-center bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg">
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  <strong className="text-white font-bold">Plus de 3 000 experts</strong> référencés •
                  <strong className="text-white font-bold"> 100% vérifiés</strong> •
                  Disponibles <strong className="text-white font-bold">sous 48h</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. FONCTIONNALITÉS / EXPERTISES - Blanc */}
        <FunctionsShowcase />

        {/* CTA INTERMÉDIAIRE 2 : Pour les experts/consultants */}
        <IntermediateCTA
          title="Vous avez une expérience en Banque ou Assurance ?"
          description="Quelle que soit votre expertise (IT, Finance, Risk, RH...), accédez aux meilleures missions du secteur. Inscription gratuite en 5 minutes."
          buttonText="Découvrir les missions disponibles"
          buttonHref="/devenir-consultant"
          variant="urgent"
        />

        {/* 9. FAQ HIGHLIGHTS - Questions phares */}
        <FAQHighlights />

        {/* 10. CONTACT - Blanc */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
