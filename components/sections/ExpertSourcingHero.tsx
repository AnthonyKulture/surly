import { PageHero } from "@/components/ui/PageHero";

export const ExpertSourcingHero = () => {
    return (
        <PageHero
            badge="Sourcing de talents ultra-spécialisés"
            title={
                <>
                    Trouvez votre expert
                    <span className="text-primary block mt-1">Banque & Assurance</span>
                </>
            }
            subtitle={
                <>
                    <strong className="text-foreground font-semibold">Acteurs du secteur :</strong> nous agissons soit via notre plateforme autonome, soit en tant que cabinet spécialisé. Choisissez la formule qui correspond à votre organisation.
                </>
            }
        />
    );
};

