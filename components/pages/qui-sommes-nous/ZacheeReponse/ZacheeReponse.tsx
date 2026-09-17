export function ZacheeReponse() {
  return (
    <section
      className="relative my-[14px] overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background-zachee-1.png')" }}
    >
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-[6%] py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:px-[5%] lg:py-24">
        {/* Colonne texte */}
        <div className="order-2 lg:order-1">
          <p className="mb-7 font-body text-[clamp(12px,1vw,14px)] font-semibold uppercase tracking-[0.2em] text-white/65">
            Nous avons passé les mois suivants à construire une réponse
          </p>

          <h2 className="mb-9 font-title text-[clamp(2.4rem,5.6vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.02em] text-white">
            Aucun producteur n&apos;est un{" "}
            <span className="text-[#ffca3c]">sac anonyme.</span>
          </h2>

          <p className="max-w-[44ch] font-body text-[clamp(1.05rem,1.6vw,1.55rem)] leading-[1.4] text-white/90">
            Chaque lot que nous vous livrons raconte l&apos;histoire d&apos;un
            travail épanouissant, d&apos;une prospérité partagée.
          </p>

          <div className="mt-12 border-t border-white/25 pt-8">
            <p className="max-w-[42ch] font-body text-[clamp(0.95rem,1.2vw,1.15rem)] leading-relaxed text-white/70">
              Ce planteur, nous l&apos;appelons Zachée. Son histoire est le récit
              qui a donné leur forme à nos valeurs.
            </p>
          </div>
        </div>

        {/* Colonne image — déborde volontairement à droite */}
        <div className="order-1 lg:order-2 lg:-mr-[8%]">
          <img
            src="/images/zachee-quote-reponse.svg"
            alt="Deux mains serrant un sac de cacao"
            className="mx-auto w-[min(80%,400px)] select-none lg:mx-0 lg:w-full lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}