"use client";

import { useEffect, useRef, useState } from "react";

const TARGET_PERCENT = 50;

const POINTS: [number, number][] = [
  [30, 150],
  [130, 110],
  [200, 120],
  [260, 60],
  [300, 45],
  [370, 20],
];

const VIEWBOX_WIDTH = 400;
const VIEWBOX_HEIGHT = 200;

export function SolutionsPourcentage() {
  const [percent, setPercent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const polylineRef = useRef<SVGPolylineElement>(null);

  // Déclenche l'animation quand la section entre dans le viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compte de 0 à 50
  useEffect(() => {
    if (!animate) return;
    const duration = 1500;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setPercent(Math.round(progress * TARGET_PERCENT));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  // Cercle de progression : rayon réduit + viewBox légèrement plus large
  // pour que le trait (strokeWidth) ne soit jamais rogné sur les bords.
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  const lineLength = polylineRef.current?.getTotalLength?.() ?? 500;

  return (
    <div
      ref={ref}
      className={`relative w-full bg-white overflow-hidden px-6 py-14 lg:px-16 lg:py-20 transition-opacity duration-700 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Halos lumineux d'ambiance en arrière-plan */}
      <div className="absolute top-0 right-1/4 h-48 w-48 rounded-full bg-[#d9f0a3]/30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[#5f7600]/10 blur-2xl pointer-events-none" />

      {/* Ligne de tendance animée : dans le flux normal, au-dessus du cercle */}
      <div className="relative z-0 h-48 md:h-64 lg:h-72 w-full pointer-events-none">
        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineSweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d9f0a3" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#5f7600" stopOpacity="1" />
              <stop offset="100%" stopColor="#d9f0a3" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <polyline
            ref={polylineRef}
            points={POINTS.map((p) => p.join(",")).join(" ")}
            fill="none"
            stroke="#d9f0a3"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{
              strokeDasharray: lineLength,
              strokeDashoffset: animate ? 0 : lineLength,
              transition: "stroke-dashoffset 1.6s ease-out",
            }}
          />

          {animate && (
            <polyline
              points={POINTS.map((p) => p.join(",")).join(" ")}
              fill="none"
              stroke="url(#lineSweep)"
              strokeWidth="3.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="sr-line-sweep"
              style={{ strokeDasharray: `${lineLength / 3} ${lineLength}` }}
            />
          )}
        </svg>

        {/* Points rendus en HTML (et non dans le SVG étiré) afin qu'ils
            restent toujours des cercles parfaits, quel que soit le ratio
            largeur/hauteur du conteneur. */}
        {POINTS.map(([px, py], i) => (
          <div
            key={i}
            className="absolute h-3 w-3 rounded-full bg-[#5f7600]"
            style={{
              left: `${(px / VIEWBOX_WIDTH) * 100}%`,
              top: `${(py / VIEWBOX_HEIGHT) * 100}%`,
              transform: `translate(-50%, -50%) scale(${animate ? 1 : 0})`,
              transition: `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                0.4 + i * 0.15
              }s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal (Cercle + Textes), placé sous le graphe, sans chevauchement */}
      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center mt-4 md:mt-6">
        {/* Cercle de progression */}
        <div className="relative h-40 w-40 md:h-44 md:w-44 mb-8">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="9"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#5f7600"
              strokeWidth="9"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#1f1f1f]">
              {percent}
              <span className="text-xl md:text-2xl align-top text-[#5f7600]">
                %
              </span>
            </span>
          </div>
        </div>

        {/* Textes */}
        <div className="space-y-4 text-center">
          <p className="text-2xl font-extrabold leading-snug text-[#1f1f1f] md:text-3xl">
            Réduisez vos pertes post-récolte de 40 % à moins de 5 %.
          </p>
          <p className="text-2xl font-extrabold leading-snug text-[#5f7600] md:text-3xl">
            Demandez notre accompagnement.
          </p>
        </div>
      </div>

      <style jsx>{`
        .sr-line-sweep {
          animation: sr-sweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.6s;
        }
        @keyframes sr-sweep {
          0% {
            stroke-dashoffset: 500;
          }
          100% {
            stroke-dashoffset: -500;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sr-line-sweep {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}