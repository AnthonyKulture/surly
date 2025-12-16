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
                className="relative py-24 lg:py-28 bg-primary/[0.02] border-b border-primary/10 overflow-hidden"
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

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <PracticeItem
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        }
                                        title="Transparence totale"
                                        description="des processus d'achat"
                                    />
                                    <PracticeItem
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        }
                                        title="Respect rigoureux"
                                        description="des délais de paiement"
                                    />
                                    <PracticeItem
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        }
                                        title="Dialogue ouvert"
                                        description="en cas de litige"
                                    />
                                </div>
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

                                <div className="space-y-3">
                                    <FeatureBadge text="Hébergement écoresponsable" />
                                    <FeatureBadge text="Sensibilisation aux bonnes pratiques numériques" />
                                    <FeatureBadge text="Promotion du télétravail et réunions virtuelles" />
                                </div>
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

                                <div className="space-y-3">
                                    <FeatureBadge text="Confidentialité des informations" />
                                    <FeatureBadge text="Intégrité des échanges" />
                                    <FeatureBadge text="Résilience face aux cybermenaces" />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Ethics and Employee Well-being Section */}
            <section
                id="ethics-wellbeing"
                className="relative py-24 lg:py-28 bg-primary/[0.02] border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">
                                <div className="w-14 h-14 p-3 bg-primary/5 text-primary rounded-xl mb-6 flex items-center justify-center">
                                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="8" y="14" width="32" height="28" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 14V10a8 8 0 0116 0v4" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="24" cy="28" r="3" fill="currentColor" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Éthique et conformité
                                </h3>
                                <h4 className="text-base font-semibold text-primary mb-3">
                                    L'intégrité est notre priorité absolue
                                </h4>
                                <p className="text-sm text-foreground-muted mb-6">
                                    L'intégrité guide chacune de nos actions. Surly respecte les plus hauts standards de sécurité grâce à son infrastructure Neon, certifiée SOC 2 Type II et ISO 27001.
                                </p>

                                <div className="space-y-3">
                                    <SecurityFeature
                                        title="Audit des partenaires"
                                        description="Vérification systématique et continue"
                                    />
                                    <SecurityFeature
                                        title="Protection maximale"
                                        description="Chiffrement AES-256 et surveillance 24/7"
                                    />
                                    <SecurityFeature
                                        title="Conformité totale"
                                        description="GDPR, CCPA et standards internationaux"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={200} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">
                                <div className="w-14 h-14 p-3 bg-primary/5 text-primary rounded-xl mb-6 flex items-center justify-center">
                                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="24" cy="16" r="8" />
                                        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" strokeLinecap="round" />
                                        <path d="M32 22l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Bien-être des collaborateurs
                                </h3>
                                <p className="text-sm text-foreground-muted mb-6">
                                    Nous cultivons un environnement de travail épanouissant et stimulant :
                                </p>

                                <div className="space-y-3">
                                    <WellbeingItem text="Formation et développement personnel" />
                                    <WellbeingItem text="Environnement inclusif et respectueux" />
                                    <WellbeingItem text="Mesure régulière du climat interne" />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
};

// Helper Components
const PracticeItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="flex flex-col items-center text-center p-4 bg-primary/5 rounded-lg">
        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-3">
            {icon}
        </div>
        <h4 className="text-sm font-bold text-foreground mb-1">{title}</h4>
        <p className="text-xs text-foreground-muted">{description}</p>
    </div>
);

const FeatureBadge = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg border border-primary/10">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <span className="text-xs font-medium text-foreground-muted">{text}</span>
    </div>
);

const SecurityFeature = ({ title, description }: { title: string; description: string }) => (
    <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
        <h5 className="text-sm font-bold text-foreground mb-1">{title}</h5>
        <p className="text-xs text-foreground-muted">{description}</p>
    </div>
);

const WellbeingItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <span className="text-sm text-foreground-muted">{text}</span>
    </div>
);
