import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bagagekom</h3>
            <p className="text-gray-300 mb-4">
             Votre partenaire de confiance pour vos consignes de bagages, vos envois de colis et relais pickups.
            </p>
            <p className="text-gray-300">
              We are a proud partner of <a href="https://radicalstorage.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Radical Storage</a>, the world's leading Luggage storage network.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  A propos
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-gray-300 hover:text-white transition">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link to="/#partners" className="text-gray-300 hover:text-white transition">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bagagekom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/bagagekom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/bagagekom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/bagagekom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bagagekom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
