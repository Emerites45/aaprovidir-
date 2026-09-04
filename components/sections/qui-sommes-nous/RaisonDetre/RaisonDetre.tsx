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

/** Adoucit une valeur 0→1 (smootherstep de Perlin : dérivée seconde nulle aux bornes). */
function smooth(t: number) {
  const x = Math.min(Math.max(t, 0), 1);
  return x * x * x * (x * (x * 6 - 15) + 10);
}

/** Position verticale (en %) d'une diapo selon sa progression locale. */
function slideY(d: number, isLast: boolean) {
  if (d <= 0) return 100;
  if (d < 0.42) return 100 - 100 * smooth(d / 0.42);
  if (d < 0.58) return 0;
  if (isLast) return 0;
  if (d < 1) return -140 * smooth((d - 0.58) / 0.42);
  return -140;
}

export function RaisonDetre() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const read = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const distance = el.offsetHeight - window.innerHeight;
      if (distance <= 0) return;
      const p = -el.getBoundingClientRect().top / distance;
      targetRef.current = Math.min(Math.max(p, 0), 1);
    };

    const tick = () => {
      setProgress((current) => {
        const next = current + (targetRef.current - current) * 0.055;
        return Math.abs(targetRef.current - next) < 0.0002
          ? targetRef.current
          : next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    read();
    setProgress(targetRef.current);
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  const t = progress * SLIDES.length;
  const active = Math.min(Math.floor(t), SLIDES.length - 1);

  return (
    <section>
      <div className="relative my-[14px] overflow-hidden rounded-[22px] bg-[linear-gradient(to_right,#006af1,#80e9f9)] lg:hidden">
        <img
          src="/images/montagne.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full select-none"
        />
        <div className="relative z-10">
          {SLIDES.map((slide) => (
            <SlideContent key={slide.id} slide={slide} />
          ))}
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="hidden lg:block"
        style={{ height: `${SLIDES.length * 100}vh` }}
      >
        <div className="sticky top-[14px] h-[calc(100vh_-_28px)] overflow-hidden rounded-[22px] bg-[linear-gradient(to_right,#006af1,#80e9f9)]">
          {SLIDES.map((slide, i) => {
            const y = slideY(t - i, i === SLIDES.length - 1);
            return (
              <div
                key={slide.id}
                className="absolute inset-0 z-10 will-change-transform"
                style={{
                  transform: `translate3d(0, ${y}%, 0)`,
                  pointerEvents: y === 0 ? "auto" : "none",
                }}
              >
                <SlideContent slide={slide} />
              </div>
            );
          })}

          <img
            src="/images/montagne.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 h-full w-full select-none object-cover object-bottom"
          />

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

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="flex h-full flex-col justify-start px-[5%] pt-[70px] lg:pt-[80px]">
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
          <div className="flex items-start gap-10 lg:pt-[60px]">
           <p
              style={{ fontFamily: "var(--font-script)" }}
              className="w-[46%] shrink-0 translate-x-[30px] text-right text-[clamp(1.4rem,2.5vw,2.4rem)] leading-relaxed text-[#0b1e3a]"
            >
              {slide.script}
            </p>

            <img
              src="/images/producteurs.svg"
              alt=""
              aria-hidden="true"
              className="w-[clamp(340px,36vw,580px)] shrink-0 -translate-x-[180px] -translate-y-[150px] select-none"
            />
          </div>

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