import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy — Ellatech"
        description="How Ellatech collects, uses, and protects personal data of applicants, partners, and visitors."
        path="/privacy"
      />
      <Navbar />

      <section className="pt-28 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
            {isFr ? "Légal" : "Legal"}
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground">
            {isFr ? "Politique de Confidentialité" : "Privacy Policy"}
          </h1>
          <p className="mt-4 text-primary-foreground/80 text-sm">
            {isFr
              ? "Dernière mise à jour : 1 mai 2026"
              : "Last updated: May 1, 2026"}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                {isFr
                  ? "Conforme à la Loi fédérale sur la protection des données (nLPD) et au RGPD."
                  : "Compliant with the Swiss Federal Act on Data Protection (revFADP/nFADP) and the GDPR."}
              </p>
            </div>

            {isFr ? (
              <div className="space-y-8 text-foreground leading-relaxed">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">1. Responsable du traitement</h2>
                  <p className="text-muted-foreground">
                    Ellatech, basée à Genève (Suisse), est responsable du traitement des données personnelles collectées via cette plateforme. Pour toute question relative à la protection des données, vous pouvez nous contacter à : <a href="mailto:privacy@ellatech.ch" className="text-primary hover:underline">privacy@ellatech.ch</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">2. Données collectées</h2>
                  <p className="text-muted-foreground mb-3">Nous collectons les catégories de données suivantes :</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone.</li>
                    <li>Données du programme : parcours, motivations, compétences, statut de candidature.</li>
                    <li>Données de partenariat : organisation, coordonnées professionnelles, type de collaboration.</li>
                    <li>Données techniques : adresse IP, type de navigateur, données de connexion (cookies essentiels).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">3. Finalités du traitement</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Gérer les candidatures au programme et le suivi des participantes.</li>
                    <li>Communiquer avec les candidates, partenaires et utilisatrices.</li>
                    <li>Améliorer nos services et garantir la sécurité de la plateforme.</li>
                    <li>Respecter nos obligations légales suisses.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">4. Base légale</h2>
                  <p className="text-muted-foreground">
                    Le traitement repose sur votre consentement (art. 6 nLPD), l'exécution d'un contrat (participation au programme), ou nos intérêts légitimes (sécurité, amélioration des services).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">5. Conservation des données</h2>
                  <p className="text-muted-foreground">
                    Vos données sont conservées uniquement pour la durée nécessaire aux finalités décrites, puis supprimées ou anonymisées. Les données de candidature sont conservées maximum 24 mois après la fin du programme.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">6. Vos droits</h2>
                  <p className="text-muted-foreground mb-3">Conformément à la nLPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Droit d'accès à vos données personnelles.</li>
                    <li>Droit de rectification des données inexactes.</li>
                    <li>Droit à l'effacement (« droit à l'oubli »).</li>
                    <li>Droit à la portabilité de vos données.</li>
                    <li>Droit d'opposition au traitement.</li>
                    <li>Droit de retirer votre consentement à tout moment.</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Pour exercer ces droits, contactez-nous à <a href="mailto:privacy@ellatech.ch" className="text-primary hover:underline">privacy@ellatech.ch</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">7. Sécurité et hébergement</h2>
                  <p className="text-muted-foreground">
                    Vos données sont hébergées sur des serveurs situés dans l'Union européenne, qui offre un niveau de protection adéquat selon le Conseil fédéral suisse. Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir leur sécurité.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">8. Transferts à des tiers</h2>
                  <p className="text-muted-foreground">
                    Nous ne vendons jamais vos données. Elles peuvent être partagées avec nos partenaires du programme uniquement avec votre consentement explicite, ou avec nos prestataires techniques tenus par des accords de confidentialité.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">9. Cookies</h2>
                  <p className="text-muted-foreground">
                    Nous utilisons uniquement des cookies essentiels au fonctionnement de la plateforme (authentification, préférences linguistiques et thème). Aucun cookie de suivi publicitaire n'est utilisé.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">10. Autorité de contrôle</h2>
                  <p className="text-muted-foreground">
                    Vous avez le droit de déposer une plainte auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT) : <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.edoeb.admin.ch</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">11. Modifications</h2>
                  <p className="text-muted-foreground">
                    Cette politique peut être modifiée. La date de dernière mise à jour figure en haut de cette page. Nous vous informerons en cas de changement substantiel.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-foreground leading-relaxed">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">1. Data Controller</h2>
                  <p className="text-muted-foreground">
                    Ellatech, based in Geneva (Switzerland), is the controller of personal data collected through this platform. For any data protection inquiries, contact us at <a href="mailto:privacy@ellatech.ch" className="text-primary hover:underline">privacy@ellatech.ch</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">2. Data We Collect</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Identification data: first name, last name, email, phone number.</li>
                    <li>Program data: background, motivations, skills, application status.</li>
                    <li>Partnership data: organization, professional contact details, collaboration type.</li>
                    <li>Technical data: IP address, browser type, connection data (essential cookies).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">3. Purposes of Processing</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Manage program applications and follow up with participants.</li>
                    <li>Communicate with applicants, partners, and users.</li>
                    <li>Improve our services and ensure platform security.</li>
                    <li>Comply with our Swiss legal obligations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">4. Legal Basis</h2>
                  <p className="text-muted-foreground">
                    Processing is based on your consent (art. 6 revFADP), contract performance (program participation), or our legitimate interests (security, service improvement).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">5. Data Retention</h2>
                  <p className="text-muted-foreground">
                    Your data is kept only as long as necessary for the purposes described, then deleted or anonymized. Application data is retained for a maximum of 24 months after program completion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">Under the Swiss revFADP, you have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Right of access to your personal data.</li>
                    <li>Right to rectify inaccurate data.</li>
                    <li>Right to erasure ("right to be forgotten").</li>
                    <li>Right to data portability.</li>
                    <li>Right to object to processing.</li>
                    <li>Right to withdraw consent at any time.</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    To exercise these rights, contact us at <a href="mailto:privacy@ellatech.ch" className="text-primary hover:underline">privacy@ellatech.ch</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">7. Security & Hosting</h2>
                  <p className="text-muted-foreground">
                    Your data is hosted on servers located in the European Union, which provides an adequate level of protection as recognized by the Swiss Federal Council. We apply appropriate technical and organizational measures to ensure its security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">8. Disclosure to Third Parties</h2>
                  <p className="text-muted-foreground">
                    We never sell your data. It may be shared with our program partners only with your explicit consent, or with our technical service providers bound by confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">9. Cookies</h2>
                  <p className="text-muted-foreground">
                    We only use essential cookies needed for the platform to function (authentication, language and theme preferences). No advertising or tracking cookies are used.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">10. Supervisory Authority</h2>
                  <p className="text-muted-foreground">
                    You have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC): <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.edoeb.admin.ch</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">11. Changes</h2>
                  <p className="text-muted-foreground">
                    This policy may be updated. The latest update date is shown at the top of this page. We will notify you of any material changes.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
