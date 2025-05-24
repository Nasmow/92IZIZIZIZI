
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-blue-600">
              Bagagekom
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              {t('nav.home')}
            </Link>
            <Link to="/#services" className="text-gray-700 hover:text-blue-600 transition">
              {t('nav.services')}
            </Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition">
              {t('nav.howItWorks')}
            </Link>
            <Link to="/#partners" className="text-gray-700 hover:text-blue-600 transition">
              {t('nav.partners')}
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-blue-600 transition">
              {t('nav.contact')}
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/#services" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/#how-it-works" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.howItWorks')}
              </Link>
              <Link 
                to="/#partners" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.partners')}
              </Link>
              <Link 
                to="/#contact" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
