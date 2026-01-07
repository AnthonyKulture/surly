import { PageHero } from "@/components/ui/PageHero";

export const ConsultantHero = () => {
    return (
        <PageHero
            badge="Rejoignez la communauté des experts bancassurance"
            title={
                <>
                    Trouvez vos prochaines
                    <span className="text-primary block mt-1">missions et postes</span>
                </>
            }
            subtitle={
                <>
                    Vous avez une expérience en <strong className="text-foreground font-semibold">banque ou assurance</strong> ?
                    <span className="block mt-2 text-primary font-semibold">Accédez aux meilleures missions freelance et postes salariés du secteur bancassurance</span>
                </>
            }
            cta={{
                text: "Je m'inscris maintenant",
                href: "https://app.surly.fr"
            }}
            secondaryCta={{
                text: "En savoir plus",
                href: "#inscription"
            }}
        />
    );
};

