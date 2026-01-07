import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { SurlyContactEmail, SurlyDPOEmail } from "@/components/ui/ObfuscatedEmail";

export default function CharteDonneesPage() {
    return (
        <LegalPageLayout
            title="Charte de Protection des Données Personnelles"
            lastUpdated="7 novembre 2025"
        >
            <p>
                La protection de vos données personnelles est une priorité pour ONYBUNS SAS, exploitant la plateforme SURLY.FR. La présente charte a pour objectif de vous informer de manière transparente sur la collecte, l’utilisation, la protection et la conservation de vos données.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
                ONYBUNS SAS<br />
                Siège : 64, rue La Boétie – 75008 Paris – France<br />
                SIREN : 942 708 868<br />
                Email : <SurlyContactEmail /><br />
                Site : <a href="https://www.surly.fr">www.surly.fr</a>
            </p>
            <p>Délégué à la Protection des Données (DPO) : <SurlyDPOEmail /></p>
            <p>
                ONYBUNS agit en qualité de responsable de traitement pour la gestion des comptes utilisateurs, de la mise en relation et des opérations administratives relatives à l’utilisation de la plateforme.
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons uniquement les données strictement nécessaires à la fourniture et à l’amélioration du service.</p>

            <h3>a) Données des freelances (“Surlyers”)</h3>
            <ul>
                <li>Identité : nom, prénom, photo, email professionnel ;</li>
                <li>Coordonnées et profils professionnels : secteur, expérience, compétences, TJM, CV, portfolio, disponibilités, statut juridique ;</li>
                <li>Données administratives (si mission) : justificatif URSSAF, assurance RC, Kbis, RIB ;</li>
                <li>Données de connexion et de navigation : adresse IP, logs, navigateur ;</li>
                <li>Évaluations, feedbacks et historique de missions.</li>
            </ul>

            <h3>b) Données des entreprises clientes</h3>
            <ul>
                <li>Identité des interlocuteurs : nom, prénom, poste, email professionnel, téléphone ;</li>
                <li>Données société : raison sociale, SIRET, secteur, besoins exprimés, historique de missions ;</li>
                <li>Données contractuelles et financières : devis, factures, paiements, mandats de facturation.</li>
            </ul>

            <h3>c) Données issues de tiers</h3>
            <ul>
                <li>
                    Connexion via LinkedIn (avec consentement explicite) : nom, photo de profil, fonction actuelle, email professionnel (si disponible).
                    <br />→ Ces données servent uniquement à faciliter une création de compte rapide et sécurisée.
                    <br />→ Vous pouvez retirer cette autorisation à tout moment dans vos paramètres LinkedIn.
                </li>
                <li>Cookies analytiques (Google Analytics, Vercel logs) ;</li>
                <li>Données issues de Boond Manager (suivi de missions).</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
                <li>Authentification et gestion des comptes utilisateurs ;</li>
                <li>Mise en relation entre freelances et entreprises ;</li>
                <li>Suivi des missions, contractualisation, facturation et paiements ;</li>
                <li>Communication (emails, notifications, newsletters sous réserve de consentement) ;</li>
                <li>Amélioration continue de la plateforme et analyses statistiques anonymisées ;</li>
                <li>Sécurisation du site et prévention des fraudes ;</li>
                <li>Respect des obligations légales et réglementaires.</li>
            </ul>
            <p>Aucune donnée n’est vendue, louée ou cédée à des tiers.</p>

            <h2>6. Sécurité</h2>
            <p>Nous appliquons des mesures de sécurité conformes à l’état de l’art :</p>
            <ul>
                <li>Hébergement sécurisé en UE (Vercel, O2Switch, Neon Postgres) ;</li>
                <li>Chiffrement TLS 1.3, pseudonymisation, contrôle d’accès restreint ;</li>
                <li>Sauvegardes cryptées et audit de sécurité régulier ;</li>
                <li>Surveillance des connexions (Boond Manager / Vercel).</li>
            </ul>
            <p>En cas de violation de données, notification à la CNIL et aux personnes concernées sous 72h.</p>

            <h2>7. Intelligence Artificielle “WeScout”</h2>
            <p>L’algorithme WeScout assiste la recommandation de profils :</p>
            <ul>
                <li>Aucun décision automatisée ayant un effet juridique ;</li>
                <li>Vérification humaine obligatoire avant toute mise en relation ;</li>
                <li>Possibilité de demander explication, rectification ou opposition au profilage.</li>
            </ul>
            <p>Une AIPD (Analyse d’Impact) est tenue à jour.</p>

            <h2>8. Sous-traitants</h2>
            <p>Aucun transfert vers des pays non adéquats sans garanties contractuelles.</p>

            <h2>9. Vos droits</h2>
            <p>Conformément aux articles 15 à 22 du RGPD, vous disposez de :</p>
            <ul>
                <li>Droit d’accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l’effacement</li>
                <li>Droit de portabilité</li>
                <li>Droit d’opposition et limitation</li>
                <li>Droit de retrait du consentement</li>
                <li>Droit de définir le devenir de vos données après décès</li>
            </ul>
            <p>
                📧 <SurlyDPOEmail /><br />
                📮 ONYBUNS SAS – DPO – 64 rue La Boétie – 75008 Paris<br />
                Réclamation possible : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>

            <h2>10. Cookies</h2>
            <p>
                SURLY utilise :<br />
                - Cookies fonctionnels indispensables ;<br />
                - Cookies analytiques anonymisés (avec bandeau de consentement).<br />
                Aucun cookie publicitaire n’est utilisé.
            </p>

            <h2>11. Mise à jour</h2>
            <p>La présente charte peut être modifiée en fonction des évolutions légales et techniques. Toute modification substantielle fera l’objet d’une notification.</p>

            <h2>12. Contact</h2>
            <p>
                📧 <SurlyDPOEmail /><br />
                📮 ONYBUNS SAS – 64 rue La Boétie – 75008 Paris
            </p>
        </LegalPageLayout>
    );
}
