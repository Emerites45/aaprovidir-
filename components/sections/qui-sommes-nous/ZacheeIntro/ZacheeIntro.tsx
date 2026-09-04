export function ZacheeIntro() {
  return (
    <section
      className="overflow-hidden rounded-b-[22px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background-zachee-1.png')" }}
    >
      <div className="flex h-[10vh] translate-y-[100px] items-center justify-center">
        <p className="text-center font-accent text-[clamp(0.85rem,1.6vw,20px)] font-semibold uppercase tracking-[0.05em] text-[#ffffff]">
          Pourquoi nous nous levons chaque matin ?
        </p>
      </div>

      <div className="relative flex h-[87vh] items-center justify-center overflow-hidden">
        <div className="relative z-20 px-[5%] text-center">
          <h2 className="mx-auto max-w-[1150px] font-title text-[clamp(2.4rem,6.5vw,112px)] font-bold leading-[1.08] text-white">
            Tout a commencé par une question de{" "}
            <span className="text-white/60">Zachée.</span>
          </h2>
        </div>

        <img
          src="/images/zachee.svg"
          alt="Portrait illustré de Zachée, planteur"
          className="absolute bottom-0 left-0 z-30 w-[250px] max-w-[25%] select-none"
        />
      </div>
    </section>
  );
}