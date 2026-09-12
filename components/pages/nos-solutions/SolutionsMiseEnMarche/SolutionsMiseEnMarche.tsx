"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button, Card } from "@/components/ui";
import { MISE_EN_MARCHE_CONTENT, PRODUCTS } from "./content";

const { heading, topLeft, topRight, bottomLeftTitle, bottomRightText, cta, ctaHref, footerNote, image } =
  MISE_EN_MARCHE_CONTENT;

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function SolutionsMiseEnMarche() {
  const { ref, inView } = useInView<HTMLElement>(0.1);

  const enter = (delay: number) => ({
    opacity: inView ? undefined : 0,
    animation: inView ? `sr-block-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both` : undefined,
  });

  return (
    <section
      ref={ref}
      className="relative group/section bg-[#f5f3ef] px-4 py-12 transition-colors duration-500 md:px-8 lg:py-20 overflow-hidden"
    >
      {/* Halo lumineux d'arrière-plan pour donner de la profondeur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#5f7600]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {/* Haut gauche */}
        <div
          className="relative overflow-hidden flex flex-col justify-center bg-[#5f7600] p-8 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-[#6d8700] hover:shadow-xl md:text-left rounded-2xl md:rounded-none md:rounded-l-2xl group/card"
          style={enter(0.05)}
        >
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover/card:scale-150 transition-transform duration-700 pointer-events-none" />
          <p className="text-xl font-bold leading-snug text-white md:text-2xl relative z-10">
            {topLeft}
          </p>
        </div>

        {/* Centre — image en fond, occupe les deux lignes */}
        <div
          className="group relative flex flex-col items-center overflow-hidden bg-[#5f7600] transition-all duration-500 hover:bg-[#6d8700] hover:shadow-2xl md:row-span-2 rounded-2xl md:rounded-none sr-center-card"
          style={enter(0.15)}
        >
          {/* Reflet lumineux subtil qui traverse la carte centrale */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h2
            className="pt-8 text-center text-4xl font-extrabold leading-[1.05] text-white transition-transform duration-500 group-hover:scale-[1.02] md:pt-12 md:text-5xl relative z-10 px-4"
            style={{
              opacity: inView ? undefined : 0,
              animation: inView ? "sr-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" : undefined,
            }}
          >
            {heading.line1}
            <br />
            <span className="bg-[#5f7600] transition-colors duration-300 group-hover:bg-[#6d8700]">
              {heading.line2}
            </span>
          </h2>

          <div className="relative w-full mt-auto overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-108 group-hover:-translate-y-1"
              style={{
                opacity: inView ? undefined : 0,
                animation: inView ? "sr-image-enter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both" : undefined,
              }}
            />
          </div>
        </div>

        {/* Haut droite */}
        <div
          className="relative overflow-hidden flex flex-col justify-center bg-[#5f7600] p-8 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-[#6d8700] hover:shadow-xl md:text-left rounded-2xl md:rounded-none md:rounded-r-2xl group/card"
          style={enter(0.1)}
        >
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover/card:scale-150 transition-transform duration-700 pointer-events-none" />
          <p className="text-xl font-bold leading-snug text-white md:text-2xl relative z-10">
            {topRight}
          </p>
        </div>

        {/* Bas gauche */}
        <div
          className="group/card relative overflow-hidden flex flex-col justify-center gap-4 bg-[#5f7600] p-8 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-[#6d8700] hover:shadow-xl md:text-left rounded-2xl md:rounded-none md:rounded-bl-2xl"
          style={enter(0.25)}
        >
          <p className="text-lg font-semibold text-white transition-transform duration-300 group-hover/card:translate-x-1">
            {bottomLeftTitle}
          </p>
          <p className="text-sm leading-relaxed text-white/80 transition-colors duration-300 group-hover/card:text-white">
            {PRODUCTS.join(", ")}.
          </p>
        </div>

        {/* Bas droite */}
        <div
          className="group/card relative overflow-hidden flex flex-col justify-between gap-6 bg-[#5f7600] p-8 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-[#6d8700] hover:shadow-xl md:text-left rounded-2xl md:rounded-none md:rounded-br-2xl"
          style={enter(0.3)}
        >
          <p className="text-sm leading-relaxed text-white/90 md:text-base relative z-10">
            {bottomRightText}
          </p>
          <div className="flex justify-center md:justify-start relative z-10">
            <Button
              asChild
              variant="pill"
              className="border-transparent rounded-3xl bg-[#edfac1] text-[#5f7600] font-bold px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg active:scale-95 sr-cta-button"
            >
              <Link href={ctaHref}>{cta}</Link>
            </Button>
          </div>
        </div>
      </div>

      <p
        className="relative z-10 mx-auto mt-8 max-w-3xl text-center text-sm text-[color:var(--color-dark-gray)] md:text-base font-medium"
        style={{
          opacity: inView ? undefined : 0,
          animation: inView ? "sr-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both" : undefined,
        }}
      >
        {footerNote}
      </p>

      <style jsx>{`
        @keyframes sr-block-enter {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sr-fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sr-image-enter {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Animation de flottement ultra-subtile pour la carte centrale */
        .sr-center-card {
          animation: sr-float 6s ease-in-out infinite 1s;
        }
        @keyframes sr-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Pulsation douce sur le bouton CTA pour attirer l'œil subtilement */
        .sr-cta-button {
          animation: sr-pulse-cta 3s ease-in-out infinite;
        }
        @keyframes sr-pulse-cta {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(237, 250, 193, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(237, 250, 193, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}