// components/pages/home/QualityDeliverySection/QualityDeliverySection.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const leftWords = [
  "La fraîcheur", "La qualité", "Les normes", "Les standards",
  "La qualité", "Les normes", "Les standards", "La fraîcheur",
  "La fraîcheur", "La qualité", "Les normes", "Les standards",
  "La qualité", "Les normes", "Les standards", "La fraîcheur",
];

const rightWords = [
  "Restaurant", "Usine", "Centrale d’achats", "Supermarché",
  "Bâteau", "Port", "Ville", "Pays", "Mall",
  "Restaurant", "Usine", "Centrale d’achats", "Supermarché",
  "Bâteau", "Port", "Ville", "Pays", "Mall",
];

export function QualityDeliverySection() {
  return (
    <section className="w-full py-12 md:py-20" style={{ backgroundColor: "#f3fff8" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* ========== HEADER : Nos process / Vos standards ========== */}
        {/* Même grille que les cartes du bas → même largeur */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mb-8 md:mb-10">
          
          {/* Colonne gauche - Nos process */}
          <div className="flex flex-col">
            <h3 
              className="text-[28px] md:text-[34px] font-semibold text-[#0b438c] mb-5"
              style={{ fontFamily: "VGA, sans-serif" }}
            >
              Nos process
            </h3>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/yoanananas.png"
                alt="Nos process"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Colonne droite - Vos standards */}
          <div className="flex flex-col">
            <h3 
              className="text-[28px] md:text-[34px] font-semibold text-[#0b438c] mb-5"
              style={{ fontFamily: "VGA, sans-serif" }}
            >
              Vos standards
            </h3>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/labo.png"
                alt="Vos standards"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ========== CARTES BLEUES ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          
          {/* CARD 1 */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#0A2A5E] text-white h-[620px] md:h-[680px]">
            <div className="absolute inset-x-0 top-[140px] bottom-0 overflow-hidden z-0">
              <ScrollingText words={leftWords} />
            </div>

            <div className="relative z-20 flex flex-col h-full">
              <div className="flex justify-between items-start p-8 md:p-10 pb-0">
                <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.15] max-w-[260px]">
                  Nous<br />monitorons la<br />qualité
                </h2>
                <button className="bg-white text-[#0A2A5E] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-50 transition shrink-0">
                  En savoir plus
                </button>
              </div>

              <div className="mt-auto relative w-full flex-1 min-h-0 scale-110 origin-bottom">
                <Image
                  src="/images/quality-man.png"
                  alt="Contrôle qualité"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#0A2A5E] text-white h-[620px] md:h-[680px]">
            <div className="absolute inset-x-0 top-[140px] bottom-0 overflow-hidden z-0">
              <ScrollingText words={rightWords} direction="left" />
            </div>

            <div className="relative z-20 flex flex-col h-full">
              <div className="flex justify-between items-start p-8 md:p-10 pb-0">
                <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.15] max-w-[240px]">
                  Livrée dans<br />votre
                </h2>
                <button className="border border-white/50 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition shrink-0">
                  Capter plus
                </button>
              </div>

              <div className="mt-auto relative w-full flex-1 min-h-0 scale-110 origin-bottom">
                <Image
                  src="/images/delivery-man.png"
                  alt="Livraison fraîche"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl -z-10 scale-125 pointer-events-none" />

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
                  <button className="bg-white text-[#0A2A5E] text-sm font-medium px-8 py-3 rounded-full hover:bg-blue-50 transition shadow-lg">
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== Texte défilant ========== */
function ScrollingText({
  words,
  direction = "right",
}: {
  words: string[];
  direction?: "left" | "right";
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  const activeIndexes = {
    0: offset % words.length,
    2: (offset + 4) % words.length,
    4: (offset + 8) % words.length,
  };

  const duplicated = [...words, ...words, ...words, ...words];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        className={`absolute inset-0 flex flex-col justify-center gap-y-5
          ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        `}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((row) => {
          const activeIdx = activeIndexes[row as keyof typeof activeIndexes];

          return (
            <div
              key={row}
              className={`flex whitespace-nowrap gap-x-6 text-[13px] md:text-[14px] font-medium
                ${row % 2 === 0 ? "" : "translate-x-[-48px]"}
              `}
            >
              {duplicated.map((word, i) => {
                const originalIndex = i % words.length;
                const isActive = activeIdx !== undefined && originalIndex === activeIdx;

                return (
                  <span
                    key={`${row}-${i}`}
                    className={`
                      transition-all duration-700 ease-out px-2.5 py-0.5 rounded-full
                      ${isActive
                        ? "text-white bg-white/20 border border-white/50 shadow-[0_0_14px_rgba(255,255,255,0.45)] scale-105"
                        : "text-white/25 border border-transparent"
                      }
                    `}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}