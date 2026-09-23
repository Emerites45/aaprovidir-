"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "bottom" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  /** Décalage avant le départ, en ms — sert à échelonner plusieurs éléments. */
  delay?: number;
  /** D'où vient l'élément. "none" ne fait qu'un fondu. */
  from?: Direction;
  /** Distance parcourue, en px. */
  distance?: number;
  /** Classes appliquées au conteneur — indispensable pour un enfant de grille. */
  className?: string;
};

const EASE = "cubic-bezier(0.16,1,0.3,1)";
const DURATION = 900;

export function Reveal({
  children,
  delay = 0,
  from = "bottom",
  distance = 42,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respecte la préférence système : pas d'animation, contenu affiché.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offsets: Record<Direction, string> = {
    bottom: `translate3d(0, ${distance}px, 0)`,
    left: `translate3d(-${distance}px, 0, 0)`,
    right: `translate3d(${distance}px, 0, 0)`,
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : offsets[from],
        transition: `opacity ${DURATION}ms ${EASE} ${delay}ms, transform ${DURATION}ms ${EASE} ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}