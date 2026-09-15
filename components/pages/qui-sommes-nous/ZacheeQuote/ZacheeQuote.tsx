export function ZacheeQuote() {
  return (
    <section
        className="my-[14px] flex h-[calc(200vh_-_8px)] flex-col items-center justify-center overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat px-[5%] py-8 lg:py-12"
        style={{ backgroundImage: "url('/images/background-quote.png')" }}
      >
      <img
        src="/images/zachee-reponse.png"
        alt="Portrait illustré de Zachée, planteur"
        className="mb-6 h-[clamp(380px,302vh,1300px)] w-auto -translate-y-[35vh] select-none lg:mb-8"
      />

      <div className="max-w-[1250px] -translate-y-[45vh] text-center text-[clamp(22px,2.2vw,42px)] font-bold leading-snug text-[#0b438c] lg:leading-relaxed">
        <p>
          Un soir, sur une piste de l’arrière-pays, un vieux planteur 
          nous a regardés et nous a dit :
        </p>

        <blockquote className="mt-5 italic lg:mt-7">
          « Vous venez avec vos téléphones et vos grands mots. 
          Mais est-ce que vous nous voyez vraiment, ou est-ce que vous ne 
          voyez que nos sacs, nos régimes ? »

        </blockquote>
      </div>
    </section>
  );
}