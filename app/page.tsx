import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { WhySurlyAbstract } from "@/components/sections/WhySurlyAbstract";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { AIChat } from "@/components/sections/AIChat";
import { Piliers } from "@/components/sections/Piliers";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { FunctionsShowcase } from "@/components/sections/FunctionsShowcase";
import { Contact } from "@/components/sections/Contact";
import { IntermediateCTA } from "@/components/ui/IntermediateCTA";

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

        {/* 4. LA SOLUTION - Dashboard - Blanc */}
        <DashboardShowcase />

        {/* 5. INNOVATION IA - Blanc */}
        <AIChat />

        {/* CTA INTERMÉDIAIRE 1 : Options Client */}
        <IntermediateCTA
          title="Besoin d'un expert bancassurance ?"
          description="Essayez notre IA pour un matching instantané ou contactez nos talent managers pour un accompagnement sur-mesure"
          buttonText="Découvrir nos solutions"
          buttonHref="/sourcing-expert"
          variant="urgent"
        />

        {/* 6. NOS PILIERS - Blanc */}
        <Piliers />

        {/* 7. SUCCESS STORIES - Blanc (remplace Testimonials aussi) */}
        <SuccessStories />

        {/* 8. FONCTIONNALITÉS / EXPERTISES - Blanc */}
        <FunctionsShowcase />

        {/* CTA INTERMÉDIAIRE 2 : Pour les experts/consultants */}
        <IntermediateCTA
          title="Vous avez une expérience en Banque ou Assurance ?"
          description="Quelle que soit votre expertise (IT, Finance, Risk, RH...), accédez aux meilleures missions du secteur. Inscription gratuite en 5 minutes."
          buttonText="Découvrir les missions disponibles"
          buttonHref="/devenir-consultant"
          variant="urgent"
        />

        {/* 9. CONTACT - Blanc */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
