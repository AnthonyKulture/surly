"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { Button, ArrowIcon } from "@/components/ui/Button";

const testimonials = [
  {
    quote:
      "Surly a révolutionné notre façon de recruter. En 48h, nous avions 3 profils parfaitement qualifiés pour notre projet Solvabilité II. La spécialisation fait toute la différence.",
    author: "Laurent Mercier",
    role: "DRH, Assureur CAC 40",
    image: "/avatars/testimonial_1_1765803183944.png",
  },
  {
    quote:
      "Enfin une plateforme qui comprend notre métier ! Fini les dizaines de CV hors-sujet. Chaque profil proposé par Surly connaît déjà nos enjeux réglementaires.",
    author: "Isabelle Durand",
    role: "Directrice Conformité, Grande Banque",
    image: "/avatars/testimonial_2_1765803218632.png",
    featured: true,
  },
  {
    quote:
      "Surly a compris que la Data Science en banque nécessite une double compétence. J'ai enfin trouvé une mission où mon expertise fraude est valorisée à sa juste hauteur.",
    author: "Thomas Laurent",
    role: "Lead Data Scientist, Fintech",
    image: "/avatars/testimonial_3_1765803276993.png",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
    >
      <div className="container relative z-[1]">
        <SectionHeader
          tag="Témoignages"
          title={
            <>
              Ce qu'ils disent
              <br />
              <span className="text-primary">de Surly</span>
            </>
          }
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>


        {/* Harmonized CTA */}
        <Reveal delay={600} duration={800}>
          <div className="mt-12 text-center">
            <Button variant="outline" className="pointer-events-auto cursor-default">
              <span>Voir plus d'avis clients</span>
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </div>
    </section >
  );
};

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[number];
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const isFeatured = "featured" in testimonial && testimonial.featured;

  return (
    <Reveal
      delay={index * 150}
      duration={800}
      className={cn(
        isFeatured ? "md:col-span-2 lg:col-span-1" : ""
      )}
    >
      <div
        className={cn(
          "p-6 border transition-all duration-300 rounded-lg shadow-sm h-full",
          isFeatured
            ? "bg-primary border-primary text-background"
            : "bg-white border-gray-200 hover:border-primary/20 hover:shadow-md"
        )}
      >
        {/* Quote Icon */}
        <div className="mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(
              "w-6 h-6",
              isFeatured ? "text-accent/80" : "text-primary/20"
            )}
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>

        {/* Quote */}
        <p
          className={cn(
            "text-sm leading-relaxed mb-6",
            isFeatured ? "text-background" : "text-foreground-muted"
          )}
        >
          {testimonial.quote}
        </p>

        {/* Author */}
        <div
          className={cn(
            "flex items-center gap-3 pt-4 border-t",
            isFeatured ? "border-white/20" : "border-gray-200"
          )}
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span
              className={cn(
                "block text-sm font-semibold",
                isFeatured ? "text-background" : "text-foreground"
              )}
            >
              {testimonial.author}
            </span>
            <span
              className={cn(
                "block text-xs",
                isFeatured ? "text-background/70" : "text-foreground-muted"
              )}
            >
              {testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
