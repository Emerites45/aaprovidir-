"use client";

import { useEffect, useRef } from "react";
import styles from "./ProductsCarousel.module.css";

const PRODUCTS = [
  { image: "mais.png", label: "Maïs" },
  { image: "ananas.png", label: "Ananas" },
  { image: "cacao.png", label: "Cacao" },
  { image: "bananas.png", label: "Tubercules" },
  { image: "pommes.png", label: "Pommes de Verger" },
  { image: "ble.png", label: "Blé d'Hiver" },
];

export function ProductsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frameId: number;
    const speed = 1.2;

    function step() {
      if (!track) return;
      positionRef.current += speed;
      if (positionRef.current >= track.scrollWidth / 2) {
        positionRef.current = 0;
      }
      track.style.transform = `translateX(-${positionRef.current}px)`;
      frameId = requestAnimationFrame(step);
    }

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const loopProducts = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className={styles.section}>
      <h2>Explorez nos produits agricoles</h2>
      <div className={styles.container}>
        <div ref={trackRef} className={styles.track}>
          {loopProducts.map((product, i) => (
            <div key={i} className={styles.card}>
              <img src={`/images/${product.image}`} alt={product.label} />
              <h3>{product.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
