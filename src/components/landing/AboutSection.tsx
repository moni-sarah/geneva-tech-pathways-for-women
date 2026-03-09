import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Target, titleKey: "about.mission.title", textKey: "about.mission.text" },
    { icon: Users, titleKey: "about.who.title", textKey: "about.who.text" },
    { icon: Award, titleKey: "about.gain.title", textKey: "about.gain.text" },
  ];

  return (
    <section id="about" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">{t("about.tag")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">{t("about.title")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("about.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.titleKey} className="bg-card rounded-xl p-8 shadow-card hover:shadow-warm transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-5">
                <card.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{t(card.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{t(card.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
