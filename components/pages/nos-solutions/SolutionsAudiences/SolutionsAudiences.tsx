"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./SolutionsAudiences.module.css";

const SLIDES = [
  {
    title: "Producteurs & Coopératives",
    text: "Nous vous garantissons un accompagnement sur-mesure pour sécuriser vos récoltes et booster vos revenus dès la première campagne.",
    image: "/images/solution/images2.jpeg",
  },
  {
    title: "Centrales d’achat, Hôtels & Restaurants",
    text: "Bénéficiez d'un approvisionnement direct en produits ultra-frais, rigoureusement tracés et livrés en un temps record.",
    image: "/images/restaurant.jpg",
  },
  {
    title: "Industriels & Exportateurs",
    text: "Optimisez vos volumes avec des volumes certifiés aux normes internationales et des partenariats commerciaux pérennes.",
    image: "/images/agriculteur.jpg",
  },
];

export function SolutionsAudiences() {
  const [active, setActive] = useState(0);
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
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        
        {/* Colonne gauche */}
        <div 
          className={cn(styles.text, "transition-all duration-1000 ease-out")}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)"
          }}
        >
          <div>
            {/* Titre principal avec effet d'apparition textuelle */}
            <h4 className="mt-10 mb-6 font-title text-[34px] font-bold leading-tight text-[#0b438c] animate-fade-in">
              Vous nourrissez le monde, et nous sommes là pour vous !
            </h4>
            
            {/* Texte introductif général */}
            <p className="mb-6 text-justify font-body text-[17px] leading-relaxed text-[#3a3a3a] block">
              Nous aidons 10 000 producteurs à capter 50 % de la valeur de leurs récoltes,
              et nous permettons à 98 % de nos acheteurs de recevoir des produits tracés, certifiés et livrés en 
              moins de 48 heures. Ce n'est pas un slogan. C'est notre contrat.
            </p>

            {/* Texte dynamique lié à la slide active avec transition fluide */}
            <div className="min-h-[70px] border-l-4 border-[#ffca3c] pl-4 py-1 mb-8 bg-amber-50/50 rounded-r-xl transition-all duration-500">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#0b438c] mb-1">
                Focus : {SLIDES[active].title}
              </span>
              <p 
                key={active} 
                className="text-sm font-medium text-[#2c2c2c] animate-slide-up"
              >
                {SLIDES[active].text}
              </p>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="mt-2 inline-block rounded-full bg-[#ffca3c] px-6 py-4 font-body text-sm font-bold text-white text-center no-underline shadow-[0_4px_14px_rgba(255,202,60,0.45)] transition-all duration-300 hover:bg-[#f0b92c] hover:scale-105 active:scale-95"
            >
              Je découvre la solution adaptée à mon métier
            </a>
          </div>

          <div className={styles.nav}>
            <button
              className={cn(styles.arrow, "transition-transform active:scale-90")}
              disabled={active === 0}
              aria-label="Précédent"
              onClick={() => setActive((i) => Math.max(0, i - 1))}
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              className={cn(styles.arrow, "transition-transform active:scale-90")}
              disabled={active === SLIDES.length - 1}
              aria-label="Suivant"
              onClick={() => setActive((i) => Math.min(SLIDES.length - 1, i + 1))}
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>

        {/* Colonne droite (Cartes interactives) */}
        <div 
          className={cn(styles.images, "transition-all duration-1000 ease-out delay-300")}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)"
          }}
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={cn(
                styles.item, 
                i === active && styles.itemActive,
                "transition-all duration-700 ease-out hover:scale-[1.02]"
              )}
              style={{ backgroundImage: `url('${slide.image}')` }}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-label={slide.title}
            >
              <div className={cn(styles.overlay, "transition-all duration-500")}>
                <h4 className="transition-transform duration-300">{slide.title}</h4>
                <span className={cn(styles.btn, "transition-all duration-300 hover:scale-105")}>Savoir Plus</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}