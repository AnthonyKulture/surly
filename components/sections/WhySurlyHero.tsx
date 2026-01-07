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
                    Le secteur mérite <strong className="text-foreground font-semibold">une plateforme dédiée</strong>, conçue par des experts pour des experts.
                    Surly connecte les meilleurs experts avec les opportunités les plus pertinentes.
                </>
            }
        />
    );
};

