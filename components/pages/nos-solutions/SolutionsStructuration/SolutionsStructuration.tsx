"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BULLETS = [
  "Nous vous aidons à créer ou à renforcer votre coopérative. Vous restez propriétaires.",
  "Nous devenons votre partenaire commercial exclusif, avec un contrat clair.",
  "Nous vous proposons un prix plancher, et une ristourne sur les bénéfices en fin de campagne.",
  "Vous ne subissez plus les prix spots des coxeurs.",
];

const STEPS = [
  { week: "1 week", label: "Presentation", position: "left-2 top-10" },
  { week: "5 weeks", label: "UI/UX Design", position: "right-2 top-10" },
  { week: "2 weeks", label: "Research", position: "-left-4 top-1/2 -translate-y-1/2" },
  { week: "3 weeks", label: "Testing", position: "left-1/3 -bottom-4" },
];

function LeafIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="#3f5e00">
      <path d="M20 2c10 4 16 12 16 20-6 2-14 0-18-6-4 6-4 14 2 20-8-2-16-10-16-20C4 8 12 2 20 2z" />
    </svg>
  );
}

export function SolutionsStructuration() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f3ef] px-4 py-16 md:px-8 lg:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* Colonne gauche */}
        <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <span className="inline-block rounded-full bg-[#f4c430] px-4 py-1.5 text-sm font-bold text-white shadow-sm animate-pulse">
            Solution 2
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#1f1f1f] md:text-4xl">
            Une structuration
            <br />
            <span className="text-[#5f7600] inline-block">sans vous déposséder</span>
          </h2>

          <ul className="mt-8 space-y-6">
            {BULLETS.map((text, i) => (
              <li 
                key={i} 
                className="group flex items-start gap-4 p-3 -ml-3 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-sm"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${0.2 + i * 0.15}s`
                }}
              >
                <LeafIcon />
                <p className="pt-2 text-lg leading-snug text-[#1f1f1f]">{text}</p>
              </li>
            ))}
          </ul>

          <div 
            className="mt-10 flex flex-wrap gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.8s ease-out 0.8s"
            }}
          >
            <Link
              href="#"
              className="rounded-full bg-[#5f7600] px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:bg-[#4c5e00] hover:scale-105 active:scale-95"
            >
              Commencer
            </Link>
            <Link
              href="#"
              className="rounded-full bg-[#3f5e00] px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:bg-[#324b00] hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              <span>Discutons</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">--)</span>
            </Link>
          </div>
        </div>

        {/* Colonne droite — diagramme circulaire animé */}
        <div className={`relative mx-auto h-[380px] w-[380px] transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          
          {/* Feuilles décoratives en arrière-plan avec effet de respiration */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -inset-6 -z-10 h-[430px] w-[430px] animate-pulse duration-1000"
            fill="none"
          >
            <path
              d="M100 10c40 20 60 50 55 90-35 10-70-5-85-35-15 30-10 65 20 90-45-5-80-40-85-85C0 30 50 0 100 10z"
              fill="#2f5d1f"
              opacity="0.9"
            />
            <path
              d="M160 60c15 25 15 55-5 80-20-5-35-25-35-50s20-40 40-30z"
              fill="#4a8a2a"
              opacity="0.85"
            />
          </svg>

          {/* Cercle central */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-[#e8e6df] shadow-lg flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#c9c6bc"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#5f7600"
                strokeWidth="3"
                strokeDasharray="290"
                strokeDashoffset={isVisible ? "80" : "290"}
                strokeLinecap="round"
                className="transition-all duration-1500 ease-out delay-500"
              />
            </svg>
            
            {/* Anneau interne tournant subtilement */}
            <div className="absolute inset-4 rounded-full border border-dashed border-[#5f7600]/20 animate-spin duration-[20s]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-extrabold text-[#1f1f1f]">11 weeks</span>
              <span className="text-xs text-[#6b6b6b]">Total</span>
            </div>
          </div>

          {/* Badges flottants avec apparition échelonnée */}
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`absolute ${step.position} flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-2 shadow-md transition-all duration-500 hover:scale-105 hover:bg-white`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(15px) scale(0.9)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.2}s`,
                animation: isVisible ? `sr-float-badge ${5 + i}s ease-in-out infinite ${i * 0.5}s` : "none"
              }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4e04d] text-xs font-bold text-[#1f1f1f]">
                ↗
              </span>
              <div className="leading-tight pr-1">
                <p className="text-[11px] text-[#6b6b6b]">{step.week}</p>
                <p className="text-xs font-semibold text-[#1f1f1f]">{step.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes sr-float-badge {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}