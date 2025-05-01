
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { ParallaxProvider } from "react-scroll-parallax";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen relative overflow-hidden">
        <CustomCursor />
        <Navbar />
        
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <ProductSection />
        <WhyUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;
