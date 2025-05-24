import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Luggage } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bagagekom/5 to-bagagekom-light/10 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icône de bagage */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Luggage className="w-24 h-24 text-bagagekom animate-bounce" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Titre d'erreur */}
        <h1 className="text-6xl md:text-8xl font-bold text-bagagekom mb-4">404</h1>
        
        {/* Message d'erreur */}
        <h2 className="text-3xl md:text-4xl font-bold text-bagagekom-black mb-6">
          Oops ! Page Introuvable
        </h2>
        
        <p className="text-lg text-bagagekom-gray mb-8 leading-relaxed">
          Il semble que cette page ait disparu comme un bagage égaré à l'aéroport ! 
          Ne vous inquiétez pas, nous allons vous aider à retrouver votre chemin.
        </p>

        {/* Messages d'aide amusants */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <p className="text-bagagekom-gray mb-4">
            <strong>Que s'est-il passé ?</strong>
          </p>
          <ul className="text-left text-bagagekom-gray space-y-2 max-w-md mx-auto">
            <li>• La page que vous cherchez n'existe pas</li>
            <li>• L'URL a peut-être été mal saisie</li>
            <li>• Le lien que vous avez suivi est obsolète</li>
            <li>• Notre équipe technique fait du rangement</li>
          </ul>
        </div>

        {/* Boutons de navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center bg-bagagekom text-white px-8 py-4 rounded-lg font-semibold hover:bg-bagagekom-dark transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Retour à l'Accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center bg-white text-bagagekom border-2 border-bagagekom px-8 py-4 rounded-lg font-semibold hover:bg-bagagekom hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Page Précédente
          </button>
        </div>

        {/* Message de support */}
        <div className="mt-12 p-6 bg-bagagekom/5 rounded-xl">
          <p className="text-bagagekom-gray">
            Besoin d'aide ? Notre équipe de support est là pour vous !
          </p>
          <p className="text-bagagekom font-semibold mt-2">
            📧 support@bagagekom.com | 📞 +33 1 23 45 67 89
          </p>
        </div>

        {/* Animation de bagages flottants */}
        <div className="absolute top-10 left-10 animate-pulse opacity-20">
          <Luggage className="w-8 h-8 text-bagagekom" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse opacity-20 animation-delay-1000">
          <Luggage className="w-6 h-6 text-bagagekom-light" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-pulse opacity-20 animation-delay-2000">
          <Luggage className="w-10 h-10 text-bagagekom-dark" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
