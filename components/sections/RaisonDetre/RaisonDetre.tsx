export function RaisonDetre() {
  return (
    <section
      className="relative min-h-[100vh] overflow-hidden bg-cover bg-center bg-no-repeat px-[4%] py-12"
      style={{ backgroundImage: "url('/images/background-raison.png')" }}
    >
      <div className="mb-16 flex items-center gap-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffca3c] font-title text-2xl font-bold text-[#0b438c] ring-4 ring-white/70">
          1
        </span>
        <span className="rounded-xl bg-[#30a036] px-6 py-3 font-title text-lg font-bold text-white">
          POURQUOI – Notre raison d&apos;être
        </span>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div className="relative">
          <p className="max-w-[340px] text-right font-accent text-lg italic leading-relaxed text-[#0b438c]/80">
            Restaurer la dignité de ceux qui nourrissent le continent.
          </p>

          <svg
            viewBox="0 0 400 400"
            className="mt-8 w-[360px] max-w-full"
            aria-hidden="true"
          >
            <defs>
              <path
                id="arc-future-1"
                d="M 200,60 A 140,140 0 1 1 199.9,60"
                fill="none"
              />
              <path
                id="arc-future-2"
                d="M 200,95 A 105,105 0 1 1 199.9,95"
                fill="none"
              />
            </defs>

            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="-35 200 200"
                    to="325 200 200"
                    dur="24s"
                    repeatCount="indefinite"
                />
                <text
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    fontSize="44"
                    fontWeight="700"
                    letterSpacing="4"
                    className="font-title"
                >
                    <textPath href="#arc-future-1" startOffset="0%">
                    FUTURE THE FUTURE THE
                    </textPath>
                </text>
                </g>

                <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="345 200 200"
                    to="-15 200 200"
                    dur="18s"
                    repeatCount="indefinite"
                />
                <text
                    fill="#1a3fd8"
                    fontSize="44"
                    fontWeight="700"
                    letterSpacing="4"
                    className="font-title"
                >
                    <textPath href="#arc-future-2" startOffset="0%">
                    THE FUTURE THE FUT
                    </textPath>
                </text>
                </g>
          </svg>
        </div>

        <div className="rounded-[24px] bg-[#c9e6f7]/85 p-10 lg:mt-8">
          <p className="text-justify font-body text-lg leading-relaxed text-[#1a1a1a]">
            Nous croyons que la prospérité doit naître au pied du cacaoyer, pas
            dans une salle de marché à Londres. Nous voulons un monde où 10 000
            producteurs captent au moins 50 % de la valeur de leurs récoltes –
            contre moins de 35 % aujourd&apos;hui dans les circuits informels.
          </p>
        </div>
      </div>
    </section>
  );
}