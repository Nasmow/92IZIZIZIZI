import React from 'react';
import { useLanguage } from './LanguageSelector';
import { Luggage, Package, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const { t, currentLanguage } = useLanguage();

  const services = {
    fr: [
      {
        icon: <Luggage className="w-8 h-8" />,
        title: 'Consigne Bagages',
        description: 'Stockez vos valises et sacs en toute sécurité dans nos points partenaires. Idéal pour explorer la ville sans encombrement.',
        features: ['Sécurisé 24h/24', 'Assurance incluse', 'Accès facile'],
        price: 'Dès 3€/jour',
        popular: false
      },
      {
        icon: <Package className="w-8 h-8" />,
        title: 'Livraison Express',
        description: 'Service de livraison rapide de vos colis et bagages directement à votre destination. Service premium pour un confort optimal.',
        features: ['Livraison même jour', 'Suivi en temps réel', 'Support prioritaire'],
        price: 'Dès 15€',
        popular: true
      },
      {
        icon: <MapPin className="w-8 h-8" />,
        title: 'Points Relais',
        description: 'Réseau étendu de points de récupération dans toute la France. Récupérez vos affaires quand vous le souhaitez.',
        features: ['500+ emplacements', 'Horaires étendus', 'Réservation en ligne'],
        price: 'Dès 2€/jour',
        popular: false
      }
    ],
    en: [
      {
        icon: <Luggage className="w-8 h-8" />,
        title: 'Luggage Storage',
        description: 'Store your suitcases and bags safely at our partner locations. Perfect for exploring the city hands-free.',
        features: ['24/7 Security', 'Insurance included', 'Easy access'],
        price: 'From €3/day',
        popular: false
      },
      {
        icon: <Package className="w-8 h-8" />,
        title: 'Express Delivery',
        description: 'Fast delivery service for your packages and luggage directly to your destination. Premium service for optimal comfort.',
        features: ['Same-day delivery', 'Real-time tracking', 'Priority support'],
        price: 'From €15',
        popular: true
      },
      {
        icon: <MapPin className="w-8 h-8" />,
        title: 'Pickup Points',
        description: 'Extended network of pickup points throughout France. Collect your belongings whenever you want.',
        features: ['500+ locations', 'Extended hours', 'Online booking'],
        price: 'From €2/day',
        popular: false
      }
    ]
  };

  const benefits = {
    fr: [
      {
        icon: <Clock className="w-6 h-6 text-bagagekom" />,
        title: 'Service 24h/24',
        description: 'Accès à vos affaires à tout moment'
      },
      {
        icon: <Shield className="w-6 h-6 text-bagagekom" />,
        title: 'Sécurité Maximale',
        description: 'Surveillance et assurance complète'
      },
      {
        icon: <Star className="w-6 h-6 text-bagagekom" />,
        title: 'Service Premium',
        description: 'Qualité et satisfaction garanties'
      }
    ],
    en: [
      {
        icon: <Clock className="w-6 h-6 text-bagagekom" />,
        title: '24/7 Service',
        description: 'Access your belongings anytime'
      },
      {
        icon: <Shield className="w-6 h-6 text-bagagekom" />,
        title: 'Maximum Security',
        description: 'Full surveillance and insurance'
      },
      {
        icon: <Star className="w-6 h-6 text-bagagekom" />,
        title: 'Premium Service',
        description: 'Quality and satisfaction guaranteed'
      }
    ]
  };

  const currentServices = services[currentLanguage];
  const currentBenefits = benefits[currentLanguage];

  return (
    <section id="services" className="py-16 lg:py-24 bg-bagagekom-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-bagagekom-black mb-4">
            {currentLanguage === 'fr' ? 'Nos Services' : 'Our Services'}
          </h2>
          <p className="text-lg text-bagagekom-gray max-w-3xl mx-auto">
            {currentLanguage === 'fr' 
              ? 'Des solutions complètes pour tous vos besoins de stockage et de livraison. Choisissez le service qui vous convient le mieux.'
              : 'Complete solutions for all your storage and delivery needs. Choose the service that suits you best.'
            }
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 ${
                service.popular 
                  ? 'border-bagagekom shadow-bagagekom/10' 
                  : 'border-transparent hover:border-bagagekom/20'
              }`}
            >
              {/* Badge populaire */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-bagagekom text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {currentLanguage === 'fr' ? 'Populaire' : 'Popular'}
                  </span>
                </div>
              )}

              {/* Icône du service */}
              <div className="flex items-center justify-center w-16 h-16 bg-bagagekom/10 rounded-xl mb-6 text-bagagekom">
                {service.icon}
              </div>

              {/* Contenu du service */}
              <h3 className="text-xl font-bold text-bagagekom-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-bagagekom-gray leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Caractéristiques */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-bagagekom-gray">
                    <div className="w-2 h-2 bg-bagagekom rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Prix et bouton */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-bagagekom">
                  {service.price}
                </div>
                <Button 
                  size="sm"
                  className={`${
                    service.popular 
                      ? 'bg-bagagekom hover:bg-bagagekom-dark text-white' 
                      : 'bg-white border-2 border-bagagekom text-bagagekom hover:bg-bagagekom hover:text-white'
                  } transition-all duration-200`}
                >
                  {currentLanguage === 'fr' ? 'Choisir' : 'Choose'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Section avantages */}
        <div className="bg-gradient-to-r from-bagagekom/5 to-bagagekom-light/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-bagagekom-black mb-2">
              {currentLanguage === 'fr' ? 'Pourquoi Choisir BagageKom ?' : 'Why Choose BagageKom?'}
            </h3>
            <p className="text-bagagekom-gray">
              {currentLanguage === 'fr' 
                ? 'Notre engagement pour votre satisfaction'
                : 'Our commitment to your satisfaction'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto shadow-sm">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-bagagekom-black mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-bagagekom-gray">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-bagagekom hover:bg-bagagekom-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {currentLanguage === 'fr' ? 'Découvrir Tous Nos Services' : 'Discover All Our Services'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
