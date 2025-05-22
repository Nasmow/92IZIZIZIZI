
import React from "react";
import { Luggage, Package, MapPin, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Luggage className="h-12 w-12 text-blue-600" />,
      title: "Luggage Storage",
      description: "Store your bags safely and securely while you explore the city or wait for your next destination."
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: "Package Forwarding",
      description: "We receive your packages and forward them to your desired address, wherever you are in the world."
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Pickup Point",
      description: "Use our location as your delivery address and collect your packages at your convenience."
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Shipping Solutions",
      description: "We offer various shipping options to meet your needs and budget requirements."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to make your logistics experience seamless and stress-free.
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
