
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PartnersSection = () => {
  const partners = [
    {
      id: "storage",
      title: "Storage Partners",
      logos: [
        { name: "Radical Storage", path: "/logos/radical-storage.png", alt: "Radical Storage logo" },
        { name: "Bounce", path: "/logos/bounce.png", alt: "Bounce logo" },
        { name: "Nannybag", path: "/logos/nannybag.png", alt: "Nannybag logo" },
        { name: "Stasher", path: "/logos/stasher.png", alt: "Stasher logo" }
      ]
    },
    {
      id: "shipping",
      title: "Shipping Partners",
      logos: [
        { name: "GLS", path: "/logos/gls.png", alt: "GLS logo" },
        { name: "Luggage Hero", path: "/logos/luggage-hero.png", alt: "Luggage Hero logo" }
      ]
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Partners</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with trusted partners to provide you with the best logistics services.
          </p>
        </div>

        <Tabs defaultValue="storage" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="storage">Storage Partners</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Partners</TabsTrigger>
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
