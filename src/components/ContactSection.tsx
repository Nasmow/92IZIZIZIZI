
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('contact.title')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t('contact.getInTouch')}</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.address')}</h4>
                  <p className="text-gray-600">Rue Bara 55, 1070 Brussels, Belgium</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.phone')}</h4>
                  <p className="text-gray-600">+32 (0) 488 99 20 33</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.email')}</h4>
                  <p className="text-gray-600">info@bagagekom.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.hours')}</h4>
                  <p className="text-gray-600">{t('contact.hours.weekdays')}</p>
                  <p className="text-gray-600">{t('contact.hours.saturday')}</p>
                  <p className="text-gray-600">{t('contact.hours.sunday')}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">{t('contact.findUs')}</h4>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.108512520334!2d4.335717576444457!3d50.83712865813642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c46c8bf1e1ad%3A0x9a876be49751c164!2sRue%20Bara%2055%2C%201070%20Anderlecht%2C%20Belgium!5e0!3m2!1sen!2sus!4v1716417541404!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - BagageKom Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder={t('contact.form.namePlaceholder')} 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder={t('contact.form.emailPlaceholder')} 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
