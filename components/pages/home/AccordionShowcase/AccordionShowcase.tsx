// components/pages/home/AccordionShowcase/AccordionShowcase.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./AccordionShowcase.module.css";

const SLIDES = [
  {
    title: "Industrie",
    text: "Des usines modernes aux chaînes de transformation, nous accompagnons les industriels dans la qualité et la traçabilité de leurs matières premières.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurant",
    text: "L'ambiance du restaurant rappelle davantage une maison chaleureuse qu'une simple salle à manger. Des produits frais, directement de la ferme à l'assiette.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agriculteur",
    text: "Un champ bien entretenu ressemble davantage à une œuvre d'art qu'à une simple parcelle. Nous valorisons le travail des producteurs locaux.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  },
];

const SWIPE_THRESHOLD = 50;

export function AccordionShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const touchStartX = useRef<number | null>(null);

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

  const goPrev = () => setActive((i) => Math.max(0, i - 1));
  const goNext = () => setActive((i) => Math.min(SLIDES.length - 1, i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;

    if (Math.abs(diff) < SWIPE_THRESHOLD) return;
    if (diff > 0) goNext();
    else goPrev();
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <h1>
          Comment <span>nourrissez vous le monde?</span>
        </h1>
      </div>

      <div className={styles.inner}>
        {/* Colonne gauche */}
        <div
          className={cn(styles.text, "transition-all duration-1000 ease-out")}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
          }}
        >
          <div>
            <div className={styles.counter}>
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span className={styles.sep}>
                /{String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>

            {/* Focus dynamique */}
            <div className="min-h-[90px] pl-4 py-2 mb-6 bg-amber-50/50 rounded-r-xl transition-all duration-500">
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
              Cliquez sur votre profil
            </a>
          </div>

          <div className={styles.nav}>
            <button
              className={cn(styles.arrow, "transition-transform active:scale-90")}
              disabled={active === 0}
              aria-label="Précédent"
              onClick={goPrev}
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              className={cn(styles.arrow, "transition-transform active:scale-90")}
              disabled={active === SLIDES.length - 1}
              aria-label="Suivant"
              onClick={goNext}
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>

        {/* Colonne droite — cartes */}
        <div
          className={cn(
            styles.images,
            "transition-all duration-1000 ease-out delay-300"
          )}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
                <h4 className="transition-transform duration-300">
                  {slide.title}
                </h4>
                <span
                  className={cn(
                    styles.btn,
                    "transition-all duration-300 hover:scale-105"
                  )}
                >
                  En savoir plus
                </span>
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