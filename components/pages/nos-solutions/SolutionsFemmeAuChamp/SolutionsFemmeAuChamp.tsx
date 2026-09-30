type InfoCard = {
  id: string;
  title: string;
  value?: string;
  valueLabel?: string;
  items?: string[];
  accent?: string;
};

const CARDS: InfoCard[] = [
  { id: "sante-metabolique", title: "Santé métabolique", value: "66", valueLabel: "sur 100", items: ["Glycémie stable", "IMC équilibré", "Risques réduits"], accent: "#22d3c8" },
  { id: "age", title: "Âge réel", value: "31", valueLabel: "ans", accent: "#22d3c8" },
  { id: "rajeunissement", title: "Vous rajeunit", items: ["Hémoglobine A1c", "Cholestérol HDL"], accent: "#facc15" },
  { id: "sante-coeur", title: "Santé cardiaque", items: ["Tension artérielle", "Cholestérol LDL", "Glycémie"], accent: "#e879f9" },
  { id: "nutrition", title: "Nutrition", items: ["Fruits & légumes", "Céréales complètes", "Protéines saines"], accent: "#a3e635" },
  { id: "age-biologique", title: "Âge biologique", value: "41", valueLabel: "ans", items: ["3 ans de moins que l'âge réel"], accent: "#a3e635" },
  { id: "sommeil", title: "Sommeil", items: ["Qualité du sommeil", "Récupération"], accent: "#60a5fa" },
  { id: "habitudes", title: "Habitudes de vie", items: ["Activité physique", "Hydratation"], accent: "#fb923c" },
];

// Ordre gauche -> droite. left/bottom/height en % de la section.
// Plus "bottom" est grand, plus la femme paraît loin (donc plus petite).
const WOMEN = [
  { src: "femme1.png", w: 262, h: 451, left: 12, bottom: 4,  height: 78 },
  { src: "femme2.png", w: 207, h: 493, left: 32, bottom: -5, height: 81 },
  { src: "femme3.png", w: 213, h: 443, left: 67, bottom: 25, height: 68 },
  { src: "femme4.png", w: 163, h: 335, left: 58, bottom: 0,  height: 59 },
  { src: "femme5.png", w: 260, h: 484, left: 95, bottom: 0,  height: 83 },
];

function Card({ card }: { card: InfoCard }) {
  return (
    <div className="w-50 rounded-lg border border-white/15 bg-black/55 p-3 text-white backdrop-blur-sm">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
        {card.title}
      </p>

      {card.value && (
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-2xl font-bold" style={{ color: card.accent }}>
            {card.value}
          </span>
          {card.valueLabel && (
            <span className="text-[11px] text-white/60">{card.valueLabel}</span>
          )}
        </div>
      )}

      {card.items && (
        <ul className="mt-2 space-y-1">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-[12px] text-white/85">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: card.accent }}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SolutionsFemmeAuChamp() {
  const total = CARDS.length;
  const duration = 32;

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/solution/champ.jpeg"
        alt="Champ de légumes"
        className="h-155 w-full object-cover lg:h-165"
      />

      {/* Femmes : placées individuellement pour créer de la profondeur */}

      <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true">
        {WOMEN.map((f) => (
          <div
            key={f.src}
            className="absolute"
            style={{
              left: `${f.left}%`,
              bottom: `${f.bottom}%`,
              height: `${f.height}%`,
              aspectRatio: `${f.w} / ${f.h}`,
              transform: "translateX(-50%)",
            }}
          >
            {/* ombre au sol */}
            <div className="absolute bottom-0 left-1/2 h-[5%] w-[85%] -translate-x-1/2 translate-y-1/2 rounded-full bg-black/45 blur-[6px]" />
            <img
              src={`/images/solution/${f.src}`}
              alt=""
              className="relative h-full w-full object-contain"
              style={{ filter: "saturate(0.92) brightness(0.96)" }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 hidden md:block">
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            className="absolute"
            style={{
              animation: `diagonal-fall ${duration}s linear infinite`,
              animationDelay: `${-(duration / total) * i}s`,
            }}
          >
            <Card card={card} />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-6 z-30 flex justify-center px-6">
        
        <a href="#"
          className="inline-block rounded-full bg-[#4a6a1f] px-8 py-3 font-bold text-white shadow-md transition hover:bg-[#3d5819]"
        >
          Ce que nous apportons
        </a>
      </div>
    </section>
  );
}