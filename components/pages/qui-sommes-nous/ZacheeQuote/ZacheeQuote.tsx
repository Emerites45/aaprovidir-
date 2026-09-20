import { Reveal } from "@/components/ui/reveal";

export function ZacheeQuote() {
  return (
    <section
      className="relative my-[14px] overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background-quote.png')" }}
    >
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 gap-12 px-[6%] py-20 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:gap-12 lg:px-[5%] lg:py-24">
        {/* Colonne image — le planteur repose sur le bord bas */}
        <Reveal from="left" className="lg:-mb-24 lg:self-end">
          <img
            src="/images/zachee-intro.svg"
            alt="Vieux planteur tenant un sac de récolte"
            className="mx-auto w-[min(72%,360px)] select-none lg:mx-0 lg:w-full lg:max-w-none"
          />
        </Reveal>

        {/* Colonne texte */}
        <div>
          <Reveal delay={120}>
            <p className="mb-9 max-w-[40ch] font-body text-[clamp(12px,1vw,14px)] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#0b438c]/55">
              Un soir, sur une piste de l&apos;arrière-pays, un vieux planteur
              nous a regardés et nous a dit
            </p>
          </Reveal>

          <Reveal delay={260}>
            <blockquote className="max-w-[26ch] font-title text-[clamp(1.7rem,3.4vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[#0b438c]">
              <p>
                « Vous venez avec vos{" "}
                <span className="text-[#789100]">téléphones</span> et vos grands
                mots. Mais est-ce que vous nous voyez vraiment, ou est-ce que
                vous ne voyez que <span className="text-[#789100]">nos sacs</span>,{" "}
                <span className="text-[#789100]">nos régimes</span> ? »
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}