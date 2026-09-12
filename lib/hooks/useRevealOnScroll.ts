"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reproduit l'effet .reveal-item / .reveal-item.active du script.js original
 * (apparition au scroll), via IntersectionObserver plutôt qu'un listener
 * "scroll" global recalculé à chaque frame — même résultat visuel,
 * bien plus performant.
 */
export function useRevealOnScroll<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
