
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'it' | 'pt' | 'ar' | 'zh';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    const translations = getTranslations(currentLanguage);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const getTranslations = (language: Language): Record<string, string> => {
  switch (language) {
    case 'fr':
      return {
        // Navigation
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.howItWorks': 'Comment Ça Marche',
        'nav.partners': 'Partenaires',
        'nav.contact': 'Contact',
        'nav.about': 'À Propos',
        
        // Hero Section
        'hero.title': 'Services Sécurisés de Stockage de Bagages & Réexpédition de Colis',
        'hero.subtitle': 'Stockez vos sacs en toute sécurité, réexpédiez vos colis efficacement, ou récupérez vos livraisons à votre convenance.',
        'hero.pricing': 'Colis envoyés à partir de seulement 1,5€/KG !',
        'hero.cta.services': 'Nos Services',
        'hero.cta.contact': 'Nous Contacter',
        
        // Services Section
        'services.title': 'Nos Services',
        'services.subtitle': 'Nous offrons une gamme de services pour rendre votre expérience logistique fluide et sans stress.',
        'services.luggage.title': 'Stockage de Bagages',
        'services.luggage.description': 'Stockez vos sacs en toute sécurité pendant que vous explorez la ville ou attendez votre prochaine destination.',
        'services.shipping.title': 'Réexpédition de Colis',
        'services.shipping.description': 'Nous recevons vos colis et les réexpédions à l\'adresse de votre choix, où que vous soyez dans le monde.',
        'services.collection.title': 'Point de Collecte',
        'services.collection.description': 'Utilisez notre emplacement comme adresse de livraison et récupérez vos colis à votre convenance.',
        'services.solutions.title': 'Solutions d\'Expédition',
        'services.solutions.description': 'Nous offrons diverses options d\'expédition pour répondre à vos besoins et exigences budgétaires.',
        
        // How It Works Section
        'howItWorks.title': 'Comment Ça Marche',
        'howItWorks.subtitle': 'Notre processus simple et efficace vous assure d\'obtenir le service dont vous avez besoin sans tracas.',
        'howItWorks.step1.title': 'S\'inscrire',
        'howItWorks.step1.description': 'Créez un compte ou contactez-nous pour vous inscrire à nos services.',
        'howItWorks.step2.title': 'Déposer ou Livrer',
        'howItWorks.step2.description': 'Déposez vos bagages ou faites livrer vos colis à notre emplacement.',
        'howItWorks.step3.title': 'Réexpédier ou Stocker',
        'howItWorks.step3.description': 'Nous stockons vos articles en toute sécurité ou les réexpédions à votre destination souhaitée.',
        'howItWorks.step4.title': 'Récupérer ou Recevoir',
        'howItWorks.step4.description': 'Collectez vos articles quand vous êtes prêt ou recevez-les à votre adresse spécifiée.',
        
        // Partners Section
        'partners.title': 'Nos Partenaires',
        'partners.subtitle': 'Nous collaborons avec des partenaires de confiance pour vous offrir les meilleurs services logistiques.',
        'partners.storage': 'Partenaires de Stockage',
        'partners.shipping': 'Partenaires d\'Expédition',
        
        // Contact Section
        'contact.title': 'Nous Contacter',
        'contact.subtitle': 'Contactez-nous pour toute demande ou pour commencer à utiliser nos services.',
        'contact.getInTouch': 'Prendre Contact',
        'contact.address': 'Adresse',
        'contact.phone': 'Téléphone',
        'contact.email': 'Email',
        'contact.hours': 'Horaires',
        'contact.hours.weekdays': 'Lundi - Vendredi: 9h - 18h',
        'contact.hours.saturday': 'Samedi: 10h - 16h',
        'contact.hours.sunday': 'Dimanche: Fermé',
        'contact.findUs': 'Nous Trouver',
        'contact.form.name': 'Nom',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.namePlaceholder': 'Votre nom',
        'contact.form.emailPlaceholder': 'Votre email',
        'contact.form.messagePlaceholder': 'Votre message',
        'contact.form.send': 'Envoyer le Message',
        
        // Footer
        'footer.description': 'Votre partenaire de confiance pour le stockage de bagages, la réexpédition de colis et les services de points de collecte.',
        'footer.partnership': 'Nous sommes un partenaire fier de',
        'footer.partnershipText': ', le réseau de stockage de bagages leader mondial.',
        'footer.quickLinks': 'Liens Rapides',
        'footer.connectWithUs': 'Connectez-vous avec Nous',
        'footer.copyright': 'Tous droits réservés.',
        
        // Partnership text
        'partnership.text': 'Nous sommes un partenaire fier de',
        'partnership.link': 'Radical Storage',
        'partnership.description': ', le réseau de stockage de bagages leader mondial.',
      };
      
    case 'en':
      return {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.howItWorks': 'How It Works',
        'nav.partners': 'Partners',
        'nav.contact': 'Contact',
        'nav.about': 'About',
        
        // Hero Section
        'hero.title': 'Secure Luggage Storage & Package Forwarding Services',
        'hero.subtitle': 'Store your bags securely, forward your packages efficiently, or collect your deliveries at your convenience.',
        'hero.pricing': 'Packages sent from only 1.5€/KG!',
        'hero.cta.services': 'Our Services',
        'hero.cta.contact': 'Contact Us',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'We offer a range of services to make your logistics experience smooth and stress-free.',
        'services.luggage.title': 'Luggage Storage',
        'services.luggage.description': 'Store your bags securely while you explore the city or wait for your next destination.',
        'services.shipping.title': 'Package Forwarding',
        'services.shipping.description': 'We receive your packages and forward them to your chosen address, wherever you are in the world.',
        'services.collection.title': 'Collection Point',
        'services.collection.description': 'Use our location as a delivery address and collect your packages at your convenience.',
        'services.solutions.title': 'Shipping Solutions',
        'services.solutions.description': 'We offer various shipping options to meet your needs and budget requirements.',
        
        // How It Works Section
        'howItWorks.title': 'How It Works',
        'howItWorks.subtitle': 'Our simple and efficient process ensures you get the service you need without hassle.',
        'howItWorks.step1.title': 'Sign Up',
        'howItWorks.step1.description': 'Create an account or contact us to register for our services.',
        'howItWorks.step2.title': 'Drop Off or Deliver',
        'howItWorks.step2.description': 'Drop off your luggage or have your packages delivered to our location.',
        'howItWorks.step3.title': 'Forward or Store',
        'howItWorks.step3.description': 'We store your items securely or forward them to your desired destination.',
        'howItWorks.step4.title': 'Collect or Receive',
        'howItWorks.step4.description': 'Collect your items when you\'re ready or receive them at your specified address.',
        
        // Partners Section
        'partners.title': 'Our Partners',
        'partners.subtitle': 'We collaborate with trusted partners to provide you with the best logistics services.',
        'partners.storage': 'Storage Partners',
        'partners.shipping': 'Shipping Partners',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Reach out to us for any inquiries or to start using our services.',
        'contact.getInTouch': 'Get in Touch',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Hours',
        'contact.hours.weekdays': 'Monday - Friday: 9AM - 6PM',
        'contact.hours.saturday': 'Saturday: 10AM - 4PM',
        'contact.hours.sunday': 'Sunday: Closed',
        'contact.findUs': 'Find Us',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.emailPlaceholder': 'Your email',
        'contact.form.messagePlaceholder': 'Your message',
        'contact.form.send': 'Send Message',
        
        // Footer
        'footer.description': 'Your trusted partner for luggage storage, package forwarding, and collection point services.',
        'footer.partnership': 'We are a proud partner of',
        'footer.partnershipText': ', the world\'s leading luggage storage network.',
        'footer.quickLinks': 'Quick Links',
        'footer.connectWithUs': 'Connect with Us',
        'footer.copyright': 'All rights reserved.',
        
        // Partnership text
        'partnership.text': 'We are a proud partner of',
        'partnership.link': 'Radical Storage',
        'partnership.description': ', the world\'s leading luggage storage network.',
      };
      
    case 'es':
      return {
        // Navigation
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.howItWorks': 'Cómo Funciona',
        'nav.partners': 'Socios',
        'nav.contact': 'Contacto',
        'nav.about': 'Acerca de',
        
        // Hero Section
        'hero.title': 'Servicios Seguros de Almacenamiento de Equipaje y Reenvío de Paquetes',
        'hero.subtitle': 'Guarda tus maletas de forma segura, reenvía tus paquetes de manera eficiente, o recoge tus entregas a tu conveniencia.',
        'hero.pricing': '¡Paquetes enviados desde solo 1,5€/KG!',
        'hero.cta.services': 'Nuestros Servicios',
        'hero.cta.contact': 'Contáctanos',
        
        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Ofrecemos una gama de servicios para hacer tu experiencia logística fluida y sin estrés.',
        'services.luggage.title': 'Almacenamiento de Equipaje',
        'services.luggage.description': 'Guarda tus maletas de forma segura mientras exploras la ciudad o esperas tu próximo destino.',
        'services.shipping.title': 'Reenvío de Paquetes',
        'services.shipping.description': 'Recibimos tus paquetes y los reenviamos a la dirección que elijas, donde quiera que estés en el mundo.',
        'services.collection.title': 'Punto de Recogida',
        'services.collection.description': 'Usa nuestra ubicación como dirección de entrega y recoge tus paquetes a tu conveniencia.',
        'services.solutions.title': 'Soluciones de Envío',
        'services.solutions.description': 'Ofrecemos varias opciones de envío para satisfacer tus necesidades y requisitos presupuestarios.',
        
        // How It Works Section
        'howItWorks.title': 'Cómo Funciona',
        'howItWorks.subtitle': 'Nuestro proceso simple y eficiente asegura que obtengas el servicio que necesitas sin complicaciones.',
        'howItWorks.step1.title': 'Registrarse',
        'howItWorks.step1.description': 'Crea una cuenta o contáctanos para registrarte en nuestros servicios.',
        'howItWorks.step2.title': 'Depositar o Entregar',
        'howItWorks.step2.description': 'Deposita tu equipaje o haz que entreguen tus paquetes en nuestra ubicación.',
        'howItWorks.step3.title': 'Reenviar o Almacenar',
        'howItWorks.step3.description': 'Almacenamos tus artículos de forma segura o los reenviamos a tu destino deseado.',
        'howItWorks.step4.title': 'Recoger o Recibir',
        'howItWorks.step4.description': 'Recoge tus artículos cuando estés listo o recíbelos en tu dirección especificada.',
        
        // Partners Section
        'partners.title': 'Nuestros Socios',
        'partners.subtitle': 'Colaboramos con socios de confianza para brindarte los mejores servicios logísticos.',
        'partners.storage': 'Socios de Almacenamiento',
        'partners.shipping': 'Socios de Envío',
        
        // Contact Section
        'contact.title': 'Contáctanos',
        'contact.subtitle': 'Contáctanos para cualquier consulta o para comenzar a usar nuestros servicios.',
        'contact.getInTouch': 'Ponte en Contacto',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Email',
        'contact.hours': 'Horarios',
        'contact.hours.weekdays': 'Lunes - Viernes: 9AM - 6PM',
        'contact.hours.saturday': 'Sábado: 10AM - 4PM',
        'contact.hours.sunday': 'Domingo: Cerrado',
        'contact.findUs': 'Encuéntranos',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Email',
        'contact.form.message': 'Mensaje',
        'contact.form.namePlaceholder': 'Tu nombre',
        'contact.form.emailPlaceholder': 'Tu email',
        'contact.form.messagePlaceholder': 'Tu mensaje',
        'contact.form.send': 'Enviar Mensaje',
        
        // Footer
        'footer.description': 'Tu socio de confianza para almacenamiento de equipaje, reenvío de paquetes y servicios de punto de recogida.',
        'footer.partnership': 'Somos un socio orgulloso de',
        'footer.partnershipText': ', la red líder mundial de almacenamiento de equipaje.',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.connectWithUs': 'Conéctate con Nosotros',
        'footer.copyright': 'Todos los derechos reservados.',
        
        // Partnership text
        'partnership.text': 'Somos un socio orgulloso de',
        'partnership.link': 'Radical Storage',
        'partnership.description': ', la red líder mundial de almacenamiento de equipaje.',
      };
      
    case 'it':
      return {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Servizi',
        'nav.howItWorks': 'Come Funziona',
        'nav.partners': 'Partner',
        'nav.contact': 'Contatto',
        'nav.about': 'Chi Siamo',
        
        // Hero Section
        'hero.title': 'Servizi Sicuri di Deposito Bagagli e Inoltro Pacchi',
        'hero.subtitle': 'Conserva le tue valigie in sicurezza, inoltra i tuoi pacchi in modo efficiente, o ritira le tue consegne a tua comodità.',
        'hero.pricing': 'Pacchi inviati da soli 1,5€/KG!',
        'hero.cta.services': 'I Nostri Servizi',
        'hero.cta.contact': 'Contattaci',
        
        // Services Section
        'services.title': 'I Nostri Servizi',
        'services.subtitle': 'Offriamo una gamma di servizi per rendere la tua esperienza logistica fluida e senza stress.',
        'services.luggage.title': 'Deposito Bagagli',
        'services.luggage.description': 'Conserva le tue valigie in sicurezza mentre esplori la città o aspetti la tua prossima destinazione.',
        'services.shipping.title': 'Inoltro Pacchi',
        'services.shipping.description': 'Riceviamo i tuoi pacchi e li inoltriamo all\'indirizzo che scegli, ovunque tu sia nel mondo.',
        'services.collection.title': 'Punto di Ritiro',
        'services.collection.description': 'Usa la nostra posizione come indirizzo di consegna e ritira i tuoi pacchi a tua comodità.',
        'services.solutions.title': 'Soluzioni di Spedizione',
        'services.solutions.description': 'Offriamo varie opzioni di spedizione per soddisfare le tue esigenze e requisiti di budget.',
        
        // How It Works Section
        'howItWorks.title': 'Come Funziona',
        'howItWorks.subtitle': 'Il nostro processo semplice ed efficiente assicura che tu ottenga il servizio di cui hai bisogno senza problemi.',
        'howItWorks.step1.title': 'Registrati',
        'howItWorks.step1.description': 'Crea un account o contattaci per registrarti ai nostri servizi.',
        'howItWorks.step2.title': 'Consegna o Deposita',
        'howItWorks.step2.description': 'Consegna i tuoi bagagli o fai consegnare i tuoi pacchi alla nostra posizione.',
        'howItWorks.step3.title': 'Inoltra o Conserva',
        'howItWorks.step3.description': 'Conserviamo i tuoi articoli in sicurezza o li inoltriamo alla tua destinazione desiderata.',
        'howItWorks.step4.title': 'Ritira o Ricevi',
        'howItWorks.step4.description': 'Ritira i tuoi articoli quando sei pronto o ricevili al tuo indirizzo specificato.',
        
        // Partners Section
        'partners.title': 'I Nostri Partner',
        'partners.subtitle': 'Collaboriamo con partner fidati per fornirti i migliori servizi logistici.',
        'partners.storage': 'Partner di Deposito',
        'partners.shipping': 'Partner di Spedizione',
        
        // Contact Section
        'contact.title': 'Contattaci',
        'contact.subtitle': 'Contattaci per qualsiasi domanda o per iniziare a utilizzare i nostri servizi.',
        'contact.getInTouch': 'Mettiti in Contatto',
        'contact.address': 'Indirizzo',
        'contact.phone': 'Telefono',
        'contact.email': 'Email',
        'contact.hours': 'Orari',
        'contact.hours.weekdays': 'Lunedì - Venerdì: 9:00 - 18:00',
        'contact.hours.saturday': 'Sabato: 10:00 - 16:00',
        'contact.hours.sunday': 'Domenica: Chiuso',
        'contact.findUs': 'Trovaci',
        'contact.form.name': 'Nome',
        'contact.form.email': 'Email',
        'contact.form.message': 'Messaggio',
        'contact.form.namePlaceholder': 'Il tuo nome',
        'contact.form.emailPlaceholder': 'La tua email',
        'contact.form.messagePlaceholder': 'Il tuo messaggio',
        'contact.form.send': 'Invia Messaggio',
        
        // Footer
        'footer.description': 'Il tuo partner fidato per deposito bagagli, inoltro pacchi e servizi di punto di ritiro.',
        'footer.partnership': 'Siamo un partner orgoglioso di',
        'footer.partnershipText': ', la rete leader mondiale di deposito bagagli.',
        'footer.quickLinks': 'Link Rapidi',
        'footer.connectWithUs': 'Collegati con Noi',
        'footer.copyright': 'Tutti i diritti riservati.',
        
        // Partnership text
        'partnership.text': 'Siamo un partner orgoglioso di',
        'partnership.link': 'Radical Storage',
        'partnership.description': ', la rete leader mondiale di deposito bagagli.',
      };
      
    case 'pt':
      return {
        // Navigation
        'nav.home': 'Início',
        'nav.services': 'Serviços',
        'nav.howItWorks': 'Como Funciona',
        'nav.partners': 'Parceiros',
        'nav.contact': 'Contato',
        'nav.about': 'Sobre',
        
        // Hero Section
        'hero.title': 'Serviços Seguros de Armazenamento de Bagagem e Encaminhamento de Pacotes',
        'hero.subtitle': 'Armazene suas malas com segurança, encaminhe seus pacotes de forma eficiente, ou colete suas entregas na sua conveniência.',
        'hero.pricing': 'Pacotes enviados a partir de apenas 1,5€/KG!',
        'hero.cta.services': 'Nossos Serviços',
        'hero.cta.contact': 'Entre em Contato',
        
        // Services Section
        'services.title': 'Nossos Serviços',
        'services.subtitle': 'Oferecemos uma gama de serviços para tornar sua experiência logística suave e sem estresse.',
        'services.luggage.title': 'Armazenamento de Bagagem',
        'services.luggage.description': 'Armazene suas malas com segurança enquanto explora a cidade ou espera seu próximo destino.',
        'services.shipping.title': 'Encaminhamento de Pacotes',
        'services.shipping.description': 'Recebemos seus pacotes e os encaminhamos para o endereço de sua escolha, onde quer que você esteja no mundo.',
        'services.collection.title': 'Ponto de Coleta',
        'services.collection.description': 'Use nossa localização como endereço de entrega e colete seus pacotes na sua conveniência.',
        'services.solutions.title': 'Soluções de Envio',
        'services.solutions.description': 'Oferecemos várias opções de envio para atender suas necessidades e requisitos orçamentários.',
        
        // How It Works Section
        'howItWorks.title': 'Como Funciona',
        'howItWorks.subtitle': 'Nosso processo simples e eficiente garante que você obtenha o serviço de que precisa sem complicações.',
        'howItWorks.step1.title': 'Registrar-se',
        'howItWorks.step1.description': 'Crie uma conta ou entre em contato conosco para se registrar em nossos serviços.',
        'howItWorks.step2.title': 'Entregar ou Depositar',
        'howItWorks.step2.description': 'Entregue sua bagagem ou faça com que seus pacotes sejam entregues em nossa localização.',
        'howItWorks.step3.title': 'Encaminhar ou Armazenar',
        'howItWorks.step3.description': 'Armazenamos seus itens com segurança ou os encaminhamos para seu destino desejado.',
        'howItWorks.step4.title': 'Coletar ou Receber',
        'howItWorks.step4.description': 'Colete seus itens quando estiver pronto ou receba-os em seu endereço especificado.',
        
        // Partners Section
        'partners.title': 'Nossos Parceiros',
        'partners.subtitle': 'Colaboramos com parceiros confiáveis para fornecer os melhores serviços logísticos.',
        'partners.storage': 'Parceiros de Armazenamento',
        'partners.shipping': 'Parceiros de Envio',
        
        // Contact Section
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Entre em contato conosco para qualquer consulta ou para começar a usar nossos serviços.',
        'contact.getInTouch': 'Entrar em Contato',
        'contact.address': 'Endereço',
        'contact.phone': 'Telefone',
        'contact.email': 'Email',
        'contact.hours': 'Horários',
        'contact.hours.weekdays': 'Segunda - Sexta: 9h - 18h',
        'contact.hours.saturday': 'Sábado: 10h - 16h',
        'contact.hours.sunday': 'Domingo: Fechado',
        'contact.findUs': 'Nos Encontre',
        'contact.form.name': 'Nome',
        'contact.form.email': 'Email',
        'contact.form.message': 'Mensagem',
        'contact.form.namePlaceholder': 'Seu nome',
        'contact.form.emailPlaceholder': 'Seu email',
        'contact.form.messagePlaceholder': 'Sua mensagem',
        'contact.form.send': 'Enviar Mensagem',
        
        // Footer
        'footer.description': 'Seu parceiro confiável para armazenamento de bagagem, encaminhamento de pacotes e serviços de ponto de coleta.',
        'footer.partnership': 'Somos um parceiro orgulhoso da',
        'footer.partnershipText': ', a rede líder mundial de armazenamento de bagagem.',
        'footer.quickLinks': 'Links Rápidos',
        'footer.connectWithUs': 'Conecte-se Conosco',
        'footer.copyright': 'Todos os direitos reservados.',
        
        // Partnership text
        'partnership.text': 'Somos um parceiro orgulhoso da',
        'partnership.link': 'Radical Storage',
        'partnership.description': ', a rede líder mundial de armazenamento de bagagem.',
      };
      
    case 'ar':
      return {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.services': 'الخدمات',
        'nav.howItWorks': 'كيف يعمل',
        'nav.partners': 'الشركاء',
        'nav.contact': 'اتصل بنا',
        'nav.about': 'حولنا',
        
        // Hero Section
        'hero.title': 'خدمات آمنة لتخزين الأمتعة وإعادة إرسال الطرود',
        'hero.subtitle': 'احفظ حقائبك بأمان، وأعد إرسال طرودك بكفاءة، أو اجمع مسلماتك في الوقت الذي يناسبك.',
        'hero.pricing': 'طرود مرسلة من 1.5 يورو/كيلوجرام فقط!',
        'hero.cta.services': 'خدماتنا',
        'hero.cta.contact': 'اتصل بنا',
        
        // Services Section
        'services.title': 'خدماتنا',
        'services.subtitle': 'نقدم مجموعة من الخدمات لجعل تجربتك اللوجستية سلسة وخالية من التوتر.',
        'services.luggage.title': 'تخزين الأمتعة',
        'services.luggage.description': 'احفظ حقائبك بأمان بينما تستكشف المدينة أو تنتظر وجهتك التالية.',
        'services.shipping.title': 'إعادة إرسال الطرود',
        'services.shipping.description': 'نستقبل طرودك ونعيد إرسالها إلى العنوان الذي تختاره، أينما كنت في العالم.',
        'services.collection.title': 'نقطة التجميع',
        'services.collection.description': 'استخدم موقعنا كعنوان تسليم واجمع طرودك في الوقت الذي يناسبك.',
        'services.solutions.title': 'حلول الشحن',
        'services.solutions.description': 'نقدم خيارات شحن متنوعة لتلبية احتياجاتك ومتطلبات ميزانيتك.',
        
        // How It Works Section
        'howItWorks.title': 'كيف يعمل',
        'howItWorks.subtitle': 'عمليتنا البسيطة والفعالة تضمن حصولك على الخدمة التي تحتاجها دون متاعب.',
        'howItWorks.step1.title': 'التسجيل',
        'howItWorks.step1.description': 'أنشئ حساباً أو اتصل بنا للتسجيل في خدماتنا.',
        'howItWorks.step2.title': 'الإيداع أو التسليم',
        'howItWorks.step2.description': 'أودع أمتعتك أو اجعل طرودك تُسلم إلى موقعنا.',
        'howItWorks.step3.title': 'إعادة الإرسال أو التخزين',
        'howItWorks.step3.description': 'نخزن أغراضك بأمان أو نعيد إرسالها إلى وجهتك المرغوبة.',
        'howItWorks.step4.title': 'الجمع أو الاستلام',
        'howItWorks.step4.description': 'اجمع أغراضك عندما تكون جاهزاً أو استلمها في عنوانك المحدد.',
        
        // Partners Section
        'partners.title': 'شركاؤنا',
        'partners.subtitle': 'نتعاون مع شركاء موثوقين لنقدم لك أفضل الخدمات اللوجستية.',
        'partners.storage': 'شركاء التخزين',
        'partners.shipping': 'شركاء الشحن',
        
        // Contact Section
        'contact.title': 'اتصل بنا',
        'contact.subtitle': 'تواصل معنا لأي استفسارات أو لبدء استخدام خدماتنا.',
        'contact.getInTouch': 'ابق على تواصل',
        'contact.address': 'العنوان',
        'contact.phone': 'الهاتف',
        'contact.email': 'البريد الإلكتروني',
        'contact.hours': 'ساعات العمل',
        'contact.hours.weekdays': 'الاثنين - الجمعة: 9 صباحاً - 6 مساءً',
        'contact.hours.saturday': 'السبت: 10 صباحاً - 4 مساءً',
        'contact.hours.sunday': 'الأحد: مغلق',
        'contact.findUs': 'اعثر علينا',
        'contact.form.name': 'الاسم',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.message': 'الرسالة',
        'contact.form.namePlaceholder': 'اسمك',
        'contact.form.emailPlaceholder': 'بريدك الإلكتروني',
        'contact.form.messagePlaceholder': 'رسالتك',
        'contact.form.send': 'إرسال الرسالة',
        
        // Footer
        'footer.description': 'شريكك الموثوق لتخزين الأمتعة وإعادة إرسال الطرود وخدمات نقاط التجميع.',
        'footer.partnership': 'نحن شريك فخور لـ',
        'footer.partnershipText': '، الشبكة الرائدة عالمياً في تخزين الأمتعة.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.connectWithUs': 'تواصل معنا',
        'footer.copyright': 'جميع الحقوق محفوظة.',
        
        // Partnership text
        'partnership.text': 'نحن شريك فخور لـ',
        'partnership.link': 'Radical Storage',
        'partnership.description': '، الشبكة الرائدة عالمياً في تخزين الأمتعة.',
      };
      
    case 'zh':
      return {
        // Navigation
        'nav.home': '首页',
        'nav.services': '服务',
        'nav.howItWorks': '工作原理',
        'nav.partners': '合作伙伴',
        'nav.contact': '联系我们',
        'nav.about': '关于我们',
        
        // Hero Section
        'hero.title': '安全行李寄存和包裹转发服务',
        'hero.subtitle': '安全存放您的行李，高效转发您的包裹，或在方便时取货。',
        'hero.pricing': '包裹寄送低至1.5€/公斤！',
        'hero.cta.services': '我们的服务',
        'hero.cta.contact': '联系我们',
        
        // Services Section
        'services.title': '我们的服务',
        'services.subtitle': '我们提供一系列服务，让您的物流体验顺畅无忧。',
        'services.luggage.title': '行李寄存',
        'services.luggage.description': '在您探索城市或等待下一个目的地时，安全存放您的行李。',
        'services.shipping.title': '包裹转发',
        'services.shipping.description': '我们接收您的包裹并转发到您选择的地址，无论您在世界何处。',
        'services.collection.title': '取货点',
        'services.collection.description': '将我们的位置用作送货地址，在方便时取货。',
        'services.solutions.title': '运输解决方案',
        'services.solutions.description': '我们提供各种运输选项，满足您的需求和预算要求。',
        
        // How It Works Section
        'howItWorks.title': '工作原理',
        'howItWorks.subtitle': '我们简单高效的流程确保您无忧获得所需服务。',
        'howItWorks.step1.title': '注册',
        'howItWorks.step1.description': '创建账户或联系我们注册我们的服务。',
        'howItWorks.step2.title': '寄存或送达',
        'howItWorks.step2.description': '寄存您的行李或将包裹送到我们的位置。',
        'howItWorks.step3.title': '转发或存储',
        'howItWorks.step3.description': '我们安全存储您的物品或将其转发到您想要的目的地。',
        'howItWorks.step4.title': '取货或接收',
        'howItWorks.step4.description': '准备好时取货或在指定地址接收。',
        
        // Partners Section
        'partners.title': '我们的合作伙伴',
        'partners.subtitle': '我们与可信赖的合作伙伴协作，为您提供最佳物流服务。',
        'partners.storage': '存储合作伙伴',
        'partners.shipping': '运输合作伙伴',
        
        // Contact Section
        'contact.title': '联系我们',
        'contact.subtitle': '如有任何咨询或开始使用我们的服务，请联系我们。',
        'contact.getInTouch': '取得联系',
        'contact.address': '地址',
        'contact.phone': '电话',
        'contact.email': '邮箱',
        'contact.hours': '营业时间',
        'contact.hours.weekdays': '周一至周五：上午9点至下午6点',
        'contact.hours.saturday': '周六：上午10点至下午4点',
        'contact.hours.sunday': '周日：休息',
        'contact.findUs': '找到我们',
        'contact.form.name': '姓名',
        'contact.form.email': '邮箱',
        'contact.form.message': '留言',
        'contact.form.namePlaceholder': '您的姓名',
        'contact.form.emailPlaceholder': '您的邮箱',
        'contact.form.messagePlaceholder': '您的留言',
        'contact.form.send': '发送消息',
        
        // Footer
        'footer.description': '您值得信赖的行李寄存、包裹转发和取货点服务合作伙伴。',
        'footer.partnership': '我们是',
        'footer.partnershipText': '的自豪合作伙伴，世界领先的行李寄存网络。',
        'footer.quickLinks': '快速链接',
        'footer.connectWithUs': '联系我们',
        'footer.copyright': '版权所有。',
        
        // Partnership text
        'partnership.text': '我们是',
        'partnership.link': 'Radical Storage',
        'partnership.description': '的自豪合作伙伴，世界领先的行李寄存网络。',
      };
      
    default:
      return {};
  }
};
