'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cs' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type TranslationKey = 
  | 'nav.about' 
  | 'nav.experience' 
  | 'nav.projects' 
  | 'nav.contact'
  | 'hero.greeting'
  | 'hero.title'
  | 'hero.description'
  | 'hero.projects'
  | 'hero.contact'
  | 'about.title'
  | 'about.paragraph1'
  | 'about.paragraph2'
  | 'about.paragraph3'
  | 'about.skills'
  | 'experience.title'
  | 'projects.title'
  | 'contact.title'
  | 'contact.subtitle';

type TranslationsType = {
  [key in TranslationKey]: {
    [lang in Language]: string;
  };
};

const translations: TranslationsType = {
  // Header
  'nav.about': {
    cs: 'O mně',
    en: 'About'
  },
  'nav.experience': {
    cs: 'Zkušenosti',
    en: 'Experience'
  },
  'nav.projects': {
    cs: 'Projekty',
    en: 'Projects'
  },
  'nav.contact': {
    cs: 'Kontakt',
    en: 'Contact'
  },
  
  // Hero
  'hero.greeting': {
    cs: 'Ahoj, jmenuji se',
    en: 'Hi, my name is'
  },
  'hero.title': {
    cs: 'Freelance Software Developer  Web & Mobile & Desktop Apps',
    en: 'Freelance Software Developer  Web & Mobile & Desktop Apps'
  },
  'hero.description': {
    cs: 'Jsem freelance software developer a student FIT VUT s důrazem na software engineering a moderní technologie. Programování není jen moje vášeň, ale také způsob, jak financuji studia a každodenní život. Specializuji se na mobilní, desktopové a webové aplikace.',
    en: 'I am a freelance software developer and student at FIT VUT, with a strong focus on software engineering and modern technologies. Programming is not only my passion but also the way I fund my studies and everyday life. I specialize in mobile, desktop and web applications.'
  },
  'hero.projects': {
    cs: 'Moje projekty',
    en: 'My Projects'
  },
  'hero.contact': {
    cs: 'Kontaktujte mě',
    en: 'Contact Me'
  },
  
  // About section
  'about.title': {
    cs: 'O mně',
    en: 'About Me'
  },
  'about.paragraph1': {
    cs: 'Jsem freelance software developer a student FIT VUT s důrazem na software engineering a moderní technologie. Programování není jen moje vášeň, ale také způsob, jak financuji studia a každodenní život.',
    en: 'I am a freelance software developer and student at FIT VUT, with a strong focus on software engineering and modern technologies. Programming is not only my passion but also the way I fund my studies and everyday life.'
  },
  'about.paragraph2': {
    cs: 'Moje odbornost spočívá v mobilních, desktopových a webových aplikacích, pracuji s C#, .NET, .NET MAUI, WPF, PHP, JavaScript, React, Ionic, Swift a Flutter. Vytvářím řešení, která jsou škálovatelná, efektivní a přizpůsobená potřebám klientů.',
    en: 'My expertise lies in mobile, desktop and web applications, working with C#, .NET, .NET MAUI, WPF, PHP, JavaScript, React, Ionic, Swift and Flutter. I create solutions that are scalable, efficient, and tailored to clients\' needs.'
  },
  'about.paragraph3': {
    cs: 'Hluboce se zajímám o umělou inteligenci a její praktické využití ve vývoji software, zkoumám, jak mohou nástroje poháněné AI urychlit inovace a efektivitu. Kromě software engineeringu mám zkušenosti napříč Windows, Linux a macOS, stejně jako znalosti v oblasti sítí, IT podpory, základů hardwaru a blockchain technologií včetně Bitcoinu a kryptoměn.',
    en: 'I am deeply interested in artificial intelligence and its practical use in software development, exploring how AI-powered tools can accelerate innovation and efficiency. In addition to software engineering, I have experience across Windows, Linux, and macOS, as well as knowledge in networking, IT support, hardware fundamentals, and blockchain technologies including Bitcoin and cryptocurrencies.'
  },
  'about.skills': {
    cs: 'Technologie a nástroje, se kterými pracuji:',
    en: 'Technologies and tools I work with:'
  },
  
  // Experience section
  'experience.title': {
    cs: 'Pracovní zkušenosti',
    en: 'Work Experience'
  },
  
  // Projects section
  'projects.title': {
    cs: 'Projekty',
    en: 'Projects'
  },
  
  // Contact section
  'contact.title': {
    cs: 'Kontakt',
    en: 'Contact'
  },
  'contact.subtitle': {
    cs: 'Pojďme spolupracovat',
    en: 'Let\'s Work Together'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith('cs') ? 'cs' : 'en';
    }
    return 'cs'; // Default fallback
  });

  const t = (key: string): string => {
    if (!(key in translations)) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key as TranslationKey][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 