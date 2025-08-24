'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const skills = [
    // Programming Languages & Frameworks
    'C#', 
    '.NET', 
    '.NET MAUI', 
    'WPF',
    'PHP',
    'JavaScript',
    'Swift',
    'Flutter',
    
    // Web Technologies
    'HTML5',
    'CSS',
    'React',
    'Ionic',
    
    // Databases & Tools
    'SQL',
    'Git',
    
    // Operating Systems & Platforms
    'Windows',
    'Linux',
    'macOS',
    
    // Networking & Infrastructure
    'Cisco',
    'Networking',
    'IT Support',
    'Windows Server',
    
    // Additional Skills
    'Mobile Development',
    'Web Development',
    'Desktop Development',
    'AI & Machine Learning',
    'Blockchain',
    'Cryptocurrencies',
    'Hardware Fundamentals',
    'Project Management'
  ];

  return (
    <section id="about" className="py-20 bg-navy-800/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
          {t('about.title')}
        </h2>
        <div className="w-16 h-1 bg-teal-300 mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-slate-400 mb-4">
              {t('about.paragraph1') || 'Mladý nadšený programátor co se rád učí novým věcem, ale zároveň toho má dost za sebou. Mezi jeho nejzajímavější zkušenosti patří stáž ve firmě NewLink Moravia S.R.O., vývoj systému na zpracování objednávek pro firmu Kalasová stravování S.R.O. a v neposlední řadě práce na projektu AppCelly.'}
            </p>
            <p className="text-slate-400 mb-4">
              {t('about.paragraph2') || 'Během své kariéry jsem získal zkušenosti s vývojem mobilních a webových aplikací, testováním software a správou IT systémů. Zaměřuji se na profesionální přístup k vývoji a nasazení aplikací do provozu.'}
            </p>
            <p className="text-slate-400 mb-6">
              {t('about.paragraph3') || 'Kromě vývoje aplikací se také věnuji správě IT systémů a podpoře uživatelů. Mám zkušenosti s komplexní komunikací se zákazníkem a kompletním procesem vývoje a nasazení aplikací do provozu.'}
            </p>
            
            <h3 className="text-xl font-semibold text-slate-200 mb-3">
              {t('about.skills') || 'Technologie a nástroje, se kterými pracuji:'}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-slate-400 flex items-center">
                  <span className="text-teal-300 mr-2">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative w-full aspect-square rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-teal-300/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="w-full h-full bg-navy-700 flex items-center justify-center">
                <Image 
                  src="/IMG_2615.JPG" 
                  alt="Radim Hruška" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-2 border-2 border-teal-300 rounded-md -z-10 translate-y-4 translate-x-4 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 