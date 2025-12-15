import Link from "next/link";

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
    <footer className="bg-primary text-background py-2xl pb-lg">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-2xl pb-xl border-b border-white/15 mb-lg">
          {/* Brand */}
          <div>
            <svg viewBox="0 0 120 32" className="w-[90px] h-7 mb-md">
              <text x="0" y="26" className="logo-text logo-text-light">
                SURLY
              </text>
            </svg>
            <p className="text-small text-background/60 leading-relaxed">
              L&apos;écosystème Recrutement & Freelance
              <br />
              pour la Banque & l&apos;Assurance
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
            <div>
              <h4 className="text-micro font-bold uppercase tracking-[0.15em] text-background mb-md">
                Plateforme
              </h4>
              {footerLinks.platform.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-small text-background/60 py-xs hover:text-background transition-colors"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-micro font-bold uppercase tracking-[0.15em] text-background mb-md">
                Entreprise
              </h4>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-small text-background/60 py-xs hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-micro font-bold uppercase tracking-[0.15em] text-background mb-md">
                Légal
              </h4>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-small text-background/60 py-xs hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-md text-center md:text-left">
          <p className="text-micro text-background/50">
            © 2024 Surly. Tous droits réservés.
          </p>
          <div className="flex gap-sm">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-white/15 text-background/60 hover:text-background hover:bg-background hover:text-primary transition-all rounded-lg"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-white/15 text-background/60 hover:text-background hover:bg-background hover:text-primary transition-all rounded-lg"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

