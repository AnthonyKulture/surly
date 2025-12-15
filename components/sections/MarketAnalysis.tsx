"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

export const MarketAnalysis = () => {
    return (
        <section
            id="market-analysis"
            className="relative py-24 lg:py-32 bg-primary text-background overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial-dark pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag="Réalité & diagnostic"
                    title={
                        <>
                            Le recrutement en Banque & Assurance
                            <br />
                            <span className="text-accent">est à réinventer.</span>
                        </>
                    }
                    light
                    centered
                />

                <Reveal delay={100} duration={1000}>
                    <p className="text-lg text-background/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                        Pénurie de talents, exigences techniques pointues, urgence... le secteur fait face à une tempête parfaite.
                        Et pourtant, <strong className="text-white">on continue d&apos;utiliser des outils généralistes conçus pour la masse</strong>, ignorant les spécificités critiques de notre industrie.
                    </p>
                </Reveal>

                {/* The Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-stretch">
                    {/* Left: The Reality */}
                    <Reveal delay={200} duration={1000} className="h-full">
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-accent rounded-full"></span>
                                La réalité du terrain
                            </h3>

                            <div className="flex flex-col gap-4 flex-1">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-accent font-semibold mb-2">Le marché est caché</h4>
                                    <p className="text-background/70 text-sm leading-relaxed">
                                        Les meilleurs experts (Actuaires, PMO, Architectes SI) sont en poste. Ils ne répondent plus aux annonces LinkedIn ou Indeed. <span className="text-white/90 font-medium">Ils fonctionnent par réseau.</span>
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-accent font-semibold mb-2">La complexité technique</h4>
                                    <p className="text-background/70 text-sm leading-relaxed">
                                        Un mot-clé n&apos;est pas une compétence. Confondre &quot;connaissance Bâle III&quot; et &quot;expérience d&apos;implémentation&quot; coûte des mois de retard sur vos projets réglementaires.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-accent font-semibold mb-2">L&apos;urgence permanente</h4>
                                    <p className="text-background/70 text-sm leading-relaxed">
                                        Vos projets ont des deadlines strictes (BCE, ACPR). Chaque semaine perdue à trier des CVs inadaptés augmente le risque opérationnel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: The Diagnosis */}
                    <Reveal delay={300} duration={1000} className="h-full">
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                                L&apos;approche généraliste
                            </h3>

                            <div className="flex flex-col gap-4 flex-1">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg relative flex-1 hover:bg-white/10 transition-colors flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-red-400 font-semibold mb-2">Volume sans pertinence</h4>
                                        <p className="text-background/70 text-sm leading-relaxed mb-4">
                                            Chercher un expert pointu sur un jobboard, c&apos;est chercher une aiguille dans une botte de foin.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-background/10 rounded border border-white/5 flex items-center justify-between gap-4 mt-2">
                                        <div className="flex flex-col">
                                            <div className="text-xl font-bold text-white">10 000+</div>
                                            <div className="text-sm font-medium text-white/90">Résultats</div>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <div className="text-lg font-bold text-accent">~50</div>
                                            <div className="text-sm font-medium text-white/90">Qualifiés</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-red-400 font-semibold mb-2">Approche de masse destructive</h4>
                                    <p className="text-background/70 text-sm leading-relaxed">
                                        L&apos;envoi massif de messages génériques est ignoré par les experts. Plus grave, cette méthode <span className="text-white/90 font-medium">dévalorise durablement votre marque employeur</span> auprès d&apos;une communauté où la réputation est clé.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex-1 hover:bg-white/10 transition-colors">
                                    <h4 className="text-red-400 font-semibold mb-2">Absence de validation</h4>
                                    <p className="text-background/70 text-sm leading-relaxed">
                                        Les recruteurs généralistes ne peuvent pas valider techniquement un Actuaire ou un CISO. Ils transmettent des CVs, pas des compétences vérifiées.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Conclusion / Surly Context */}
                <Reveal delay={400} duration={1000}>
                    <div className="relative mt-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center overflow-hidden">



                        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Surly n&apos;est pas un autre cabinet de recrutement.
                            </h3>
                            <p className="text-lg text-background/80 leading-relaxed">
                                C&apos;est la réponse d&apos;experts du secteur qui en avaient assez de voir des projets échouer faute de bonnes compétences. Nous avons construit <span className="text-accent font-medium">la plateforme que nous aurions aimé avoir</span>.
                            </p>
                            <div className="pt-4 flex flex-wrap justify-center gap-4 text-sm font-medium text-background/60">
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    Par des experts
                                </span>
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    Pour des experts
                                </span>
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    100% Bancassurance
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Harmonized CTA */}
                <Reveal delay={500} duration={1000}>
                    <div className="mt-12 text-center">
                        <Button variant="outline-light" className="pointer-events-auto cursor-default">
                            <span>Comprendre notre diagnostic</span>
                            <ArrowIcon />
                        </Button>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};
