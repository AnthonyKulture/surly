"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const FrenchTechSection = () => {
    return (
        <section
            id="french-tech"
            className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
        >
            <div className="container relative z-[1]">
                <SectionHeader
                    tag="French Tech"
                    title={
                        <>
                            Lauréat du programme
                            <br />
                            <span className="text-primary">« Je choisis la French Tech »</span>
                        </>
                    }
                    centered
                />

                <div className="max-w-4xl mx-auto">
                    <Reveal delay={100} duration={800}>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">
                            {/* Logo centered at top */}
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                                    <Image
                                        src="/french-tech-logo.jpg"
                                        alt="Je choisis la French Tech"
                                        width={128}
                                        height={128}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-6">
                                    Surly, partenaire stratégique de confiance
                                </h3>
                            </div>

                            <div className="space-y-6 text-base text-foreground-muted">
                                <p>
                                    Lauréat du programme gouvernemental « Je choisis la French Tech », Surly s'affirme comme un <span className="font-semibold text-foreground">partenaire stratégique de confiance</span> pour les grands acteurs bancaires et assurantiels.
                                </p>

                                <p>
                                    Ce référencement institutionnel valide non seulement la <span className="font-semibold text-foreground">pérennité de notre modèle</span>, mais s'inscrit directement dans la politique d'<span className="font-semibold text-foreground">Achats Responsables</span> de nos clients. En collaborant avec Surly, vous soutenez l'innovation souveraine française tout en concrétisant vos engagements formels d'augmentation de la part des start-up dans vos volumes d'achats.
                                </p>

                                <p>
                                    Nous garantissons une <span className="font-semibold text-foreground">expertise 100% locale</span> et une <span className="font-semibold text-foreground">conformité stricte</span>, alignée avec les exigences de sécurité du secteur financier.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
