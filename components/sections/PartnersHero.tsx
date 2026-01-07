import { PageHero } from "@/components/ui/PageHero";

export const PartnersHero = () => {
    return (
        <PageHero
            badge="Pour les consultants Surly"
            title={
                <>
                    Partenaires premium &
                    <span className="text-primary block mt-1">avantages exclusifs</span>
                </>
            }
            subtitle="Nos partenaires ont été sélectionnés avec soin et leurs offres négociées aux meilleurs tarifs pour faciliter votre vie professionnelle et personnelle."
        />
    );
};

