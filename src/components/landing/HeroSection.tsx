import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-warm opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              FE Hub Geneva
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                {t("hero.cta1")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">
                {t("hero.cta2")}
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <img
                src={heroImage}
                alt="Women collaborating in tech"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
