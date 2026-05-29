import { useLanguage } from "@/contexts/LanguageContext";
import { Brain, CalendarDays, UsersRound, Award, CheckCircle2 } from "lucide-react";

const OutcomesSection = () => {
  const { t } = useLanguage();

  const offerings = [
    {
      icon: Brain,
      title: "outcomes.assessment.title",
      desc: "outcomes.assessment.desc",
    },
    {
      icon: CalendarDays,
      title: "outcomes.training.title",
      desc: "outcomes.training.desc",
    },
    {
      icon: UsersRound,
      title: "outcomes.mentorship.title",
      desc: "outcomes.mentorship.desc",
    },
  ];

  const skills = [
    "outcomes.skills.ai",
    "outcomes.skills.webdev",
    "outcomes.skills.presentation",
    "outcomes.skills.portfolio",
  ];

  return (
    <section id="outcomes" className="py-16 sm:py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-medium text-secondary uppercase tracking-[0.2em]">
            {t("outcomes.tag")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight text-balance">
            {t("outcomes.title")}
          </h2>
        </div>

        {/* Three Offering Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mb-20 md:mb-24">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-6 sm:p-7 md:p-8 shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/40 flex flex-col"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-105">
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3 leading-snug text-balance">
                {t(item.title)}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>

        {/* End of Program Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight text-balance">
            {t("outcomes.end.title")}
          </h3>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-card hover:shadow-warm transition-shadow duration-300 border border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6 mb-6 md:mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-hero flex items-center justify-center shrink-0">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight tracking-tight text-balance">
                {t("outcomes.project.title")}
              </h4>
            </div>
            <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed mb-8 md:mb-10 max-w-3xl">
              {t("outcomes.project.desc")}
            </p>

            {/* Skills */}
            <div className="border-t border-border/60 pt-6 md:pt-8">
              <h5 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-[0.18em] mb-5 md:mb-6">
                {t("outcomes.skills.title")}
              </h5>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 md:gap-y-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground text-[15px] leading-snug">{t(skill)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
