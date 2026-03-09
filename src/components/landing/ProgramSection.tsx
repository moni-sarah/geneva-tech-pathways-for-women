import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Code, Briefcase } from "lucide-react";

const ProgramSection = () => {
  const { t } = useLanguage();

  const months = [
    { icon: BookOpen, month: "program.month1.title", name: "program.month1.name", desc: "program.month1.desc", num: "01" },
    { icon: Code, month: "program.month2.title", name: "program.month2.name", desc: "program.month2.desc", num: "02" },
    { icon: Briefcase, month: "program.month3.title", name: "program.month3.name", desc: "program.month3.desc", num: "03" },
  ];

  return (
    <section id="program" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">{t("program.tag")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">{t("program.title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {months.map((item, index) => (
            <div key={item.num} className="relative group">
              {/* Connector line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border z-0" style={{ width: "calc(100% - 3rem)" , left: "calc(50% + 1.5rem)" }} />
              )}
              <div className="relative bg-card rounded-xl p-8 shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-heading font-bold text-primary/10 mb-4">{item.num}</div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-secondary mb-1">{t(item.month)}</p>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{t(item.name)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
