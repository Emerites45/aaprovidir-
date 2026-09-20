export function HeroPolitiques() {
  return (
    <section className="bg-[linear-gradient(to_right,#006af1,#80e9f9)]">
      <div className="relative h-screen overflow-hidden">
        <div
          className="rise-in absolute inset-0"
          style={{ animationDelay: "0ms" }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full bg-cover bg-bottom opacity-60"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
        </div>

        <div
          className="rise-in absolute inset-x-0 bottom-0 z-10"
          style={{ animationDelay: "220ms" }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1000 340"
            className="w-full"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <path
                id="arc-hero"
                d="M 500,148 A 332,332 0 1 1 499.9,148"
                fill="none"
              />
            </defs>

            <path
              d="M 212.3,340 A 320,320 0 0 1 787.7,340 Z"
              fill="#f3fff8"
              stroke="#f3fff8"
            />

            <g transform="rotate(-48 500 480)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 500 480"
                  to="180 500 480"
                  dur="30s"
                  repeatCount="indefinite"
                />
                {["0%", "50%"].map((offset) => (
                  <text
                    key={offset}
                    className="font-title"
                    fill="#f3fff8"
                    fontSize="64"
                    fontWeight="700"
                    textAnchor="start"
                  >
                    <textPath href="#arc-hero" startOffset={offset}>
                      Nourir un Avenir Radieux
                    </textPath>
                  </text>
                ))}
              </g>
            </g>
          </svg>
        </div>

        {/* Le -translate-x-1/2 reste sur l'img : l'animation occupe le transform du parent */}
        <div
          className="rise-in absolute bottom-0 left-1/2 z-20 h-[90%]"
          style={{ animationDelay: "380ms" }}
        >
          <img
            src="/images/enfant.png"
            alt="Deux enfants marchant sur un chemin de plantation"
            className="h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />
        </div>

        <h1 className="sr-only">Nourir un Avenir Radieux</h1>
      </div>
    </section>
  );
}