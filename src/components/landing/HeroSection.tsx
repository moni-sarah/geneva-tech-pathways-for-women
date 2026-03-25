import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

          <div className="relative animate-fade-in group" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-warm transform transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl">
              <img
                src={heroImage}
                alt="Women collaborating in tech"
                className="w-full h-[400px] md:h-[500px] lg:h-[560px] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* Floating decorative elements with continuous animation */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-secondary/25 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-primary/15 blur-2xl animate-[pulse_5s_ease-in-out_infinite_1s]" />
            <div className="absolute top-1/2 -right-3 w-16 h-16 rounded-full bg-accent/20 blur-xl animate-[bounce_6s_ease-in-out_infinite_0.5s]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
