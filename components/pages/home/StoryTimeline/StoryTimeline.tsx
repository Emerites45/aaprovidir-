"use client";

import { useEffect, useRef } from "react";
import { useRevealOnScroll } from "@/lib/hooks/useRevealOnScroll";
import { cn } from "@/lib/utils";
import styles from "./StoryTimeline.module.css";

const TIMELINE = [
  { year: "2018", position: "top", left: 0, image: "photo-1500382017468-9049fed747ef", text: "L'idée de créer une solution agricole basée sur les données est née de notre propre expérience face aux défis climatiques." },
  { year: "2019", position: "bottom", left: 450, image: "photo-1586771107445-d3af0027fbe5", text: "Aprovidir voit le jour. Notre objectif : aider les agriculteurs avec des méthodes d'analyse de sol durables et de haute précision." },
  { year: "2020", position: "top", left: 900, image: "photo-1574943320219-553eb213f72d", text: "Connexion avec les plus grands laboratoires d'analyse pour s'entourer des meilleurs experts en nutrition végétale mondiale." },
  { year: "2021", position: "bottom", left: 1350, image: "photo-1492496913980-501348b61469", text: "Lancement de l'application mobile, permettant à chaque agriculteur d'avoir un laboratoire de pointe directement dans sa poche." },
];

function RevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal-item", isVisible && "active")}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/**
 * Reproduit le scroll horizontal piloté par le scroll vertical de la page
 * (sticky-container + translateX proportionnel à la progression du scroll).
 */
export function StoryTimeline() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollEnd = rect.height - window.innerHeight;
      let progress = -rect.top / scrollEnd;
      progress = Math.max(0, Math.min(1, progress));

      const maxScroll = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${progress * maxScroll}px)`;
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.sticky}>
        <div ref={trackRef} className={styles.track}>
          <div className={cn(styles.panel, styles.introPanel)}>
            <h2 className={styles.hugeTitle}>
              Notre
              <br />
              Histoire
            </h2>
            <RevealBlock>
              <div className={styles.founderCard}>
                <img
                  src="https://images.unsplash.com/photo-1560479518-9d73d6b7b250?q=80&w=300&auto=format&fit=crop"
                  alt="Fondateur"
                />
                <div className={styles.founderInfo}>
                  <strong>Jean Dupont</strong>
                  <span>Fondateur &amp; Agronome</span>
                </div>
              </div>
            </RevealBlock>
          </div>

          <div className={cn(styles.panel, styles.hookPanel)}>
            <h2>Aprovidir est la solution de précision que votre terre attendait.</h2>
            <img
              src="https://images.unsplash.com/photo-1592982537447-6f2da6a0c4f3?q=80&w=400&auto=format&fit=crop"
              alt="Nos solutions"
              className={styles.productShot}
            />
          </div>

          <div className={cn(styles.panel, styles.timelinePanel)}>
            <div className={styles.timelineLine} />
            {TIMELINE.map((node) => (
              <div
                key={node.year}
                className={cn(styles.node, node.position === "top" ? styles.top : styles.bottom)}
                style={{ left: node.left }}
              >
                <RevealBlock>
                  <div className={styles.year}>{node.year}</div>
                </RevealBlock>
                <RevealBlock delay={0.1}>
                  <div className={styles.nodeContent}>
                    <img
                      src={`https://images.unsplash.com/${node.image}?q=80&w=300&auto=format&fit=crop`}
                      alt={node.year}
                      className={styles.nodeImage}
                    />
                    <p>{node.text}</p>
                  </div>
                </RevealBlock>
              </div>
            ))}
          </div>

          <div className={styles.spacer} />
        </div>
      </div>
    </section>
  );
}
