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
                    <strong className="text-foreground font-semibold">Grandes banques, compagnies d'assurance, ESN et cabinets de conseil</strong> : nous agissons soit en cabinet spécialisé, soit via notre plateforme autonome. Choisissez la formule qui correspond à votre organisation.
                </>
            }
        />
    );
};

