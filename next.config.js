/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // --- PAGES PRINCIPALES / B2B ---
      {
        source: '/experts-consultants',
        destination: '/devenir-consultant',
        permanent: true,
      },
      {
        source: '/entreprises',
        destination: '/sourcing-expert',
        permanent: true,
      },
      {
        source: '/demandeurs',
        destination: '/sourcing-expert',
        permanent: true,
      },
      {
        source: '/partenaires',
        destination: '/partenaires-avantages',
        permanent: true,
      },

      // --- PAGES CONSULTANTS & SERVICES ---
      {
        source: '/programme-apport-affaires',
        destination: '/apport-affaires',
        permanent: true,
      },
      {
        source: '/formulaire-apport-daffaires',
        destination: '/formulaire-apport-affaires',
        permanent: true,
      },
      {
        source: '/portage-salarial',
        destination: '/devenir-consultant', // Page la plus pertinente faute de page dédiée
        permanent: true,
      },
      {
        source: '/missions-en-banque',
        destination: '/devenir-consultant',
        permanent: true,
      },
      // Note: /partenaires-avantages existe à l'identique, pas de redirection nécessaire

      // --- ENGAGEMENTS & RSE ---
      {
        source: '/engagements-rse',
        destination: '/rse',
        permanent: true,
      },
      {
        source: '/rgpd-gpdr',
        destination: '/charte-donnees',
        permanent: true,
      },

      // --- L'OUTIL PHARE ---
      {
        source: '/generateur-de-fiches-de-poste',
        // Redirection vers l'IA qui est l'outil principal actuel
        destination: '/ai',
        permanent: true,
      },

      // --- LE BLOG ---
      {
        source: '/le-blog-de-surly',
        destination: '/blog',
        permanent: true,
      },
      // Pattern générique pour les anciens articles
      {
        source: '/pages-des-articles-surly/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      // Articles spécifiques
      {
        source: '/pourquoi-un-cv-optimise-pour-les-ats-est-essentiel-dans-le-secteur-banque-et-assurance',
        destination: '/blog/cv-optimise-ats-banque-assurance',
        permanent: true,
      },
      {
        source: '/revolution-bancassurance-surly',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/evenements-banque-assurance-2025-2026',
        destination: '/blog/evenements-salons-banque-assurance-2025-2026',
        permanent: true,
      },
      {
        source: '/plateformes-freelances-banque-assurance',
        destination: '/blog/plateformes-freelances-banque-assurance',
        permanent: true,
      },
      {
        source: '/freelance-bancassurance',
        destination: '/blog/freelance-bancassurance',
        permanent: true,
      },
      {
        source: '/marketplace-missions-freelance-banque-assurance',
        destination: '/blog/marketplace-missions-freelance-banque-assurance',
        permanent: true,
      },
      {
        source: '/missions-emplois-bancassurance',
        destination: '/blog/missions-emplois-bancassurance',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/blog',
        permanent: true,
      },

      // --- PAGES LÉGALES ---
      {
        source: '/charte-sur-la-protection-des-donnees-personnelles',
        destination: '/charte-donnees',
        permanent: true,
      },
      {
        source: '/politique-de-cookies',
        destination: '/politique-cookies',
        permanent: true,
      },
      // Protection des variantes /legal/
      {
        source: '/legal/mentions-legales',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/legal/cgu-postulant',
        destination: '/cgu-postulant',
        permanent: true,
      },
      {
        source: '/legal/cgu-client',
        destination: '/cgu-client',
        permanent: true,
      },
      {
        source: '/legal/confidentialite',
        destination: '/charte-donnees',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
