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

      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      {/* Femmes superposées — hauteur plafonnée à celle de la section */}
      <img
        src="/images/solution/femmes-champ-detoure.png"
        alt="Femmes travaillant dans un champ de légumes"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 mx-auto h-[150%] w-auto max-w-[90%] object-contain object-bottom"
      />

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