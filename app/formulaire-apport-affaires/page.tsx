import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BusinessReferralForm } from "@/components/forms/BusinessReferralForm";

export default function FormulaireApportAffaires() {
    return (
        <>
            <Navigation showAnnouncementBar={false} />
            <main className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-24 sm:py-32 px-4">
                <div className="container max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Partagez une opportunité
                        </h1>
                        <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                            Gagnez <span className="text-primary font-bold">3%</span> en recommandant un projet banque/assurance à notre communauté d'experts.
                        </p>
                    </div>

                    {/* Form */}
                    <BusinessReferralForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
