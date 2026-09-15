export function ZacheeReponse() {
  return (
    <section
        className="my-[14px] flex h-[calc(100vh_-_28px)] flex-col items-center justify-center overflow-hidden rounded-[22px] bg-cover bg-center bg-no-repeat px-[5%] py-8 lg:py-12"
        style={{ backgroundImage: "url('/images/background-zachee-1.png')" }}
      >
      <img
        src="/images/zachee-reponse.png"
        alt="Portrait illustré de Zachée, planteur"
        className="mb-6 h-[clamp(280px,42vh,540px)] w-auto -translate-y-[5vh] select-none lg:mb-8"
      />

      <div className="max-w-[1300px] -translate-y-[11vh] text-center text-[clamp(22px,2.2vw,42px)] font-bold leading-snug text-[#ffffff] lg:leading-relaxed">
        <p>
          <span className="font-bold text-center text-[clamp(15px,2.1vw,25px)]">  Nous avons passé les mois suivants à construire une réponse.</span><br/>
          La voici : <br/> Aucun producteur qui travaille avec nous n’est un sac anonyme.
          Chaque lot que nous vous livrons raconte l'histoire d'un travail épanouissant, 
          d'une prospérité partagée.
        </p>

        <blockquote className="mt-5 italic lg:mt-7">
          Ce planteur, nous l’appelons Zachée. Son histoire est 
          le récit qui a donné leur forme à nos valeurs.
        </blockquote>
      </div>
    </section>
  );
}