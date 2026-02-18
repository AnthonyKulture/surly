import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://surly.fr";

// Liste de toutes les routes statiques
const routes = [
    "",
    "/pourquoi-surly",
    "/sourcing-expert",
    "/devenir-consultant",
    "/missions-exemples",
    "/contact",
    "/faq",
    "/partenaires-avantages",
    "/mentions-legales",
    "/politique-cookies",
    "/cgu-client",
    "/cgu-postulant",
    "/charte-donnees",
    "/rse",
    "/apport-affaires",
    "/formulaire-apport-affaires",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach((route) => {
        sitemapEntries.push({
            url: `${baseUrl}/fr${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: route === "" ? 1 : 0.8,
            alternates: {
                languages: {
                    fr: `${baseUrl}/fr${route}`,
                    en: `${baseUrl}/en${route}`,
                },
            },
        });

        sitemapEntries.push({
            url: `${baseUrl}/en${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: route === "" ? 1 : 0.8,
            alternates: {
                languages: {
                    fr: `${baseUrl}/fr${route}`,
                    en: `${baseUrl}/en${route}`,
                },
            },
        });
    });

    return sitemapEntries;
}
