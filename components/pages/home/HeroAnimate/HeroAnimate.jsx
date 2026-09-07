'use client';

import React, { useState } from 'react';

/**
 * Section HeroAnimated
 * Utilise directement les 3 images de vos maquettes :
 * 1. Grille de pixels (pixelGridSrc)
 * 2. Halo / Spirale lumineuse (glowSrc)
 * 3. Mains tenant les légumes (handsSrc)
 */
export function HeroAnimate({
  pixelGridSrc = "/images/pixel-grid.jpg",
  handsSrc = "/images/harvest-hands.jpg",
  glowSrc = "/images/neon-glow.jpg"
}) {
  const [activeTab, setActiveTab] = useState('avec'); // 'sans' ou 'avec'

  return (
    <section className="w-full bg-[#231a11] text-[#f7f2ea] py-10 md:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#ffcb2b] selection:text-[#201811]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* ------------------------------------------------------------------ */}
        {/* CARTE GAUCHE : "Optez pour plus de Valeur"                         */}
        {/* ------------------------------------------------------------------ */}
        {}
        <div className="relative bg-[#2e2217] rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-[#423223] shadow-2xl overflow-hidden group hover:border-[#574330] transition-all duration-300 min-h-[580px]">
          
          {/* Entête Carte Gauche */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 z-10">
            <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] text-[#faf6f0] tracking-tight">
              Optez <br />
              pour plus <br />
              <span className="font-serif italic font-light text-[#ffffff]">de Valeur</span>
            </h2>

            <button 
              type="button"
              className="px-6 py-3 rounded-full bg-[#ffcb2b] text-[#201811] font-semibold text-sm shadow-md hover:bg-[#ffd754] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              En savoir plus
            </button>
          </div>

          {/* Connecteurs interactifs / Métriques */}
          {}
          <div className="relative z-20 grid grid-cols-2 gap-4 my-2 text-xs sm:text-sm">
            {/* Sans transformation */}
            <div 
              onClick={() => setActiveTab('sans')}
              className={`p-3 rounded-xl cursor-pointer transition-all ${
                activeTab === 'sans' 
                  ? 'bg-[#1e150d] text-white shadow-md border border-[#ffcb2b]/40' 
                  : 'text-[#a89584] hover:text-white'
              }`}
            >
              <p className="font-normal text-sm">Sans transformation</p>
              <p className="text-[#877463] text-xs font-light mt-0.5">Moins de gain</p>
            </div>

            {/* Avec transformation */}
            <div 
              onClick={() => setActiveTab('avec')}
              className={`p-3 rounded-xl cursor-pointer transition-all ${
                activeTab === 'avec' 
                  ? 'bg-[#1e150d] text-white shadow-md border border-[#ffcb2b]/60' 
                  : 'text-[#a89584] hover:text-white'
              }`}
            >
              <p className="font-normal text-sm text-white">Avec transformation</p>
              <p className="text-[#ffcb2b] text-xs font-light mt-0.5">Valeur ajoutée <br/><span className="font-medium">Plus de gain</span></p>
            </div>
          </div>

          {/* Image de la Grille Pixelisée (Image Fournie) */}
          {}
          <div className="relative w-full aspect-square max-w-[320px] mx-auto my-auto flex items-center justify-center">
            
            {/* Lignes dorées indicatrices reliées aux métriques */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 320 320">
              <path 
                d="M 80 20 L 80 65 L 135 95" 
                stroke="#ffcb2b" 
                strokeWidth="2" 
                fill="none"
                opacity={activeTab === 'sans' ? '1' : '0.4'}
                className="transition-opacity duration-300"
              />
              <path 
                d="M 240 20 L 240 65 L 185 95" 
                stroke="#ffcb2b" 
                strokeWidth="2" 
                fill="none"
                opacity={activeTab === 'avec' ? '1' : '0.4'}
                className="transition-opacity duration-300"
              />
            </svg>

            {/* Affichage de l'image de la matrice de pixels */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
              <img 
                src={pixelGridSrc} 
                alt="Matrice de pixels de valeur agricole"
                className="w-full h-auto max-w-[280px] sm:max-w-[300px] object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* CARTE DROITE : "Des solutions adaptées"                             */}
        {/* ------------------------------------------------------------------ */}
        {}
        <div className="relative bg-[#2e2217] rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-[#423223] shadow-2xl overflow-hidden group hover:border-[#574330] transition-all duration-300 min-h-[580px]">
          
          {/* Badge Pilule du haut */}
          <div className="flex justify-center z-10 mb-2">
            <span className="px-4 py-1 rounded-full border border-[#ffcb2b]/60 text-[#ffcb2b] text-xs tracking-wide bg-[#231a11]/60 backdrop-blur-md">
              Capter plus
            </span>
          </div>

          {/* Titre carte droite */}
          <div className="text-center z-10 mb-2">
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-[#faf6f0]">
              Des solutions <br />
              <span className="font-serif italic font-light">adaptées</span>
            </h2>
          </div>

          {/* Composition centrale (Mains avec légumes + Faisceau néon) */}
          {}
          <div className="relative w-full flex-1 flex items-center justify-center my-4 min-h-[260px]">
            
            {/* Image du Faisceau / Halo Néon Lumineux */}
            <img 
              src={glowSrc} 
              alt="Faisceau néon lumineux"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20 scale-110 mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-115"
            />

            {/* Image des Mains tenant carottes & oignons rouges */}
            <img 
              src={handsSrc} 
              alt="Mains d'agriculteur tenant la récolte"
              className="relative z-10 max-w-[260px] sm:max-w-[300px] w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Arc de cercle inférieur et bouton d'action */}
          {}
          <div className="relative z-10 mt-2 flex flex-col items-center">
            
            {/* Fine ligne d'arc courbe avec point central */}
            <div className="relative w-full max-w-xs h-10 mb-2 pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 40">
                <path
                  d="M 10 38 Q 150 -5 290 38"
                  fill="none"
                  stroke="#576852"
                  strokeWidth="1.2"
                />
                <circle cx="150" cy="16" r="3.5" fill="#e2ede0" stroke="#576852" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Bouton d'action principal */}
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ffcb2b] text-[#201811] font-semibold text-sm shadow-xl hover:bg-[#ffd754] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-center"
            >
              Solution pour mon territoire
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroAnimate;