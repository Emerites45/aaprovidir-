export function CercleOr() {
  return (
    <section className="relative my-[14px] flex min-h-[calc(100vh_-_28px)] items-center overflow-hidden rounded-[22px] bg-[#f3fff8] px-[5%] py-16 lg:px-[3%]">
      <div style={{ fontFamily: '"Google Sans", sans-serif' }} className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <h2 className="max-w-[640px] font-title text-[clamp(2.6rem,4.8vw,4.6rem)] font-black leading-tight text-[#40aa43] lg:pl-[4%]">
          Ce Cercle d&apos;Or n&apos;est pas une figure de style.
        </h2>

        <div className="relative w-full max-w-[min(720px,72vh)] lg:mr-[5%] lg:shrink-0">
          <div className="relative aspect-square translate-y-[5vh]">
            <div
              className="absolute inset-0 -translate-y-[12%] rounded-full border-2 border-[#40aa43]/45"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 62%, transparent 88%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 62%, transparent 88%)",
              }}
              aria-hidden="true"
            />

            <div
              className="absolute inset-[9%] overflow-hidden rounded-full"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 58%, transparent 82%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 58%, transparent 82%)",
              }}
              aria-hidden="true"
            >
              <img
                src="/images/arbre.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <img
              src="/images/logo-vert.png"
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 top-[-11%] z-30 w-[11%] min-w-[52px] -translate-x-1/2 -translate-y-1/2 select-none"
            />

            <img
              src="/images/fille.png"
              alt="Enfant tenant une motte de terre et de jeunes pousses"
              className="absolute bottom-0 left-1/2 z-20 h-[124%] w-auto max-w-none -translate-x-1/2 select-none"
            />

            <span className="absolute left-[-10%] top-[42%] z-30 max-w-[46%] rounded-full bg-[#40aa43] px-4 py-2 font-title text-[clamp(11px,1.3vw,16px)] font-bold leading-snug text-white shadow-md">
              C&apos;est notre boussole stratégique
            </span>

            <span className="absolute right-[-12%] top-[58%] z-30 max-w-[40%] rounded-full bg-[#40aa43] px-4 py-2 text-center font-title text-[clamp(11px,1.3vw,16px)] font-bold leading-snug text-white shadow-md">
              La réponse concrète à la question de Zachée
            </span>

            <span className="absolute bottom-[-3%] left-1/2 z-30 w-[78%] -translate-x-1/2 rounded-full bg-[#ffca3c] px-6 py-2 text-center font-title text-[clamp(12px,1.5vw,19px)] font-bold leading-snug text-white shadow-md">
              Et notre façon de nourrir un Avenir radieux.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}