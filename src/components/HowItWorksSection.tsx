
import React from "react";
import { 
  CheckCircle2,
  PackageOpen,
  Send,
  CalendarCheck
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <CheckCircle2 className="h-12 w-12 text-blue-600" />,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      icon: <PackageOpen className="h-12 w-12 text-blue-600" />,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      icon: <Send className="h-12 w-12 text-blue-600" />,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    },
    {
      icon: <CalendarCheck className="h-12 w-12 text-blue-600" />,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description')
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('howItWorks.title')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
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
