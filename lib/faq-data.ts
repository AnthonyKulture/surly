// FAQ Data - This file contains only plain data (no React components)
// so it can be imported in both server and client components

export interface FAQItem {
    question: string;
    answer: string;
    link?: {
        text: string;
        url: string;
    };
}

export const FAQ_CLIENTS: FAQItem[] = [
    // Présentation
    {
        question: "Qu'est-ce que Surly ?",
        answer: "Surly, c’est le One Stop Shop du sourcing en bancassurance : une marketplace qui connecte banques & assureurs avec des experts du secteur (freelance ou CDI/CDD). Rapide, simple, efficace : vous déposez votre besoin et recevez des profils ultra-ciblés avec un modèle simple, transparent et pensé pour aller vite."
    },
    {
        question: "Sur quels métiers Banque & Assurance Surly est-elle spécialisée ?",
        answer: "Nous sommes spécialisés uniquement sur la bancassurance, avec une couverture complète des métiers et des fonctions supports : conformité & réglementation, risques, actuariat, transformation, IT/data, MOA/AMOA, Finance & marchés, opérations, Commercial, Marketing, RH… Objectif : vous proposer des profils qui comprennent réellement vos enjeux sectoriels."
    },
    {
        question: "Quelle différence avec les solutions généralistes ?",
        answer: "La différence, c’est la spécialisation. Surly est conçu uniquement pour la bancassurance : profils ciblés, pré-qualification, et interlocuteurs qui comprennent vos enjeux. Vous obtenez une sélection pertinente plus vite, sans “bruit” ni profils hors sujet — pour du freelance comme pour du CDI/CDD."
    },
    // Utilisation plateforme
    {
        question: "Comment fonctionne la plateforme Surly ?",
        answer: "Vous avez deux options : 1) Cabinet de conseil : nos talent managers qualifient votre besoin et vous présentent 2-3 profils pertinents avec accompagnement complet. 2) Accès plateforme : vous accédez directement à notre base d'experts pré-qualifiés et gérez vos recrutements en autonomie."
    },
    {
        question: "Comment utiliser l'IA Surly pour trouver un expert ?",
        answer: "Notre assistant IA analyse votre besoin en temps réel et identifie les profils les plus pertinents dans notre base. Décrivez simplement votre recherche (compétences, durée, contexte de mission) et notre équipe vous recontactera dans les plus brefs délais avec une sélection de candidats qualifiés. Un moyen rapide et efficace d'initier votre recherche, disponible 24h/24."
    },
    {
        question: "Quel est le délai moyen pour recevoir des profils ?",
        answer: "Avec l'accès plateforme, vous accédez instantanément aux profils via notre moteur de recherche boosté par un algorithme de matching puissant. Avec l'accompagnement cabinet, nos talent managers vous transmettent une proposition commerciale détaillée avec les dossiers de compétences (CV) des candidats sélectionnés sous 48h maximum."
    },
    {
        question: "Les profils sont-ils vérifiés ?",
        answer: "Oui, tous nos experts sont vérifiés. Chaque consultant justifie d'au moins une expérience significative dans le secteur Banque ou Assurance, validée par notre équipe avant référencement."
    },
    // Tarification
    {
        question: "Quels sont les tarifs de Surly ?",
        answer: "L’accès à Surly est 100% gratuit pour les entreprises comme pour les experts : vous pouvez publier un besoin, consulter les profils et échanger sans frais. Les TJM et salaires sont affichés en toute transparence. Surly se rémunère via une commission appliquée uniquement en cas de contractualisation (mission ou recrutement)."
    },
    {
        question: "Y a-t-il des frais d'inscription ?",
        answer: "Non, l'inscription et l'accès à la plateforme sont totalement gratuits pour tous (entreprises et consultants). Aucun frais caché."
    },
    {
        question: "Quelle est la garantie en cas de problème avec un consultant ?",
        answer: "Avec notre formule cabinet, vous bénéficiez d'une garantie de remplacement en cas d'imprévu. Notre équipe assure un suivi continu de la mission pour garantir votre satisfaction."
    },
    // Types de profils
    {
        question: "Quels types de profils trouve-t-on sur Surly ?",
        answer: "Notre plateforme couvre l'ensemble des métiers du secteur bancassurance : fonctions support (RH, Finance, Juridique, Marketing, Communication, etc.), métiers techniques (IT, Data, Cyber, Infrastructure, etc.), métiers réglementaires (Conformité, Risques, Audit, Contrôle interne, etc.), métiers opérationnels (Opérations, Middle Office, Back Office, etc.), et métiers de direction (Direction Générale, Direction de projet, Transformation, etc.)."
    },
    {
        question: "Proposez-vous des profils pour des postes en CDI ?",
        answer: "Oui, Surly propose aussi bien des missions freelance que des postes en CDI ou CDD. Nos consultants peuvent indiquer leur préférence et vous pouvez filtrer selon le type de contrat souhaité."
    },
    {
        question: "Quelles sont les expertises réglementaires couvertes ?",
        answer: "Nous couvrons l'ensemble des réglementations du secteur financier : Bâle, IFRS, Solvabilité, LCB-FT, RGPD, DSP, DORA, MIF, et toutes les exigences des régulateurs européens (BCE, ACPR, AMF, etc.)."
    },
];

export const FAQ_CONSULTANTS: FAQItem[] = [
    // Inscription
    {
        question: "Comment m'inscrire sur Surly ?",
        answer: "L'inscription se fait en 5 minutes sur notre plateforme. Vous remplissez vos expériences (import automatique depuis LinkedIn ou CV), vos compétences et outils maîtrisés, puis vous fixez vos critères de recherche (TJM, mobilité, disponibilité)."
    },
    {
        question: "L'inscription est-elle payante ?",
        answer: "Non, l'inscription est 100% gratuite pour les consultants. Surly se rémunère uniquement via une commission auprès des entreprises clientes."
    },
    {
        question: "Quels sont les critères pour être référencé sur Surly ?",
        answer: "Avoir au moins une expérience significative en Banque ou Assurance. Tous les profils sont vérifiés par notre équipe avant validation. Vous n’êtes pas sûr d’être éligible ? Inscrivez-vous : notre équipe vous indique rapidement si votre profil correspond."
    },
    {
        question: "Puis-je m'inscrire si je suis en CDI actuellement ?",
        answer: "Oui, vous pouvez vous inscrire à tout moment, même en poste. Vous indiquez simplement votre date de disponibilité et nous vous contactons lorsque des opportunités correspondent à votre profil."
    },
    // Missions
    {
        question: "Quels types de missions sont proposés ?",
        answer: "Nous proposons des missions freelance (régie, forfait) et des postes salariés (CDI, CDD). Vous pouvez rechercher les deux simultanément pour maximiser vos opportunités."
    },
    {
        question: "Comment suis-je mis en relation avec les clients ?",
        answer: "Lorsqu'un client recherche votre profil, nous vous contactons pour vérifier votre disponibilité et intérêt. Si vous êtes sélectionné, nous organisons un entretien avec le client."
    },
    {
        question: "Quelle est la durée moyenne des missions ?",
        answer: "Les missions Surly durent en moyenne 6 à 12 mois, avec des possibilités de renouvellement. Certaines missions courtes (3 mois) existent également pour des renforts ponctuels."
    },
    {
        question: "Dans quelles régions proposez-vous des missions ?",
        answer: "Nous proposons des missions sur toute la France (avec une concentration en Île-de-France), ainsi qu'en Espagne et au Portugal via notre filiale locale. Nous intervenons également en Suisse, Belgique, Luxembourg, et dans d'autres pays européens selon les besoins. Le télétravail partiel ou total est souvent possible selon les missions."
    },
    // Rémunération
    {
        question: "Comment sont fixés mon TJM ou mon SAB ?",
        answer: "Vous fixez librement votre TJM (freelance) ou votre SAB (CDI/CDD). Surly ne les impose pas : vous gardez la main et pouvez les modifier quand vous le souhaitez. Aucune exclusivité. Besoin d’un repère ? Nos talent managers peuvent vous aider à positionner votre TJM/SAB selon le type de mission ou de poste."
    },
    {
        question: "Surly demande-t-il une exclusivité ?",
        answer: "Non, aucune exclusivité n'est demandée. Vous conservez le contrôle total de votre carrière et pouvez travailler avec d'autres plateformes ou cabinets simultanément."
    },
    {
        question: "Comment suis-je payé pour mes missions ?",
        answer: "Pour les missions freelance, vous facturez Surly. Nous prenons en charge la gestion administrative et le paiement : vous êtes réglé dans les délais légaux et contractuels convenus, sans démarche à effectuer auprès du client final."
    },
    {
        question: "Pouvez-vous me proposer du portage salarial ?",
        answer: "Oui, si vous ne disposez pas de structure juridique (auto-entreprise, SASU), nous pouvons vous orienter vers nos partenaires de portage salarial agréés."
    },
    // Apport affaires
    {
        question: "Qu'est-ce que le programme apport d'affaires ?",
        answer: "Si vous recommandez un consultant ou un client à Surly et que cette recommandation aboutit à une mission, vous recevez une commission de 3% du chiffre d'affaires généré.",
        link: {
            text: "Découvrir le programme d'apport d'affaires",
            url: "/apport-affaires"
        }
    },
    {
        question: "Comment fonctionne la commission d'apport d'affaires ?",
        answer: "Vous partagez le contact d'une mission à pourvoir chez un client via notre formulaire dédié. Si la mission est signée, vous touchez 3% du CA HT pendant toute la durée de la première mission (sous conditions)."
    },
    {
        question: "Qui peut participer au programme ?",
        answer: "Le programme est ouvert à tous : consultants inscrits, anciens consultants, contacts professionnels, partenaires. Il suffit de s'inscrire et de partager vos recommandations."
    },
];

export const FAQ_GENERAL: FAQItem[] = [
    {
        question: "Comment contacter Surly ?",
        answer: "Vous pouvez nous joindre via notre formulaire de contact sur surly.fr/contact, par email (contact@surly.fr), ou par téléphone. Notre équipe répond sous 24h ouvrées."
    },
    {
        question: "Où sont vos bureaux ?",
        answer: "Surly est basé en France, avec une équipe dédiée à l'accompagnement des entreprises et consultants du secteur bancassurance. Nous disposons également d'une filiale en Espagne et au Portugal."
    },
    {
        question: "Surly est-il conforme au RGPD ?",
        answer: "Oui, Surly respecte strictement le RGPD. Vos données personnelles sont sécurisées et vous pouvez exercer vos droits d'accès, rectification et suppression à tout moment. Consultez notre Politique de confidentialité pour plus de détails."
    },
    {
        question: "Proposez-vous des partenariats ?",
        answer: "Oui. Nous construisons des partenariats avec des acteurs de l’écosystème Banque & Assurance afin d’apporter toute l’aide possible à notre communauté de Surlyers et qu’ils puissent se concentrer pleinement sur l’essentiel : leur mission !",
        link: {
            text: "Retrouvez les détails sur la page « Partenaires & Avantages »",
            url: "/partenaires-avantages"
        }
    },
];
