import { useLanguage } from "@/contexts/LanguageContext";
import { useHashScroll } from "@/hooks/useHashScroll";
import { Phone } from "lucide-react";
import logo from "@/assets/ella-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const { scrollToHash } = useHashScroll();

  const hashLink = (href: string, label: string) => (
    <a
      href={href}
      onClick={(e) => scrollToHash(href, e)}
      className="hover:text-primary transition-colors"
    >
      {label}
    </a>
  );

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Association Ella" className="h-16 w-16 object-contain" />
              
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "{t("footer.tagline")}"
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.program")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{hashLink("#about", t("nav.about"))}</li>
              <li>{hashLink("#program", t("nav.program"))}</li>
              <li>{hashLink("#benefits", t("nav.benefits"))}</li>
              <li>{hashLink("#eligibility", t("nav.eligibility"))}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.connect")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{hashLink("#timeline", t("nav.timeline"))}</li>
              <li>{hashLink("#partners", t("nav.partners"))}</li>
              <li>
                <a href="tel:+41779883672" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  +41 77 988 36 72
                </a>
              </li>
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
          © {new Date().getFullYear()} Association Ella. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
