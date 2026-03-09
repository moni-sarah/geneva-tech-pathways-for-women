import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Building, Laptop, GraduationCap, ArrowRight } from "lucide-react";

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners = [
    { icon: Building, title: "partners.ngos", desc: "partners.ngos.desc" },
    { icon: Laptop, title: "partners.tech", desc: "partners.tech.desc" },
    { icon: GraduationCap, title: "partners.training", desc: "partners.training.desc" },
  ];

  return (
    <section id="partners" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">{t("partners.tag")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">{t("partners.title")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("partners.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((item) => (
            <div key={item.title} className="text-center bg-card rounded-xl p-8 shadow-card hover:shadow-warm transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{t(item.title)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.desc)}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg">
            {t("partners.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
