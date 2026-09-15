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
    <section className="w-full py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          
          {/* ========== CARD 1 ========== */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#0A2A5E] text-white h-[620px] md:h-[680px]">
            {/* Texte défilant – commence plus bas pour ne pas chevaucher le titre */}
            <div className="absolute inset-x-0 top-[140px] bottom-0 overflow-hidden">
              <ScrollingText words={leftWords} />
            </div>

            <div className="relative z-20 flex flex-col h-full p-8 md:p-10">
              <div className="flex justify-between items-start">
                <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.15] max-w-[260px]">
                  Nous<br />monitorons la<br />qualité
                </h2>
                <button className="bg-white text-[#0A2A5E] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-50 transition shrink-0">
                  En savoir plus
                </button>
              </div>

              <div className="mt-auto pt-4">
                <div className="relative w-full h-[340px] md:h-[380px]">
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
          </div>

          {/* ========== CARD 2 ========== */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#0A2A5E] text-white h-[620px] md:h-[680px]">
            <div className="absolute inset-x-0 top-[140px] bottom-0 overflow-hidden">
              <ScrollingText words={rightWords} direction="left" />
            </div>

            <div className="relative z-20 flex flex-col h-full p-8 md:p-10">
              <div className="flex justify-between items-start">
                <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.15] max-w-[240px]">
                  Livrée dans<br />votre
                </h2>
                <button className="border border-white/50 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition shrink-0">
                  Capter plus
                </button>
              </div>

              <div className="mt-auto flex flex-col items-center gap-5 pt-4">
                <div className="relative w-full max-w-[360px] h-[300px] md:h-[340px]">
                  <Image
                    src="/images/delivery-man.png"
                    alt="Livraison fraîche"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl -z-10 scale-110" />
                </div>

                <button className="bg-white text-[#0A2A5E] text-sm font-medium px-8 py-3 rounded-full hover:bg-blue-50 transition shadow-lg">
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== Texte défilant – 3 mots différents s’illuminent (ligne 1, 3 et 5) ========== */
function ScrollingText({
  words,
  direction = "right",
}: {
  words: string[];
  direction?: "left" | "right";
}) {
  const [offset, setOffset] = useState(0);

  // Fait avancer les positions d’illumination
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  // Positions des 3 mots illuminés (différents à chaque fois)
  // Ligne 0 (1ère) → un mot
  // Ligne 2 (3ème) → un autre mot
  // Ligne 4 (5ème) → un dernier mot
  const activeIndexes = {
    0: offset % words.length,                    // 1ère ligne
    2: (offset + 4) % words.length,              // 3ème ligne
    4: (offset + 8) % words.length,              // 5ème ligne
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