// components/sections/WhyChoose/WhyChoose.jsx
"use client";

import Image from "next/image";

const reasons = [
  {
    badge1: "Qualité",
    badge1Color: "bg-emerald-500/90",
    badge2: "Non-hasardeuse",
    title: "Analyse sensorielle\navant expédition",
    points: [
      "Taux d'humidité",
      "Fermentation",
      "Corps étrangers",
      "Bulletin qualité fourni avec chaque lot",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    badge1: "Qualité",
    badge1Color: "bg-blue-500/90",
    badge2: "Non-hasardeuse",
    title: "Analyse sensorielle\navant expédition",
    points: [
      "Taux d'humidité",
      "Fermentation",
      "Corps étrangers",
      "Bulletin qualité fourni avec chaque lot",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.166 1.668.172.787.186 1.598.186 2.413 0 .756-.068 1.504-.196 2.24-.145.845-.521 1.66-1.084 2.318-.563.658-1.306 1.15-2.14 1.42a9.04 9.04 0 01-3.166.576H9.75a.75.75 0 01-.75-.75v-4.5z" />
      </svg>
    ),
  },
  {
    badge1: "Qualité",
    badge1Color: "bg-sky-400/90",
    badge2: "Non-hasardeuse",
    title: "Analyse sensorielle\navant expédition",
    points: [
      "Taux d'humidité",
      "Fermentation",
      "Corps étrangers",
      "Bulletin qualité fourni avec chaque lot",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    badge1: "Qualité",
    badge1Color: "bg-emerald-500/90",
    badge2: "Non-hasardeuse",
    title: "Analyse sensorielle\navant expédition",
    points: [
      "Taux d'humidité",
      "Fermentation",
      "Corps étrangers",
      "Bulletin qualité fourni avec chaque lot",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    badge1: "Qualité",
    badge1Color: "bg-blue-500/90",
    badge2: "Non-hasardeuse",
    title: "Analyse sensorielle\navant expédition",
    points: [
      "Taux d'humidité",
      "Fermentation",
      "Corps étrangers",
      "Bulletin qualité fourni avec chaque lot",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.166 1.668.172.787.186 1.598.186 2.413 0 .756-.068 1.504-.196 2.24-.145.845-.521 1.66-1.084 2.318-.563.658-1.306 1.15-2.14 1.42a9.04 9.04 0 01-3.166.576H9.75a.75.75 0 01-.75-.75v-4.5z" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  const scrollingCards = [...reasons, ...reasons];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[1600px] md:min-h-[1800px] lg:min-h-[2000px]">
        <Image
          src="/images/Img - Site web Aaprovidir.png"
          alt="Contrôle qualité Aaprovidir"
          fill
          priority
          className="object-cover object-[42%_center] scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between px-6 py-16 md:px-12 lg:px-16 xl:px-20">
          
          {/* Titre */}
          <div className="self-end max-w-xl text-right pt-24 md:pt-32 lg:pt-40">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide drop-shadow-lg">
              POURQUOI LES PLUS GRANDS
              <br />
              CHOISISSENT DÉJÀ AAPROVIDIR?
            </h2>
          </div>

          {/* Zone basse */}
          <div className="w-full pb-2">
            
            {/* ===== 05 BONNES RAISONS - BLEU + GRAND + CENTRÉ ===== */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#0066cc] flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">05</span>
              </div>
              <span className="text-[#0066cc] font-bold text-2xl md:text-3xl tracking-wide drop-shadow-sm">
                BONNES RAISONS
              </span>
            </div>

            {/* Cartes */}
            <div className="relative overflow-hidden w-full">
              <div className="group">
                <div className="flex gap-5 animate-marquee-x group-hover:[animation-play-state:paused] w-max">
                  {scrollingCards.map((reason, index) => (
                    <div
                      key={index}
                      className="
                        flex-shrink-0 w-[300px] h-[460px]
                        relative overflow-hidden rounded-2xl
                        bg-white/[0.05] backdrop-blur-md
                        border border-white/12
                        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                        hover:bg-white/[0.09] hover:border-white/20
                        transition-all duration-300
                      "
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/6 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Badges */}
                        <div className="flex items-center gap-2 px-6 pt-6 mb-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium text-white ${reason.badge1Color}`}>
                            {reason.badge1}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-white/90 bg-white/10 border border-white/15">
                            {reason.badge2}
                          </span>
                        </div>

                        {/* Séparateur pleine largeur */}
                        <div className="w-full h-px bg-white/20" />

                        {/* Contenu */}
                        <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
                          <h3 className="text-white text-[17px] font-semibold leading-snug mb-4 whitespace-pre-line">
                            {reason.title}
                          </h3>

                          <div className="space-y-1.5 mb-4">
                            {reason.points.map((point, i) => (
                              <p key={i} className="text-white/65 text-[13px] leading-relaxed">
                                {point}
                              </p>
                            ))}
                          </div>

                          {/* Icône centrée et agrandie */}
                          <div className="mt-auto flex justify-center pb-2">
                            <div className="w-16 h-16 rounded-full border border-white/25 flex items-center justify-center text-lime-200/80">
                              {reason.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-x {
          animation: marquee-x 42s linear infinite;
        }
      `}</style>
    </section>
  );
}