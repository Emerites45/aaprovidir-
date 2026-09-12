"use client";

import Image from "next/image";
import { ClipboardCheck, Timer, PiggyBank, ThumbsUp, Ruler } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ValueItem = {
  icon: LucideIcon;
  lineOne: string;
  lineTwo: string;
};

const VALUES: ValueItem[] = [
  { icon: ClipboardCheck, lineOne: "TOUJOURS", lineTwo: "DU CHOIX" },
  { icon: Timer, lineOne: "UN SERVICE", lineTwo: "RAPIDE" },
  { icon: PiggyBank, lineOne: "DES PRIX", lineTwo: "ATTRACTIFS" },
  { icon: ThumbsUp, lineOne: "UNE ÉQUIPE", lineTwo: "EFFICACE" },
  { icon: Ruler, lineOne: "SERVICES", lineTwo: "SUR-MESURE" },
];

const CERTIFICATION_ITEMS = [
  "Assurer la traçabilité des produits",
  "Appliquer les bonnes pratiques d'hygiène et la méthode HACCP",
  "Garantir les analyses phytosanitaires sur nos fruits et légumes",
  "Contrôler la conformité aux normes de commercialisation et d'étiquetage",
];

export function SolutionsNosValeurs() {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16 md:px-8 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Titre */}
        <h2 
          className="text-center text-3xl font-extrabold text-[#1a1a4b] md:text-4xl transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)"
          }}
        >
          NOS VALEURS
        </h2>

        {/* Icônes de valeurs */}
        <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-6">
          {VALUES.map(({ icon: Icon, lineOne, lineTwo }, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center gap-3 text-center cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.1}s`
              }}
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#1a1a4b] bg-white transition-all duration-300 group-hover:bg-[#1a1a4b] group-hover:scale-105 group-hover:shadow-lg">
                <Icon 
                  className="h-10 w-10 text-[#1a1a4b] transition-colors duration-300 group-hover:text-white" 
                  strokeWidth={1.75} 
                />
              </span>
              <p className="text-sm leading-tight text-[#1a1a4b]">
                {lineOne}
                <br />
                <span className="font-bold">{lineTwo}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bloc certification */}
        <div 
          className="mt-16 grid grid-cols-1 overflow-hidden rounded-3xl bg-[#f9a825] shadow-xl md:grid-cols-2 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
            transitionDelay: "0.4s"
          }}
        >
          {/* Image */}
          <div className="relative h-72 w-full md:h-auto md:min-h-[420px] overflow-hidden group">
            <Image
              src="/images/solution/image.jpeg"
              alt="Champ de cultures sous un ciel bleu"
              fill
              className="object-cover p-10 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Texte du cadre jaune animé en cascade séquentielle */}
          <div className="flex flex-col justify-center gap-4 px-8 py-10 md:px-10 lg:py-6">
            <h3 
              className="text-2xl font-extrabold leading-tight text-[#1a1a4b] md:text-3xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(25px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
              }}
            >
              UNE ENTREPRISE CERTIFIÉE FEL PARTENARIAT ET FEL EXCELLENCE
            </h3>

            <p 
              className="text-sm text-[#1a1a4b] md:text-base"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.75s"
              }}
            >
              Desmettre est certifiée Fel Partenariat et Fel Excellence, un
              gage de confiance quant à la qualité sanitaire de ses produits.
            </p>

            <p 
              className="text-sm font-semibold text-[#1a1a4b] md:text-base"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.9s"
              }}
            >
              La certification porte sur les périmètres suivants :
            </p>

            <ul className="list-disc space-y-1.5 pl-5 text-sm text-[#1a1a4b] md:text-base">
              {CERTIFICATION_ITEMS.map((item, i) => (
                <li 
                  key={i}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${1.05 + i * 0.12}s`
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}