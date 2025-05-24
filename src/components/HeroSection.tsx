import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-bagagekom/5 to-bagagekom-light/10 py-20 lg:py-32 overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-bagagekom/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-bagagekom-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bagagekom-black leading-tight mb-6">
              Voyagez Léger avec{' '}
              <span className="text-bagagekom">BagageKom</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-bagagekom-gray leading-relaxed mb-8 max-w-2xl">
              Découvrez la liberté de voyager sans contraintes ! Stockez vos bagages en toute sécurité 
              dans nos points de consigne partenaires et explorez la ville les mains libres.
            </p>

            {/* Points clés */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-bagagekom-gray">
                <MapPin className="w-5 h-5 text-bagagekom mr-2" />
                <span>500+ emplacements</span>
              </div>
              <div className="flex items-center text-bagagekom-gray">
                <Clock className="w-5 h-5 text-bagagekom mr-2" />
                <span>24h/24, 7j/7</span>
              </div>
              <div className="flex items-center text-bagagekom-gray">
                <Shield className="w-5 h-5 text-bagagekom mr-2" />
                <span>100% sécurisé</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-bagagekom hover:bg-bagagekom-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Réserver Maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-bagagekom text-bagagekom hover:bg-bagagekom hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
              >
                Comment ça marche ?
              </Button>
            </div>

            {/* Témoignage rapide */}
            <div className="mt-8 p-4 bg-white/50 rounded-lg border border-bagagekom/20">
              <p className="text-bagagekom-gray italic mb-2">
                "Grâce à BagageKom, j'ai pu visiter Paris sans traîner mes valises. Service impeccable !"
              </p>
              <p className="text-sm text-bagagekom font-semibold">
                - Marie L., voyageuse satisfaite
              </p>
            </div>
          </div>

          {/* Section visuelle */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-bagagekom/20 to-bagagekom-light/30 rounded-3xl p-8 lg:p-12">
              {/* Illustration de bagages (remplacer par une vraie image si disponible) */}
              <div className="aspect-square bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-bagagekom/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-16 h-16 text-bagagekom" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 4h8v2H8V4zm10 15H6V10h12v9z"/>
                      <circle cx="15" cy="13" r="1"/>
                    </svg>
                  </div>
                  <p className="text-bagagekom-gray font-medium">Stockage Sécurisé</p>
                </div>
              </div>
              
              {/* Badges flottants */}
              <div className="absolute -top-4 -left-4 bg-bagagekom text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Nouveau !
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-bagagekom px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-bagagekom">
                Dès 3€/jour
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
