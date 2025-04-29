'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

interface Project {
  title: {
    cs: string;
    en: string;
  };
  description: {
    cs: string;
    en: string;
  };
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects = () => {
  const { t, language } = useLanguage();
  
  const projects: Project[] = [
    {
      title: {
        cs: 'Knihovna',
        en: 'Library'
      },
      description: {
        cs: 'KnihovnaDemo je moderní systém pro správu knihovny s WPF klientskou aplikací a .NET Core backendem, který podporuje správu uživatelů, knih a výpůjček. Projekt využívá Docker pro kontejnerizaci a Entity Framework pro práci s databází, včetně automatických migrací. Systém je připraven pro nasazení jak v kontejnerizovaném prostředí, tak v tradičním vývojovém prostředí.',
        en: 'Modern library management system with WPF client application and .NET Core backend, supporting user management, book inventory, and borrowing. Utilizes Docker for containerization and Entity Framework for database operations, including automatic migrations. System is ready for deployment in both containerized and traditional development environments.'
      },
      image: '/projects/ecommerce.jpg',
      technologies:  ['WPF', '.NET Core', 'Entity Framework', 'SQL Server', 'Docker', 'Docker Compose'],
      github: 'https://github.com/username/ecommerce',
      demo: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: {
        cs: 'Aplikace pro správu úkolů',
        en: 'Task Management App'
      },
      description: {
        cs: 'Webová aplikace pro správu úkolů s možností vytváření projektů, přiřazování úkolů a sledování pokroku. Implementace drag-and-drop funkcionality a real-time aktualizací.',
        en: 'Web application for task management with the ability to create projects, assign tasks, and track progress. Implementation of drag-and-drop functionality and real-time updates.'
      },
      image: '/projects/web1.png',
      technologies: ['CSS', 'HTML 5', 'JavaScript'],
      github: 'https://github.com/username/taskmanager',
      demo: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      title: {
        cs: 'Osobní portfolio',
        en: 'Personal Portfolio'
      },
      description: {
        cs: 'Responzivní osobní portfolio vytvořené pomocí Next.js a Tailwind CSS. Obsahuje animace, tmavý režim a optimalizaci pro vyhledávače.',
        en: 'Responsive personal portfolio created using Next.js and Tailwind CSS. Includes animations, dark mode, and search engine optimization.'
      },
      image: '/projects/portfolio.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/username/portfolio',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-navy-800/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
          {t('projects.title')}
        </h2>
        <div className="w-16 h-1 bg-teal-300 mb-10"></div>
        
        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`relative grid md:grid-cols-12 gap-4 md:gap-10 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 relative rounded-md overflow-hidden aspect-video group ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <div className="absolute inset-0 bg-teal-300/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="w-full h-full relative">
                  <Image 
                    src={project.image}
                    alt={project.title[language]}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-all duration-300"
                  />
                </div>
                <div className="absolute -inset-2 border-2 border-teal-300 rounded-md -z-10 translate-y-4 translate-x-4 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-teal-300 font-mono mb-1 text-sm">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">
                  {project.title[language]}
                </h3>
                <div className="bg-navy-700 p-6 rounded-md shadow-xl mb-4">
                  <p className="text-slate-400 text-center" >
                    {project.description[language]}
                  </p>
                </div>
                <ul className={`flex flex-wrap gap-2 mb-4 text-sm text-slate-400 ${
                  index % 2 === 1 ? 'md:justify-end' : ''
                }`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
              {language === 'cs' ? 'Další projekty' : 'Other Projects'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-navy-700 rounded-md overflow-hidden hover:translate-y-[-5px] transition-transform flex flex-col relative group">
                  <div className="relative w-full h-40">
                    <div className="absolute inset-0 bg-teal-300/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                    <Image 
                      src={project.image}
                      alt={project.title[language]}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-all duration-300"
                    />
                  </div>
                  <div className="absolute -inset-1 border-2 border-teal-300 rounded-md -z-10 translate-y-2 translate-x-2 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-300"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold text-slate-100">
                        {project.title[language]}
                      </h4>
                      <div className="flex gap-3">
                        {project.github && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </Link>
                        )}
                        {project.demo && (
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-400 mb-4">
                      {project.description[language]}
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs text-slate-500">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects; 