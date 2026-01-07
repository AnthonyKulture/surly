import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { SurlyContactEmail } from "@/components/ui/ObfuscatedEmail";

export default function MentionsLegalesPage() {
    return (
        <LegalPageLayout
            title="Mentions Légales"
        >
            <h2>1. Éditeur du site</h2>
            <p>
                Le site <a href="https://www.surly.fr">www.surly.fr</a> est édité par la société ONYBUNS, société par actions simplifiée (SAS) au capital social de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 942 708 868, dont le siège social est situé au : 64 rue La Boétie, 75008 Paris – France.
            </p>
            <p>
                Président : la société MYWAY, SIREN 941 808 222, agit en qualité de président<br />
                Adresse e-mail de contact : <SurlyContactEmail /><br />
                Numéro de TVA intracommunautaire : FR48942708868
            </p>

            <h2>2. Hébergement du site</h2>
            <p>
                Le site <a href="https://www.surly.fr">www.surly.fr</a> est hébergé par :<br />
                o2switch SARL<br />
                222 – 224 Boulevard Gustave Flaubert<br />
                63000 Clermont-Ferrand – France<br />
                RCS Clermont-Ferrand n° 510 909 807<br />
                Capital social : 7 500 €<br />
                Numéro de TVA intracommunautaire : FR35510909807<br />
                Site web : <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer">www.o2switch.fr</a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
                L’ensemble du contenu du site <a href="https://www.surly.fr">www.surly.fr</a>, incluant notamment les textes, graphismes, logos, icônes, images, photographies, vidéos, sons, codes sources et bases de données, est la propriété exclusive de ONYBUNS / Surly, sauf mention contraire.
            </p>
            <p>
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation totale ou partielle, par quelque procédé et sur quelque support que ce soit, est interdite sans autorisation écrite préalable de Onybuns.
            </p>
            <p>
                Toute utilisation non autorisée du site ou de son contenu engage la responsabilité civile et/ou pénale de son auteur, conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>

            <h2>4. Responsabilité</h2>
            <p>
                Les informations communiquées sur le site <a href="https://www.surly.fr">www.surly.fr</a> le sont à titre indicatif et peuvent être modifiées à tout moment sans préavis. Onybuns ne saurait être tenue responsable :
            </p>
            <ul>
                <li>d’éventuelles erreurs ou omissions dans le contenu publié,</li>
                <li>de tout dommage direct ou indirect lié à l’accès, à la navigation ou à l’utilisation du site,</li>
                <li>ou encore de l’indisponibilité temporaire du service.</li>
            </ul>
            <p>
                Onybuns s’engage toutefois à veiller à la qualité, la pertinence et l’actualisation régulière des informations diffusées.
            </p>

            <h2>5. Liens hypertextes</h2>
            <p>
                Le site <a href="https://www.surly.fr">www.surly.fr</a> peut contenir des liens vers d’autres sites Internet. Ces liens sont proposés à titre informatif ; SURLY SAS ne peut être tenue responsable du contenu, du bon fonctionnement ou de la politique de confidentialité de ces sites tiers.
            </p>

            <h2>6. Données personnelles et cookies</h2>
            <p>
                La collecte et le traitement des données personnelles effectués via le site <a href="https://www.surly.fr">www.surly.fr</a> sont conformes au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la loi Informatique et Libertés modifiée.
            </p>
            <p>
                Pour toute information sur la manière dont vos données sont traitées, consultez notre <a href="/charte-donnees">Politique de confidentialité</a>.
            </p>
            <p>
                Conformément à la réglementation, vous disposez de droits d’accès, de rectification, de suppression, de limitation, d’opposition et de portabilité de vos données. Vous pouvez exercer ces droits à tout moment en écrivant à : <SurlyContactEmail />
            </p>

            <h2>7. Droit applicable et juridiction compétente</h2>
            <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux de Paris, sauf disposition légale impérative contraire.
            </p>
        </LegalPageLayout>
    );
}
