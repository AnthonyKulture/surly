import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function PolitiqueCookiesPage() {
    return (
        <LegalPageLayout
            title="Politique des cookies - Surly x Axeptio"
            lastUpdated="7 novembre 2025"
        >
            <h2>1. Objet de la présente politique</h2>
            <p>
                La présente politique a pour objectif d’informer les utilisateurs du site <a href="https://www.surly.fr">www.surly.fr</a> et de la plateforme app.surly.fr (ci-après « le Site ») sur l’utilisation des cookies et autres traceurs déposés sur leur terminal.
            </p>
            <p>
                SURLY utilise Axeptio pour recueillir et gérer le consentement aux cookies, conformément au Règlement Général sur la Protection des Données (RGPD) et aux recommandations de la CNIL.
            </p>
            <p>Aucun cookie non strictement nécessaire n’est déposé sans votre accord préalable.</p>

            <h2>2. Qu’est-ce qu’un cookie ?</h2>
            <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile, tablette) lorsque vous consultez un site web. Il permet notamment de :
            </p>
            <ul>
                <li>garantir le fonctionnement du site,</li>
                <li>mesurer la fréquentation et l’audience,</li>
                <li>améliorer votre expérience de navigation,</li>
                <li>personnaliser certains contenus.</li>
            </ul>

            <h2>3. Gestion du consentement (Axeptio)</h2>
            <p>Lors de votre première visite, une bannière Axeptio vous permet :</p>
            <ul>
                <li>d’accepter tous les cookies,</li>
                <li>de refuser tous les cookies,</li>
                <li>ou de choisir cookie par cookie.</li>
            </ul>
            <p>
                Vous pouvez modifier vos préférences à tout moment :<br />
                → depuis le bouton « Gestion des cookies » disponible en bas du site.
            </p>
            <p>Tant que vous n’avez pas donné votre consentement, aucun cookie non essentiel n’est activé.</p>

            <h2>4. Types de cookies utilisés</h2>

            <h3>4.1 Cookies strictement nécessaires (exemptés de consentement)</h3>
            <p><code>axeptio_cookies</code></p>
            <p>Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.</p>

            <h3>4.2 Cookies de mesure d’audience (soumis à consentement)</h3>
            <p>
                Google Analytics est activé uniquement après votre consentement via Axeptio. Les adresses IP sont anonymisées et les données ne servent pas à de la publicité.
            </p>

            <h3>4.3 Cookies de communication & emailing (soumis à consentement)</h3>
            <p>
                <strong>➡️ Important :</strong> Aucun cookie Brevo n’est déposé lors de votre simple visite sur le site. Ces traceurs apparaissent uniquement si vous cliquez sur un lien dans un email envoyé par SURLY.
            </p>

            <h2>5. Refus ou suppression des cookies</h2>
            <p>Vous pouvez à tout moment :</p>
            <ul>
                <li>Refuser les cookies via Axeptio,</li>
                <li>Supprimer les cookies depuis les paramètres de votre navigateur,</li>
                <li>Configurer votre navigateur pour empêcher leur enregistrement.</li>
            </ul>
            <p>En cas de refus, certaines fonctionnalités peuvent être limitées, mais l’accès au site reste possible.</p>

            <h2>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez de droits :</p>
            <ul>
                <li>d’accès, rectification, opposition, effacement, portabilité ;</li>
                <li>de retrait du consentement à tout moment.</li>
            </ul>
            <p>
                📧 <a href="mailto:dpo@surly.fr">dpo@surly.fr</a><br />
                📮 ONYBUNS SAS – 64, rue La Boétie – 75008 Paris
            </p>
            <p>
                Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
            </p>

            <h2>7. Mise à jour</h2>
            <p>
                Cette politique peut être mise à jour pour refléter des évolutions techniques, légales ou organisationnelles. La dernière version est toujours disponible sur cette page.
            </p>
        </LegalPageLayout>
    );
}
