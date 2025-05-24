
import React from "react";
import { Luggage, Package, MapPin, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Luggage className="h-12 w-12 text-blue-600" />,
      title: t('services.luggage.title'),
      description: t('services.luggage.description')
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: t('services.shipping.title'),
      description: t('services.shipping.description')
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: t('services.collection.title'),
      description: t('services.collection.description')
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: t('services.solutions.title'),
      description: t('services.solutions.description')
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('services.title')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-all hover:shadow-md">
              <CardHeader className="pb-2 flex justify-center">
                {service.icon}
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
