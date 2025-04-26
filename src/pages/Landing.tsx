import { useEffect } from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
// import PricingSection from '../components/landing/PricingSection';
import CtaSection from '../components/landing/CtaSection';
import Footer from '../components/landing/Footer';
import ScrollToTopButton from '../components/landing/ScrollToTopButton';
import RevealOnScroll from '../components/landing/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'FinFlow - Smart Financial Management';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <RevealOnScroll>
        <FeaturesSection />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <BenefitsSection />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <TestimonialsSection />
      </RevealOnScroll>
      
      {/* <RevealOnScroll>
        <PricingSection />
      </RevealOnScroll> */}
      
      <RevealOnScroll>
        <CtaSection />
      </RevealOnScroll>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
