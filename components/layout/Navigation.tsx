"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";

const navLinks = [
  // "Partenaires & Avantages" retiré du header principal (reste accessible via Mega Menu pour consultants)
  { href: "/pourquoi-surly", label: "Pourquoi Surly ?" },
  { href: "/ai", label: "Surly AI", isExternal: true, isSpecial: true },
];

interface NavigationProps {
  showAnnouncementBar?: boolean;
}

export const Navigation = ({ showAnnouncementBar = true }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "unset";
      return newState;
    });
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    const hash = href.includes("#") ? "#" + href.split("#")[1] : "";

    if (isHomePage && hash) {
      e.preventDefault();
      const targetId = hash.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        const navHeight = 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
    handleCloseMenu();
  };

  const handleMegaMenuToggle = useCallback(() => {
    setIsMegaMenuOpen((prev) => !prev);
  }, []);

  const handleMegaMenuClose = useCallback(() => {
    setIsMegaMenuOpen(false);
  }, []);

  return (
    <>
      {/* Mega Menu Component */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={handleMegaMenuClose}
        showAnnouncementBar={showAnnouncementBar}
      />

      {/* Full Width Announcement Bar - Top of site */}
      {showAnnouncementBar && (
        <div className="fixed top-0 left-0 right-0 z-[1010] h-10 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative h-full flex items-center justify-center gap-2 sm:gap-3 px-4 text-center">
            <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
              <span className="flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/10 text-accent ring-1 ring-white/20">
                <svg viewBox="0 0 24 24" fill="none" className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-accent">
                  <path
                    d="M12 2L14.8 8.2L21 11L14.8 13.8L12 20L9.2 13.8L3 11L9.2 8.2L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wide text-white/90">
                Trouvez un expert :
              </span>
            </div>

            <a
              href="/ai"
              className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden"
            >
              {/* Spinning Beam */}
              <div className="absolute inset-[-100%] animate-spin-medium bg-[conic-gradient(from_90deg_at_50%_50%,#0000_75%,#ecff73_100%)]" />

              {/* Button Content */}
              <div className="relative z-10 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-primary-900 transition-transform active:scale-95">
                <span className="text-[10px] md:text-xs font-bold whitespace-nowrap">
                  Sélectionné par notre IA en 2min
                </span>
                <svg
                  className="w-3 h-3 text-primary-800 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Navigation - Below announcement bar */}
      <div
        className={cn(
          "fixed left-0 right-0 z-[1000] border-b transition-all duration-300",
          showAnnouncementBar ? "top-10" : "top-0",
          isScrolled
            ? "bg-white border-primary/10 shadow-lg"
            : "bg-white border-transparent"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center relative z-20 flex-shrink-0"
              aria-label="Surly Home"
            >
              <Logo className="w-[100px] laptop:w-[110px] xl:w-[120px]" variant="black" />
            </Link>

            {/* Desktop Navigation Links - Hidden on mobile */}
            <div className="hidden tablet:flex items-center gap-4 laptop:gap-6 xl:gap-8 flex-1 justify-center">
              {/* Nos solutions - Mega Menu Trigger */}
              <button
                onClick={handleMegaMenuToggle}
                className="text-sm font-semibold uppercase tracking-wide transition-all whitespace-nowrap relative group text-foreground hover:text-primary"
              >
                Nos solutions
                <svg
                  className={cn(
                    "inline-block w-4 h-4 ml-1 transition-transform duration-200",
                    isMegaMenuOpen && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => !link.isExternal && handleSmoothScroll(e, link.href)}
                  className="text-sm font-semibold uppercase tracking-wide transition-all whitespace-nowrap relative group text-foreground hover:text-primary"
                >
                  {link.isSpecial ? (
                    <span className="relative inline-flex items-baseline">
                      Surly
                      <span className="ml-0.5 text-[0.6em] align-super">AI</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" className="absolute -top-1 -right-4">
                        <path fill="url(#aiGradient)" d="m9.96 9.137.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824M18.104 16.507c.289-.843 1.504-.844 1.792 0l.026.087.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zm.896 2.29a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203 1 1 0 0 1 .203-.203 1 1 0 0 1-.203-.204M4.104 2.506c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 4.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 5.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 4.796" />
                        <defs>
                          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#14b8a6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  ) : (
                    link.label
                  )}
                  {!link.isSpecial && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons - Hidden on mobile */}
            <div className="hidden tablet:flex items-center gap-2 laptop:gap-3 flex-shrink-0">
              <Button
                as="a"
                href="https://app.surly.fr/postulant"
                variant="ghost"
                size="default"
                className="text-[10px] laptop:text-[11px] whitespace-nowrap py-1.5 px-2.5 laptop:py-2.5 laptop:px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Je suis expert
              </Button>
              <Button
                as="a"
                href="/ai"
                variant="primary"
                size="default"
                className="text-[10px] laptop:text-[11px] whitespace-nowrap py-1.5 px-2.5 laptop:py-2.5 laptop:px-5"
              >
                Je recherche un expert
              </Button>

              {/* Separator - Only on laptop+ */}
              <div className="hidden laptop:block w-px h-6 bg-primary/10 mx-1" />

              {/* Login Link - Only on laptop+ */}
              <a
                href="https://app.surly.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden laptop:block text-[11px] font-medium text-foreground-muted hover:text-primary transition-colors whitespace-nowrap"
              >
                Se connecter
              </a>
            </div>

            {/* Burger Menu Toggle - Visible on mobile */}
            <button
              className="tablet:hidden relative z-20 p-2 -mr-2 text-foreground"
              onClick={handleToggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-[5px]">
                <span
                  className={cn(
                    "block w-full h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "rotate-45 translate-y-[7px]"
                  )}
                />
                <span
                  className={cn(
                    "block w-2/3 h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block w-full h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "-rotate-45 -translate-y-[7px]"
                  )}
                />
              </div>
            </button>
          </nav>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white/70 backdrop-blur-2xl z-[1100] flex items-center justify-center transition-all duration-500 supports-[backdrop-filter]:bg-white/60",
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-8"
        )}
        onClick={handleCloseMenu}
      >
        <div
          className="flex flex-col items-start gap-6 p-6 w-full max-w-2xl overflow-y-auto max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Nos solutions - Mobile - Two column structure */}
          <div className="w-full space-y-6">
            {/* Section Entreprises */}
            <div className="w-full">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Pour les entreprises
              </h3>
              <div className="flex flex-col gap-3 pl-6 border-l-2 border-primary/10">
                <a
                  href="/sourcing-expert"
                  onClick={handleCloseMenu}
                  className="text-base font-medium text-foreground-muted hover:text-primary transition-colors flex items-start gap-2 group"
                >
                  <svg className="w-4 h-4 mt-0.5 text-primary/30 group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Sourcing d'expert</span>
                </a>
                <a
                  href="/rse"
                  onClick={handleCloseMenu}
                  className="text-base font-medium text-foreground-muted hover:text-primary transition-colors flex items-start gap-2 group"
                >
                  <svg className="w-4 h-4 mt-0.5 text-primary/30 group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Conformité & RSE</span>
                </a>
              </div>
            </div>

            {/* Section Consultants */}
            <div className="w-full">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Pour les consultants
              </h3>
              <div className="flex flex-col gap-3 pl-6 border-l-2 border-accent/20">
                <a
                  href="/devenir-consultant"
                  onClick={handleCloseMenu}
                  className="text-base font-medium text-foreground-muted hover:text-primary transition-colors flex items-start gap-2 group"
                >
                  <svg className="w-4 h-4 mt-0.5 text-primary/30 group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Trouver une mission</span>
                </a>
                <a
                  href="/partenaires-avantages"
                  onClick={handleCloseMenu}
                  className="text-base font-medium text-foreground-muted hover:text-primary transition-colors flex items-start gap-2 group"
                >
                  <svg className="w-4 h-4 mt-0.5 text-primary/30 group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Avantages Membres</span>
                </a>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

          {/* Autres liens de navigation */}
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => !link.isExternal && handleSmoothScroll(e, link.href)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors w-full flex items-center gap-2 group"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <svg className="w-4 h-4 text-primary/30 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {link.label}
            </a>
          ))}

          {/* Séparateur */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <Button
              as="a"
              href="/ai"
              variant="primary"
              size="large"
              className="w-full justify-center"
            >
              Je recherche un expert
            </Button>
            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              variant="outline"
              size="large"
              className="w-full justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Je suis expert
            </Button>

            {/* Login Link */}
            <a
              href="https://app.surly.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center font-medium text-foreground-muted hover:text-primary transition-colors mt-2"
            >
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
