"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Identifiez une opportunité client",
            description: "Vous êtes mis en contact avec un client ou un projet dans les secteurs banque/assurance que vous ne pouvez pas réaliser ?",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Soumettez l'opportunité via un formulaire simple",
            description: "Transmettez-nous les détails du projet. L'équipe Surly prend le relais immédiatement.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "La mission est gagnée, vous êtes rémunéré",
            description: "Une fois la mission signée avec un expert de notre communauté, vous recevez 3% du montant à partir de l'encaissement de la première facture.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container">
                <SectionHeader
                    tag="Comment ça marche ?"
                    title={
                        <>
                            Un processus simple et
                            <br />
                            <span className="text-primary">efficace en 3 étapes</span>
                        </>
                    }
                    centered
                />

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {steps.map((step, i) => (
                        <Reveal key={i} delay={i * 150} duration={800}>
                            <div className="relative p-8 rounded-xl bg-white border-2 border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                                {/* Number Badge */}
                                <div className="absolute top-6 right-6 py-1 px-3 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider rounded-full">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-6 shadow-md">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-xl text-foreground mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-foreground-muted leading-relaxed flex-grow">
                                    {step.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Legal Note */}
                <Reveal delay={500} duration={800}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm max-w-3xl mx-auto mb-8">
                        <p className="text-xs text-foreground-muted leading-relaxed text-center">
                            <strong className="text-foreground">*Conditions :</strong> La rémunération de 3% s'applique sur le montant HT facturé.
                            Le paiement est effectué à partir de l'encaissement de la première facture de la mission.
                            Pour plus de détails, contactez-nous à{" "}
                            <a href="mailto:contact@surly.fr" className="text-primary hover:underline font-medium">
                                contact@surly.fr
                            </a>
                        </p>
                    </div>
                </Reveal>

                {/* CTA */}
                <Reveal delay={600} duration={800}>
                    <div className="text-center">
                        <Button
                            as="a"
                            href="/formulaire-apport-affaires"
                            size="large"
                            className="shadow-lg hover:shadow-xl"
                        >
                            Partager une opportunité maintenant
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
