import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useHashScroll } from "@/hooks/useHashScroll";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import logo from "@/assets/fe-hub-logo.png";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToHash } = useHashScroll();

  const navLinks = [
    { key: "nav.about", href: "/about", isRoute: true },
    { key: "nav.program", href: "#program" },
    { key: "nav.benefits", href: "#benefits" },
    { key: "nav.eligibility", href: "#eligibility" },
    { key: "nav.timeline", href: "#timeline" },
    { key: "nav.partners", href: "#partners" },
  ];

  const handleHashClick = (e: React.MouseEvent, hash: string) => {
    setIsOpen(false);
    scrollToHash(hash, e);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Association Ella" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg text-primary hidden sm:inline">Association Ella</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.key}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(link.key)}
              </Link>
            ) : (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(link.key)}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            title="Switch language"
          >
            <Globe className="h-4 w-4" />
          </Button>
          <span className="text-xs font-medium text-muted-foreground uppercase">{language}</span>

          <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle theme">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/apply">{t("nav.apply")}</Link>
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 py-4 space-y-3 animate-fade-in">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.key}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(link.key)}
              </Link>
            ) : (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(link.key)}
              </a>
            )
          )}
          <Button variant="hero" size="sm" className="w-full" asChild>
            <Link to="/apply">{t("nav.apply")}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
