// components/pages/home/HeroSupply/HeroSupply.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Badge, Card, IconButton } from "@/components/ui";

export interface HeroSupplyCard {
  title: ReactNode;
  tag: string;
  image: string;
}

const CARDS: HeroSupplyCard[] = [
  {
    title: (
      <>
        Cacao
        <br />
        <span>durable</span>
      </>
    ),
    tag: "Fair Fermented",
    image: "/images/cacao.jpg",
  },
  {
    title: (
      <>
        Vivres
        <br />
        <span>sans formol</span>
      </>
    ),
    tag: "Tests à l'appui",
    image: "/images/plantain.jpg",
  },
];

const CATEGORIES = [
  {
    label: "Céréales",
    strong: "& graines",
    image: "/images/Corn.png",
    offset: "translate-y-0",
    pivot: "rotate-[-4deg]",
  },
  {
    label: "Noix de palmes ",
    strong: "- huiles rouges ",
    image: "/images/Palm oil.png",
    offset: "translate-y-3",
    pivot: "rotate-[3deg]",
  },
  {
    label: "Produits",
    strong: "forestiers Non ligneux",
    image: "/images/Shee butter.png",
    offset: "-translate-y-2",
    pivot: "rotate-[-2deg]",
  },
];

export function HeroSupply() {
  return (
    <section className="bg-gradient-to-b from-[#bce1ff] via-[#e9f0f6] to-[#fafbf3] px-[5%] pt-[120px]">
      <div className="mx-auto max-w-[1400px] pb-10">
        <h1 className="mb-8 max-w-[800px] text-[2.4rem] font-bold leading-tight text-[#595959]">
          Un approvisionnement{" "}
          <span className="text-[#07796b]">fiable et vertueux</span>
          <br />
          pour vous qui nourrissez le monde.
        </h1>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <Card
              key={card.tag}
              image={card.image}
              imagePriority={i === 0}
              shine
              overlay
              className="h-[260px] p-6"
            >
              <h3 className="font-title text-[1.7rem] font-bold leading-tight">
                {card.title}
              </h3>
              <div className="flex items-center justify-between">
                <Badge variant="glass">{card.tag}</Badge>
                <IconButton
                  variant="light"
                  aria-label={`En savoir plus sur ${card.tag}`}
                  icon={<i className="bi bi-arrow-up-right" />}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* ===== CATEGORIES — décalage + pivot + ombre ===== */}
        <div className="flex flex-wrap items-end justify-between gap-4 rounded-[20px] bg-white p-4 md:p-5">
          {CATEGORIES.map((cat, index) => (
            <Link
              key={cat.label}
              href="#"
              className={`
                group relative flex items-center gap-3
                rounded-2xl px-5 py-4 no-underline
                transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                ${cat.offset}
                hover:translate-y-0 hover:scale-[1.03]
                hover:bg-[#f3f8f4]
              `}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <span className="text-sm text-[color:var(--color-dark-gray)] transition-colors duration-300 group-hover:text-[#07796b]">
                {cat.label}{" "}
                <strong className="font-bold text-[color:var(--color-green-guardian)]">
                  {cat.strong}
                </strong>
              </span>

              {/* Image avec pivot + ombre */}
              <div className="relative flex items-end justify-center">
                {/* Ombre au sol */}
                <div
                  className="
                    absolute -bottom-1 left-1/2 h-2 w-8 -translate-x-1/2
                    rounded-full bg-black/20 blur-[3px]
                    transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                    group-hover:w-10 group-hover:bg-black/25 group-hover:blur-[4px]
                  "
                />

                <img
                  src={cat.image}
                  alt={`${cat.label} ${cat.strong}`}
                  className={`
                    relative z-10 h-[45px] w-[45px] object-contain
                    transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                    ${cat.pivot}
                    group-hover:translate-y-[-6px] group-hover:rotate-0 group-hover:scale-110
                    drop-shadow-[0_6px_10px_rgba(0,0,0,0.15)]
                    group-hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.2)]
                  `}
                />
              </div>
            </Link>
          ))}

          {/* Catalogue */}
          <Link
            href="#"
            className="
              group flex items-center gap-4 rounded-2xl
              bg-[color:var(--color-off-white)] px-5 py-3 no-underline
              shadow-[0_4px_10px_rgba(0,0,0,0.05)]
              transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
              hover:-translate-y-1 hover:scale-[1.03]
              hover:shadow-[0_12px_28px_rgba(11,67,140,0.12)]
            "
          >
            <div className="relative flex items-end justify-center">
              <div className="absolute -bottom-1 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-black/15 blur-[3px] transition-all duration-500 group-hover:w-10 group-hover:blur-[4px]" />
              <img
                src="/images/Sample.png"
                alt="Catalogue"
                className="
                  relative z-10 h-[45px] w-[45px] rounded-[10px] object-cover
                  transition-all duration-500
                  rotate-[-3deg]
                  group-hover:translate-y-[-4px] group-hover:rotate-0 group-hover:scale-110
                  drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)]
                  group-hover:drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]
                "
              />
            </div>
            <span className="text-sm text-[color:var(--color-dark-gray)]">
              Parcourez notre{" "}
              <strong className="block font-bold text-[color:var(--color-cyan-innovation)]">
                Catalogue de produits
              </strong>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}