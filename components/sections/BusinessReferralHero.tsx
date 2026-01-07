import { PageHero } from "@/components/ui/PageHero";

export const BusinessReferralHero = () => {
    return (
        <PageHero
            badge="Partagez une opportunité"
            title="Programme d'apport d'affaires"
            highlight={
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white px-6 sm:px-8 py-5 sm:py-6 rounded-2xl shadow-xl border-2 border-accent/20">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                        Gagnez <span className="text-accent">3%</span> du montant facturé*
                    </p>
                    <p className="text-sm mt-2 text-center text-white/90">
                        en partageant une opportunité
                    </p>
                </div>
            }
            subtitle={
                <>
                    Vous connaissez un client avec un besoin en <strong className="text-foreground font-semibold">expertise Banque ou Assurance</strong> ?
                    Partagez l'opportunité et soyez récompensé pour chaque mission conclue.
                </>
            }
            cta={{
                text: "Je partage une opportunité",
                href: "/formulaire-apport-affaires"
            }}
        />
    );
};

