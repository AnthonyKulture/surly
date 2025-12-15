"use client";

import { useState, useEffect } from "react";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

export const LeadMagnet = () => {
    const { ref, shouldAnimate } = useScrollAnimation();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with email service
        console.log("Email submitted:", email);
        setSubmitted(true);
    };

    return (
        <section className="relative py-24 lg:py-28 bg-primary text-background overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial-dark pointer-events-none" />

            <div className="container relative z-[1]">
                <div
                    ref={ref}
                    className={cn(
                        "max-w-3xl mx-auto text-center transition-all duration-700",
                        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    )}
                >
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent/20 text-accent rounded-2xl">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-10h-4v1h4v-1zm0 2h-4v1h4v-1zm-6 0H8v1h2v-1zm0-2H8v1h2v-1z" />
                        </svg>
                    </div>

                    <SectionHeader
                        tag="Guide Gratuit"
                        title={
                            <>
                                Les 7 Erreurs Fatales
                                <br />
                                <span className="text-accent">du Recrutement Banque & Assurance</span>
                            </>
                        }
                        centered
                        light
                    />

                    <p className="text-lg text-background/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                        Découvrez les pièges qui coûtent en moyenne <strong className="text-background">3 mois de retard</strong> et{" "}
                        <strong className="text-background">40% de budget supplémentaire</strong> sur vos recrutements.
                    </p>

                    {!submitted ? (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                            data-lpignore="true"
                            data-form-type="other"
                            suppressHydrationWarning={true}
                        >
                            <div className="flex-1 relative">
                                {mounted ? (
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="votre.email@entreprise.fr"
                                        required
                                        data-lpignore="true"
                                        autoComplete="off"
                                        className="w-full px-6 py-4 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition-colors"
                                    />
                                ) : (
                                    <div className="w-full px-6 py-4 bg-background/10 border border-background/20 rounded-lg text-background/40 flex items-center">
                                        votre.email@entreprise.fr
                                    </div>
                                )}
                            </div>
                            <Button type="submit" variant="outline" size="large">
                                <span>Télécharger le guide</span>
                                <ArrowIcon />
                            </Button>
                        </form>
                    ) : (
                        <div className="p-6 bg-accent/20 border border-accent/30 rounded-lg max-w-lg mx-auto">
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span className="text-lg font-semibold text-background">Merci !</span>
                            </div>
                            <p className="text-sm text-background/70">
                                Consultez votre boîte mail, le guide arrive dans quelques instants.
                            </p>
                        </div>
                    )}

                    <p className="text-xs text-background/50 mt-6">
                        🔒 Vos données sont protégées. Pas de spam, désinscription en 1 clic.
                    </p>
                </div>
            </div>
        </section>
    );
};
