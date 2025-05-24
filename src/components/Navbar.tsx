import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Luggage } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Comment ça marche', href: '#how-it-works' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-bagagekom/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-bagagekom rounded-lg group-hover:bg-bagagekom-dark transition-colors duration-200">
              <Luggage className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-bagagekom-black">
              Bagage<span className="text-bagagekom">Kom</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-bagagekom-gray hover:text-bagagekom transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions à droite */}
          <div className="flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <LanguageSelector />
            
            {/* Bouton de connexion */}
            <div className="hidden sm:block">
              <Button 
                variant="outline" 
                className="border-bagagekom text-bagagekom hover:bg-bagagekom hover:text-white"
              >
                Se connecter
              </Button>
            </div>
            
            {/* Bouton principal */}
            <div className="hidden sm:block">
              <Button className="bg-bagagekom hover:bg-bagagekom-dark text-white">
                Réserver
              </Button>
            </div>

            {/* Menu mobile */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-bagagekom-gray hover:text-bagagekom"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-bagagekom/10 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-bagagekom-gray hover:text-bagagekom transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Boutons mobiles */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-bagagekom/10">
                <Button 
                  variant="outline" 
                  className="border-bagagekom text-bagagekom hover:bg-bagagekom hover:text-white w-full"
                >
                  Se connecter
                </Button>
                <Button className="bg-bagagekom hover:bg-bagagekom-dark text-white w-full">
                  Réserver
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
