"use client";

import { useEffect, useRef, useState } from "react";

type CardItem = {
  id: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  offset: number;
};

const CARDS: CardItem[] = [
  {
    id: "vision",
    label: "Notre Vision",
    description:
      "Faire de chaque bassin agricole un pôle de prospérité sobre, où le sol, la donnée et le travail digne transforment les récoltes en richesses durables.",
    image: "/images/images2.jpeg",
    alt: "Productrice récoltant du manioc dans son champ",
    offset: 0,
  },
  {
    id: "mission",
    label: "Notre Mission",
    description:
      "Structurer les producteurs en coopératives autonomes, financer les mini-unités de transformation et garantir une traçabilité totale, de la terre à l'assiette.",
    image: "/images/images5.jpeg",
    alt: "Chef consultant une tablette en cuisine",
    offset: 46,
  },
  {
    id: "valeurs",
    label: "Nos Valeurs",
    description:
      "Bâtir un écosystème où chaque maillon gagne en dignité et en valeur, et où chaque échange repose sur une confiance adossée à la donnée.",
    image: "/images/restaurant.jpg",
    alt: "Technicien contrôlant la qualité des grains",
    offset: 92,
  },
  {
    id: "engagement",
    label: "Notre Engagement",
    description:
      "Des standards de qualité fiables et éthiques, des délais tenus, et une marge que le producteur comprend et négocie — jamais subie.",
    image: "/images/images6.jpeg",
    alt: "Poignée de main dans un champ au coucher du soleil",
    offset: 138,
  },
];

/** Courbe ease-out-expo : arrivée très progressive, masque les micro-saccades. */
const EASE = "cubic-bezier(0.16,1,0.3,1)";
const DURATION = 1250;

export function RacinesAiles() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [dims, setDims] = useState({ card: 260, gap: 24, imgH: 420 });

  useEffect(() => {
    const measure = () => {
      const viewport = trackRef.current?.parentElement;
      if (!viewport) return;

      const h = window.innerHeight;
      const w = window.innerWidth;

      const imgH = Math.max(320, Math.min(h * 0.62, 580));
      const card = Math.max(290, Math.min(w * 0.235, 400));
      const gap = w < 1024 ? 18 : 24;

      setDims({ card, gap, imgH });

      const visible = Math.max(1, Math.floor(viewport.offsetWidth / (card + gap)));
      const max = Math.max(0, CARDS.length - visible);
      setMaxIndex(max);
      setIndex((i) => Math.min(i, max));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    };
  }, []);

  const enter = (id: string) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setHovered(id), 110);
  };

  const leave = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setHovered(null), 90);
  };

  return (
    <section
      className="relative my-[14px] overflow-hidden rounded-[22px] bg-[#f2f2ee] bg-cover bg-center bg-no-repeat py-12 lg:py-20"
      style={{ backgroundImage: "url('/images/background-racines.png')" }}
    >
      <div className="flex flex-col gap-10 px-[5%] lg:flex-row lg:items-start lg:gap-12 lg:pl-[5%] lg:pr-0">
        <div className="shrink-0 lg:w-[250px] lg:pt-4">
          <h2 className="mb-5 font-title text-[clamp(26px,3.4vh,34px)] font-bold leading-tight text-[#0b438c] lg:mb-7">
            Nos racines
            <br />
            et nos ailes
          </h2>

          <p className="mb-7 font-body text-[clamp(14px,1.9vh,17px)] leading-relaxed text-[#3a3a3a] lg:mb-9">
            Pourquoi nous existons, comment nous agissons, et ce en quoi nous
            croyons.
          </p>

          <a
            href="#"
            className="inline-block rounded-full bg-[#ffca3c] px-10 py-3 font-body text-[clamp(15px,1.9vh,18px)] font-bold text-white no-underline shadow-[0_4px_14px_rgba(255,202,60,0.45)] transition hover:bg-[#f0b92c] lg:px-12 lg:py-3.5"
          >
            Voir plus
          </a>
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-start will-change-transform"
              style={{
                transition: `transform ${DURATION}ms ${EASE}`,
                transform: hovered
                  ? "translateX(0)"
                  : `translateX(-${index * (dims.card + dims.gap)}px)`,
              }}
              onMouseLeave={leave}
            >
              {CARDS.map((card) => {
                const isHovered = hovered === card.id;
                const isDimmed = hovered !== null && !isHovered;

                return (
                  <article
                    key={card.id}
                    onMouseEnter={() => enter(card.id)}
                    className="shrink-0 overflow-hidden rounded-[12px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] will-change-[width,margin,opacity]"
                    style={{
                      transition: `width ${DURATION}ms ${EASE}, margin-right ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}`,
                      width: isHovered ? "100%" : isDimmed ? 0 : dims.card,
                      marginRight: isDimmed ? 0 : dims.gap,
                      opacity: isDimmed ? 0 : 1,
                    }}
                  >
                    <div
                      className="relative overflow-hidden will-change-[height]"
                      style={{
                        transition: `height ${DURATION}ms ${EASE}`,
                        height: isHovered ? dims.imgH : dims.imgH + card.offset,
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-full w-full object-cover"
                      />

                      <div
                        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-6"
                        style={{
                          transition: `opacity ${DURATION}ms ${EASE}`,
                          opacity: isHovered ? 1 : 0,
                        }}
                      >
                        <p className="max-w-[640px] font-body text-[clamp(13px,1.7vh,16px)] leading-relaxed text-white">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-[66px] items-center gap-3 px-4">
                      <svg width="26" height="18" viewBox="0 0 30 20" aria-hidden="true">
                        <path d="M 2,3 L 22,10 L 2,17 L 9,10 Z" fill="#d9553f" />
                      </svg>
                      <h3 className="whitespace-nowrap font-title text-[clamp(15px,2.1vh,20px)] font-bold text-[#1a1a1a]">
                        {card.label}
                      </h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="transition-opacity duration-300"
            style={{
              opacity: hovered ? 0 : 1,
              pointerEvents: hovered ? "none" : "auto",
            }}
          >
            <Arrow
              side="left"
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
            />
            <Arrow
              side="right"
              disabled={index >= maxIndex}
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({
  side,
  disabled,
  onClick,
}: {
  side: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Précédent" : "Suivant"}
      className={`absolute top-[42%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-[#d9553f]/50 bg-white/95 text-[#d9553f] shadow-md transition hover:bg-[#d9553f] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/95 disabled:hover:text-[#d9553f] ${
        side === "left" ? "left-[-18px]" : "right-4"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={side === "left" ? "M 15,4 L 7,12 L 15,20" : "M 9,4 L 17,12 L 9,20"}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}