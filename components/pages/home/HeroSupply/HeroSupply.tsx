import { ReactNode } from "react";
import Link from "next/link";
import { Badge, Card, IconButton } from "@/components/ui";

export interface HeroSupplyCard {
  title: ReactNode;
  tag: string;
  image: string;
}

const CARDS: HeroSupplyCard[] = [
  {
    title: (
      <>
        Cacao
        <br />
        <span>durable</span>
      </>
    ),
    tag: "Fair Fermented",
    image: "/images/cacao.jpg",
  },
  {
    title: (
      <>
        Vivres
        <br />
        <span>sans formol</span>
      </>
    ),
    tag: "Tests à l'appui",
    image: "/images/plantain.jpg",
  },
];

const CATEGORIES = [
  { label: "Céréales", strong: "durables", image: "/images/mais.png" },
  { label: "Fruits", strong: "durables", image: "/images/fruits.png" },
  { label: "Produits", strong: "forestiers", image: "/images/forestiers.png" },
];

export function HeroSupply() {
  return (
    <section className="bg-gradient-to-b from-[#bce1ff] via-[#e9f0f6] to-[#fafbf3] px-[5%] pt-[120px]">
      <div className="mx-auto max-w-[1400px] pb-10">
        <h1 className="mb-8 max-w-[800px] text-[2.4rem] font-bold leading-tight text-[#595959]">
          Un approvisionnement <span className="text-[#07796b]">fiable et vertueux</span>
          <br />
          pour vous qui nourrissez le monde.
        </h1>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <Card
              key={card.tag}
              image={card.image}
              imagePriority={i === 0}
              shine
              overlay
              className="h-[260px] p-6"
            >
              <h3 className="font-title text-[1.7rem] font-bold leading-tight">{card.title}</h3>
              <div className="flex items-center justify-between">
                <Badge variant="glass">{card.tag}</Badge>
                <IconButton
                  variant="light"
                  aria-label={`En savoir plus sur ${card.tag}`}
                  icon={<i className="bi bi-arrow-up-right" />}
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] bg-white p-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.label} href="#" className="flex items-center gap-3 px-5 py-4 no-underline">
              <span className="text-sm text-[color:var(--color-dark-gray)]">
                {cat.label} <strong className="font-bold text-[color:var(--color-green-guardian)]">{cat.strong}</strong>
              </span>
              <img src={cat.image} alt={`${cat.label} ${cat.strong}`} className="h-[45px] w-[45px] object-contain" />
            </Link>
          ))}
          <Link
            href="#"
            className="flex items-center gap-4 rounded-2xl bg-[color:var(--color-off-white)] px-5 py-3 no-underline shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
          >
            <img src="/images/catalogue.jpg" alt="Catalogue" className="h-[45px] w-[45px] rounded-[10px] object-cover" />
            <span className="text-sm text-[color:var(--color-dark-gray)]">
              Parcourez notre <strong className="block font-bold text-[color:var(--color-cyan-innovation)]">Catalogue de produits</strong>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
