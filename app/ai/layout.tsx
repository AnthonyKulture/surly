import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sourcing par IA : Trouvez un Expert en 2 Secondes | Surly",
    description: "Dites adieu aux recherches fastidieuses. Notre IA analyse votre besoin et identifie instantanément les meilleurs profils freelance ou CDI disponibles.",
    keywords: ["ia recrutement", "matching cv banque", "sourcing automatique", "chatgpt recrutement", "intelligence artificielle rh"],
    alternates: {
        canonical: "https://surly.fr/ai",
    },
    openGraph: {
        title: "Sourcing par IA : Trouvez un Expert en 2 Secondes | Surly",
        description: "Dites adieu aux recherches fastidieuses. Notre IA analyse votre besoin et identifie instantanément les meilleurs profils freelance ou CDI disponibles.",
        type: "website",
    },
};

export default function AILayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
