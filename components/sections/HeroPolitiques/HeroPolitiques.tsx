export function HeroPolitiques() {
  return (
    <section className="bg-white">
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} aria-hidden="true"/>

            <div className="absolute inset-0 bg-black/15" aria-hidden="true" />

            <h1 className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 text-center font-title text-[clamp(2rem,8.5vw,6.5rem)] font-bold leading-none text-white/95">
                Avenir radieux{" "}
                <span className="text-white/80">Bright future</span>
            </h1>

            <img src="/images/hero-enfants.png" alt="Deux enfants marchant sur un chemin de plantation" className="relative z-20 mx-auto h-[75vh] w-auto object-contain"/>

            {/* <div className="absolute inset-x-0 bottom-[-1px] z-30 flex justify-center" aria-hidden="true">
                <div className="h-[90px] w-[140%] rounded-t-[100%] bg-white" />
            </div> */}
        </div>

        {/* <p className="pb-14 text-center font-accent text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-light-gray)]">
            Pourquoi nous nous levons chaque matin ?
        </p> */}
    </section>
  );
}