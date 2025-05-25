
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AvatarSection from "@/components/AvatarSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AvatarSection />
      <TestimonialsSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
