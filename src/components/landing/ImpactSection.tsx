import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ImpactSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "200+", label: "impact.members" },
    { value: "50+", label: "impact.mentors" },
    { value: "30+", label: "impact.events" },
    { value: "15+", label: "impact.partners" },
  ];

  return (
    <section className="py-24 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t("impact.title")}</h2>
        <p className="text-primary-foreground/80 mb-12 max-w-xl mx-auto">{t("hero.subtitle").slice(0, 80)}...</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1">{stat.value}</div>
              <div className="text-primary-foreground/70 text-sm">{t(stat.label)}</div>
            </div>
          ))}
        </div>

        <Button variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
          {t("hero.cta1")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default ImpactSection;
