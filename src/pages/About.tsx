import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, AlertTriangle, Lightbulb, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const solutionPoints = [
    t("aboutPage.solution.point1"),
    t("aboutPage.solution.point2"),
    t("aboutPage.solution.point3"),
    t("aboutPage.solution.point4"),
    t("aboutPage.solution.point5"),
  ];

  const sections = [
    {
      id: "overview",
      icon: Target,
      title: t("aboutPage.overview.title"),
      content: t("aboutPage.overview.text"),
    },
    {
      id: "problem",
      icon: AlertTriangle,
      title: t("aboutPage.problem.title"),
      content: t("aboutPage.problem.text"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Ella Association — Our Mission for Women in Tech"
        description="Discover Ella Association's mission to close the gender gap in tech through career transition, mentorship, and digital upskilling in Geneva."
        path="/about"
      />
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
            {t("aboutPage.tag")}
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground">
            {t("aboutPage.title")}
          </h1>
        </div>
      </section>

      {/* Overview & Problem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-card hover:shadow-warm transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6">
                  <section.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {t("aboutPage.solution.title")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("aboutPage.solution.text")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutionPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-card hover:shadow-warm transition-shadow duration-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground leading-relaxed italic">
              {t("aboutPage.solution.closing")}
            </p>
          </div>
        </div>
      </section>

      {/* Target Participants */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {t("aboutPage.target.title")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("aboutPage.target.text")}
            </p>
            <div className="mt-8">
              <a
                href="/#eligibility"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {t("aboutPage.target.cta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
