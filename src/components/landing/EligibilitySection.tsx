import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const EligibilitySection = () => {
  const { t } = useLanguage();

  const criteria = [
    "eligibility.1",
    "eligibility.2",
    "eligibility.3",
    "eligibility.4",
    "eligibility.5",
  ];

  return (
    <section id="eligibility" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">{t("eligibility.tag")}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">{t("eligibility.title")}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{t("eligibility.subtitle")}</p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-warm">
              <ul className="space-y-4">
                {criteria.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground text-sm">{t(key)}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="w-full mt-8">
                {t("eligibility.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
