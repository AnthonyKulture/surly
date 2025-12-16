import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

interface LegalPageLayoutProps {
    title: string;
    lastUpdated?: string;
    children: ReactNode;
}

export const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
    return (
        <>
            <Navigation showAnnouncementBar={false} />

            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 pattern-grid opacity-30" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="min-h-screen bg-gradient-to-b from-white via-primary/[0.01] to-white pt-28 pb-20 relative">
                <div className="container max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <Reveal>
                        <div className="relative mb-12 pb-8">
                            {/* Decorative accent line */}
                            <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full mb-6" />

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 tracking-tight leading-tight">
                                {title}
                            </h1>

                            {lastUpdated && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm text-primary font-medium">
                                        Dernière mise à jour : {lastUpdated}
                                    </span>
                                </div>
                            )}

                            {/* Bottom border with gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                        </div>
                    </Reveal>

                    {/* Content with enhanced styling */}
                    <div className="legal-content-enhanced">
                        {children}
                    </div>

                    {/* Bottom CTA Section */}
                    <Reveal>
                        <div className="mt-20 p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Des questions sur nos conditions ?
                            </h3>
                            <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
                                Notre équipe juridique est à votre disposition pour répondre à toutes vos questions concernant ces conditions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="mailto:contact@surly.fr"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Nous contacter
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
                                >
                                    Retour à l'accueil
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            <Footer />
        </>
    );
};
