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
    cs: 'Programátor | IT Specialista',
    en: 'Developer | IT Specialist'
  },
  'hero.description': {
    cs: 'Mladý nadšený programátor zaměřený na vývoj mobilních a webových aplikací. Specializuji se na technologie .NET, C#, MAUI a React. Mám zkušenosti i se správou IT systémů a komplexním vývojem aplikací na míru.',
    en: 'Young enthusiastic programmer focused on mobile and web application development. I specialize in .NET, C#, MAUI, and React technologies. I also have experience with IT system administration and complex custom application development.'
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
    cs: 'Mladý nadšený programátor co se rád učí novým věcem, ale zároveň toho má dost za sebou. Mezi jeho nejzajímavější zkušenosti patří stáž ve firmě NewLink Moravia S.R.O., vývoj systému na zpracování objednávek pro firmu Kalasová stravování S.R.O. a v neposlední řadě práce na projektu AppCelly.',
    en: 'A young enthusiastic programmer who likes to learn new things, but at the same time has a lot of experience behind him. Among his most interesting experiences are an internship at NewLink Moravia S.R.O., development of an order processing system for Kalasová catering S.R.O. and last but not least, work on the AppCelly project.'
  },
  'about.paragraph2': {
    cs: 'Během své kariéry jsem získal zkušenosti s vývojem mobilních a webových aplikací, testováním software a správou IT systémů. Zaměřuji se na profesionální přístup k vývoji a nasazení aplikací do provozu.',
    en: 'During my career, I have gained experience in mobile and web application development, software testing, and IT system administration. I focus on a professional approach to the development and deployment of applications into operation.'
  },
  'about.paragraph3': {
    cs: 'Kromě vývoje aplikací se také věnuji správě IT systémů a podpoře uživatelů. Mám zkušenosti s komplexní komunikací se zákazníkem a kompletním procesem vývoje a nasazení aplikací do provozu.',
    en: 'In addition to application development, I also focus on IT system administration and user support. I have experience with complex customer communication and the complete process of developing and deploying applications into operation.'
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
  const [language, setLanguage] = useState<Language>('cs');

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