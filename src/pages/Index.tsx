import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProgramSection from "@/components/landing/ProgramSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import EligibilitySection from "@/components/landing/EligibilitySection";
import TimelineSection from "@/components/landing/TimelineSection";

import PartnersSection from "@/components/landing/PartnersSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <BenefitsSection />
      <EligibilitySection />
      <TimelineSection />
      <ImpactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
