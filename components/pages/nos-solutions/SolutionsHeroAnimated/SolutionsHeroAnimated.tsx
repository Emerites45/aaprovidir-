"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./SolutionsHeroAnimated.module.css";

const CURVE_DOTS = [
  { cx: 350, cy: 395, delay: 1.3 },
  { cx: 575, cy: 362, delay: 1.7 },
  { cx: 805, cy: 213, delay: 2.1 },
  { cx: 1030, cy: 178, delay: 2.5 },
];

export function SolutionsHeroAnimated() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-zinc-950"
    >
      {/* Fond : le champ */}
      <Image
        src="/images/solution/paysage.jpeg"
        alt="Champ de maïs"
        fill
        priority
        className="object-cover object-bottom"
      />

      {/* Overlay lumineux d'ambiance (Sunflare) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-5" />
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#eaf98a]/15 blur-[100px] rounded-full pointer-events-none z-5 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} />

      {/* Titre avec effet lumineux */}
      <div className="absolute inset-x-0 top-8 z-20 px-4 text-center md:top-10">
        <h1 className={`mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-[#eaf98a] drop-shadow-lg md:text-5xl ${styles.titleShimmer} ${isVisible ? styles.titleVisible : "opacity-0 translate-y-[-10px]"}`}>
          Doublez vos revenus agricoles !
        </h1>
      </div>

      {/* Particules / Spores flottantes dans l'air */}
      <div className="absolute inset-0 z-12 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 bg-[#eaf98a]/60 rounded-full blur-[0.5px] ${styles.floatingParticle}`}
            style={{
              left: `${15 + i * 14}%`,
              bottom: `${10 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Courbe de croissance (SVG en overlay) */}
      <svg
        viewBox="0 0 1160 690"
        className="absolute inset-0 z-8 h-full w-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M100,460 C250,440 300,400 350,395 S500,370 575,362 C650,350 700,260 805,213 S950,185 1030,178"
          fill="none"
          stroke="#eaf98a"
          strokeWidth="4.5"
          strokeLinecap="round"
          pathLength={100}
          className={`${styles.curvePath} ${isVisible ? styles.curvePathVisible : ""} ${styles.curveGlow}`}
        />
        {CURVE_DOTS.map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="9"
            fill="#eaf98a"
            className={`${styles.curveDot} ${isVisible ? styles.curveDotVisible : ""}`}
            style={{ transitionDelay: `${dot.delay}s` }}
          />
        ))}
      </svg>

      {/* Le maïs — part des mains, monte se placer sous le titre, puis flotte */}
      <div
        className={`absolute mt-9 inset-x-0 z-30 flex justify-center ${styles.corn} ${
          isVisible ? styles.cornVisible : ""
        }`}
      >
        <div className={isVisible ? styles.cornFloating : ""}>
          <Image
            src="/images/solution/mais.png"
            alt="Épis de maïs"
            width={280}
            height={280}
            className="h-auto w-[140px] object-contain md:w-[250px] drop-shadow-xl"
          />
        </div>
      </div>

     {/* L'homme — posé sur le champ, apparaît en fondu puis respire légèrement */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 flex justify-center ${styles.man} ${
          isVisible ? styles.manVisible : ""
        }`}
      >
        <div className={isVisible ? styles.manFloating : ""}>
          <Image
            src="/images/solution/homme.png"
            alt="Agriculteur les bras levés"
            width={420}
            height={600}
            quality={90}
            className="h-auto w-[320px] object-contain md:w-[420px] drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}