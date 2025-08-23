'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  brightness: number;
  color: string;
  twinkleSpeed: number;
  twinkleDirection: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

interface StarryBackgroundProps {
  starCount?: number;
  speedFactor?: number;
  maxSize?: number;
}

const StarryBackground = ({
  starCount = 300,
  speedFactor = 0.05,
  maxSize = 3
}: StarryBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Generuje náhodnou barvu hvězdy
  const getStarColor = () => {
    const colors = [
      'rgba(255, 255, 255, 1)',  // bílá (60%)
      'rgba(220, 237, 255, 1)',  // modrá (15%)
      'rgba(255, 253, 220, 1)',  // žlutá (15%)
      'rgba(255, 210, 210, 1)',  // červená (5%)
      'rgba(220, 255, 230, 1)'   // zelená (5%)
    ];
    
    const rand = Math.random();
    if (rand < 0.6) return colors[0];
    if (rand < 0.75) return colors[1];
    if (rand < 0.9) return colors[2];
    if (rand < 0.95) return colors[3];
    return colors[4];
  };

  // Inicializace hvězd
  const initStars = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Nastavení velikosti plátna
    canvas.width = width;
    canvas.height = height;
    
    // Vytvoření hvězd
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * maxSize + 0.1,
        speed: Math.random() * speedFactor + 0.01,
        brightness: Math.random() * 0.5 + 0.5,
        color: getStarColor(),
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1
      });
    }
    
    starsRef.current = stars;
    
    // Inicializace padajících hvězd
    const shootingStars: ShootingStar[] = [];
    for (let i = 0; i < 5; i++) {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height / 3,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 5 + 10,
        angle: Math.PI / 4,
        opacity: 0,
        active: false
      });
    }
    
    shootingStarsRef.current = shootingStars;
  };

  // Animace hvězd
  const animateStars = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Vyčištění plátna
    ctx.fillStyle = 'rgba(10, 25, 47, 1)';
    ctx.fillRect(0, 0, width, height);
    
    // Přidání gradientu pro realistický vzhled oblohy
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(15, 30, 60, 0.4)');
    gradient.addColorStop(1, 'rgba(10, 25, 47, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Vykreslení a aktualizace hvězd
    starsRef.current.forEach(star => {
      // Efekt blikání - změna jasu
      star.twinkleDirection = star.brightness <= 0.3 ? 1 : (star.brightness >= 0.9 ? -1 : star.twinkleDirection);
      star.brightness += star.twinkleDirection * star.twinkleSpeed;
      star.brightness = Math.max(0.2, Math.min(1, star.brightness));
      
      // Vykreslení hvězdy
      ctx.beginPath();
      
      // Větší hvězdy mají záři
      if (star.size > 1.5) {
        // Vytvoření záře kolem hvězdy
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        glow.addColorStop(0, star.color.replace('1)', `${star.brightness * 0.8})`));
        glow.addColorStop(1, 'rgba(10, 25, 47, 0)');
        
        ctx.fillStyle = glow;
        ctx.fillRect(star.x - star.size * 3, star.y - star.size * 3, star.size * 6, star.size * 6);
      }
      
      // Vykreslení samotné hvězdy
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color.replace('1)', `${star.brightness})`);
      ctx.fill();
      
      // Pohyb hvězdy (jemný pohyb)
      star.y += star.speed;
      
      // Resetování hvězdy, pokud opustí obrazovku
      if (star.y > height) {
        star.y = 0;
        star.x = Math.random() * width;
        star.size = Math.random() * maxSize + 0.1;
        star.brightness = Math.random() * 0.5 + 0.5;
      }
    });
    
    // Vykreslení a aktualizace padajících hvězd
    shootingStarsRef.current.forEach(shootingStar => {
      // Náhodná aktivace padající hvězdy
      if (!shootingStar.active && Math.random() < 0.005) {
        shootingStar.active = true;
        shootingStar.x = Math.random() * width;
        shootingStar.y = Math.random() * height / 3;
        shootingStar.opacity = 1;
      }
      
      if (shootingStar.active) {
        // Vykreslení padající hvězdy
        const tailStartX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailStartY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;
        
        const gradient = ctx.createLinearGradient(tailStartX, tailStartY, shootingStar.x, shootingStar.y);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        
        ctx.beginPath();
        ctx.moveTo(tailStartX, tailStartY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Přidání jasnější hlavy
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
        ctx.fill();
        
        // Pohyb padající hvězdy
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        
        // Postupné mizení
        shootingStar.opacity -= 0.02;
        
        // Deaktivace, když zmizí nebo opustí obrazovku
        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        }
      }
    });
    
    // Pokračování animace
    animationFrameRef.current = requestAnimationFrame(animateStars);
  };

  // Zpracování změny velikosti okna
  const handleResize = () => {
    if (!canvasRef.current) return;
    
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    
    // Reinicializace hvězd
    initStars();
  };

  useEffect(() => {
    // Inicializace hvězd
    initStars();
    
    // Spuštění animace
    animationFrameRef.current = requestAnimationFrame(animateStars);
    
    // Přidání posluchače události změny velikosti
    window.addEventListener('resize', handleResize);
    
    // Úklid
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      aria-hidden="true"
      suppressHydrationWarning
    />
  );
};

export default StarryBackground;