import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProgramSection from "@/components/landing/ProgramSection";
import OutcomesSection from "@/components/landing/OutcomesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import EligibilitySection from "@/components/landing/EligibilitySection";
import TimelineSection from "@/components/landing/TimelineSection";

import PartnersSection from "@/components/landing/PartnersSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ella Association — Career Transition for Women in Tech in Geneva"
        description="Geneva-based program empowering women to transition into tech through digital upskilling, mentorship, and hands-on training."
        path="/"
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <OutcomesSection />
      <BenefitsSection />
      <EligibilitySection />
      <TimelineSection />
      
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
