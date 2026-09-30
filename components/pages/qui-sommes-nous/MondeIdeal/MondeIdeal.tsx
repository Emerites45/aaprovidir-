"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

type Panel = {
  id: string;
  label: string;
  kpi: string;
  lead: string;
  body: string;
  cta: string;
  image: string;
  alt: string;
};

const PANELS: Panel[] = [
  {
    id: "producteurs",
    label: "Les Producteurs",
    kpi: "+40%",
    lead: "Il n'est plus simplement vendeur de fèves brutes ou de régimes de plantain.",
    body: "Dans un rayon de dix kilomètres autour de son village, une mini-unité solaire de première transformation (séchage, pressage, broyage, extraction) lui permet de livrer non plus une matière périssable, mais un produit stabilisé, à plus forte valeur : pâte de cacao, cossettes de manioc, huile de palme clarifiée.",
    cta: "Je découvre cette solution",
    image: "/images/producteur.png",
    alt: "Producteur portant sa récolte",
  },
  {
    id: "menages",
    label: "Les Ménages",
    kpi: "−25%",
    lead: "Elle ne choisit plus entre nourrir sa famille et la nourrir correctement.",
    body: "Le circuit raccourci supprime trois intermédiaires entre le champ et son marché de quartier. Le même panier de vivres lui coûte un quart de moins, et chaque produit porte un code qui lui dit d'où il vient, quand il a été récolté et ce qu'il a reçu comme traitement.",
    cta: "Je découvre cette solution",
    image: "/images/Cibles3.png",
    alt: "Cliente sur un marché de quartier",
  },
  {
    id: "restaurants",
    label: "Les Restaurateurs",
    kpi: "72h",
    lead: "Il ne construit plus sa carte au gré de ce qu'il trouvera le matin même.",
    body: "Il commande à l'avance des volumes garantis, à qualité constante, livrés selon un calendrier qu'il maîtrise. Fini les ruptures qui obligent à retirer un plat, fini les écarts de calibre qui ruinent une recette et la marge qui va avec.",
    cta: "Je découvre cette solution",
    image: "/images/Cibles1.png",
    alt: "Chef en cuisine préparant un plat",
  },
  {
    id: "industries",
    label: "Les Industries",
    kpi: "×3",
    lead: "Elle ne dépend plus d'une matière première dont elle ignore l'origine.",
    body: "Les volumes agrégés par les coopératives atteignent enfin l'échelle industrielle, avec des standards de qualité documentés à chaque étape. Les lots sont analysés, certifiés, et conformes aux exigences de traçabilité des marchés d'exportation.",
    cta: "Je découvre cette solution",
    image: "/images/Technicien labo.png",
    alt: "Technicien contrôlant la qualité en unité de transformation",
  },
];

const BG = "url('/images/background-monde-ideal.png')";

/** Hauteur de défilement allouée à chaque panneau, en vh. Curseur d'effort. */
const VH_PER_PANEL = 130;

/** Amortissement du suivi : plus bas = plus de traîne. */
const DAMPING = 0.12;

/** Durée du tracé de la courbe, en ms. La pastille pulse à la fin. */
const DRAW_MS = 1150;

const clamp01 = (x: number) => Math.min(Math.max(x, 0), 1);

/**
 * Glissement continu : majoritairement linéaire, légèrement adouci
 * à l'approche de chaque panneau. La dérivée ne s'annule jamais.
 */
function glide(f: number) {
  const x = clamp01(f);
  const eased = x * x * (3 - 2 * x);
  return x * 0.6 + eased * 0.4;
}

export function MondeIdeal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const read = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const distance = el.offsetHeight - window.innerHeight;
      if (distance <= 0) return;
      targetRef.current = clamp01(-el.getBoundingClientRect().top / distance);
    };

    const tick = () => {
      setProgress((current) => {
        const next = current + (targetRef.current - current) * DAMPING;
        return Math.abs(targetRef.current - next) < 0.0002
          ? targetRef.current
          : next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    read();
    setProgress(targetRef.current);
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  const last = PANELS.length - 1;
  const raw = progress * last;
  const segment = Math.min(Math.floor(raw), Math.max(last - 1, 0));
  const eased = last === 0 ? 0 : segment + glide(raw - segment);

  return (
    <section>
      <div
        className="my-[14px] overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: BG }}
      >
        {PANELS.map((panel) => (
          <PanelContent key={panel.id} panel={panel} active />
        ))}
      </div>

      <div
        ref={wrapperRef}
        className="hidden lg:block"
        style={{ height: `${PANELS.length * VH_PER_PANEL}vh` }}
      >
        <div
          className="sticky top-[14px] h-[calc(100vh_-_28px)] overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat pt-[95px]"
          style={{ backgroundImage: BG }}
        >
          <Reveal distance={26}>
            <svg
              viewBox="0 0 1000 150"
              className="mx-auto h-[clamp(95px,14vh,160px)] w-full max-w-[1300px]"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="arc-monde"
                  d="M 15,135 A 1900,1900 0 0 1 985,135"
                  fill="none"
                />
              </defs>
              <text
                className="font-title"
                fill="#f0dfd0"
                fontSize="90"
                fontWeight="700"
                letterSpacing="0"
                textAnchor="middle"
              >
                <textPath href="#arc-monde" startOffset="50%">
                  NOTRE MONDE IDÉAL
                </textPath>
              </text>
            </svg>
          </Reveal>

          <h2 className="sr-only">Notre monde idéal</h2>

          <div
            className="flex h-[calc(100%_-_clamp(95px,14vh,160px))] will-change-transform"
            style={{ transform: `translate3d(-${eased * 100}vw, 0, 0)` }}
          >
            {PANELS.map((panel, i) => {
              // Distance signée au panneau courant : 0 = centré.
              const d = i - eased;
              const away = Math.min(Math.abs(d), 1);

              return (
                <div
                  key={panel.id}
                  className="h-full w-screen shrink-0 will-change-[opacity,transform]"
                  style={{
                    opacity: 1 - away * 0.45,
                    transform: `scale(${1 - away * 0.05})`,
                    transformOrigin: d > 0 ? "left center" : "right center",
                    pointerEvents: away < 0.5 ? "auto" : "none",
                  }}
                >
                  {/* Parallaxe légère : le contenu se recale avec un temps de retard */}
                  <div
                    className="h-full will-change-transform"
                    style={{ transform: `translate3d(${d * 5}%, 0, 0)` }}
                  >
                    <PanelContent panel={panel} active={away < 0.3} />
                  </div>
                </div>
              );
            })}
          </div>

          <Thread progress={last === 0 ? 0 : eased / last} />
        </div>
      </div>
    </section>
  );
}

function Thread({ progress }: { progress: number }) {
  return (
    <div className="absolute inset-x-0 bottom-8 z-40 mx-auto max-w-[1100px] px-[5%]">
      <div className="relative h-[3px] rounded-full bg-[#d8cbbb]">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#7d3b32]"
          style={{ width: `${progress * 100}%` }}
        />
        {PANELS.map((panel, i) => {
          const point = i / (PANELS.length - 1);
          const reached = progress >= point - 0.02;
          return (
            <div
              key={panel.id}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${point * 100}%` }}
            >
              <span
                className={`block rounded-full ring-4 ring-[#faf6f0] transition-all duration-500 ${
                  reached ? "h-[18px] w-[18px] bg-[#7d3b32]" : "h-4 w-4 bg-[#d8cbbb]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap font-body text-xs font-bold transition-colors duration-500 ${
                  reached ? "text-[#7d3b32]" : "text-[#b3a493]"
                }`}
              >
                {panel.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PanelContent({ panel, active }: { panel: Panel; active: boolean }) {
  // Passe à true quand le tracé atteint la pastille — déclenche le rebond.
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    if (!active) {
      setArrived(false);
      return;
    }
    const id = window.setTimeout(() => setArrived(true), DRAW_MS);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <div className="flex h-full flex-col justify-center px-[5%] pb-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1300px]">
        <Reveal className="relative mb-3 lg:mb-8">
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:w-[48%] lg:max-w-none">
            <svg
              viewBox="0 0 600 200"
              className="absolute bottom-[15px] left-[15px] z-0 h-[190px] w-[calc(100%_-_80px)]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Volet qui balaie de gauche à droite : la surface verte pousse */}
              <defs>
                <clipPath id={`wipe-${panel.id}`}>
                  <rect
                    x="0"
                    y="0"
                    height="200"
                    width={active ? 600 : 0}
                    style={{
                      transition: `width ${DRAW_MS}ms cubic-bezier(0.22,1,0.36,1)`,
                    }}
                  />
                </clipPath>
              </defs>

              <g clipPath={`url(#wipe-${panel.id})`}>
                <path
                  d="M 10,200 L 10,150 C 70,150 95,120 130,105 C 175,86 205,130 240,108 C 285,80 315,28 370,22 C 430,15 470,60 520,78 C 555,91 575,74 590,60 L 590,200 Z"
                  fill="#e4f5e0"
                />
              </g>

              {/* Le trait se dessine en suivant sa propre longueur */}
              <path
                d="M 10,150 C 70,150 95,120 130,105 C 175,86 205,130 240,108 C 285,80 315,28 370,22 C 430,15 470,60 520,78 C 555,91 575,74 590,60"
                fill="none"
                stroke="#2eb82e"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: active ? 0 : 1,
                  transition: `stroke-dashoffset ${DRAW_MS}ms cubic-bezier(0.22,1,0.36,1)`,
                }}
              />
            </svg>

            <img
              src={panel.image}
              alt={panel.alt}
              className="relative z-10 mx-auto h-[clamp(200px,44vh,360px)] w-auto max-w-full -translate-y-[16.5px] translate-x-[40px] select-none"
            />

            <svg
              viewBox="0 0 600 70"
              className="absolute bottom-[-25px] left-[15px] z-20 h-[45px] w-[calc(100%_-_80px)]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 5,18 C 200,4 420,4 595,20 C 460,34 280,30 195,38 C 152,42 158,60 195,63 C 228,66 250,52 218,46"
                fill="none"
                stroke="#7d3b32"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* Label — ombre douce uniquement, plus d'effet de tranche */}
            <span
              style={{ fontFamily: "var(--font-script)" }}
              className="absolute bottom-[20px] left-0 z-30 rounded-2xl bg-[linear-gradient(to_bottom,#3d6ca8,#1e4d8c)] px-6 py-3 font-accent text-white shadow-[0_8px_18px_rgba(20,50,100,0.22)] lg:px-8 lg:text-xl"
            >
              {panel.label}
            </span>

            {/* KPI — apparaît quand le tracé l'atteint, puis rebondit */}
            <span
              className="absolute bottom-[132px] right-[52px] z-30 inline-flex h-14 w-14 translate-x-1/2 translate-y-1/2 items-center justify-center lg:h-16 lg:w-16"
              style={{
                opacity: arrived ? 1 : 0,
                transition: "opacity 220ms ease-out",
              }}
            >
              <span
                className={`relative flex h-full w-full items-center justify-center ${
                  arrived ? "kpi-pop" : ""
                }`}
              >
                <span
                  className="pointer-events-none absolute -inset-[30%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 42%, rgba(125,59,50,0.12) 0%, rgba(125,59,50,0.06) 38%, rgba(125,59,50,0.02) 54%, rgba(125,59,50,0) 66%)",
                  }}
                  aria-hidden="true"
                />

                <span
                  className="pointer-events-none absolute -inset-[16%] rounded-full"
                  style={{
                    boxShadow:
                      "inset 0 -7px 13px rgba(90,45,0,0.10), inset 0 5px 11px rgba(255,255,255,0.45)",
                  }}
                  aria-hidden="true"
                />

                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(to_bottom,#ffd45c,#f0a500)] text-sm font-bold text-white shadow-[0_3px_9px_rgba(90,45,0,0.20)] ring-[5px] ring-white">
                  {panel.kpi}
                </span>
              </span>
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)_auto] lg:items-start lg:gap-10">
          <Reveal delay={160}>
            <h3 className="font-body text-[clamp(1.05rem,1.5vw,1.5rem)] font-bold leading-snug text-[#3a3a3a]">
              {panel.lead}
            </h3>
          </Reveal>

          <Reveal delay={280}>
            <p className="font-body text-[16px] leading-snug text-[#3a3a3a] lg:text-justify">
              {panel.body}
            </p>
          </Reveal>

          <Reveal delay={400} className="lg:justify-self-end lg:self-start">
            <a
              href="#"
              className="inline-block whitespace-nowrap rounded-2xl bg-[#8b3a32] px-6 py-3.5 text-center font-body text-[15px] font-bold leading-tight text-white no-underline transition hover:bg-[#732f28]"
            >
              {panel.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}