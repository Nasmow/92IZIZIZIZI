
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "../contexts/LanguageContext";

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners = [
    {
      id: "storage",
      title: t('partners.storage'),
      logos: [
        { name: "Radical Storage", path: "/logos/radical-storage.png", alt: "Logo Radical Storage" },
        { name: "Bounce", path: "/logos/bounce.png", alt: "Logo Bounce" },
        { name: "Nannybag", path: "/logos/nannybag.png", alt: "Logo Nannybag" },
        { name: "Stasher", path: "/logos/stasher.png", alt: "Logo Stasher" }
      ]
    },
    {
      id: "shipping",
      title: t('partners.shipping'),
      logos: [
        { name: "GLS", path: "/logos/gls.png", alt: "Logo GLS" },
        { name: "Luggage Hero", path: "/logos/luggage-hero.png", alt: "Logo Luggage Hero" }
      ]
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('partners.title')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="storage" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="storage">{t('partners.storage')}</TabsTrigger>
            <TabsTrigger value="shipping">{t('partners.shipping')}</TabsTrigger>
          </TabsList>
          
          {partners.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.logos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                    <img
                      src={logo.path}
                      alt={logo.alt}
                      className="max-h-16 w-auto"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PartnersSection;
