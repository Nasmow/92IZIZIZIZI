import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Marie Dubois",
      role: "Fondatrice & Directrice",
      description: "Passionnée par l'innovation dans les services de voyage, Marie a créé BagageKom pour simplifier la vie des voyageurs.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Pierre Martin",
      role: "Responsable Opérations",
      description: "Expert en logistique avec 10 ans d'expérience, Pierre supervise tous nos points de consigne pour garantir un service optimal.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sophie Laurent",
      role: "Service Client",
      description: "Sophie et son équipe s'assurent que chaque client vit une expérience exceptionnelle avec nos services.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-bagagekom" />,
      title: "Passion",
      description: "Nous sommes passionnés par l'amélioration de l'expérience de voyage de nos clients."
    },
    {
      icon: <Target className="w-8 h-8 text-bagagekom" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque service que nous fournissons, sans compromis sur la qualité."
    },
    {
      icon: <Users className="w-8 h-8 text-bagagekom" />,
      title: "Communauté",
      description: "Nous créons une communauté de voyageurs satisfaits et de partenaires de confiance."
    },
    {
      icon: <Award className="w-8 h-8 text-bagagekom" />,
      title: "Innovation",
      description: "Nous innovons constamment pour offrir des solutions modernes et pratiques."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Navigation de retour */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-bagagekom hover:text-bagagekom-dark transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Section héros */}
      <section className="py-16 bg-gradient-to-br from-bagagekom/5 to-bagagekom-light/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bagagekom-black mb-6">
            À Propos de <span className="text-bagagekom">BagageKom</span>
          </h1>
          <p className="text-xl text-bagagekom-gray max-w-3xl mx-auto leading-relaxed">
            Nous révolutionnons la façon dont vous gérez vos bagages et colis pendant vos voyages. 
            Découvrez notre histoire, notre mission et l'équipe passionnée qui rend tout cela possible.
          </p>
        </div>
      </section>

      {/* Section mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bagagekom-black mb-6">Notre Mission</h2>
              <p className="text-bagagekom-gray leading-relaxed mb-4">
                Chez BagageKom, nous croyons que voyager devrait être une expérience libératrice, 
                sans le fardeau des bagages lourds ou l'inquiétude des colis perdus.
              </p>
              <p className="text-bagagekom-gray leading-relaxed mb-4">
                Notre mission est de fournir une solution de consigne de bagages sécurisée, 
                pratique et abordable, permettant aux voyageurs d'explorer librement tout en 
                sachant que leurs affaires sont en sécurité.
              </p>
              <p className="text-bagagekom-gray leading-relaxed">
                Nous nous engageons à offrir un service exceptionnel qui dépasse les attentes 
                de nos clients, en combinant technologie moderne et service client personnalisé.
              </p>
            </div>
            <div className="bg-gradient-to-br from-bagagekom/10 to-bagagekom-light/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bagagekom mb-2">500+</div>
                  <div className="text-bagagekom-gray">Points de consigne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bagagekom mb-2">10k+</div>
                  <div className="text-bagagekom-gray">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bagagekom mb-2">50+</div>
                  <div className="text-bagagekom-gray">Villes couvertes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bagagekom mb-2">24/7</div>
                  <div className="text-bagagekom-gray">Support client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section valeurs */}
      <section className="py-16 bg-bagagekom-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bagagekom-black mb-4">Nos Valeurs</h2>
            <p className="text-bagagekom-gray max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos décisions et façonnent la façon dont nous servons nos clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-bagagekom-black mb-3">{value.title}</h3>
                <p className="text-bagagekom-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section équipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bagagekom-black mb-4">Notre Équipe</h2>
            <p className="text-bagagekom-gray max-w-2xl mx-auto">
              Rencontrez les personnes passionnées qui travaillent chaque jour pour améliorer votre expérience de voyage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-bagagekom/20 to-bagagekom-light/30 flex items-center justify-center">
                  <Users className="w-20 h-20 text-bagagekom" />
                </div>
                <h3 className="text-xl font-semibold text-bagagekom-black mb-2">{member.name}</h3>
                <div className="text-bagagekom font-medium mb-3">{member.role}</div>
                <p className="text-bagagekom-gray leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section call-to-action */}
      <section className="py-16 bg-gradient-to-r from-bagagekom to-bagagekom-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à Découvrir BagageKom ?
          </h2>
          <p className="text-bagagekom-light/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de voyageurs qui ont déjà choisi BagageKom pour simplifier leurs déplacements.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center bg-white text-bagagekom px-8 py-4 rounded-lg font-semibold hover:bg-bagagekom-white transition-colors duration-200"
          >
            Découvrir Nos Services
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
