import { Reveal } from "@/components/ui/reveal";

export function ZacheeIntro() {
  return (
    <section
      className="overflow-hidden rounded-b-[22px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background-zachee-1.png')" }}
    >
      <div className="flex h-[10vh] translate-y-[100px] items-center justify-center">
        <Reveal distance={20}>
          <p className="text-center font-accent text-[clamp(0.85rem,1.6vw,20px)] font-semibold uppercase tracking-[0.05em] text-[#ffffff]">
            Pourquoi nous nous levons chaque matin ?
          </p>
        </Reveal>
      </div>

      <div className="relative flex h-[87vh] items-center justify-center overflow-hidden">
        <Reveal delay={180} className="relative z-20 px-[5%] text-center">
          <h2 className="mx-auto max-w-[1150px] font-title text-[clamp(2.4rem,6.5vw,112px)] font-bold leading-[1.08] text-white">
            Tout a commencé par une question de{" "}
            <span className="text-white/60">Zachée.</span>
          </h2>
        </Reveal>

        <Reveal
          from="left"
          delay={420}
          className="absolute bottom-0 left-0 z-30 w-[250px] max-w-[30%]"
        >
          <img
            src="/images/zachee.svg"
            alt="Portrait illustré de Zachée, planteur"
            className="w-full select-none"
          />
        </Reveal>
      </div>
    </section>
  );
}