"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./EcoPromise.module.css";

const IMAGES = ["images2.jpeg", "images3.png", "images7.avif", "images6.jpeg", "images5.jpeg"];
// Dupliqué pour un défilement infini fluide (même technique que l'original)
const LOOP_IMAGES = [...IMAGES, ...IMAGES];

export function EcoPromise() {
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>
          Nous croyons que le potentiel agricole de l&apos;Afrique est une promesse de{" "}
          <span className={styles.highlight}>prospérité</span> pour des millions de personnes.
        </h2>
        <p className={styles.question}>
          Quelle est la <em>promesse</em> la plus importante pour vous ?
        </p>
      </div>

      <div className={cn(styles.curve, styles.curveTop)}>
        <svg viewBox="0 0 2562 193">
          <path
            d="M2561.02192,0 L2561.02192,63.372778 C2263.14435,150.124684 1800.50653,193 1281,193 C761.492996,193 298.854808,150.124606 0.977273599,63.372597 L0.977273599,0 L2561.02192,0 Z"
            fill="#fafbf3"
          />
        </svg>
      </div>

      <div
        className={styles.carousel}
        aria-label="Galerie d'images agricoles"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={cn(styles.track, paused && styles.paused)}>
          {LOOP_IMAGES.map((img, i) => (
            <div key={i} className={styles.item} style={{ backgroundImage: `url('/images/${img}')` }} />
          ))}
        </div>
      </div>

      <div className={cn(styles.curve, styles.curveBottom)}>
        <svg viewBox="0 0 2562 173">
          <path
            d="M1281,0 C1800.50653,0 2263.14435,42.8753159 2561.02192,109.627222 L2561.02192,172.997222 L0.977273599,172.997222 L0.977273599,109.627403 C298.854808,42.8753936 761.492996,0 1281,0 Z"
            fill="#fafbf3"
          />
        </svg>
      </div>

      <div className={styles.footer}>
        <p className={styles.tagline}>Nous façonnons un écosystème de certitude</p>
        <p className={styles.final}>
          Où la <strong>dignité</strong> des producteurs et la <strong>sérénité</strong> des acheteurs sont les
          fondations d&apos;une <strong className={styles.highlight}>prospérité partagée</strong>.
        </p>
      </div>
    </section>
  );
}
