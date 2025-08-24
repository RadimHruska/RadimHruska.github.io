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

interface Education {
  institution: string;
  degree: {
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
  const [activeSection, setActiveSection] = useState<'experience' | 'education'>('experience');
  const { t, language } = useLanguage();
  
  const jobs: Job[] = [
    {
      company: 'VP Algo',
      title: {
        cs: 'Software Developer',
        en: 'Software Developer'
      },
      period: {
        cs: 'leden 2025 - Současnost',
        en: 'January 2025 - Present'
      },
      description: {
        cs: [
          'Vývoj desktopových aplikací pomocí Electron framework',
          'Práce s C# a JavaScript frameworky pro moderní aplikace',
          'Práce na interním softwaru a proprietárních řešeních',
          'Spolupráce na inovativních projektech v oblasti algoritmického vývoje'
        ],
        en: [
          'Development of desktop applications using Electron framework',
          'Working with C# and JavaScript frameworks for modern applications',
          'Working on internal software and proprietary solutions',
          'Collaboration on innovative projects in algorithmic development'
        ]
      }
    },
    {
      company: 'NEWLINK MORAVIA',
      title: {
        cs: 'Mobile Application Developer',
        en: 'Mobile Application Developer'
      },
      period: {
        cs: 'říjen 2022 - červen 2023',
        en: 'October 2022 - June 2023'
      },
      description: {
        cs: [
          'Vývoj multiplatformních mobilních aplikací pomocí .NET MAUI framework',
          'Implementace funkcí a optimalizace výkonu aplikací pro Android a iOS',
          'Spolupráce v týmu při vývoji mobilních řešení a testování',
          'Práce s C# a moderními vývojovými nástroji'
        ],
        en: [
          'Development of cross-platform mobile applications using .NET MAUI framework',
          'Implementation of features and optimization of application performance for Android and iOS',
          'Team collaboration in mobile development solutions and testing',
          'Working with C# and modern development tools'
        ]
      }
    },
    {
      company: 'Freelance',
      title: {
        cs: 'Web Application Developer',
        en: 'Web Application Developer'
      },
      period: {
        cs: 'květen 2022 - Současnost',
        en: 'May 2022 - Present'
      },
      description: {
        cs: [
          'Vývoj a nasazení webových aplikací pomocí PHP, JavaScript, React a Ionic',
          'Kompletní komunikace se zákazníkem a řízení celého procesu vývoje',
          'Implementace komplexních řešení na míru dle požadavků klienta',
          'Zajištění provozu a podpory vyvinutých aplikací'
        ],
        en: [
          'Development and deployment of web applications using PHP, JavaScript, React and Ionic',
          'Complete customer communication and management of the entire development process',
          'Implementation of complex custom solutions according to client requirements',
          'Ensuring operation and support of developed applications'
        ]
      }
    },
    {
      company: 'BBN S.R.O.',
      title: {
        cs: 'IT Administrator',
        en: 'IT Administrator'
      },
      period: {
        cs: '2020 - Současnost',
        en: '2020 - Present'
      },
      description: {
        cs: [
          'Správa IT infrastruktury malé firmy produkující lokální noviny',
          'Zajišťování technické podpory pro zaměstnance a řešení IT problémů',
          'Údržba hardwaru a softwaru pro plynulý chod redakce',
          'Implementace nových IT řešení a optimalizace stávajících systémů'
        ],
        en: [
          'Management of IT infrastructure for a small company producing local newspapers',
          'Providing technical support for employees and solving IT problems',
          'Maintenance of hardware and software for smooth operation of the editorial office',
          'Implementation of new IT solutions and optimization of existing systems'
        ]
      }
    }
  ];

  const education: Education[] = [
    {
      institution: 'FIT VUT (Faculty of Information Technology, Brno University of Technology)',
      degree: {
        cs: 'Student informatiky',
        en: 'Computer Science Student'
      },
      period: {
        cs: '2023 - Současnost',
        en: '2023 - Present'
      },
      description: {
        cs: [
          'Studium software engineering a moderních technologií',
          'Zaměření na vývoj aplikací a programování',
          'Praktické projekty a spolupráce s průmyslovými partnery',
          'Rozvoj teoretických i praktických znalostí v oblasti IT'
        ],
        en: [
          'Studying software engineering and modern technologies',
          'Focus on application development and programming',
          'Practical projects and collaboration with industry partners',
          'Development of theoretical and practical knowledge in IT'
        ]
      }
    }
  ];

  const currentData = activeSection === 'experience' ? jobs : education;

  return (
    <section id="experience" className="py-20 bg-navy-900/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
          {t('experience.title')}
        </h2>
        <div className="w-16 h-1 bg-teal-300 mb-10"></div>
        
        {/* Section Tabs */}
        <div className="flex mb-8 border-b border-slate-700">
          <button
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeSection === 'experience' 
                ? 'text-teal-300 border-b-2 border-teal-300' 
                : 'text-slate-400 hover:text-teal-300'
            }`}
            onClick={() => {
              setActiveSection('experience');
              setActiveTab(0);
            }}
          >
            {language === 'cs' ? 'Pracovní zkušenosti' : 'Work Experience'}
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeSection === 'education' 
                ? 'text-teal-300 border-b-2 border-teal-300' 
                : 'text-slate-400 hover:text-teal-300'
            }`}
            onClick={() => {
              setActiveSection('education');
              setActiveTab(0);
            }}
          >
            {language === 'cs' ? 'Vzdělání' : 'Education'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row max-w-3xl">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-l border-slate-700">
            {currentData.map((item, index) => (
              <button
                key={index}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === index 
                    ? 'text-teal-300 bg-navy-700 md:bg-transparent md:border-l-2 md:border-teal-300 md:-ml-px' 
                    : 'text-slate-400 hover:text-teal-300 hover:bg-navy-700/50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {activeSection === 'experience' ? (item as Job).company : (item as Education).institution.split(' ')[0]}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="py-2">
            <h3 className="text-xl font-semibold text-slate-200">
              {activeSection === 'experience' 
                ? (currentData[activeTab] as Job).title[language] 
                : (currentData[activeTab] as Education).degree[language]
              } 
              <span className="text-teal-300"> @ {
                activeSection === 'experience' 
                  ? (currentData[activeTab] as Job).company 
                  : (currentData[activeTab] as Education).institution
              }</span>
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              {activeSection === 'experience' 
                ? (currentData[activeTab] as Job).period[language] 
                : (currentData[activeTab] as Education).period[language]
              }
            </p>
            <ul className="space-y-3">
              {(activeSection === 'experience' 
                ? (currentData[activeTab] as Job).description[language] 
                : (currentData[activeTab] as Education).description[language]
              ).map((item, index) => (
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