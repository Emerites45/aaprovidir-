'use client';

import React, { useState, useEffect } from 'react';

const agricultureImages = [
  'https://images.unsplash.com/photo-1605000797499-95a51c5269b0?w=1600&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80',
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80',
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80',
  'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600&q=80',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80',
  'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1600&q=80',
];

export function AgricultureCarousel() {
  const [current, setCurrent] = useState(0);

  // Défilement automatique smooth
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % agricultureImages.length);
    }, 5000); // change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? agricultureImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % agricultureImages.length);
  };

  return (
    <section className="relative w-full h-[420px] sm:h-[500px] md:h-[580px] overflow-hidden">
      
      {/* ===== IMAGES BACKGROUND ===== */}
      {agricultureImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/45" />

      {/* ===== TEXTE AU CENTRE ===== */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
          Notre Agriculture
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 max-w-xl drop-shadow-md">
          Des images authentiques de nos cultures et de la nature
        </p>
      </div>

      {/* ===== BOUTONS GAUCHE / DROITE ===== */}
      <button
        onClick={goToPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 
                   w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/35 
                   backdrop-blur-sm text-white flex items-center justify-center 
                   transition-all duration-300 border border-white/30"
        aria-label="Image précédente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 
                   w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/35 
                   backdrop-blur-sm text-white flex items-center justify-center 
                   transition-all duration-300 border border-white/30"
        aria-label="Image suivante"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Petits points indicateurs (optionnel) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {agricultureImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default AgricultureCarousel;