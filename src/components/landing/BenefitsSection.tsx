import { useLanguage } from "@/contexts/LanguageContext";
import { Brain, GraduationCap, HeartHandshake, Compass, Network, Users } from "lucide-react";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Brain, title: "benefits.ai", desc: "benefits.ai.desc" },
    { icon: GraduationCap, title: "benefits.training", desc: "benefits.training.desc" },
    { icon: HeartHandshake, title: "benefits.mentorship", desc: "benefits.mentorship.desc" },
    { icon: Compass, title: "benefits.career", desc: "benefits.career.desc" },
    { icon: Network, title: "benefits.ecosystem", desc: "benefits.ecosystem.desc" },
    { icon: Users, title: "benefits.community", desc: "benefits.community.desc" },
  ];

  return (
    <section id="benefits" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">{t("benefits.tag")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">{t("benefits.title")}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 group hover:-translate-y-1">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:gradient-hero group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{t(item.title)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
