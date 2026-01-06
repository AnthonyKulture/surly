import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  platform: [
    { label: "Application", href: "https://app.surly.fr" },
    { label: "Espace Talent", href: "https://app.surly.fr/postulant" },
    { label: "Espace Recruteur", href: "#" },
  ],
  company: [
    { label: "À propos", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Confidentialité", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-background py-16 tablet:py-20 laptop:py-2xl pb-lg">
      <div className="container">
        <div className="grid grid-cols-1 tablet:grid-cols-[1fr_2fr] laptop:grid-cols-[1.5fr_2fr] gap-8 tablet:gap-12 laptop:gap-2xl pb-8 tablet:pb-xl border-b border-white/15 mb-lg">
          {/* Brand */}
          <div>
            <div className="mb-md">
              <Logo className="w-[120px]" variant="white" />
            </div>
            <p className="text-small text-background/60 leading-relaxed">
              L&apos;écosystème Recrutement & Freelance
              <br />
              pour la Banque & l&apos;Assurance
            </p>
          </div>

          {/* Links - Always 3 columns on tablet+ */}
          <div className="grid grid-cols-2 tablet:grid-cols-3 gap-6 tablet:gap-4 laptop:gap-lg">
            <div>
              <h4 className="text-micro font-bold uppercase tracking-[0.15em] text-background mb-md">
                Plateforme
              </h4>
              <Link href="https://app.surly.fr" className="block text-small text-background/60 py-xs hover:text-background transition-colors" target="_blank" rel="noopener noreferrer">Application</Link>
              <Link href="https://app.surly.fr/postulant" className="block text-small text-background/60 py-xs hover:text-background transition-colors" target="_blank" rel="noopener noreferrer">Espace Talent</Link>
              <Link href="https://app.surly.fr/" className="block text-small text-background/60 py-xs hover:text-background transition-colors" target="_blank" rel="noopener noreferrer">Espace Recruteur</Link>
            </div>
            <div>
              <h4 className="text-micro font-bold uppercase tracking-[0.15em] text-background mb-md">
                Entreprise
              </h4>
              <Link href="/pourquoi-surly" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Pourquoi Surly ?</Link>
              <Link href="/rse" className="block text-small text-background/60 py-xs hover:text-background transition-colors">RSE</Link>
              <Link href="/apport-affaires" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Apport d'affaires</Link>
              <Link href="/partenaires-avantages" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Partenaires</Link>
              <Link href="/faq" className="block text-small text-background/60 py-xs hover:text-background transition-colors">FAQ</Link>
              <Link href="/contact" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Contact</Link>
            </div>
            <div>
              <h4 className="text-micro font-bold uppercase tracking-[0.15em] text-background mb-md">
                Légal
              </h4>
              <Link href="/mentions-legales" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Mentions légales</Link>
              <Link href="/cgu-postulant" className="block text-small text-background/60 py-xs hover:text-background transition-colors">CGU Postulant</Link>
              <Link href="/cgu-client" className="block text-small text-background/60 py-xs hover:text-background transition-colors">CGU Client</Link>
              <Link href="/charte-donnees" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Données personelles</Link>
              <Link href="/politique-cookies" className="block text-small text-background/60 py-xs hover:text-background transition-colors">Cookies</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-md text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-micro text-background/50">
              © 2025 Onybuns®. Reproduction interdite – INPI – CNIL
            </p>
            <p className="text-micro text-background/50">
              Surly respecte le RGPD et protège la confidentialité de vos données.
            </p>
            <p className="text-micro text-background/50 mt-1">
              Site créé par Anthony PROFIT - <a href="https://www.kulturecom.fr" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">www.kulturecom.fr</a>
            </p>
          </div>

          <div className="flex gap-sm">
            <a
              href="https://www.linkedin.com/company/surly1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/15 text-background/60 hover:text-background hover:bg-background hover:text-primary transition-all rounded-lg"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/surly.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/15 text-background/60 hover:text-background hover:bg-background hover:text-primary transition-all rounded-lg"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

