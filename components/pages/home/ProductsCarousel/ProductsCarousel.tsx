// components/pages/home/ProductsCarousel/ProductsCarousel.tsx
"use client";

import { useEffect } from "react";

type CarouselItem = {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  video: string;
};

const items: CarouselItem[] = [
  {
    id: 1,
    label: "Cacao",
    title: "Cacao Premium",
    description:
      "Recolte a maturite optimale en Afrique de l'Ouest, fermente et seche selon des standards stricts.",
    video: "/videos/5.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364 1.386l-1.591 1.591M21 12h-2.25m-1.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Ananas",
    title: "Ananas Frais",
    description:
      "Cultive sous climat tropical, recolte a point et conditionne pour preserver sa fraicheur.",
    video: "/videos/4.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Banane",
    title: "Banane Plantain",
    description:
      "Varietes selectionnees pour leur rendement et leur tenue, ideales pour l'export.",
    video: "/videos/3.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Mais",
    title: "Mais Jaune",
    description:
      "Grains calibres, seches a l'humidite optimale, prets pour l'alimentation ou la transformation.",
    video: "/videos/2.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Cafe",
    title: "Cafe Arabica",
    description:
      "Cerises cueillies a la main, sechees au soleil et triees pour un profil aromatique riche.",
    video: "/videos/1.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Cajou",
    title: "Noix de Cajou",
    description:
      "Decortiquees et calibrees avec soin, pretes pour l'export ou la transformation.",
    video: "/videos/2.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    id: 7,
    label: "Manioc",
    title: "Manioc",
    description:
      "Racines fraiches ou transformees (gari, farine), adaptees aux marches locaux et internationaux.",
    video: "/videos/3.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364 1.386l-1.591 1.591M21 12h-2.25m-1.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    label: "Igname",
    title: "Igname",
    description:
      "Varietes robustes, stockees dans des conditions optimales pour une longue conservation.",
    video: "/videos/5.mp4",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export function ProductsCarousel() {
  useEffect(() => {
    const cards = document.querySelectorAll(".carousel-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.05) {
            const video = entry.target.querySelector("video");
            if (video) (video as HTMLVideoElement).pause();
          }
        });
      },
      { threshold: [0, 0.05] }
    );

    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const video = card.querySelector("video") as HTMLVideoElement | null;
      if (!video) return;

      const handleEnter = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      const handleLeave = () => {
        video.pause();
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
      observer.observe(card);

      cleanups.push(() => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const duplicatedItems = [...items, ...items];

  return (
    <section className="overflow-hidden py-14 md:py-20 bg-gradient-to-br from-[#bce1ff] via-[#e9f0f6] to-[#fafbf3]">
      <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="
              carousel-card group relative flex-shrink-0
              w-[220px] h-[320px]
              rounded-2xl overflow-hidden
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-[0_8px_32px_rgba(0,0,0,0.08)]
              transition-all duration-500 ease-out
              hover:w-[460px] hover:z-10
              hover:bg-white/15 hover:border-white/30
              hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]
            "
          >
            {/* Glass gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* FACE (avant hover) */}
            <div className="relative z-20 flex flex-col h-full p-6 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-[#1b7a4a]">
                  {item.icon}
                </div>
                <span className="text-[13px] font-semibold tracking-wide text-[#1b7a4a]">
                  {item.label}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-[16px] font-semibold text-[#14532f] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-[#4a5750] line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>

            {/* PANEL EXPAND (au hover) */}
            <div className="absolute inset-0 z-30 flex opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-white/95 backdrop-blur-md">
              <div className="flex-[1.15] relative overflow-hidden">
                <video
                  muted
                  loop
                  playsInline
                  src={item.video}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-6 flex flex-col justify-center border-l border-[#eef1ee]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#1b7a4a]/10 flex items-center justify-center text-[#1b7a4a]">
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-medium text-[#1b7a4a]">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-[#14532f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#4a5750]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}