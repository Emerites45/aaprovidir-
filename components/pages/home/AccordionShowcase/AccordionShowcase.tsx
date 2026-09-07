"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./AccordionShowcase.module.css";

const SLIDES = [
  {
    title: "Pineapple Smoothie",
    text: "For a natural energy drink or a filling breakfast.",
    image:
      "https://cdn.shortpixel.ai/spai2/w_1920+q_glossy+ret_img+to_webp/unlimited-elements.com/wp-content/uploads/2021/06/top-view-tropical-fruits-768x768.jpg",
  },
  {
    title: "Restaurant",
    text: "L'ambiance du restaurant rappelle davantage une maison chaleureuse qu'une simple salle à manger.",
    image: "/images/restaurant.jpg",
  },
  {
    title: "Agriculteur",
    text: "Un champ bien entretenu ressemble davantage à une œuvre d'art qu'à une simple parcelle.",
    image: "/images/agriculteur.jpg",
  },
];

export function AccordionShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>
          Comment <span>nourrissez vous le monde?</span>
        </h1>
      </div>

      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.counter}>
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className={styles.sep}>/{String(SLIDES.length).padStart(2, "0")}</span>
          </div>

          <div className={styles.slideBox}>
            <h3>{SLIDES[active].title}</h3>
            <p>{SLIDES[active].text}</p>
          </div>

          <div className={styles.nav}>
            <button
              className={styles.arrow}
              disabled={active === 0}
              aria-label="Précédent"
              onClick={() => setActive((i) => Math.max(0, i - 1))}
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              className={styles.arrow}
              disabled={active === SLIDES.length - 1}
              aria-label="Suivant"
              onClick={() => setActive((i) => Math.min(SLIDES.length - 1, i + 1))}
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>

        <div className={styles.images}>
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={cn(styles.item, i === active && styles.itemActive)}
              style={{ backgroundImage: `url('${slide.image}')` }}
              onClick={() => setActive(i)}
              aria-label={slide.title}
            >
              <div className={styles.overlay}>
                <h4>{slide.title}</h4>
                <span className={styles.btn}>Savoir Plus</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
