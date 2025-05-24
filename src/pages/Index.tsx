
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PartnersSection from "../components/PartnersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <PartnersSection />
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-gray-700">
              {t('partnership.text')} <a href="https://radicalstorage.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{t('partnership.link')}</a>{t('partnership.description')}
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
