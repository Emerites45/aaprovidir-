export function HeroPolitiques() {
  return (
    <section className="bg-[linear-gradient(to_right,#006af1,#80e9f9)]">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom opacity-60"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1000 340" className="w-full" preserveAspectRatio="xMidYMax meet">
            <defs>
              <path id="arc-hero" d="M 45,350 A 460,220 0 0 1 955,350" fill="none" />
            </defs>
            <path d="M 105,340 A 400,295 0 0 1 895,340 Z" fill="#f3fff8" />
            <text className="font-title" fill="white" fontSize="72" fontWeight="700" textAnchor="middle">
              <textPath href="#arc-hero" startOffset="50%">
                Avenir radieux Bright future
              </textPath>
            </text>
          </svg>
        </div>

        <img
          src="/images/hero-enfant.png"
          alt="Deux enfants marchant sur un chemin de plantation"
          className="relative bottom-[160px] z-20 mx-auto h-[120%] w-auto object-contain object-bottom"
        />

        <h1 className="sr-only">Avenir radieux — Bright future</h1>
      </div>
    </section>
  );
}