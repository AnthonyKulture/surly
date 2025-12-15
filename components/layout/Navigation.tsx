"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/#market-analysis", label: "Le Constat" },
  { href: "/#dashboard", label: "La Solution" },
  { href: "/#piliers", label: "Notre Approche" },
  { href: "/ai", label: "Surly AI", isExternal: true },
];


interface NavigationProps {
  showAnnouncementBar?: boolean;
}

export const Navigation = ({ showAnnouncementBar = true }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    // Only do smooth scroll if we're on the homepage
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";

    // Extract the hash from href (e.g., "/#market-analysis" -> "#market-analysis")
    const hash = href.includes("#") ? "#" + href.split("#")[1] : "";

    if (isHomePage && hash) {
      e.preventDefault();
      const targetId = hash.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        // Adjust offset for the taller header (Nav + Subheader) or just Nav
        const navHeight = showAnnouncementBar ? 120 : 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
    // If not on homepage, let the link navigate normally to /#section
    handleCloseMenu();
  };

  return (
    <>
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

      {/* Main Nav - Attached below */}
      <div
        className={cn(
          "fixed left-0 right-0 z-[1000] border-b transition-all duration-300",
          showAnnouncementBar ? "top-10" : "top-0",
          "bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60",
          isScrolled
            ? "border-primary/5 shadow-sm"
            : "border-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="transition-all duration-300">
            {/* Main Nav Content */}
            <nav className="flex items-center justify-between px-6 py-3 md:py-4">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center relative z-20"
                aria-label="Surly Home"
              >
                <Logo className="w-[100px] md:w-[120px]" variant="black" />
              </Link>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => !link.isExternal && handleSmoothScroll(e, link.href)}
                    className="text-xs font-semibold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <Button
                  as="a"
                  href="https://app.surly.fr/postulant"
                  variant="ghost"
                  size="default"
                  className="text-xs font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Je suis Talent
                </Button>
                <Button
                  as="a"
                  href="/ai"
                  variant="primary"
                  size="default"
                  className="text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  Je recrute
                </Button>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden relative z-20 p-2 -mr-2 text-foreground"
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
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-3xl z-[900] flex items-center justify-center transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-8"
        )}
      >
        <div className="flex flex-col items-center gap-8 p-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => !link.isExternal && handleSmoothScroll(e, link.href)}
              className="text-2xl font-light text-foreground uppercase tracking-widest hover:text-primary transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              variant="outline"
              size="large"
              className="w-full justify-center"
            >
              Je suis Talent
            </Button>
            <Button
              as="a"
              href="/ai"
              variant="primary"
              size="large"
              className="w-full justify-center shadow-xl shadow-primary/20"
            >
              Je recrute
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

