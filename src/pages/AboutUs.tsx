
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold text-center mb-8">À Propos de BagageKom</h1>
            
            <div className="prose lg:prose-xl mx-auto">
              <div className="mb-10 text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Fondatrice de BagageKom" 
                  className="rounded-lg shadow-lg mx-auto mb-4 max-w-md"
                />
                <p className="text-sm text-gray-500 italic">Notre fondatrice </p>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Un Parcours Personnel</h2>
              <p className="mb-6">
                BagageKom représente l'accomplissement d'un rêve - construire une entreprise à partir de zéro avec dévouement, soin et un engagement profond envers la connexion humaine. Notre fondatrice a toujours envisagé de créer quelque chose qui n'était pas seulement un service, mais une véritable main tendue pour les voyageurs et les clients dans le besoin.
              </p>
              
              <blockquote className="border-l-4 border-bagagekom pl-4 italic my-8">
                "J'ai toujours cru que les affaires devraient être personnelles. Chaque colis que nous manipulons, chaque voyageur que nous aidons - ils ne sont pas seulement des clients, ce sont des personnes avec des histoires, des voyages et des besoins. Cet élément humain est ce qui motive tout ce que nous faisons chez BagageKom."
              </blockquote>
              
              <h2 className="text-2xl font-semibold mb-4">Notre Philosophie</h2>
              <p className="mb-6">
                Chez BagageKom, nous croyons qu'un service exceptionnel provient d'une véritable connexion humaine. Notre fondatrice a construit cette entreprise de ses propres mains, y versant son cœur et son âme pour créer une entreprise qui comprend et répond vraiment aux besoins des voyageurs et des clients.
              </p>
              
              <p className="mb-6">
                Chaque jour, nous nous efforçons d'aller au-delà d'être simplement un prestataire de services. Nous voulons être votre partenaire de confiance, rendant votre voyage plus fluide, vos voyages plus légers et votre expérience meilleure. C'est la promesse que notre fondatrice a faite lorsqu'elle a établi BagageKom, et c'est la promesse que nous tenons avec chaque client que nous servons.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">La Touche Humaine</h2>
              <p className="mb-6">
                Dans un monde de plus en plus numérique et automatisé, nous sommes fiers de défendre la valeur de la connexion humaine. La passion de notre fondatrice pour aider les autres et construire des relations significatives est au cœur de notre modèle d'affaires. Quand vous choisissez BagageKom, vous n'obtenez pas seulement un service - vous obtenez une équipe dévouée qui se soucie vraiment de rendre votre expérience exceptionnelle.
              </p>
              
              <p className="mb-6">
                Nous comprenons que derrière chaque valise il y a un voyage, derrière chaque colis il y a un but. C'est pourquoi nous traitons vos affaires avec le même soin et la même attention que nous donnerions aux nôtres. Ce n'est pas seulement des affaires - c'est personnel.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Notre Engagement</h2>
              <p>
                Alors que nous continuons à grandir et évoluer, nos principes fondateurs restent inchangés : fournir un service exceptionnel avec une véritable touche humaine, faire un effort supplémentaire pour chaque client, et construire une entreprise qui fait une différence positive dans la vie des gens. C'est la promesse de BagageKom, et nous sommes fiers de la tenir chaque jour.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
