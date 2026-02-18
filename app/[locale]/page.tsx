import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Critical imports (above the fold) - Load immediately
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/ui/LogoCarousel";

// Non-critical sections - Lazy loaded
const WhySurlyAbstract = dynamic(() =>
  import("@/components/sections/WhySurlyAbstract").then(mod => ({ default: mod.WhySurlyAbstract })),
  { loading: () => <div className="min-h-[400px]" /> }
);

const DashboardShowcase = dynamic(() =>
  import("@/components/sections/DashboardShowcase").then(mod => ({ default: mod.DashboardShowcase })),
  { loading: () => <div className="min-h-[600px]" /> }
);

const PlatformBenefits = dynamic(() =>
  import("@/components/sections/PlatformBenefits").then(mod => ({ default: mod.PlatformBenefits })),
  { loading: () => <div className="min-h-[500px]" /> }
);

const FunctionsShowcase = dynamic(() =>
  import("@/components/sections/FunctionsShowcase").then(mod => ({ default: mod.FunctionsShowcase })),
  { loading: () => <div className="min-h-[600px]" /> }
);

const Contact = dynamic(() =>
  import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })),
  { loading: () => <div className="min-h-[400px]" /> }
);

const Footer = dynamic(() =>
  import("@/components/layout/Footer").then(mod => ({ default: mod.Footer }))
);

const FAQHighlights = dynamic(() =>
  import("@/components/sections/FAQHighlights").then(mod => ({ default: mod.FAQHighlights })),
  { loading: () => <div className="min-h-[400px]" /> }
);

const IntermediateCTA = dynamic(() =>
  import("@/components/ui/IntermediateCTA").then(mod => ({ default: mod.IntermediateCTA }))
);

const KeywordsCarouselGreen = dynamic(() =>
  import("@/components/ui/KeywordsCarousel").then(mod => ({ default: mod.KeywordsCarouselGreen }))
);

const Reveal = dynamic(() =>
  import("@/components/ui/Reveal").then(mod => ({ default: mod.Reveal })),
  { ssr: true } // Keep SSR for SEO
);

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Get server-side translations for props
  const t = await getTranslations({ locale, namespace: 'home' });

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
          title={t('intermediateCTA.client.title')}
          description={t('intermediateCTA.client.description')}
          buttonText={t('intermediateCTA.client.button')}
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
                    {t('expertises.tag')}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100} duration={800}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight leading-tight">
                  {t.rich('expertises.title', {
                    br: () => <br />,
                    accent: (chunks) => <span className="text-accent">{chunks}</span>
                  })}
                </h2>
              </Reveal>
            </div>

            <Reveal delay={100} duration={1000}>
              <p className="text-base sm:text-lg text-white/90 text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                {t('expertises.description')}
              </p>
            </Reveal>

            {/* Keywords Carousel - Green Variant */}
            <KeywordsCarouselGreen />

            <Reveal delay={500} duration={800}>
              <div className="text-center bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg">
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {t.rich('expertises.stats', {
                    strong: (chunks) => <strong className="text-white font-bold">{chunks}</strong>
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. FONCTIONNALITÉS / EXPERTISES - Blanc */}
        <FunctionsShowcase />

        {/* CTA INTERMÉDIAIRE 2 : Pour les experts/consultants */}
        <IntermediateCTA
          title={t('intermediateCTA.consultant.title')}
          description={t('intermediateCTA.consultant.description')}
          buttonText={t('intermediateCTA.consultant.button')}
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
