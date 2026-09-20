import { Reveal } from "@/components/ui/reveal";

type Slide = {
  id: string;
  num: string;
  tag: string;
  script: string;
  lead: string;
  body: string;
};

const SLIDES: Slide[] = [
  {
    id: "pourquoi",
    num: "1",
    tag: "POURQUOI ? Notre raison d'être",
    script: "Restaurer la dignité de ceux qui nourrissent le continent.",
    lead: "Nous croyons que la prospérité doit naître au pied du cacaoyer.",
    body: "Un planteur camerounais touche aujourd'hui moins de la moitié de ce que vaut sa récolte sur le marché mondial. Ce n'est pas une fatalité climatique ni une loi économique : c'est un défaut d'organisation, et un défaut d'organisation se corrige. Nous œuvrons pour un monde où 10 000 producteurs captent au moins 50 % de la valeur de leurs récoltes contre moins de 35 % aujourd'hui dans les circuits informels.",
  },
  {
    id: "comment",
    num: "2",
    tag: "COMMENT ? Notre méthode unique",
    script: "En industrialisant la confiance.",
    lead: "Nous structurons les producteurs en coopératives avec des prix justes et négociés à l'avance.",
    body: "Nous contribuons à leur éveil entrepreneurial. Nous rapprochons la première transformation du champ, à l'énergie solaire. Nous contrôlons la qualité lot par lot. Nous mesurons les prix réels de chaque zone et nous les publions. Nous livrons nous-mêmes.",
  },
  {
    id: "quoi",
    num: "3",
    tag: "QUOI ? Notre promesse tangible",
    script: "Des produits premium, livrés avec une fiabilité d'horloger.",
    lead: "Du cacao, du café, des PFNL, des céréales, vivres et fruits camerounais, tracés du champ au quai.",
    body: "Et les outils qui rendent cette traçabilité vérifiable par tout le monde : Agriflow pour le suivi des commandes, notre veille prix ouverte à tous. Chaque jour, nous permettons à des acheteurs HORECA, industriels et exportateurs de recevoir des produits certifiés, tracés, et livrés en 48 heures. Notre objectif : 98 % de lots conformes, à date fixe, sans mauvaise surprise.",
  },
];

export function RaisonDetre() {
  return (
    <section className="my-[14px] grid overflow-clip rounded-[22px]">
      {/* Calque 0 — le dégradé, épinglé */}
      <div className="col-start-1 row-start-1 z-0">
        <div className="sticky top-0 h-screen bg-[linear-gradient(to_right,#006af1,#80e9f9)]" />
      </div>

      {/* Calque 1 — le contenu, qui défile normalement */}
      <div className="relative z-10 col-start-1 row-start-1">
        {SLIDES.map((slide) => (
          <SlideContent key={slide.id} slide={slide} />
        ))}
      </div>

      {/* Calque 2 — la montagne, épinglée au premier plan */}
      <div
        className="pointer-events-none z-30 col-start-1 row-start-1"
        aria-hidden="true"
      >
        <img
          src="/images/montagne.png"
          alt=""
          className="sticky top-0 h-screen w-full select-none object-cover object-bottom"
        />
      </div>
    </section>
  );
}

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="flex min-h-screen flex-col justify-start px-[5%] pb-[30vh] pt-[70px] lg:pt-[90px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal
          from="left"
          className="mb-6 mt-8 flex items-center gap-5 lg:mb-16 lg:mt-12"
        >
          <span className="relative inline-flex h-12 w-12 items-center justify-center lg:h-14 lg:w-14">
            {/* Halo — le fondu se termine bien avant le bord du cercle */}
            <span
              className="pointer-events-none absolute -inset-[30%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 42%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.13) 38%, rgba(255,255,255,0.04) 54%, rgba(255,255,255,0) 66%)",
              }}
              aria-hidden="true"
            />

            {/* Cavité */}
            <span
              className="pointer-events-none absolute -inset-[16%] rounded-full"
              style={{
                boxShadow:
                  "inset 0 -7px 13px rgba(0,20,60,0.15), inset 0 5px 11px rgba(255,255,255,0.16)",
              }}
              aria-hidden="true"
            />

            {/* Pastille */}
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(to_bottom,#ffd45c,#ffc12e)] font-title text-xl font-bold leading-none text-white shadow-[0_3px_8px_rgba(0,20,60,0.18)] lg:text-2xl">
              {slide.num}
            </span>
          </span>

          <span className="rounded-xl bg-[#30a036] px-5 py-2.5 font-title text-base font-bold text-white lg:px-6 lg:py-3 lg:text-lg">
            {slide.tag}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bloc script + illustration animé d'un seul tenant :
              les deux enfants portent déjà des translate. */}
          <Reveal delay={180} className="flex items-start gap-10 lg:pt-[60px]">
            <p
              style={{ fontFamily: "var(--font-script)" }}
              className="w-[46%] shrink-0 translate-x-[30px] text-right text-[clamp(1.4rem,2.5vw,2.4rem)] leading-relaxed text-[#0b1e3a]"
            >
              {slide.script}
            </p>

            <img
              src="/images/producteurs.svg"
              alt=""
              aria-hidden="true"
              className="w-[clamp(340px,36vw,580px)] shrink-0 -translate-x-[180px] -translate-y-[150px] select-none"
            />
          </Reveal>

          <Reveal from="right" delay={320}>
            <div className="rounded-[24px] bg-gradient-to-br from-[#cfe8f7]/95 to-[#eaf6fd]/95 p-8 shadow-lg lg:p-11">
              <p className="mb-5 font-body text-[clamp(1rem,1.5vw,1.4rem)] font-bold leading-snug text-[#111]">
                {slide.lead}
              </p>
              <p className="font-body text-[clamp(0.9rem,1.2vw,1.15rem)] leading-relaxed text-[#1a1a1a] lg:text-justify">
                {slide.body}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}