import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
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
import { Send, ArrowLeft, Code, BarChart3, Bot, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const ApplyNow = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [techInterest, setTechInterest] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const { error } = await supabase.from("program_applications").insert({
        full_name: (formData.get("fullName") as string).trim(),
        email: (formData.get("email") as string).trim(),
        phone: (formData.get("phone") as string)?.trim() || null,
        nationality: (formData.get("nationality") as string)?.trim() || null,
        residence_status: (formData.get("residenceStatus") as string)?.trim() || null,
        education_level: educationLevel || null,
        previous_experience: (formData.get("previousExperience") as string)?.trim() || null,
        tech_interest: techInterest || null,
        motivation: (formData.get("motivation") as string)?.trim() || null,
      });

      if (error) throw error;

      toast({
        title: t("apply.form.success"),
        description: t("apply.form.successDesc"),
      });
      form.reset();
      setTechInterest("");
      setEducationLevel("");
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const techOptions = [
    { value: "web_dev", label: t("apply.form.tech.webdev"), icon: Code },
    { value: "data_analysis", label: t("apply.form.tech.data"), icon: BarChart3 },
    { value: "ai_digital", label: t("apply.form.tech.ai"), icon: Bot },
    { value: "not_sure", label: t("apply.form.tech.unsure"), icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Apply Now — Association Ella Program for Women in Tech"
        description="Apply to join Association Ella's Geneva-based program for women transitioning into tech: web development, data analysis, and AI tracks."
        path="/apply"
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("apply.back")}
          </Link>

          <div className="text-center mb-12">
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              {t("apply.tag")}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">
              {t("apply.title")}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("apply.subtitle")}
            </p>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground border-b border-border pb-3">
                    {t("apply.form.personalInfo")}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t("apply.form.fullName")} *</Label>
                      <Input id="fullName" name="fullName" required maxLength={100} placeholder={t("apply.form.fullNamePlaceholder")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("apply.form.email")} *</Label>
                      <Input id="email" name="email" type="email" required maxLength={255} placeholder={t("apply.form.emailPlaceholder")} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("apply.form.phone")}</Label>
                      <Input id="phone" name="phone" type="tel" maxLength={20} placeholder="+41 ..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">{t("apply.form.nationality")}</Label>
                      <Input id="nationality" name="nationality" maxLength={100} placeholder={t("apply.form.nationalityPlaceholder")} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="residenceStatus">{t("apply.form.residenceStatus")}</Label>
                    <Input id="residenceStatus" name="residenceStatus" maxLength={100} placeholder={t("apply.form.residenceStatusPlaceholder")} />
                  </div>
                </div>

                {/* Background */}
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground border-b border-border pb-3">
                    {t("apply.form.background")}
                  </h2>

                  <div className="space-y-3">
                    <Label>{t("apply.form.education")} *</Label>
                    <RadioGroup value={educationLevel} onValueChange={setEducationLevel} className="grid grid-cols-2 gap-3">
                      {["high_school", "bachelor", "master", "other"].map((level) => (
                        <div key={level} className="flex items-center space-x-2 rounded-lg border border-input p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value={level} id={`edu-${level}`} />
                          <Label htmlFor={`edu-${level}`} className="cursor-pointer text-sm">
                            {t(`apply.form.education.${level}`)}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousExperience">{t("apply.form.experience")}</Label>
                    <Textarea
                      id="previousExperience"
                      name="previousExperience"
                      maxLength={500}
                      rows={3}
                      placeholder={t("apply.form.experiencePlaceholder")}
                    />
                  </div>
                </div>

                {/* Tech Interest */}
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground border-b border-border pb-3">
                    {t("apply.form.techInterest")}
                  </h2>

                  <div className="space-y-3">
                    <Label>{t("apply.form.techTrack")} *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {techOptions.map((option) => {
                        const isSelected = techInterest === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setTechInterest(option.value)}
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
                    <Label htmlFor="motivation">{t("apply.form.motivation")} *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      required
                      maxLength={1000}
                      rows={5}
                      placeholder={t("apply.form.motivationPlaceholder")}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    {t("apply.form.terms")}
                  </Label>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t("apply.form.submitting")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {t("apply.form.submit")}
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

export default ApplyNow;
