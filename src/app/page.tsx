import React from 'react';
import NoSSR from '../components/NoSSR';
import StarryBackground from '../components/StarryBackground';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NoSSR>
        <StarryBackground />
      </NoSSR>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
} 