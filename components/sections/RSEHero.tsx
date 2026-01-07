import { PageHero } from "@/components/ui/PageHero";

export const RSEHero = () => {
    return (
        <PageHero
            badge="Marketplace éthique • Intermédiation transparente • Impact mesurable"
            title={
                <>
                    Nos <span className="text-primary">engagements</span>
                </>
            }
            subtitle={
                <>
                    Chez Surly, la <strong className="text-foreground font-semibold">responsabilité sociétale et environnementale (RSE)</strong> est au cœur de notre ADN. En tant que plateforme innovante spécialisée dans le secteur banque-assurance, nous nous engageons à offrir un service éthique, durable et transparent.
                </>
            }
            highlight={
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-sm font-semibold text-primary">Charte Achats Responsables</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-sm font-semibold text-primary">Charte Numérique Responsable</span>
                    </div>
                </div>
            }
        />
    );
};

