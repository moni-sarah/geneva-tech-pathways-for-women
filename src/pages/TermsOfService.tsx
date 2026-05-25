import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollText } from "lucide-react";

const TermsOfService = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service — Ella Association"
        description="Terms governing use of the Ella Association website and participation in the Ella Association program."
        path="/terms"
      />
      <Navbar />

      <section className="pt-28 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
            {isFr ? "Légal" : "Legal"}
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground">
            {isFr ? "Conditions d'Utilisation" : "Terms of Service"}
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
                <ScrollText className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                {isFr
                  ? "Régies par le droit suisse. For exclusif : Genève (Suisse)."
                  : "Governed by Swiss law. Exclusive jurisdiction: Geneva, Switzerland."}
              </p>
            </div>

            {isFr ? (
              <div className="space-y-8 text-foreground leading-relaxed">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">1. Objet</h2>
                  <p className="text-muted-foreground">
                    Les présentes conditions régissent l'utilisation de la plateforme Ella Association, qui propose un programme de transition de carrière et de montée en compétences numériques destiné aux femmes à Genève.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">2. Acceptation</h2>
                  <p className="text-muted-foreground">
                    En accédant à la plateforme ou en soumettant une candidature, vous acceptez ces conditions ainsi que notre Politique de Confidentialité. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">3. Éligibilité</h2>
                  <p className="text-muted-foreground">
                    L'accès au programme est ouvert aux femmes majeures résidant à Genève répondant aux critères publiés sur la plateforme. Ella Association se réserve le droit de vérifier les informations fournies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">4. Utilisation de la plateforme</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Vous vous engagez à fournir des informations exactes et à jour.</li>
                    <li>Vous ne devez pas utiliser la plateforme à des fins illégales ou nuisibles.</li>
                    <li>Toute tentative d'accès non autorisé est interdite et peut entraîner des poursuites.</li>
                    <li>Vous êtes responsable de la confidentialité de vos identifiants.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">5. Propriété intellectuelle</h2>
                  <p className="text-muted-foreground">
                    L'ensemble du contenu (textes, logos, graphiques, code, supports pédagogiques) est la propriété d'Ella Association ou de ses partenaires et est protégé par le droit suisse de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">6. Gratuité du programme</h2>
                  <p className="text-muted-foreground">
                    Le programme Ella Association est proposé gratuitement aux participantes sélectionnées. La sélection se fait selon les critères annoncés et sur décision du comité de sélection.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">7. Responsabilité</h2>
                  <p className="text-muted-foreground">
                    Ella Association s'engage à fournir ses services avec diligence mais ne garantit pas un résultat spécifique en matière d'emploi. Dans la limite autorisée par le droit suisse, notre responsabilité est limitée aux dommages directs causés par une faute grave ou intentionnelle.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">8. Suspension et résiliation</h2>
                  <p className="text-muted-foreground">
                    Nous pouvons suspendre ou résilier l'accès à la plateforme en cas de violation de ces conditions, sans préavis lorsque cela est nécessaire pour protéger nos utilisatrices ou nos services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">9. Protection des données</h2>
                  <p className="text-muted-foreground">
                    Le traitement de vos données personnelles est décrit dans notre <a href="/privacy" className="text-primary hover:underline">Politique de Confidentialité</a>, conforme à la nLPD suisse.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">10. Modifications</h2>
                  <p className="text-muted-foreground">
                    Ella Association peut modifier ces conditions à tout moment. La version en vigueur est celle publiée sur la plateforme. L'utilisation continue après modification vaut acceptation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">11. Droit applicable et juridiction</h2>
                  <p className="text-muted-foreground">
                    Les présentes conditions sont régies par le droit suisse, à l'exclusion des règles de conflit de lois. Tout litige relève de la compétence exclusive des tribunaux de Genève (Suisse), sous réserve des dispositions impératives applicables aux consommateurs.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">12. Contact</h2>
                  <p className="text-muted-foreground">
                    Pour toute question concernant ces conditions : <a href="mailto:legal@ellatech.ch" className="text-primary hover:underline">legal@ellatech.ch</a>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-foreground leading-relaxed">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">1. Purpose</h2>
                  <p className="text-muted-foreground">
                    These terms govern the use of the Ella Association platform, which offers a career transition and digital upskilling program for women in Geneva.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">2. Acceptance</h2>
                  <p className="text-muted-foreground">
                    By accessing the platform or submitting an application, you agree to these terms and to our Privacy Policy. If you do not agree, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">3. Eligibility</h2>
                  <p className="text-muted-foreground">
                    The program is open to adult women residing in Geneva who meet the criteria published on the platform. Ella Association reserves the right to verify the information provided.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">4. Use of the Platform</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>You agree to provide accurate and up-to-date information.</li>
                    <li>You must not use the platform for unlawful or harmful purposes.</li>
                    <li>Any unauthorized access attempt is prohibited and may lead to prosecution.</li>
                    <li>You are responsible for keeping your credentials confidential.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content (texts, logos, graphics, code, training materials) is the property of Ella Association or its partners and is protected under Swiss intellectual property law. Any reproduction without authorization is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">6. Free of Charge</h2>
                  <p className="text-muted-foreground">
                    The Ella Association program is offered free of charge to selected participants. Selection is based on the criteria announced and decided by the selection committee.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">7. Liability</h2>
                  <p className="text-muted-foreground">
                    Ella Association provides its services with due care but does not guarantee a specific employment outcome. To the extent permitted by Swiss law, our liability is limited to direct damages caused by gross negligence or intent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">8. Suspension and Termination</h2>
                  <p className="text-muted-foreground">
                    We may suspend or terminate access to the platform in case of breach of these terms, without notice when necessary to protect our users or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">9. Data Protection</h2>
                  <p className="text-muted-foreground">
                    The processing of your personal data is described in our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, in compliance with the Swiss revFADP.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">10. Changes</h2>
                  <p className="text-muted-foreground">
                    Ella Association may modify these terms at any time. The version in force is the one published on the platform. Continued use after changes constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">11. Governing Law and Jurisdiction</h2>
                  <p className="text-muted-foreground">
                    These terms are governed by Swiss law, excluding conflict-of-laws rules. Any dispute falls under the exclusive jurisdiction of the courts of Geneva, Switzerland, subject to mandatory consumer protection rules.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">12. Contact</h2>
                  <p className="text-muted-foreground">
                    For any questions regarding these terms: <a href="mailto:legal@ellatech.ch" className="text-primary hover:underline">legal@ellatech.ch</a>.
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

export default TermsOfService;
