"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Partner {
    name: string;
    logo: string;
    description: string;
    features: string[];
    benefit: string;
}

const partners: Partner[] = [
    {
        name: "Mammouth AI",
        logo: "/logos/partners/mammouth-surly.jpg",
        description: "Mammouth donne accès aux meilleurs modèles d'IA dans une même interface.",
        features: [
            "Mammouth mets à jour les dernières versions des modèles à leur sortie",
            "La fonction \"reprompting\" permet de comparer les modèles",
            "Les mammouths personnalisés : Créer votre propre mammouth avec vos propres instructions pour organiser vos projets",
            "La recherche approfondie via Perplexity",
            "Documents & Images: Analysez images et documents…"
        ],
        benefit: "Bénéficiez de 1 mois offert sur Mammouth AI avec l'abonnement Standard."
    },
    {
        name: "Qonto",
        logo: "/logos/partners/qonto-surly.jpg",
        description: "Solution bancaire professionnelle tout-en-un pour centraliser vos finances et simplifier votre comptabilité.",
        features: [
            "Gérez facilement vos dépenses, suivez vos encaissements et automatisez vos tâches administratives"
        ],
        benefit: "Bénéficiez de vos 2 premiers mois offerts sur Qonto et créez gratuitement votre société si vous le souhaitez grâce à notre partenariat."
    },
    {
        name: "Shine",
        logo: "/logos/partners/shine-surly.jpg",
        description: "Shine propose un compte pro 100 % en ligne et un véritable copilote administratif. Compte pro, factures, comptabilité, assurances…",
        features: [
            "Il simplifie l'expérience bancaire et administrative des entrepreneurs"
        ],
        benefit: "En faisant partie intégrante de la communauté Surly, bénéficiez de la création d'un compte PRO Shine pour 0€ !"
    },
    {
        name: "WeWork",
        logo: "/logos/partners/wework-surly.jpg",
        description: "Réseau mondial d'espaces de coworking premium offrant des environnements de travail flexibles, professionnels et inspirants.",
        features: [
            "Accédez à des bureaux entièrement équipés, des salles de réunion high-tech et des espaces communs conçus pour favoriser la productivité et la créativité"
        ],
        benefit: "Surly vous fait profiter d'une offre spéciale pour devenir membre de WeWork. Bénéficiez de 1 mois gratuit pour notre communauté."
    },
    {
        name: "Pennylane",
        logo: "/logos/partners/pennylane-surly.jpg",
        description: "Un logiciel complet, puissant et intégré à tous vos outils métiers.",
        features: [
            "Pennylane rassemble tous les outils et toutes les intégrations nécessaires pour gérer l'ensemble de vos dépenses, votre facturation, votre trésorerie ainsi que votre comptabilité"
        ],
        benefit: "Bénéficiez de 200€ de bon cadeau et 1 mois offert sur l'abonnement pour les indépendants."
    },
    {
        name: "Konectiv",
        logo: "/logos/partners/konectiv-surly.jpg",
        description: "En choisissant le portage salarial avec Surly et Konectiv, vous optez pour une solution qui allie sécurité et liberté.",
        features: [
            "Profitez des avantages du salariat tout en conservant votre indépendance et votre flexibilité",
            "Contactez-nous dès aujourd'hui pour en savoir plus sur notre offre de portage salarial et commencez à développer votre activité en toute sérénité !"
        ],
        benefit: "Des tarifs préférentiels, remboursement des certifications et des formations, et accompagnement personnalisé. Contactez-nous pour avoir le détail de l'offre."
    },
    {
        name: "NordVPN",
        logo: "/logos/partners/nordvpn-surly.jpg",
        description: "Protégez vos activités en ligne.",
        features: [
            "Grâce à de nombreuses technologies de pointe, NordVPN préserve vos appareils des logiciels malveillants et votre navigation des regards indiscrets",
            "Au point qu'il faudrait des milliards d'années à l'ordinateur le plus puissant du monde pour déchiffrer vos données"
        ],
        benefit: "Bénéficiez de 70% de réduction pour tout abonnement à NordVPN + 3 mois offerts avec Surly."
    },
    {
        name: "Ziplo",
        logo: "/logos/partners/ziplo-surly.jpg",
        description: "Transfert de fichiers sécurisé et preuve d'antériorité en ligne.",
        features: [
            "Ziplo aide à défendre votre Propriété Intellectuelle. Ziplo vous permet de créer des preuves d'antériorité pour vos écrits, vos formations, votre code informatique, vos videos, vos dessins, vos pages web…",
            "Dépôt de fichiers avec horodatage qualifié ayant force probante",
            "Transfert de fichiers sécurisé et souverain. Vos fichiers sont stockés exclusivement dans des datacenters Français (RGPD)"
        ],
        benefit: "Offre exclusive via un code promo sur l'offre Ziplo+."
    }
];

export const PartnersGrid = () => {
    return (
        <section
            id="partners-grid"
            className="relative py-20 lg:py-24 bg-background-off overflow-hidden"
        >
            <div className="container relative z-[1]">
                <SectionHeader
                    tag="Nos Partenaires"
                    title={
                        <>
                            Découvrez tous nos
                            <br />
                            <span className="text-primary">partenaires premium</span>
                        </>
                    }
                    subtitle="Des outils et services sélectionnés pour simplifier votre quotidien professionnel"
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={partner.name}
                            partner={partner}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface PartnerCardProps {
    partner: Partner;
    index: number;
}

const PartnerCard = ({ partner, index }: PartnerCardProps) => {
    return (
        <Reveal
            delay={index * 100}
            duration={800}
            className="h-full"
        >
            <div
                className={cn(
                    "relative p-6 md:p-8 rounded-xl transition-all duration-300 h-full flex flex-col",
                    "bg-white border-2 border-primary/5 hover:border-primary/20",
                    "shadow-sm hover:shadow-lg hover:-translate-y-1"
                )}
            >
                {/* Logo */}
                <div className="mb-6 flex items-center justify-center h-16 bg-gray-50 rounded-lg p-3">
                    <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={200}
                        height={64}
                        className="object-contain"
                    />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold leading-tight mb-3 text-foreground text-center">
                    {partner.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    {partner.description}
                </p>

                {/* Features */}
                {partner.features.length > 0 && (
                    <div className="mb-4 flex-grow">
                        <ul className="space-y-2">
                            {partner.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-foreground-muted">
                                    <svg
                                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Benefit Highlight */}
                <div className="mt-auto mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                    <div className="flex items-start gap-2">
                        <svg
                            className="w-5 h-5 text-accent-dim flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div>
                            <p className="text-xs font-semibold text-primary mb-1">
                                Avantages Surly
                            </p>
                            <p className="text-xs text-foreground-muted leading-relaxed">
                                {partner.benefit}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Button
                    as="a"
                    href="http://app.surly.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="default"
                    className="w-full"
                >
                    <span>Se connecter</span>
                    <ArrowIcon />
                </Button>
            </div>
        </Reveal>
    );
};
