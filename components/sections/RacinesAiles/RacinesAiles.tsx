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
    offset: 56,
  },
  {
    id: "valeurs",
    label: "Nos Valeurs",
    description:
      "Bâtir un écosystème où chaque maillon gagne en dignité et en valeur, et où chaque échange repose sur une confiance adossée à la donnée.",
    image: "/images/restaurant.jpg",
    alt: "Technicien contrôlant la qualité des grains",
    offset: 112,
  },
  {
    id: "engagement",
    label: "Notre Engagement",
    description:
      "Des standards de qualité fiables et éthiques, des délais tenus, et une marge que le producteur comprend et négocie — jamais subie.",
    image: "/images/images6.jpeg",
    alt: "Poignée de main dans un champ au coucher du soleil",
    offset: 160,
  },
];

const CARD_W = 340;
const GAP = 32;

export function RacinesAiles() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const measure = () => {
      const viewport = trackRef.current?.parentElement;
      if (!viewport) return;
      const visible = Math.max(1, Math.floor(viewport.offsetWidth / (CARD_W + GAP)));
      const max = Math.max(0, CARDS.length - visible);
      setMaxIndex(max);
      setIndex((i) => Math.min(i, max));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#f2f2ee] bg-cover bg-center bg-no-repeat py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/background-racines.png')" }}
    >
      <div className="flex flex-col gap-12 px-[5%] lg:flex-row lg:items-start lg:gap-14 lg:pl-[6%] lg:pr-0">
        <div className="shrink-0 lg:w-[280px] lg:pt-4">
          <h2 className="mb-8 font-title text-[34px] font-bold leading-tight text-[#0b438c]">
            Nos racines
            <br />
            et nos ailes
          </h2>

          <p className="mb-10 font-body text-[17px] leading-relaxed text-[#3a3a3a]">
            Pourquoi nous existons, comment nous agissons, et ce en quoi nous
            croyons.
          </p>

          <a
            href="#"
            className="inline-block rounded-full bg-[#ffca3c] px-14 py-4 font-body text-lg font-bold text-white no-underline shadow-[0_4px_14px_rgba(255,202,60,0.45)] transition hover:bg-[#f0b92c]"
          >
            Voir plus
          </a>
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: hovered
                  ? "translateX(0)"
                  : `translateX(-${index * (CARD_W + GAP)}px)`,
              }}
              onMouseLeave={() => setHovered(null)}
            >
              {CARDS.map((card) => {
                const isHovered = hovered === card.id;
                const isDimmed = hovered !== null && !isHovered;

                return (
                  <article
                    key={card.id}
                    onMouseEnter={() => setHovered(card.id)}
                    className="group shrink-0 overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: isHovered ? "100%" : isDimmed ? 0 : CARD_W,
                      marginRight: isDimmed ? 0 : GAP,
                      marginTop: isHovered ? 0 : card.offset,
                      opacity: isDimmed ? 0 : 1,
                      padding: isDimmed ? 0 : 12,
                    }}
                  >
                    <div className="relative h-[520px] overflow-hidden rounded-[16px]">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-full w-full object-cover"
                      />

                      <div
                        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-7 transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <p className="max-w-[640px] font-body text-[16px] leading-relaxed text-white">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 px-2 py-5">
                      <svg width="30" height="20" viewBox="0 0 30 20" aria-hidden="true">
                        <path d="M 2,3 L 22,10 L 2,17 L 9,10 Z" fill="#d9553f" />
                      </svg>
                      <h3 className="whitespace-nowrap font-title text-xl font-bold text-[#1a1a1a]">
                        {card.label}
                      </h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              hovered ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
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