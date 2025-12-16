import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhySurlyAbstract } from "@/components/sections/WhySurlyAbstract";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { FunctionsShowcase } from "@/components/sections/FunctionsShowcase";
import { AIChat } from "@/components/sections/AIChat";
import { Piliers } from "@/components/sections/Piliers";
import { Process } from "@/components/sections/Process";
import { Experts } from "@/components/sections/Experts";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* 1. HERO - Blanc */}
        <Hero />

        {/* 2. POURQUOI SURLY? - Abstract - Vert 🟩 (Full version on /pourquoi-surly) */}
        <WhySurlyAbstract />

        {/* 3. LA SOLUTION - Dashboard - Blanc */}
        <DashboardShowcase />

        {/* 4. FONCTIONNALITÉS - Blanc */}
        <FunctionsShowcase />

        {/* 5. INNOVATION IA - Blanc */}
        <AIChat />

        {/* 6. NOS PILIERS - Blanc */}
        <Piliers />

        {/* 7. PROCESSUS - SUPPRIMÉ */}


        {/* 8. TALENTS DISPONIBLES - Blanc */}
        <Experts />

        {/* 9. SUCCESS STORIES - Blanc */}
        <SuccessStories />

        {/* 10. TÉMOIGNAGES - Blanc */}
        <Testimonials />

        {/* 11. LEAD MAGNET - Vert 🟩 */}
        <LeadMagnet />

        {/* 12. CONTACT - Blanc */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
