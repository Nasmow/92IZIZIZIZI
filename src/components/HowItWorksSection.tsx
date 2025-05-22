
import React from "react";
import { 
  CheckCircle2,
  PackageOpen,
  Send,
  CalendarCheck
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CheckCircle2 className="h-12 w-12 text-blue-600" />,
      title: "Register",
      description: "Create an account or contact us to register for our services."
    },
    {
      icon: <PackageOpen className="h-12 w-12 text-blue-600" />,
      title: "Drop Off or Deliver",
      description: "Drop off your luggage or have your packages delivered to our location."
    },
    {
      icon: <Send className="h-12 w-12 text-blue-600" />,
      title: "Forward or Store",
      description: "We'll store your items securely or forward them to your desired destination."
    },
    {
      icon: <CalendarCheck className="h-12 w-12 text-blue-600" />,
      title: "Pickup or Receive",
      description: "Collect your items when you're ready or receive them at your specified address."
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple and efficient process ensures you get the service you need without any hassle.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-blue-200 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full border-2 border-blue-200 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
