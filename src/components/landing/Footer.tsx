import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/fe-hub-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Ellatech" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading font-bold text-lg text-primary">Ellatech</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "{t("footer.tagline")}"
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.program")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">{t("nav.about")}</a></li>
              <li><a href="#program" className="hover:text-primary transition-colors">{t("nav.program")}</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">{t("nav.benefits")}</a></li>
              <li><a href="#eligibility" className="hover:text-primary transition-colors">{t("nav.eligibility")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.connect")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#timeline" className="hover:text-primary transition-colors">{t("nav.timeline")}</a></li>
              <li><a href="#partners" className="hover:text-primary transition-colors">{t("nav.partners")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">{t("footer.privacy")}</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">{t("footer.terms")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ellatech. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
