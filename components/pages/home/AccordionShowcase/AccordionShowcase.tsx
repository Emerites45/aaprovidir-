// components/pages/home/AccordionShowcase/AccordionShowcase.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./AccordionShowcase.module.css";

const SLIDES = [
  {
    title: "Industrie",
    closedText:
      "Des usines modernes aux chaînes de transformation, nous accompagnons les industriels dans la qualité et la traçabilité.",
    text: "Des usines modernes aux chaînes de transformation, nous accompagnons les industriels dans la qualité et la traçabilité de leurs matières premières.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurant",
    closedText:
      "L'ambiance du restaurant rappelle une maison chaleureuse. Des produits frais, de la ferme à l'assiette.",
    text: "L'ambiance du restaurant rappelle davantage une maison chaleureuse qu'une simple salle à manger. Des produits frais, directement de la ferme à l'assiette.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agriculteur",
    closedText:
      "Un champ bien entretenu ressemble à une œuvre d'art. Nous valorisons le travail des producteurs locaux.",
    text: "Un champ bien entretenu ressemble davantage à une œuvre d'art qu'à une simple parcelle. Nous valorisons le travail des producteurs locaux.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d7fcb0b6c2?auto=format&fit=crop&w=1200&q=80",
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
        {/* Colonne texte */}
        <div className={styles.text}>
          <div className={styles.counter}>
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className={styles.sep}>
              /{String(SLIDES.length).padStart(2, "0")}
            </span>
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
              onClick={() =>
                setActive((i) => Math.min(SLIDES.length - 1, i + 1))
              }
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>

        {/* Cartes */}
        <div className={styles.images}>
          {SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className={cn(styles.item, i === active && styles.itemActive)}
              style={
                {
                  "--bg-image": `url('${slide.image}')`,
                } as React.CSSProperties
              }
              onMouseEnter={() => setActive(i)}
              role="button"
              tabIndex={0}
              aria-label={slide.title}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(i);
              }}
            >
              {/* Fond image (visible au hover) */}
              <div className={styles.bgImage} />

              {/* Texte horizontal — visible quand fermé */}
              <div className={styles.closedText}>
                <p>{slide.closedText}</p>
              </div>

              {/* Overlay — visible au hover */}
              <div className={styles.overlay}>
                <h4>{slide.title}</h4>
                <span className={styles.btn}>En savoir plus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}