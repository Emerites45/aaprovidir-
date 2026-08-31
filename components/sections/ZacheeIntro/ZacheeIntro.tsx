export function ZacheeIntro() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background-zachee-1.png')" }}
    >
      <div className="flex h-[10vh] items-center justify-center rounded-b-[15px] bg-[#f3fff8]">
        <p className="text-center font-accent text-[clamp(1.1rem,3vw,32px)] font-semibold uppercase tracking-[0.05em] text-[#8ac6da]">
          Pourquoi nous nous levons chaque matin ?
        </p>
      </div>

      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <div className="relative z-20 px-[5%] text-center">
          <h2 className="mx-auto max-w-[860px] font-title text-[68px] font-bold leading-tight text-white">
            Tout a commencé par une question de{" "}
            <span className="text-white/60">Zachée.</span>
          </h2>
        </div>

        <img
          src="/images/zachee.png"
          alt="Portrait illustré de Zachée, planteur"
          className="absolute bottom-0 left-0 z-30 w-[400px] max-w-[25%] select-none"
        />
      </div>
    </section>
  );
}