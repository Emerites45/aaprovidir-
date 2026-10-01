import Link from "next/link";

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M10 8.5v7l6-3.5-6-3.5Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#BCE1FF] via-[#E9F0F6] to-[#FAFBF3] px-5 py-20 sm:px-8"
    >
      {/* Soft atmospheric gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse at 15% 20%,
              rgba(188, 225, 255, 0.45),
              transparent 48%
            ),
            radial-gradient(
              ellipse at 85% 80%,
              rgba(220, 232, 208, 0.38),
              transparent 48%
            )
          `,
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Heading */}
        <h1 className="mx-auto w-full text-center text-[clamp(2.4rem,5.1vw,5.6rem)] font-bold leading-[1.04] tracking-[-0.055em]">
          <span className="block bg-gradient-to-r from-[#103D36] via-[#244B46] to-[#53645E] bg-clip-text pb-1 text-transparent">
            Des opérations agricoles
          </span>

          <span className="mt-1 flex flex-wrap items-center justify-center gap-x-3">
            <span className="bg-gradient-to-r from-[#20864B] to-[#36A263] bg-clip-text text-transparent">
              plus simples,
            </span>

            <span className="bg-gradient-to-r from-[#82B1EB] to-[#6095E3] bg-clip-text text-transparent">
              pour tous.
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-[#53665E] sm:mt-8 sm:text-lg lg:text-[21px] lg:leading-9">
          Acheteurs et démarcheurs, suivez et gérez vos opérations agricoles
          <br className="hidden sm:block" /> en toute simplicité, au même
          endroit.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-6">
          <Link
            href="#fonctionnalites"
            className="shimmer-btn shimmer-green group relative isolate inline-flex min-h-[60px] w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#258653] to-[#32965D] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(36,117,73,0.20)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(36,117,73,0.28)] sm:w-auto sm:min-w-[285px] sm:text-base"
          >
            <span className="relative z-10">Découvrir Aagriflow</span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>

          <Link
            href="#demo"
            className="shimmer-btn shimmer-light group relative isolate inline-flex min-h-[60px] w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#C9D8D9] bg-white/35 px-8 py-4 text-sm font-medium text-[#536C69] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            <span className="relative z-10">
              <PlayIcon />
            </span>

            <span className="relative z-10">Voir la démo</span>
          </Link>
        </div>

        {/* Section indicator */}
        <div
          className="mt-12 flex items-center justify-center sm:mt-14"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-[#C8D1D5]/80 sm:w-16" />
          <span className="h-[3px] w-16 rounded-full bg-[#2E8B57] sm:w-[68px]" />
          <span className="h-px w-14 bg-[#C8D1D5]/80 sm:w-16" />
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-12 w-full sm:h-16"
      >
        <path
          d="M0 50C240 83 470 98 720 76C970 54 1200 22 1440 38V100H0Z"
          fill="#FAFBF3"
        />
      </svg>
    </section>
  );
}
