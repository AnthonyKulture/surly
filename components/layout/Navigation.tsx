"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#constat", label: "Le Constat" },
  { href: "#mission", label: "Notre Mission" },
  { href: "#piliers", label: "Nos Piliers" },
  { href: "#promesse", label: "La Promesse" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = isMobileMenuOpen ? "" : "hidden";
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    handleCloseMenu();
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] py-md bg-background border-b border-primary/[0.12] transition-all duration-150",
          isScrolled && "shadow-subtle"
        )}
      >
        <div className="flex items-center justify-between max-w-[1280px] mx-auto px-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Surly Home">
            <svg viewBox="0 0 120 32" className="w-[90px] h-7">
              <text x="0" y="26" className="logo-text">
                SURLY
              </text>
            </svg>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-small font-medium text-primary uppercase tracking-[0.05em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-150 hover:after:w-full"
                tabIndex={0}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-sm">
            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Je suis Talent
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="primary"
              onClick={(e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
            >
              Je recrute
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden flex flex-col gap-[5px] p-xs bg-transparent border-none cursor-pointer",
              isMobileMenuOpen && "[&_span:nth-child(1)]:rotate-45 [&_span:nth-child(1)]:translate-y-[6px] [&_span:nth-child(2)]:opacity-0 [&_span:nth-child(3)]:-rotate-45 [&_span:nth-child(3)]:-translate-y-[6px]"
            )}
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="block w-6 h-px bg-primary transition-all duration-150" />
            <span className="block w-6 h-px bg-primary transition-all duration-150" />
            <span className="block w-6 h-px bg-primary transition-all duration-150" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-[999] flex items-center justify-center transition-all duration-150",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center gap-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-headline font-light text-primary uppercase tracking-[0.05em] hover:opacity-60 transition-opacity"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-sm mt-lg">
            <Button
              as="a"
              href="https://app.surly.fr/postulant"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              Je suis Talent
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="primary"
              onClick={(e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              Je recrute
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

