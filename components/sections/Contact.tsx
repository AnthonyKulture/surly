"use client";

import { useState, useCallback, useEffect } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button, SendIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ObfuscatedEmail } from "@/components/ui/ObfuscatedEmail";
import { cn } from "@/lib/utils";

interface FormData {
  type: string;
  name: string;
  company: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    type: "",
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus("success");

    setFormData({
      type: "",
      name: "",
      company: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 border border-primary/10 bg-background rounded-xl shadow-lg"
    >
      <div className="mb-6">
        <label
          htmlFor="type"
          className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
        >
          Je suis
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full py-3 px-4 bg-background border border-primary/20 rounded-lg font-sans text-base text-foreground focus:outline-none focus:border-primary transition-all"
        >
          <option value="">Sélectionnez votre profil</option>
          <option value="entreprise">Une entreprise qui recrute</option>
          <option value="talent">Un expert / consultant</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            required
            className="w-full py-3 px-4 bg-background border border-primary/20 rounded-lg font-sans text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
          >
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Votre entreprise"
            className="w-full py-3 px-4 bg-background border border-primary/20 rounded-lg font-sans text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
        >
          Email professionnel
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jean@entreprise.fr"
          required
          className="w-full py-3 px-4 bg-background border border-primary/20 rounded-lg font-sans text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-all"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
        >
          Votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Décrivez votre besoin en recrutement ou votre expertise..."
          required
          className="w-full py-3 px-4 bg-background border border-primary/20 rounded-lg font-sans text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-all resize-y min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="full"
        disabled={isSubmitting}
        className={cn(
          "hover:bg-accent hover:text-primary hover:border-accent whitespace-nowrap flex-nowrap",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        <span>
          {isSubmitting
            ? "Envoi..."
            : submitStatus === "success"
              ? "Envoyé ✓"
              : "Envoyer ma demande"}
        </span>
        {submitStatus === "idle" && !isSubmitting && <SendIcon />}
      </Button>
    </form>
  );
};

export const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-28 bg-background border-b border-primary/10 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid-large opacity-30 pointer-events-none" />

      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-12 laptop:gap-16 items-start">
          {/* Info */}
          <Reveal delay={0} duration={800} direction="right">
            <div>
              <SectionHeader
                tag="Contact"
                title={
                  <>
                    Une question ?
                    <br />
                    <span className="text-gradient">Parlons-en.</span>
                  </>
                }
                className="mb-4 tablet:mb-6"
              />

              <p className="text-base tablet:text-lg text-foreground/70 leading-relaxed mb-6 tablet:mb-8">
                Que vous soyez entreprise en quête d'experts ou consultant cherchant des opportunités, notre équipe vous répond sous 24h.
              </p>

              {/* Contact Methods - Side by side on tablet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 gap-3 tablet:gap-4">
                <div className="flex items-center gap-3 tablet:gap-4 p-3 tablet:p-4 laptop:p-5 border border-primary/10 bg-background rounded-xl shadow-sm hover:border-accent hover:bg-accent/5 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 tablet:w-12 tablet:h-12 flex items-center justify-center bg-primary text-background rounded-xl shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 tablet:w-5 tablet:h-5">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-widest text-foreground/50">
                      Email
                    </span>
                    <ObfuscatedEmail
                      user="contact"
                      domain="surly"
                      tld="fr"
                      className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                <a
                  href="/sourcing-expert"
                  className="flex items-center gap-3 tablet:gap-4 p-3 tablet:p-4 laptop:p-5 border border-primary/10 bg-background rounded-xl shadow-sm hover:border-accent hover:bg-accent/5 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 tablet:w-12 tablet:h-12 flex items-center justify-center bg-primary text-background rounded-xl shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 tablet:w-5 tablet:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-widest text-foreground/50">
                      IA Recrutement
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Essayer Surly AI
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={200} duration={800} direction="left">
            <div>
              {isMounted ? (
                <ContactForm />
              ) : (
                <div className="p-10 border border-primary/10 bg-background rounded-xl shadow-lg min-h-[500px]" />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
