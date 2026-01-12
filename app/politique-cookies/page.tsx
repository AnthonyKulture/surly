import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { SurlyDPOEmail } from "@/components/ui/ObfuscatedEmail";

export default function PolitiqueCookiesPage() {
    return (
        <LegalPageLayout
            title="Politique des cookies - Surly x Tarteaucitron"
            lastUpdated="12 janvier 2026"
        >
            <h2>1. Objet de la présente politique</h2>
            <p>
                La présente politique a pour objectif d'informer les utilisateurs du site <a href="https://www.surly.fr">www.surly.fr</a> et de la plateforme app.surly.fr (ci-après « le Site ») sur l'utilisation des cookies et autres traceurs déposés sur leur terminal.
            </p>
            <p>
                SURLY utilise <strong>Tarteaucitron</strong>, un gestionnaire de consentement open-source conforme au RGPD, pour recueillir et gérer votre consentement aux cookies, conformément au Règlement Général sur la Protection des Données (RGPD) et aux recommandations de la CNIL.
            </p>
            <p>Aucun cookie non strictement nécessaire n'est déposé sans votre accord préalable.</p>

            <h2>2. Qu'est-ce qu'un cookie ?</h2>
            <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile, tablette) lorsque vous consultez un site web. Il permet notamment de :
            </p>
            <ul>
                <li>garantir le fonctionnement du site,</li>
                <li>mesurer la fréquentation et l'audience,</li>
                <li>améliorer votre expérience de navigation,</li>
                <li>personnaliser certains contenus.</li>
            </ul>

            <h2>3. Gestion du consentement (Tarteaucitron)</h2>
            <p>Lors de votre première visite, une bannière Tarteaucitron vous permet :</p>
            <ul>
                <li>d'accepter tous les cookies,</li>
                <li>de refuser tous les cookies,</li>
                <li>ou de choisir cookie par cookie.</li>
            </ul>
            <p>
                Vous pouvez modifier vos préférences à tout moment :<br />
                → depuis l'icône "Cookie" visible en bas à droite du site,<br />
                → ou en cliquant sur le bouton « Gestion des cookies » disponible en pied de page.
            </p>
            <p>
                <strong>Tarteaucitron</strong> est un outil open-source français qui garantit :
            </p>
            <ul>
                <li>✅ Aucun tracking tant que vous n'avez pas consenti</li>
                <li>✅ Conformité totale avec le RGPD et les recommandations CNIL</li>
                <li>✅ Transparence complète sur les services activés</li>
                <li>✅ Support du Google Consent Mode v2</li>
            </ul>

            <h2>4. Types de cookies utilisés</h2>

            <h3>4.1 Cookies strictement nécessaires (exemptés de consentement)</h3>
            <p><code>tarteaucitron</code> - Durée : 12 mois</p>
            <p>
                Ce cookie stocke vos préférences de consentement. Il est indispensable au fonctionnement du gestionnaire
                de cookies et ne peut pas être désactivé. Il ne contient aucune donnée personnelle identifiable.
            </p>

            <h3>4.2 Cookies de mesure d'audience (soumis à consentement)</h3>
            <p><strong>Google Analytics (gtag) - ID : G-E9FMCYSQH2</strong></p>
            <p>
                Google Analytics est activé <strong>uniquement après votre consentement</strong> via Tarteaucitron.
                Les adresses IP sont anonymisées et les données ne servent pas à de la publicité.
            </p>
            <ul>
                <li><strong>Finalité</strong> : Mesure d'audience, analyse du trafic, amélioration du site</li>
                <li><strong>Durée de conservation</strong> : 26 mois (recommandation CNIL)</li>
                <li><strong>Cookies déposés</strong> : <code>_ga</code>, <code>_ga_*</code>, <code>_gid</code></li>
                <li><strong>Google Consent Mode v2</strong> : ✅ Activé (respect du consentement utilisateur)</li>
                <li><strong>Données collectées</strong> : Pages visitées, durée de session, source de trafic (anonymisées)</li>
                <li><strong>Transfert hors UE</strong> : États-Unis (Google LLC) via Clauses Contractuelles Types</li>
            </ul>
            <p>
                En cas de refus, Google Analytics ne collecte <strong>aucune donnée</strong>. Le Google Consent Mode v2
                garantit que Google respecte strictement votre choix de consentement.
            </p>

            <h3>4.3 Liste complète des cookies</h3>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f9fafb', borderBottom: '2px solid #005e53' }}>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#005e53' }}>Nom</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#005e53' }}>Durée</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#005e53' }}>Type</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#005e53' }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>tarteaucitron</code></td>
                            <td style={{ padding: '0.75rem' }}>12 mois</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#059669', fontWeight: 600 }}>Essentiel</span></td>
                            <td style={{ padding: '0.75rem' }}>Stocke vos préférences de consentement</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>_ga</code></td>
                            <td style={{ padding: '0.75rem' }}>26 mois</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#f59e0b', fontWeight: 600 }}>Analytique</span></td>
                            <td style={{ padding: '0.75rem' }}>Identifiant unique Google Analytics (si accepté)</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>_ga_*</code></td>
                            <td style={{ padding: '0.75rem' }}>26 mois</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#f59e0b', fontWeight: 600 }}>Analytique</span></td>
                            <td style={{ padding: '0.75rem' }}>Identifiant de propriété Google Analytics (si accepté)</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>_gid</code></td>
                            <td style={{ padding: '0.75rem' }}>24 heures</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#f59e0b', fontWeight: 600 }}>Analytique</span></td>
                            <td style={{ padding: '0.75rem' }}>Identifiant de session Google Analytics (si accepté)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>5. Refus ou suppression des cookies</h2>
            <p>Vous pouvez à tout moment :</p>
            <ul>
                <li>Refuser les cookies via Tarteaucitron (icône en bas à droite),</li>
                <li>Supprimer les cookies depuis les paramètres de votre navigateur,</li>
                <li>Configurer votre navigateur pour empêcher leur enregistrement.</li>
            </ul>
            <p>En cas de refus, certaines fonctionnalités peuvent être limitées, mais l'accès au site reste possible.</p>

            <p><strong>Paramètres navigateurs :</strong></p>
            <ul>
                <li>Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
                <li>Firefox : Préférences → Vie privée et sécurité → Cookies</li>
                <li>Safari : Préférences → Confidentialité → Cookies</li>
                <li>Edge : Paramètres → Confidentialité → Cookies</li>
            </ul>

            <h2>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez de droits :</p>
            <ul>
                <li>d'accès, rectification, opposition, effacement, portabilité ;</li>
                <li>de retrait du consentement à tout moment ;</li>
                <li>de définir des directives post-mortem.</li>
            </ul>
            <p>
                📧 <SurlyDPOEmail /><br />
                📮 ONYBUNS SAS – 64, rue La Boétie – 75008 Paris
            </p>
            <p>
                Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
            </p>

            <h2>7. Transferts de données</h2>
            <p>
                Certains cookies (Google Analytics) impliquent un transfert de données vers les <strong>États-Unis</strong> (Google LLC).
                Ces transferts sont sécurisés par des <strong>Clauses Contractuelles Types</strong> approuvées par la Commission Européenne.
            </p>
            <p>
                Pour plus d'informations, consultez la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité de Google</a>.
            </p>

            <h2>8. Mise à jour</h2>
            <p>
                Cette politique peut être mise à jour pour refléter des évolutions techniques, légales ou organisationnelles.
                La dernière version est toujours disponible sur cette page.
            </p>

            <h2>9. Pour aller plus loin</h2>
            <ul>
                <li><a href="/charte-donnees">Charte de protection des données personnelles</a></li>
                <li><a href="https://tarteaucitron.io" target="_blank" rel="noopener noreferrer">Documentation Tarteaucitron</a></li>
                <li><a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer">Recommandations CNIL sur les cookies</a></li>
            </ul>
        </LegalPageLayout>
    );
}
