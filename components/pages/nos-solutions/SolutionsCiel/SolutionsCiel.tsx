"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CHECKLIST_ITEMS = [
  "Vous comprenez enfin vos marges et vos coûts réels.",
  "Vous savez négocier un prix juste avec vos acheteurs.",
  "Vous gérez votre trésorerie sans dépendre d'un tiers.",
  "Vous anticipez les périodes creuses sans stress.",
];

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function SolutionCiel() {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      className="sc-section relative overflow-hidden bg-[#f5f3ef] px-4 py-16 md:px-8 lg:py-24"
    >
      {/* Particules de lumière flottantes — clin d'oeil au ciel de l'image */}
      <span className="sc-mote sc-mote-1" aria-hidden="true" />
      <span className="sc-mote sc-mote-2" aria-hidden="true" />
      <span className="sc-mote sc-mote-3" aria-hidden="true" />
      <span className="sc-mote sc-mote-4" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <span
          className={`sc-badge inline-block rounded-full bg-[#f4c430] px-4 py-1.5 text-sm font-bold text-white ${
            inView ? "sc-badge-in" : ""
          }`}
        >
          Solution 3
        </span>

        <h2
          className={`sc-title mt-6 text-3xl font-extrabold leading-tight text-[#1f1f1f] md:text-4xl ${
            inView ? "sc-title-in" : ""
          }`}
        >
          L&apos;éducation financière <br />
          <span
            className={`sc-title-accent ${inView ? "sc-title-accent-in" : ""}`}
          >
            pour ne plus jamais être floué
          </span>
        </h2>

        <div className="relative mt-10 w-full overflow-hidden rounded-3xl">
          <div className={`sc-image-wrap ${inView ? "sc-image-in" : ""}`}>
            <div className={`sc-image-drift ${inView ? "sc-image-drift-on" : ""}`}>
              <Image
                src="/images/solution/ciel.jpeg"
                alt="Agriculteur pointant vers le ciel"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>
            {/* Voile de lumière qui balaie l'image lentement */}
            <div className={`sc-sheen ${inView ? "sc-sheen-on" : ""}`} aria-hidden="true" />
          </div>

          <div className="absolute inset-y-0 right-0 flex w-1/2 flex-col justify-center gap-6 px-8 py-10 md:py-16">
            {CHECKLIST_ITEMS.map((text, i) => (
              <div
                key={i}
                className={`sc-item flex items-center gap-4 border-b border-black/15 pb-6 last:border-b-0 last:pb-0 ${
                  inView ? "sc-item-in" : ""
                }`}
                style={{ transitionDelay: inView ? `${220 + i * 140}ms` : "0ms" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="sc-check h-7 w-7 shrink-0 text-[#f4c430]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    animationDelay: inView ? `${420 + i * 140}ms` : "0ms",
                  }}
                >
                  <circle cx="12" cy="12" r="10" className="sc-check-circle" />
                  <path
                    d="M8 12.5l2.5 2.5L16 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sc-check-tick"
                  />
                </svg>
                <p
                  className="sc-text text-sm font-medium text-[#1f1f1f] md:text-base"
                  style={{ animationDelay: inView ? `${900 + i * 220}ms` : "0ms" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ---------- Particules de fond : flottement lent et discret ---------- */
        .sc-mote {
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(244, 196, 48, 0.35), rgba(244, 196, 48, 0));
          pointer-events: none;
          animation: sc-float 9s ease-in-out infinite;
        }
        .sc-mote-1 {
          width: 90px;
          height: 90px;
          top: 8%;
          left: 6%;
          animation-duration: 11s;
        }
        .sc-mote-2 {
          width: 50px;
          height: 50px;
          top: 65%;
          left: 12%;
          background: radial-gradient(circle, rgba(26, 79, 214, 0.2), rgba(26, 79, 214, 0));
          animation-duration: 8s;
          animation-delay: 1.2s;
        }
        .sc-mote-3 {
          width: 70px;
          height: 70px;
          top: 20%;
          right: 8%;
          animation-duration: 10s;
          animation-delay: 0.6s;
        }
        .sc-mote-4 {
          width: 40px;
          height: 40px;
          bottom: 10%;
          right: 16%;
          background: radial-gradient(circle, rgba(26, 79, 214, 0.18), rgba(26, 79, 214, 0));
          animation-duration: 7.5s;
          animation-delay: 2s;
        }
        @keyframes sc-float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -18px) scale(1.08);
          }
        }

        /* ---------- Badge ---------- */
        .sc-badge {
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sc-badge-in {
          opacity: 1;
          transform: scale(1);
          animation: sc-pulse-ring 1.4s ease-out 0.5s;
        }

        /* ---------- Titre : rideau + accent vivant ---------- */
        .sc-title {
          opacity: 0;
          clip-path: inset(0 0 100% 0);
          transform: translateY(6px);
          transition: opacity 0.7s ease 0.15s, clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .sc-title-in {
          opacity: 1;
          clip-path: inset(0 0 0% 0);
          transform: translateY(0);
        }

        /* Accent bleu : dégradé qui glisse doucement en continu, comme une lumière rasante */
        .sc-title-accent {
          background-image: linear-gradient(
            100deg,
            #1a4fd6 0%,
            #4a7dff 35%,
            #1a4fd6 60%,
            #1a4fd6 100%
          );
          background-size: 220% 100%;
          background-position: 0% 0%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sc-title-accent-in {
          animation: sc-sheen-text 6s ease-in-out 1.1s infinite;
        }
        @keyframes sc-sheen-text {
          0%,
          100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 0%;
          }
        }

        /* ---------- Image : wipe d'entrée + dérive lente en continu + voile lumineux ---------- */
        .sc-image-wrap {
          position: relative;
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          transition: clip-path 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sc-image-in {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .sc-image-drift {
          transform: scale(1.08);
        }
        .sc-image-drift-on {
          animation: sc-kenburns 16s ease-in-out infinite;
        }
        @keyframes sc-kenburns {
          0% {
            transform: scale(1.08) translate(0, 0);
          }
          50% {
            transform: scale(1.14) translate(-1.2%, -1%);
          }
          100% {
            transform: scale(1.08) translate(0, 0);
          }
        }

        .sc-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            transparent 40%,
            rgba(255, 255, 255, 0.22) 50%,
            transparent 60%
          );
          background-size: 250% 100%;
          background-position: 150% 0;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        .sc-sheen-on {
          animation: sc-sheen-sweep 7s ease-in-out 1s infinite;
        }
        @keyframes sc-sheen-sweep {
          0%,
          15% {
            background-position: 150% 0;
          }
          50% {
            background-position: -50% 0;
          }
          100% {
            background-position: -50% 0;
          }
        }

        /* ---------- Items de la checklist ---------- */
        .sc-item {
          opacity: 0;
          transform: translateX(28px) rotate(1.5deg);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sc-item-in {
          opacity: 1;
          transform: translateX(0) rotate(0deg);
        }

        /* Texte : petite apparition mot-clé, légère montée en douceur au moment où la ligne arrive */
        .sc-text {
          display: inline-block;
          opacity: 0;
        }
        .sc-item-in .sc-text {
          animation: sc-text-in 0.6s ease forwards;
        }
        @keyframes sc-text-in {
          from {
            opacity: 0;
            transform: translateY(4px);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Coche : dessin au trait puis respiration douce en continu */
        .sc-check-circle,
        .sc-check-tick {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
        }
        .sc-item-in .sc-check-circle {
          animation: sc-draw 0.5s ease forwards, sc-breathe 4s ease-in-out 1.2s infinite;
        }
        .sc-item-in .sc-check-tick {
          stroke-dasharray: 14;
          stroke-dashoffset: 14;
          animation: sc-draw-tick 0.35s ease forwards;
          animation-delay: inherit;
        }

        @keyframes sc-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes sc-draw-tick {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes sc-breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.85;
          }
        }
        @keyframes sc-pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(244, 196, 48, 0.55);
          }
          100% {
            box-shadow: 0 0 0 14px rgba(244, 196, 48, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sc-mote,
          .sc-badge,
          .sc-title,
          .sc-title-accent-in,
          .sc-image-wrap,
          .sc-image-drift-on,
          .sc-sheen-on,
          .sc-item,
          .sc-text,
          .sc-check-circle,
          .sc-check-tick {
            transition: none !important;
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            clip-path: none !important;
            stroke-dashoffset: 0 !important;
            background-position: 0% 0% !important;
          }
        }
      `}</style>
    </section>
  );
}