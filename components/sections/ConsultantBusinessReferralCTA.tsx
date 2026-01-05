"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

export const ConsultantBusinessReferralCTA = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary/10 to-accent/5">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl border-2 border-primary/20 shadow-2xl p-8 sm:p-12">
                        <Reveal delay={100} duration={800}>
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                    <span className="text-xs sm:text-sm font-semibold text-primary">
                                        Programme Apport d'Affaires
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                    Vous connaissez un client<br />avec un <span className="text-primary">besoin</span> ?
                                </h2>
                                <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                                    Partagez l'opportunité et touchez <strong className="text-foreground font-semibold">3% de commission</strong> sur chaque mission conclue
                                </p>
                            </div>
                        </Reveal>

                        {/* CTA */}
                        <Reveal delay={300} duration={800}>
                            <div className="text-center">
                                <Button
                                    as="a"
                                    href="/apport-affaires"
                                    size="large"
                                    variant="outline"
                                    className="shadow-lg hover:shadow-xl"
                                >
                                    <span>Découvrir le programme</span>
                                    <ArrowIcon />
                                </Button>
                                <p className="text-xs text-foreground-muted mt-4">
                                    *Conditions : La rémunération de 3% s'applique sur le montant HT facturé. Le paiement est effectué à partir de l'encaissement de la première facture de la mission.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
