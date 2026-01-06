import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { WhySurlyAbstract } from "@/components/sections/WhySurlyAbstract";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { PlatformBenefits } from "@/components/sections/PlatformBenefits";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { FunctionsShowcase } from "@/components/sections/FunctionsShowcase";
import { Contact } from "@/components/sections/Contact";
import { IntermediateCTA } from "@/components/ui/IntermediateCTA";
import { FAQHighlights } from "@/components/sections/FAQHighlights";

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

        {/* 6. SUCCESS STORIES - Blanc (remplace Testimonials aussi) */}
        <SuccessStories />

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
