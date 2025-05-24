import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

// Types pour les langues supportées
type Language = 'fr' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Traductions
const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    howItWorks: 'Comment ça marche',
    about: 'À propos',
    contact: 'Contact',
    login: 'Se connecter',
    book: 'Réserver',
    bookNow: 'Réserver Maintenant',
    
    // Hero Section
    heroTitle: 'Voyagez Léger avec BagageKom',
    heroSubtitle: 'Découvrez la liberté de voyager sans contraintes ! Stockez vos bagages en toute sécurité dans nos points de consigne partenaires et explorez la ville les mains libres.',
    locations: 'emplacements',
    secure: 'sécurisé',
    howItWorksBtn: 'Comment ça marche ?',
    
    // Services
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Des solutions complètes pour tous vos besoins de stockage et de livraison',
    
    // Contact
    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Une question ? Notre équipe est là pour vous aider',
    
    // Footer
    quickLinks: 'Liens Rapides',
    support: 'Support',
    legal: 'Légal',
    followUs: 'Suivez-nous',
    
    // Common
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    howItWorks: 'How It Works',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    book: 'Book',
    bookNow: 'Book Now',
    
    // Hero Section
    heroTitle: 'Travel Light with BagageKom',
    heroSubtitle: 'Discover the freedom to travel without constraints! Store your luggage safely at our partner drop-off points and explore the city hands-free.',
    locations: 'locations',
    secure: 'secure',
    howItWorksBtn: 'How it works?',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Complete solutions for all your storage and delivery needs',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Have a question? Our team is here to help',
    
    // Footer
    quickLinks: 'Quick Links',
    support: 'Support',
    legal: 'Legal',
    followUs: 'Follow Us',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
  }
};

// Contexte de langue
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider de langue
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Optionnel : sauvegarder dans localStorage
    localStorage.setItem('bagagekom-language', lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['fr']] || key;
  };

  // Initialiser la langue depuis localStorage au montage
  React.useEffect(() => {
    const savedLang = localStorage.getItem('bagagekom-language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook pour utiliser le contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Composant sélecteur de langue
const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  ];

  const currentLangData = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-bagagekom/20 hover:border-bagagekom/40 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
      >
        <Globe className="w-4 h-4 text-bagagekom" />
        <span className="text-sm font-medium text-bagagekom-gray">
          {currentLangData?.flag} {currentLangData?.code.toUpperCase()}
        </span>
        <ChevronDown className={`w-4 h-4 text-bagagekom transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer le menu */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu déroulant */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-bagagekom/10 z-20 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-3 hover:bg-bagagekom/5 transition-colors duration-200 flex items-center space-x-3 ${
                  currentLanguage === language.code ? 'bg-bagagekom/10 text-bagagekom' : 'text-bagagekom-gray'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLanguage === language.code && (
                  <div className="ml-auto w-2 h-2 bg-bagagekom rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
