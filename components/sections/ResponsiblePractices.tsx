"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const ResponsiblePractices = () => {
    return (
        <>
            {/* Responsible Purchasing Section */}
            <section
                id="responsible-purchasing"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <SectionHeader
                        tag="Achats Responsables"
                        title={
                            <>
                                Des achats
                                <br />
                                <span className="text-primary">responsables</span>
                            </>
                        }
                        centered
                    />

                    <div className="max-w-4xl mx-auto">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 mb-8">
                                {/* Logo centered at top - larger */}
                                <div className="flex flex-col items-center text-center mb-8">
                                    <div className="w-32 h-32 mb-6 flex items-center justify-center">
                                        <Image
                                            src="/logo-achats-responsables.webp"
                                            alt="Charte Relations fournisseurs & Achats responsables"
                                            width={128}
                                            height={128}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        Signataire de la charte Relations fournisseurs & Achats responsables
                                    </h3>
                                    <p className="text-base text-foreground-muted max-w-2xl">
                                        Nous construisons des relations équitables et durables avec nos fournisseurs et freelances partenaires.
                                    </p>
                                </div>

                                <ul className="space-y-3 text-center">
                                    <li className="text-sm text-foreground-muted">
                                        <span className="font-semibold text-foreground">Transparence totale</span> des processus d'achat
                                    </li>
                                    <li className="text-sm text-foreground-muted">
                                        <span className="font-semibold text-foreground">Respect rigoureux</span> des délais de paiement
                                    </li>
                                    <li className="text-sm text-foreground-muted">
                                        <span className="font-semibold text-foreground">Dialogue ouvert</span> en cas de litige
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Responsible Digital Section */}
            <section
                id="responsible-digital"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <SectionHeader
                        tag="Numérique Responsable"
                        title={
                            <>
                                Un numérique
                                <br />
                                <span className="text-primary">responsable</span>
                            </>
                        }
                        centered
                    />

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 h-full flex flex-col">
                                {/* Larger logo */}
                                <div className="w-32 h-32 mb-6 flex items-center justify-center mx-auto">
                                    <Image
                                        src="/logo_INR.svg"
                                        alt="Charte Numérique Responsable"
                                        width={128}
                                        height={128}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                                    Engagement Charte Numérique Responsable
                                </h3>
                                <p className="text-sm text-foreground-muted mb-6 flex-grow text-center">
                                    Surly s'engage à minimiser l'empreinte écologique du numérique en optimisant ses infrastructures technologiques. Nous adoptons des pratiques de sobriété numérique pour réduire notre consommation énergétique.
                                </p>

                                <ul className="space-y-2 text-sm text-foreground-muted text-center">
                                    <li>• Hébergement écoresponsable</li>
                                    <li>• Sensibilisation aux bonnes pratiques numériques</li>
                                    <li>• Promotion du télétravail et réunions virtuelles</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={200} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 h-full flex flex-col">
                                {/* Neon Logo */}
                                <div className="w-32 h-32 mb-6 flex items-center justify-center mx-auto">
                                    <Image
                                        src="/logo-neon.svg"
                                        alt="Neon Database"
                                        width={128}
                                        height={128}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                                    Sécurité des données & infrastructure Cloud
                                </h3>
                                <p className="text-sm font-medium text-primary mb-2 text-center">
                                    Neon database : Sécurité & protection des données
                                </p>
                                <p className="text-sm text-foreground-muted mb-6 flex-grow text-center">
                                    Chez Surly, la sécurité n'est pas une option, c'est un engagement. Nous protégeons les données personnelles, professionnelles et contractuelles de l'ensemble de nos utilisateurs avec les plus hauts standards de sécurité numérique.
                                </p>

                                <ul className="space-y-2 text-sm text-foreground-muted text-center">
                                    <li>• Confidentialité des informations</li>
                                    <li>• Intégrité des échanges</li>
                                    <li>• Résilience face aux cybermenaces</li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Ethics and Employee Well-being Section */}
            <section
                id="ethics-wellbeing"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">


                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Éthique et conformité
                                </h3>
                                <h4 className="text-base font-semibold text-primary mb-3">
                                    L'intégrité est notre priorité absolue
                                </h4>
                                <p className="text-sm text-foreground-muted mb-6">
                                    L'intégrité guide chacune de nos actions. Surly respecte les plus hauts standards de sécurité grâce à son infrastructure Neon, certifiée SOC 2 Type II et ISO 27001.
                                </p>

                                <ul className="space-y-3 text-sm text-foreground-muted">
                                    <li>
                                        <span className="font-semibold text-foreground">Audit des partenaires</span><br />
                                        Vérification systématique et continue
                                    </li>
                                    <li>
                                        <span className="font-semibold text-foreground">Protection maximale</span><br />
                                        Chiffrement AES-256 et surveillance 24/7
                                    </li>
                                    <li>
                                        <span className="font-semibold text-foreground">Conformité totale</span><br />
                                        GDPR, CCPA et standards internationaux
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={200} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">


                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Bien-être des collaborateurs
                                </h3>
                                <p className="text-sm text-foreground-muted mb-6">
                                    Nous cultivons un environnement de travail épanouissant et stimulant :
                                </p>

                                <ul className="space-y-2 text-sm text-foreground-muted">
                                    <li>• Formation et développement personnel</li>
                                    <li>• Environnement inclusif et respectueux</li>
                                    <li>• Mesure régulière du climat interne</li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
};


