import { PageHero } from "@/components/ui/PageHero";

export const WhySurlyHero = () => {
    return (
        <PageHero
            badge="Experts bancassurance • Missions qualifiées • Plateforme dédiée"
            title={
                <>
                    Pourquoi <span className="text-primary">Surly</span> ?
                </>
            }
            subtitle={
                <>
                    Pourquoi Surly ? <strong className="text-primary font-semibold">La bancassurance mérite une plateforme dédiée</strong>, pensée par des spécialistes pour des experts.
                    Surly connecte les meilleurs profils aux missions et postes les plus pertinents.
                </>
            }
        />
    );
};

