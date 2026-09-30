import { Reveal } from "@/components/ui/reveal";

export function ZacheeQuote() {
  return (
    <section
      className="relative my-[14px] overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background-quote.png')" }}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center px-[6%] pt-20 text-center lg:px-[5%] lg:pt-24">
        <Reveal>
          <p className="mb-8 max-w-[54ch] font-body text-[clamp(12px,1vw,14px)] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#0b438c]/55">
            Un soir, sur une piste de l&apos;arrière-pays, un vieux planteur nous
            a regardés et nous a dit
          </p>
        </Reveal>

        {/* mt-auto pousse le planteur contre le bord bas de la section */}
        <Reveal delay={320} className="mt-auto w-full pt-14">
          <img
            src="/images/zachee-intro.svg"
            alt="Vieux planteur tenant un sac de récolte"
            className="mx-auto w-[min(92%,440px)] select-none"
          />
        </Reveal>

        <Reveal delay={150}>
          <blockquote className="mx-auto max-w-[24ch] font-title text-[clamp(1.8rem,3.8vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[#0b438c]">
            <p>
              « Vous venez avec vos{" "}
              <span className="text-[#789100]">téléphones</span> et vos grands
              mots. Mais est-ce que vous nous voyez vraiment, ou est-ce que vous
              ne voyez que <span className="text-[#789100]">nos sacs</span>,{" "}
              <span className="text-[#789100]">nos régimes</span> ? »
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}