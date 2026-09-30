// components/pages/home/ProductsCarousel/ProductsCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  id: number;
  label: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  video: string;
};

const items: CarouselItem[] = [
  {
    id: 1,
    label: "Cacao",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Cacao",
    tagline: "UNE CULTURE D’EXPORTATION, AU CŒUR DES TERRITOIRES",
    description:
      "Le cacao camerounais alimente une filière tournée vers les marchés internationaux. Aaprovidir rapproche le producteur de l’acheteur pour mieux valoriser chaque récolte.",
    video: "/videos/5-optimized.webm",
  },
  {
    id: 2,
    label: "Plantain",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Plantain",
    tagline: "UN PRODUIT DU QUOTIDIEN, UNE CHAÎNE À FAIRE CIRCULER",
    description:
      "Le plantain passe rapidement de la plantation au marché. Aaprovidir aide à mieux organiser la collecte et à réduire les pertes.",
    video: "/videos/1-optimized.webm",
  },
  {
    id: 3,
    label: "Maïs",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Maïs",
    tagline: "UNE CULTURE ESSENTIELLE, DES DÉBOUCHÉS À SÉCURISER",
    description:
      "Le maïs nourrit les familles et approvisionne de nombreuses activités. Aaprovidir aide les producteurs à mieux préparer leurs ventes grâce à une information plus claire sur les marchés.",
    video: "/videos/2-optimized.webm",
  },
  {
    id: 4,
    label: "Café",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Café",
    tagline: "UN SAVOIR-FAIRE LOCAL, UNE QUALITÉ À VALORISER",
    description:
      "Chaque terroir caféicole a ses particularités. Aaprovidir aide à suivre les récoltes et la qualité pour mieux relier les producteurs aux marchés.",
    video: "/videos/3-optimized.webm",
  },
  {
    id: 5,
    label: "Manioc",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Manioc",
    tagline: "UNE CULTURE ESSENTIELLE, UN AVENIR DURABLE",
    description:
      "Le manioc se transforme en farine, gari, bâton ou amidon. Aaprovidir donne de la visibilité sur les volumes à venir pour mieux relier l’offre aux besoins des transformateurs.",
    video: "/videos/4-optimized.webm",
  },
  {
    id: 6,
    label: "Huile de palme",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Huile de palme",
    tagline: "UNE RÉCOLTE QUI DEMANDE DU TEMPS ET DE LA COORDINATION",
    description:
      "Entre la plantation, la récolte et l’huilerie, le calendrier ne laisse pas beaucoup de place à l’improvisation. Aaprovidir aide les acteurs à mieux anticiper les volumes et à organiser le transport au bon moment.",
    video: "/videos/5-optimized.webm",
  },
  {
    id: 7,
    label: "Arachides",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Arachides",
    tagline: "UNE CULTURE VIVRIÈRE, UN MARCHÉ À MIEUX CONNECTER",
    description:
      "Dans le nord du Cameroun, l’arachide représente à la fois une source de revenus et un produit essentiel. Une meilleure visibilité sur les débouchés permet de préparer la vente plus sereinement et de limiter les pertes après récolte.",
    video: "/videos/1-optimized.webm",
  },
  {
    id: 8,
    label: "Njansang",
    eyebrow: "FILIÈRE AGRICOLE",
    title: "Njansang",
    tagline: "UN PRODUIT LOCAL, UNE TRAÇABILITÉ À CONSTRUIRE",
    description:
      "Le njansang est bien ancré dans la cuisine camerounaise et trouve aussi sa place sur les marchés extérieurs. Aaprovidir aide à mieux connaître l’origine, la disponibilité et la qualité des lots proposés aux acheteurs.",
    video: "/videos/2-optimized.webm",
  },
];

const CARDS_PER_SET = 8;

export function ProductsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".crops-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.05) {
            const video = entry.target.querySelector("video");
            if (video) (video as HTMLVideoElement).pause();
          }
        });
      },
      { threshold: [0, 0.05] }
    );

    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const video = card.querySelector("video") as HTMLVideoElement | null;
      if (!video) return;

      const handleEnter = () => {
        setIsPaused(true);
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      const handleLeave = () => {
        setIsPaused(false);
        video.pause();
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
      observer.observe(card);

      cleanups.push(() => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  // Set A + Set B (duplicate) pour la boucle seamless
  const duplicatedItems = [...items, ...items];

  return (
    <section
      className="crops-section relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#f5f3ef] py-8"
      aria-label="Nos filières"
    >
      <div className="crops-carousel overflow-hidden py-11">
        <div
          className="crops-track flex w-max"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedItems.map((item, index) => {
            const isDuplicate = index >= CARDS_PER_SET;

            return (
              <div
                key={`${item.id}-${index}`}
                className="crops-card group relative flex-shrink-0 overflow-hidden bg-white"
                aria-hidden={isDuplicate ? true : undefined}
              >
                {/* FACE — label centré */}
                <div className="absolute inset-0 z-[2] flex items-center justify-center p-[22px] text-center transition-opacity duration-300 group-hover:opacity-0">
                  <span className="text-[clamp(19px,1.6vw,23px)] font-semibold leading-[1.25] tracking-[-0.01em] text-[#14532f]">
                    {item.label}
                  </span>
                </div>

                {/* EXPAND — vidéo + texte */}
                <div className="absolute inset-0 z-[3] flex opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:opacity-100">
                  {/* Vidéo */}
                  <div className="crops-video relative overflow-hidden bg-[#dfe8e1]">
                    <video
                      muted
                      loop
                      playsInline
                      preload="none"
                      src={item.video}
                      className="block h-full w-full object-cover"
                    />
                  </div>

                  {/* Texte */}
                  <div className="crops-text relative flex flex-col items-start justify-center gap-2.5 overflow-hidden px-6 py-7">
                    <span className="relative -top-2.5 z-[2] mt-0.5 text-[10px] font-bold tracking-[0.14em] text-[#5f7667]">
                      {item.eyebrow}
                    </span>

                    <h3 className="relative -top-[18px] z-[2] pt-3.5 text-[clamp(22px,1.6vw,26px)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#14532f]">
                      {item.title}
                      <span className="mt-[11px] block h-0.5 w-[34px] rounded-full bg-[#1b7a4a]" />
                    </h3>

                    <p className="relative -top-[18px] z-[2] text-[10px] font-bold uppercase leading-[1.45] tracking-[0.05em] text-[#607866]">
                      {item.tagline}
                    </p>

                    <p className="relative -top-2 z-[2] text-[clamp(13px,0.85vw,14px)] font-normal leading-[1.58] text-[#3f4b44]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styles dédiés au carousel (marquee + dimensions) */}
      <style jsx>{`
        .crops-track {
          animation: crops-marquee 50s linear infinite;
        }

        @keyframes crops-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(
              calc(-1 * ${CARDS_PER_SET} * (var(--card-w) + var(--card-gap)))
            );
          }
        }

        .crops-section {
          --card-gap: 10px;
          --card-w: clamp(260px, 19.5vw, 310px);
          --card-h: clamp(410px, 54vh, 470px);
          --card-open: min(
            calc(var(--card-w) * 2 + var(--card-gap)),
            calc(100vw - 32px)
          );
          --ease-pro: cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .crops-card {
          width: var(--card-w);
          height: var(--card-h);
          margin-right: var(--card-gap);
          box-shadow: inset 0 0 0 1px rgba(20, 83, 47, 0.1);
          transition:
            width 0.55s var(--ease-pro),
            box-shadow 0.4s var(--ease-pro);
        }

        .crops-card:hover {
          width: var(--card-open);
          z-index: 10;
          box-shadow: 0 24px 48px -12px rgba(27, 40, 30, 0.28);
        }

        .crops-video {
          flex: none;
          width: calc(var(--card-open) / 2);
        }

        .crops-text {
          flex: none;
          width: calc(var(--card-open) / 2);
          background: linear-gradient(
              rgba(238, 240, 228, 0.85),
              rgba(238, 240, 228, 0.85)
            ),
            #fef4eb;
        }

        @media (max-width: 768px) {
          .crops-section {
            --card-w: 165px;
            --card-h: 430px;
          }

          .crops-card:hover .crops-video,
          .crops-card:hover .crops-text {
            width: var(--card-open);
          }

          .crops-card:hover .absolute.inset-0.z-\\[3\\] {
            flex-direction: column;
          }

          .crops-video {
            height: 50%;
          }

          .crops-text {
            height: 50%;
            padding: 16px 18px;
            justify-content: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .crops-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}