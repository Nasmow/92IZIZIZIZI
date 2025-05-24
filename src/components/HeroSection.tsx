
import React from "react";
import { Luggage } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('hero.subtitle')}
            </p>
            <p className="text-xl md:text-2xl font-semibold bg-white/20 p-3 rounded-md inline-block">
              {t('hero.pricing')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/#services" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center transition"
              >
                {t('hero.cta.services')}
              </Link>
              <Link 
                to="/#contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium text-center transition"
              >
                {t('hero.cta.contact')}
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 p-16 rounded-full">
              <Luggage size={180} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
