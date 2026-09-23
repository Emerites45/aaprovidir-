// components/pages/home/ProductsCarousel/ProductsCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  id: number;
  label: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  video: string;
};

const items: CarouselItem[] = [
  {
    id: 1,
    label: "Cocoa",
    tag: "Cash crop",
    title: "Cocoa",
    description:
      "Cameroon's cocoa belt supplies raw beans to processors worldwide — Aaprovidir connects growers directly to buyers, cutting out costly middlemen.",
    video: "/videos/5-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364 1.386l-1.591 1.591M21 12h-2.25m-1.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Plantain",
    tag: "Staple food",
    title: "Plantain",
    description:
      "A daily staple across Central Africa — our network helps smallholder farmers track yield and reach urban markets faster, before spoilage sets in.",
    video: "/videos/1-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Maize",
    tag: "Grain",
    title: "Maize",
    description:
      "Grown nationwide and central to food security — real-time market data helps farmers time their harvest and sale for the best price.",
    video: "/videos/2-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Coffee",
    tag: "Export crop",
    title: "Coffee",
    description:
      "Highland cooperatives grow Robusta and Arabica for export — Aaprovidir helps track quality grading from farm to port.",
    video: "/videos/3-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Cassava",
    tag: "Staple food",
    title: "Cassava",
    description:
      "A resilient root crop turned into flour, garri, and starch — our tools help processors forecast supply from thousands of small plots.",
    video: "/videos/4-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364 1.386l-1.591 1.591M21 12h-2.25m-1.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Palm Oil",
    tag: "Agro-industry",
    title: "Palm Oil",
    description:
      "From smallholder plantations to local mills — we help producers plan logistics around harvest windows and mill capacity.",
    video: "/videos/5-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    id: 7,
    label: "Groundnuts",
    tag: "Legume",
    title: "Groundnuts",
    description:
      "A key protein and income source in the north — better market visibility means fewer post-harvest losses for growers.",
    video: "/videos/1-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: 8,
    label: "Njangsa",
    tag: "Spice",
    title: "Njangsa",
    description:
      "A prized local spice with growing export interest — traceability tools help buyers verify origin and quality.",
    video: "/videos/2-optimized.webm",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

export function ProductsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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
        setIsPaused(true); // stop le défilement
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      const handleLeave = () => {
        setIsPaused(false); // reprend le défilement
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
    <section className="overflow-hidden py-14 md:py-20 bg-[#f5f3ef]">
      <div
        ref={trackRef}
        className="flex gap-6 w-max animate-marquee"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="
              carousel-card group relative flex-shrink-0
              w-[200px] h-[300px]
              rounded-2xl overflow-hidden
              bg-white/80 backdrop-blur-xl
              border border-white/40
              shadow-[0_2px_8px_rgba(27,40,30,0.06)]
              transition-all duration-550 ease-[cubic-bezier(0.25,0.8,0.25,1)]
              hover:w-[440px] hover:z-10
              hover:shadow-[0_24px_48px_-12px_rgba(27,40,30,0.28)]
            "
          >
            {/* FACE (avant hover) */}
            <div className="absolute inset-0 z-20 flex items-center justify-center gap-2.5 p-[22px] transition-opacity duration-300 group-hover:opacity-0">
              <div className="w-8 h-8 rounded-full bg-[#1b7a4a]/10 flex items-center justify-center text-[#1b7a4a]">
                {item.icon}
              </div>
              <span className="text-[12px] font-bold tracking-[0.8px] uppercase text-[#1b7a4a]">
                {item.label}
              </span>
            </div>

            {/* PANEL EXPAND (après hover) */}
            <div className="absolute inset-0 z-30 flex opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-white">
              <div className="flex-[1.1] relative overflow-hidden">
                <video
                  muted
                  loop
                  playsInline
                  preload="none"
                  src={item.video}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 px-[22px] py-[26px] flex flex-col justify-center border-l border-[#eef1ee]">
                <span className="text-[10.5px] font-bold tracking-[1px] uppercase text-[#1b7a4a] mb-2.5">
                  {item.tag}
                </span>

                <h3 className="text-[20px] font-bold tracking-[-0.3px] leading-[1.15] text-[#14532f] mb-2.5">
                  {item.title}
                  <span className="block w-7 h-[3px] bg-[#1b7a4a] rounded-sm mt-2" />
                </h3>

                <p className="text-[13px] leading-[1.6] text-[#4a5750] mt-3.5">
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