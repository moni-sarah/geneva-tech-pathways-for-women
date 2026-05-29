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
    <section id="outcomes" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            {t("outcomes.tag")}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">
            {t("outcomes.title")}
          </h2>
        </div>

        {/* Three Offering Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {t(item.title)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>

        {/* End of Program Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            {t("outcomes.end.title")}
          </h3>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card hover:shadow-warm transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                <Award className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  {t("outcomes.project.title")}
                </h4>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("outcomes.project.desc")}
            </p>

            {/* Skills */}
            <div>
              <h5 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {t("outcomes.skills.title")}
              </h5>
              <div className="grid sm:grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground text-sm">{t(skill)}</span>
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
