export function ZacheeQuote() {
  return (
    <section
        className="my-[14px] flex h-[calc(100vh_-_28px)] flex-col items-center justify-center overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat px-[5%] py-8 lg:py-12"
        style={{ backgroundImage: "url('/images/background-quote.png')" }}
      >
      <img
        src="/images/zachee-section2.svg"
        alt="Portrait illustré de Zachée, planteur"
        className="mb-6 h-[clamp(280px,42vh,540px)] w-auto -translate-y-[5vh] select-none lg:mb-8"
      />

      <div className="max-w-[1250px] -translate-y-[11vh] text-center text-[clamp(22px,2.2vw,42px)] font-bold leading-snug text-[#0b438c] lg:leading-relaxed">
        <p>
          Une nuit de novembre 2019, sur la piste de Biyombulu, un vieux planteur
          nous a regardés droit dans les yeux et nous a dit :
        </p>

        <blockquote className="mt-5 italic lg:mt-7">
          « Vous les jeunes de la ville, vous venez avec vos téléphones et vos
          grands mots. Mais est-ce que vous nous voyez vraiment, nous, ou est-ce
          que vous ne voyez que nos sacs de cacao ? »
        </blockquote>
      </div>
    </section>
  );
}