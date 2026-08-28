"use client";

import { useEffect, useRef, useState } from "react";

type Panel = {
  id: string;
  label: string;
  kpi: string;
  lead: string;
  body: string;
  aside: string;
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
    aside: "Il est formé à ces gestes simples et devient copropriétaire de l'outil via sa coopérative. Son revenu double parce qu'il capte une part de la valeur ajoutée qui, hier, partait à l'étranger. Il est payé en 72 heures, il comprend sa marge, et il n'a plus peur du lendemain.",
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
    aside: "Le plantain n'est plus trempé au formol pour tenir le voyage : il arrive stabilisé, sain, testé. Elle achète en confiance, à prix stable toute l'année, sans subir les flambées de la saison sèche. Ce qu'elle économise reste dans son foyer.",
    cta: "Je découvre cette solution",
    image: "/images/menage.png",
    alt: "Cliente sur un marché de quartier",
  },
  {
    id: "restaurants",
    label: "Les Restaurateurs",
    kpi: "72h",
    lead: "Il ne construit plus sa carte au gré de ce qu'il trouvera le matin même.",
    body: "Il commande à l'avance des volumes garantis, à qualité constante, livrés selon un calendrier qu'il maîtrise. Fini les ruptures qui obligent à retirer un plat, fini les écarts de calibre qui ruinent une recette et la marge qui va avec.",
    aside: "Chaque livraison est traçable jusqu'à la coopérative d'origine — un argument qu'il affiche en salle. Ses pertes tombent sous les 10 %, ses coûts deviennent prévisibles, et il paie le juste prix à des producteurs qu'il peut nommer.",
    cta: "Je découvre cette solution",
    image: "/images/restaurant.png",
    alt: "Chef en cuisine préparant un plat",
  },
  {
    id: "industries",
    label: "Les Industries",
    kpi: "×3",
    lead: "Elle ne dépend plus d'une matière première dont elle ignore l'origine.",
    body: "Les volumes agrégés par les coopératives atteignent enfin l'échelle industrielle, avec des standards de qualité documentés à chaque étape. Les lots sont analysés, certifiés, et conformes aux exigences de traçabilité des marchés d'exportation.",
    aside: "La transformation se fait au plus près du champ, ce qui triple la valeur retenue sur le territoire. L'industriel sécurise son approvisionnement sur plusieurs saisons et démontre une chaîne responsable, du plant au conteneur.",
    cta: "Je découvre cette solution",
    image: "/images/industrie.png",
    alt: "Technicien contrôlant la qualité en unité de transformation",
  },
];

const BG = "url('/images/background-monde-ideal.png')";

export function MondeIdeal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = el.offsetHeight - window.innerHeight;
      if (distance <= 0) return;
      const p = Math.min(Math.max(-rect.top / distance, 0), 1);
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const shift = progress * (PANELS.length - 1) * 100;

  return (
    <section>
      <div
        className="bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: BG }}
      >
        {PANELS.map((panel) => (
          <PanelContent key={panel.id} panel={panel} />
        ))}
      </div>

      <div
        ref={wrapperRef}
        className="hidden lg:block"
        style={{ height: `${PANELS.length * 100}vh` }}
      >
        <div
          className="sticky top-0 h-screen overflow-hidden bg-cover bg-center bg-no-repeat pt-[95px]"
          style={{ backgroundImage: BG }}
        >
          <svg
            viewBox="0 0 1000 150"
            className="mx-auto h-[clamp(95px,14vh,160px)] w-full max-w-[1300px]"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <path id="arc-monde" d="M 15,135 A 1900,1900 0 0 1 985,135" fill="none" />
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

          <h2 className="sr-only">Notre monde idéal</h2>

          <div
            className="flex h-[calc(100%_-_clamp(95px,14vh,160px))] transition-transform duration-100 ease-out"
            style={{ transform: `translateX(-${shift}vw)` }}
          >
            {PANELS.map((panel) => (
              <div key={panel.id} className="h-full w-screen shrink-0">
                <PanelContent panel={panel} />
              </div>
            ))}
          </div>

          <Thread progress={progress} />
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
          className="absolute inset-y-0 left-0 rounded-full bg-[#7d3b32] transition-[width] duration-100 ease-out"
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
                className={`block h-4 w-4 rounded-full ring-4 ring-[#faf6f0] transition-colors duration-300 ${
                  reached ? "bg-[#7d3b32]" : "bg-[#d8cbbb]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap font-body text-xs font-bold transition-colors duration-300 ${
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

function PanelContent({ panel }: { panel: Panel }) {
  return (
    <div className="flex h-full flex-col justify-center px-[5%] pb-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="relative mb-3 lg:mb-6">
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:w-[48%] lg:max-w-none">
            <svg
              viewBox="0 0 600 200"
              className="absolute bottom-[15px] left-[15px] z-0 h-[190px] w-[calc(100%_-_80px)]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 10,200 L 10,150 C 70,150 95,120 130,105 C 175,86 205,130 240,108 C 285,80 315,28 370,22 C 430,15 470,60 520,78 C 555,91 575,74 590,60 L 590,200 Z"
                fill="#e4f5e0"
              />
              <path
                d="M 10,150 C 70,150 95,120 130,105 C 175,86 205,130 240,108 C 285,80 315,28 370,22 C 430,15 470,60 520,78 C 555,91 575,74 590,60"
                fill="none"
                stroke="#2eb82e"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <img
              src={panel.image}
              alt={panel.alt}
              className="relative z-10 mx-auto h-[clamp(180px,24vh,340px)] w-auto max-w-full -translate-y-[16.5px] translate-x-[40px] select-none"
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

            <span className="absolute bottom-[20px] left-0 z-30 rounded-2xl bg-gradient-to-b from-[#3d6ca8] to-[#1e4d8c] px-6 py-3 font-accent text-lg italic text-white shadow-[0_6px_0_0_#153a6b,0_10px_18px_rgba(0,0,0,0.28)] ring-1 ring-white/40 lg:px-8 lg:text-xl">
              {panel.label}
            </span>

            <span className="absolute right-[-20px] top-[18%] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#ffc94d] to-[#f0a500] text-sm font-bold text-white shadow-[0_5px_0_0_#c98700,0_9px_16px_rgba(0,0,0,0.3)] ring-[5px] ring-white lg:h-16 lg:w-16">
              {panel.kpi}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr_auto] lg:items-start lg:gap-8">
          <div className="text-[#3a3a3a]">
            <p className="mb-3 font-body text-[17px] font-bold leading-snug lg:mb-4">
              {panel.lead}
            </p>
            <p className="font-body text-[17px] leading-snug lg:text-justify">
              {panel.body}
            </p>
          </div>

          <p className="font-body text-[17px] leading-snug text-[#3a3a3a] lg:text-justify">
            {panel.aside}
          </p>

          <a
            href="#"
            className="self-start whitespace-nowrap rounded-2xl bg-[#8b3a32] px-5 py-3 text-center font-body text-[14px] font-bold leading-tight text-white no-underline transition hover:bg-[#732f28]"
          >
            {panel.cta}
          </a>
        </div>
      </div>
    </div>
  );
}