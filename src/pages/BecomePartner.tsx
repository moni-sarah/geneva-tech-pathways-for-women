import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Laptop, GraduationCap, Handshake, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BecomePartner = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orgType, setOrgType] = useState("");
  const [partnershipTypes, setPartnershipTypes] = useState<string[]>([]);

  const handlePartnershipToggle = (value: string) => {
    setPartnershipTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t("partner.form.success"),
        description: t("partner.form.successDesc"),
      });
      (e.target as HTMLFormElement).reset();
      setOrgType("");
      setPartnershipTypes([]);
    }, 1500);
  };

  const partnershipOptions = [
    { value: "mentorship", label: t("partner.form.type.mentorship"), icon: Handshake },
    { value: "internship", label: t("partner.form.type.internship"), icon: Laptop },
    { value: "training", label: t("partner.form.type.training"), icon: GraduationCap },
    { value: "funding", label: t("partner.form.type.funding"), icon: Building },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link
            to="/#partners"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("partner.back")}
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              {t("partner.tag")}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">
              {t("partner.title")}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("partner.subtitle")}
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-card">
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Organization Info */}
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground border-b border-border pb-3">
                    {t("partner.form.orgInfo")}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">{t("partner.form.orgName")} *</Label>
                      <Input id="orgName" name="orgName" required maxLength={100} placeholder={t("partner.form.orgNamePlaceholder")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">{t("partner.form.website")}</Label>
                      <Input id="website" name="website" type="url" maxLength={255} placeholder="https://" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>{t("partner.form.orgType")} *</Label>
                    <RadioGroup value={orgType} onValueChange={setOrgType} className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["company", "ngo", "association", "academic", "government", "other"].map((type) => (
                        <div key={type} className="flex items-center space-x-2 rounded-lg border border-input p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value={type} id={`type-${type}`} />
                          <Label htmlFor={`type-${type}`} className="cursor-pointer text-sm">
                            {t(`partner.form.orgType.${type}`)}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground border-b border-border pb-3">
                    {t("partner.form.contactInfo")}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">{t("partner.form.contactName")} *</Label>
                      <Input id="contactName" name="contactName" required maxLength={100} placeholder={t("partner.form.contactNamePlaceholder")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactRole">{t("partner.form.contactRole")}</Label>
                      <Input id="contactRole" name="contactRole" maxLength={100} placeholder={t("partner.form.contactRolePlaceholder")} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("partner.form.email")} *</Label>
                      <Input id="email" name="email" type="email" required maxLength={255} placeholder={t("partner.form.emailPlaceholder")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("partner.form.phone")}</Label>
                      <Input id="phone" name="phone" type="tel" maxLength={20} placeholder="+41 ..." />
                    </div>
                  </div>
                </div>

                {/* Partnership Interest */}
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground border-b border-border pb-3">
                    {t("partner.form.partnershipInterest")}
                  </h2>

                  <div className="space-y-3">
                    <Label>{t("partner.form.partnershipType")} *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {partnershipOptions.map((option) => {
                        const isSelected = partnershipTypes.includes(option.value);
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handlePartnershipToggle(option.value)}
                            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all duration-200 ${
                              isSelected
                                ? "border-primary bg-primary/5 shadow-sm"
                                : "border-input hover:bg-muted/50"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-primary/10" : "bg-muted"
                            }`}>
                              <option.icon className={`h-5 w-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                            </div>
                            <span className={`text-sm font-medium ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                              {option.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("partner.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      maxLength={1000}
                      rows={5}
                      placeholder={t("partner.form.messagePlaceholder")}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    {t("partner.form.terms")}
                  </Label>
                </div>

                {/* Submit */}
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t("partner.form.submitting")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {t("partner.form.submit")}
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BecomePartner;
