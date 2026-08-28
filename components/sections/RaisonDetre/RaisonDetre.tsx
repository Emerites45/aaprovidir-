"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  id: string;
  num: string;
  tag: string;
  script: string;
  lead: string;
  body: string;
};

const SLIDES: Slide[] = [
  {
    id: "pourquoi",
    num: "1",
    tag: "POURQUOI ? Notre raison d'être",
    script: "Restaurer la dignité de ceux qui nourrissent le continent.",
    lead: "Nous croyons que la prospérité doit naître au pied du cacaoyer.",
    body: "Pas dans une salle de marché à Londres. Nous voulons un monde où 10 000 producteurs captent au moins 50 % de la valeur de leurs récoltes - contre moins de 35 % aujourd'hui dans les circuits informels.",
  },
  {
    id: "comment",
    num: "2",
    tag: "COMMENT ? Notre méthode unique",
    script: "En industrialisant la confiance.",
    lead: "Nous structurons les producteurs en coopératives autonomes.",
    body: "Nous leur apportons éducation financière, financement et mini-unités de transformation alimentées par des énergies renouvelables, au plus près du champ. Nous déployons une plateforme phygitale qui garantit une traçabilité totale, de la terre à l'assiette.",
  },
  {
    id: "quoi",
    num: "3",
    tag: "QUOI ? Notre promesse tangible",
    script: "Des produits premium, livrés avec une fiabilité d'horloger.",
    lead: "Conformité, constance, compétitivité.",
    body: "Chaque jour, nous permettons à des acheteurs HORECA, industriels et exportateurs de recevoir des produits certifiés, tracés, et livrés en moins de 48 heures. Notre objectif : 98 % de lots conformes, à date fixe, sans mauvaise surprise.",
  },
];

const BG = "url('/images/background-raison.png')";

export function RaisonDetre() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const distance = el.offsetHeight - window.innerHeight;
      if (distance <= 0) return;
      const p = -el.getBoundingClientRect().top / distance;
      setProgress(Math.min(Math.max(p, 0), 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = Math.min(
    Math.floor(progress * SLIDES.length),
    SLIDES.length - 1
  );

  return (
    <section>
      <div
        className="bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: BG }}
      >
        {SLIDES.map((slide) => (
          <SlideContent key={slide.id} slide={slide} visible />
        ))}
      </div>

      <div
        ref={wrapperRef}
        className="hidden lg:block"
        style={{ height: `${SLIDES.length * 100}vh` }}
      >
        <div
          className="sticky top-0 h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: BG }}
        >
          {SLIDES.map((slide, i) => (
            <div key={slide.id} className="absolute inset-0">
              <SlideContent slide={slide} visible={i === active} />
            </div>
          ))}

          <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 gap-3">
            {SLIDES.map((slide, i) => (
              <span
                key={slide.id}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideContent({ slide, visible }: { slide: Slide; visible: boolean }) {
  return (
    <div
      className={`flex h-full flex-col justify-start px-[5%] pt-[70px] transition-all duration-700 ease-out lg:pt-[80px] ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-6 mt-8 flex items-center gap-5 lg:mb-16 lg:mt-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffca3c] font-title text-xl font-bold text-white ring-4 ring-white/80 lg:h-14 lg:w-14 lg:text-2xl">
            {slide.num}
          </span>
          <span className="rounded-xl bg-[#30a036] px-5 py-2.5 font-title text-base font-bold text-white lg:px-6 lg:py-3 lg:text-lg">
            {slide.tag}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-[380px] font-accent text-[clamp(1.1rem,1.8vw,1.6rem)] italic leading-relaxed text-[#0b1e3a] lg:-translate-x-[100px] lg:pl-0 lg:pt-[72px]">
            {slide.script}
          </p>

          <div className="rounded-[24px] bg-gradient-to-br from-[#cfe8f7]/95 to-[#eaf6fd]/95 p-8 shadow-lg lg:p-11">
            <p className="mb-5 font-body text-[clamp(1rem,1.5vw,1.4rem)] font-bold leading-snug text-[#111]">
              {slide.lead}
            </p>
            <p className="font-body text-[clamp(0.9rem,1.2vw,1.15rem)] leading-relaxed text-[#1a1a1a] lg:text-justify">
              {slide.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}