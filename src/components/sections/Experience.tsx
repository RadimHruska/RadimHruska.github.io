'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Job {
  company: string;
  title: {
    cs: string;
    en: string;
  };
  period: {
    cs: string;
    en: string;
  };
  description: {
    cs: string[];
    en: string[];
  };
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t, language } = useLanguage();
  
  const jobs: Job[] = [
    {
      company: 'NewLink Moravia S.R.O.',
      title: {
        cs: '.NET Maui vývojář',
        en: '.NET Maui Developer'
      },
      period: {
        cs: 'říjen 2022 - červen 2023',
        en: 'October 2022 - June 2023'
      },
      description: {
        cs: [
          'Vývoj a testování mobilních aplikací v frameworku .NET Maui',
          'Práce na multiplatformních aplikacích pro Android a iOS',
          'Implementace funkcí a optimalizace výkonu aplikací',
          'Spolupráce v týmu při vývoji mobilních řešení'
        ],
        en: [
          'Development and testing of mobile applications using .NET Maui framework',
          'Working on cross-platform applications for Android and iOS',
          'Implementation of features and optimization of application performance',
          'Team collaboration in mobile development solutions'
        ]
      }
    },
    {
      company: 'OSVČ',
      title: {
        cs: 'Vývojář mobilních a webových aplikací',
        en: 'Mobile and Web Developer'
      },
      period: {
        cs: 'květen 2022 - Současnost',
        en: 'May 2022 - Present'
      },
      description: {
        cs: [
          'Vývoj a nasazení aplikací pro různorodé podniky a aplikace',
          'Kompletní komunikace se zákazníkem a řízení celého procesu vývoje',
          'Implementace komplexních řešení na míru dle požadavků klienta',
          'Zajištění provozu a podpory vyvinutých aplikací'
        ],
        en: [
          'Development and deployment of applications for various businesses',
          'Complete customer communication and management of the entire development process',
          'Implementation of complex custom solutions according to client requirements',
          'Ensuring operation and support of developed applications'
        ]
      }
    },
    {
      company: 'BBN S.R.O.',
      title: {
        cs: 'Správce IT',
        en: 'IT Administrator'
      },
      period: {
        cs: '2020 - Současnost',
        en: '2020 - Present'
      },
      description: {
        cs: [
          'Správa počítačů malé firmy produkující lokální noviny Zrcadlo Blanenska a Boskovicka',
          'Zajišťování technické podpory pro zaměstnance',
          'Údržba hardwaru a softwaru pro plynulý chod redakce',
          'Řešení technických problémů a implementace nových IT řešení'
        ],
        en: [
          'Managing computers for a small company producing local newspapers Zrcadlo Blanenska a Boskovicka',
          'Providing technical support for employees',
          'Maintenance of hardware and software for smooth operation of the editorial office',
          'Solving technical problems and implementing new IT solutions'
        ]
      }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-navy-900/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
          {t('experience.title')}
        </h2>
        <div className="w-16 h-1 bg-teal-300 mb-10"></div>
        
        <div className="flex flex-col md:flex-row max-w-3xl">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-l border-slate-700">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === index 
                    ? 'text-teal-300 bg-navy-700 md:bg-transparent md:border-l-2 md:border-teal-300 md:-ml-px' 
                    : 'text-slate-400 hover:text-teal-300 hover:bg-navy-700/50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="py-2">
            <h3 className="text-xl font-semibold text-slate-200">
              {jobs[activeTab].title[language]} <span className="text-teal-300">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="text-slate-400 text-sm mb-4">{jobs[activeTab].period[language]}</p>
            <ul className="space-y-3">
              {jobs[activeTab].description[language].map((item, index) => (
                <li key={index} className="text-slate-400 flex">
                  <span className="text-teal-300 mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 