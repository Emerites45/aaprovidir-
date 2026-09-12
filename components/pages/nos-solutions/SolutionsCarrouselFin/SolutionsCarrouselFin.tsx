"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  intro: string;
  magazine: string;
  image: string;
  tag: string;
  articleHref: string;
};

const SLIDES: Slide[] = [
  {
    intro: "Discover the Wonders of",
    magazine: "Nature",
    image: "/images/solution/ananas.jpeg",
    tag: "TROPICAL FISH OF THE CARRIBEAN",
    articleHref: "/articles/tropical-fish-carribean",
  },
  {
    intro: "Explore the Depths of",
    magazine: "Ocean",
    image: "/images/solution/ciel bleu 1.jpeg",
    tag: "CORAL REEFS OF THE PACIFIC",
    articleHref: "/articles/coral-reefs-pacific",
  },
  {
    intro: "Uncover the Secrets of",
    magazine: "Wildlife",
    image: "/images/solution/test.jpeg",
    tag: "PREDATORS OF THE SAVANNA",
    articleHref: "/articles/predators-savanna",
  },
];

const AUTOPLAY_DELAY = 5000;

export function SolutionsCarrouselFin() 
{
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#1e4fa8,#0a1a4a_70%)] px-4 py-16 md:px-8">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        {/* Intro + nom du magazine */}
        <p className="text-lg text-white/90 md:text-xl">{slide.intro}</p>

        {/* Zone image + flèches */}
        <div className="relative mt-2 flex w-full items-center justify-center">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Slide précédente"
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-white md:left-4"
          >
            <ChevronLeft className="h-8 w-8" strokeWidth={1.5} />
          </button>

          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border-[6px] border-[#f5d90a] shadow-2xl">
            <Image
              src={slide.image}
              alt={`${slide.magazine} — ${slide.tag}`}
              fill
              priority
              className="object-cover"
            />

            {/* Titre du magazine incrusté sur l'image */}
            <span className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap font-serif text-6xl font-bold italic text-white drop-shadow-md md:text-7xl">
              {slide.magazine}
            </span>

            {/* Bandeau tag + lien article */}
            <div className="absolute inset-x-0 bottom-6 px-6 text-left">
              <p className="text-sm font-bold uppercase tracking-wide text-white">
                {slide.tag}
              </p>
              <a
                href={slide.articleHref}
                className="mt-1 inline-block text-sm text-white/90 underline-offset-2 hover:underline"
              >
                To Article →
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Slide suivante"
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-white md:right-4"
          >
            <ChevronRight className="h-8 w-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* Indicateurs (dots) */}
        <div className="mt-6 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller à la slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-6 bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}