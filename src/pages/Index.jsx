import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QualitiesSection } from "@/components/QualitiesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <QualitiesSection />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
