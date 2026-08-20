export function ZacheeQuote() {
  return (
    <section
      className="flex min-h-[100vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-[5%] py-24"
      style={{ backgroundImage: "url('/images/background-quote.png')" }}
    >
      <img
        src="/images/zachee.jpg"
        alt="Portrait illustré de Zachée, planteur"
        className="mb-14 w-[280px] select-none"
      />

      <div className="max-w-[900px] text-center text-[25px] font-bold leading-relaxed text-[#0b438c]">
        <p>
          Une nuit de novembre 2019, sur la piste de Biyombulu, un vieux planteur
          nous a regardés droit dans les yeux et nous a dit :
        </p>

        <blockquote className="mt-10 italic">
          « Vous les jeunes de la ville, vous venez avec vos téléphones et vos
          grands mots. Mais est-ce que vous nous voyez vraiment, nous, ou est-ce
          que vous ne voyez que nos sacs de cacao ? »
        </blockquote>
      </div>
    </section>
  );
}