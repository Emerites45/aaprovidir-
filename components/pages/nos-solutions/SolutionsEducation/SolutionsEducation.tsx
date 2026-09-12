import Link from "next/link";

const BULLETS = [
  "Nous vous aidons à créer ou à renforcer votre coopérative. Vous restez propriétaires.",
  "Nous devenons votre partenaire commercial exclusif, avec un contrat clair.",
  "Nous vous proposons un prix plancher, et une ristourne sur les bénéfices en fin de campagne.",
  "Vous ne subissez plus les prix spots des coxeurs.",
];

const STEPS = [
  { week: "1 week", label: "Presentation", position: "left-2 top-10" },
  { week: "5 weeks", label: "UI/UX Design", position: "right-2 top-10" },
  { week: "2 weeks", label: "Research", position: "-left-4 top-1/2 -translate-y-1/2" },
  { week: "3 weeks", label: "Testing", position: "left-1/3 -bottom-4" },
];

function LeafIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" fill="#3f5e00">
      <path d="M20 2c10 4 16 12 16 20-6 2-14 0-18-6-4 6-4 14 2 20-8-2-16-10-16-20C4 8 12 2 20 2z" />
    </svg>
  );
}

export function SolutionsEducation() {
  return (
    <section className="bg-[#f5f3ef] px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Colonne gauche */}
        <div>
          <span className="inline-block rounded-full bg-[#f4c430] px-4 py-1.5 text-sm font-bold text-white">
            Solution 2
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#1f1f1f] md:text-4xl">
            Une structuration
            <br />
            <span className="text-[#5f7600]">sans vous déposséder</span>
          </h2>

          <ul className="mt-8 space-y-6">
            {BULLETS.map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <LeafIcon />
                <p className="pt-2 text-lg leading-snug text-[#1f1f1f]">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#"
              className="rounded-full bg-[#5f7600] px-6 py-3 font-bold text-white hover:bg-[#4c5e00]"
            >
              Commencer
            </Link>
            <Link
              href="#"
              className="rounded-full bg-[#3f5e00] px-6 py-3 font-bold text-white hover:bg-[#324b00]"
            >
              Discutons --)
            </Link>
          </div>
        </div>

        {/* Colonne droite — diagramme circulaire */}
        <div className="relative mx-auto h-[380px] w-[380px]">
          {/* Feuilles décoratives en arrière-plan */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -inset-6 -z-10 h-[430px] w-[430px]"
            fill="none"
          >
            <path
              d="M100 10c40 20 60 50 55 90-35 10-70-5-85-35-15 30-10 65 20 90-45-5-80-40-85-85C0 30 50 0 100 10z"
              fill="#2f5d1f"
              opacity="0.9"
            />
            <path
              d="M160 60c15 25 15 55-5 80-20-5-35-25-35-50s20-40 40-30z"
              fill="#4a8a2a"
              opacity="0.85"
            />
          </svg>

          {/* Cercle central */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-[#e8e6df] shadow-inner">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#c9c6bc"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#5f7600"
                strokeWidth="3"
                strokeDasharray="60 220"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-[#1f1f1f]">11 weeks</span>
              <span className="text-xs text-[#6b6b6b]">Total</span>
            </div>
          </div>

          {/* Badges flottants */}
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`absolute ${step.position} flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-md`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4e04d] text-xs">
                ↗
              </span>
              <div className="leading-tight">
                <p className="text-[11px] text-[#6b6b6b]">{step.week}</p>
                <p className="text-xs font-semibold text-[#1f1f1f]">{step.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}