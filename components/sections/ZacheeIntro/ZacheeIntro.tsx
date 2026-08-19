export function ZacheeIntro() {
  return (
    <section className="bg-white">
      <p className="bg-[#f3fff8] py-6 text-center font-accent text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-light-gray)]">
        Pourquoi nous nous levons chaque matin ?
      </p>

      <div className="relative min-h-[520px] overflow-hidden bg-[linear-gradient(to_right,#006af1,#80e9f9)]">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at 0% 8%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 12%, rgba(255,255,255,0) 45%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-[-12%] top-[-18%] z-10 h-[130%] w-[70%] rotate-[24deg] opacity-70 blur-[18px]"
          style={{
            background:
              "linear-gradient(100deg, rgba(255,255,255,0) 42%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 58%)",
          }}
          aria-hidden="true"
        />

        <img
          src="/images/nuage-haut.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 w-[45%] max-w-[620px] select-none"
        />
        <img
          src="/images/nuage-bas.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[60%] max-w-[800px] -translate-x-1/2 select-none"
        />

        <div className="relative z-20 mx-auto max-w-[1100px] px-[5%] py-28">
          <span
            className="mb-4 block h-5 w-5 rounded-full bg-[color:var(--color-cyan-innovation)]"
            aria-hidden="true"
          />
          <h2 className="max-w-[820px] font-title text-[clamp(1.9rem,4.5vw,3.4rem)] font-bold leading-tight text-white">
            Tout a commencé par une question de{" "}
            <span className="text-white/60">Zachée.</span>
          </h2>
        </div>

        <img
          src="/images/zachee.png"
          alt="Portrait illustré de Zachée, planteur"
          className="absolute bottom-0 left-0 z-20 w-[200px] max-w-[22%] select-none"
        />
      </div>
    </section>
  );
}