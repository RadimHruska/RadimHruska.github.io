'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const fullText = t('hero.title');
  const typingSpeed = 100;
  const startDelay = 1000;

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, typingSpeed);
      }
    };

    const initialTimeout = setTimeout(() => {
      typeText();
    }, startDelay);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeout);
    };
  }, [fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-teal-300 font-mono mb-5">{t('hero.greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
            Radim Hruška
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="#projects" 
              className="bg-teal-300 hover:bg-teal-400 text-navy-900 font-medium py-3 px-8 rounded-md transition-colors"
            >
              {t('hero.projects')}
            </Link>
            <Link 
              href="#contact" 
              className="border border-teal-300 text-teal-300 hover:bg-teal-300/10 font-medium py-3 px-8 rounded-md transition-colors"
            >
              {t('hero.contact')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 