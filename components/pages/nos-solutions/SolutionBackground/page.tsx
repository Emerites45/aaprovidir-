"use client";

import { DM_Sans } from "next/font/google";
import { Users, Sprout, Factory, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ADVANTAGES = [
  { id: "structuration", icon: Users, label: "Nous vous structurons" },
  { id: "formation", icon: Sprout, label: "Nous vous formons" },
  {
    id: "equipement",
    icon: Factory,
    label: "Nous vous équipons d'unités de transformation au cœur de votre bassin",
  },
  {
    id: "mise-en-marche",
    icon: Handshake,
    label:
      "Nous assurons la mise en marché de vos produits auprès des meilleurs acheteurs",
  },
];

const CLOSING_HEADLINE =
  "Avec nous, vous êtes un entrepreneur agricole, pas un simple fournisseur de matière première.";

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function SolutionsBackgroundRacine() {
  const { ref: sectionRef, inView } = useInView<HTMLElement>(0.1);
  const words = CLOSING_HEADLINE.split(" ");

  return (
    <section
      ref={sectionRef}
      className="sr-section relative bg-repeat-x bg-top bg-[length:auto_100%] px-6 pb-14 pt-6 lg:px-16 lg:pb-20 lg:pt-8"
      style={{ backgroundImage: "url('/images/solution/background.jpeg')" }}
    >
      <div
        className={`${dmSans.className} relative z-10 mx-auto -mt-32 grid max-w-5xl gap-2 lg:-mt-24 lg:grid-cols-[1.05fr_1fr]`}
      >
        {/* Left card — récolte transformée */}
        <div
          className={`sr-card sr-card-left rounded-2xl bg-[#e7f2b8] p-8 shadow-lg ${
            inView ? "sr-card-in" : ""
          }`}
        >
          <h3 className="text-center text-2xl font-bold text-[#3c4a52]">
            Votre récolte vaut plus
          </h3>

          <div className="sr-photo mx-auto mt-6 max-w-[280px] overflow-hidden rounded-xl">
            <img
              src="/images/solution/artisan.jpeg"
              alt="Mains traitant des grains de cacao à l'aide d'un outil"
              className="sr-photo-img h-[180px] w-full object-cover"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <img
              src="/images/solution/cacao.jpeg"
              alt=""
              aria-hidden="true"
              className={`sr-ingredient sr-ingredient-a h-25 w-25 object-contain ${
                inView ? "sr-ingredient-in" : ""
              }`}
            />
            <p className="sr-arrow-text text-center text-lg font-bold leading-tight text-[#7a9a3a]">
              Lorsque vous la
              <br />
              transformez.
            </p>
            <img
              src="/images/solution/poudre.jpeg"
              alt=""
              aria-hidden="true"
              className={`sr-ingredient sr-ingredient-b h-30 w-30 object-contain ${
                inView ? "sr-ingredient-in" : ""
              }`}
            />
          </div>

          <p className="mt-4 text-center text-[15px] leading-relaxed text-[#1a1a1a]">
            Vous gagnerez sûrement plus, et{" "}
            <span className="sr-highlight font-semibold text-[#7a9a3a]">
              parfois, vous doublerez vos gains&nbsp;!
            </span>{" "}
            Ne vous contentez plus du 1/3 que vous obtenez dans les circuits
            habituels.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="sr-cta inline-block rounded-full bg-[#4a6a1f] px-8 py-3 font-bold text-white shadow-md"
            >
              <span className="sr-cta-label">Je veux gagner plus</span>
            </a>
          </div>
        </div>

        {/* Right column — notre avantage + liste */}
        <div className="flex flex-col gap-2">
          <div
            className={`sr-card sr-card-top rounded-xl bg-[#e7f2b8] p-8 shadow-lg ${
              inView ? "sr-card-in" : ""
            }`}
          >
            <h3 className="text-center text-2xl font-bold text-[#7a9a3a]">
              Notre avantage
            </h3>
            <p className="mt-4 text-center text-[15px] font-semibold leading-relaxed text-[#1a1a1a]">
              Nous ne sommes pas un acheteur de plus.
              <br />
              Nous sommes votre partenaire de bout en bout.
            </p>
          </div>

          <div
            className={`sr-card sr-card-list flex flex-1 flex-col justify-center gap-3 rounded-xl bg-[#e7f2b8] p-6 shadow-lg ${
              inView ? "sr-card-in" : ""
            }`}
          >
            {ADVANTAGES.map(({ id, icon: Icon, label }, i) => (
              <div
                key={id}
                className={`sr-advantage pb-3 ${inView ? "sr-advantage-in" : ""}`}
                style={{ transitionDelay: inView ? `${260 + i * 150}ms` : "0ms" }}
              >
                <div className="flex items-center gap-4">
                  <span className="sr-icon-badge flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <Icon className="sr-icon h-5 w-5 text-[#3c4a52]" aria-hidden="true" />
                  </span>
                  <p className="text-[15px] font-medium leading-snug text-[#1a1a1a]">
                    {label}
                  </p>
                </div>

                {i < ADVANTAGES.length - 1 && (
                  <svg
                    viewBox="0 0 400 14"
                    preserveAspectRatio="none"
                    className="sr-wave mt-3 h-[10px] w-full text-[#3c4a52]/40"
                    aria-hidden="true"
                    style={{ transitionDelay: inView ? `${400 + i * 150}ms` : "0ms" }}
                  >
                    <path
                      d="M4 10 Q 60 2, 130 6 T 260 5 T 396 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="mt-20 text-center text-5xl font-bold text-[#edfac1]">
        {words.map((word, i) => (
          <span
            key={i}
            className={`sr-word inline-block ${inView ? "sr-word-in" : ""}`}
            style={{ transitionDelay: inView ? `${900 + i * 55}ms` : "0ms" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </h3>

      <style jsx>{`
        /* ---------- Fond vivant en léger déplacement continu ---------- */
        .sr-section {
          animation: sr-bg-drift 25s ease-in-out infinite alternate;
        }
        @keyframes sr-bg-drift {
          0% {
            background-position: 0% top;
          }
          100% {
            background-position: 100% top;
          }
        }

        /* ---------- Cartes : arrivée en cascade + flottement organique permanent ---------- */
        .sr-card {
          opacity: 0;
          transform: translateY(36px) scale(0.98);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }
        .sr-card-left.sr-card-in {
          opacity: 1;
          animation: sr-card-in-left 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards,
            sr-float-slow 6s ease-in-out 0.8s infinite;
        }
        .sr-card-top.sr-card-in {
          opacity: 1;
          animation: sr-card-in-top 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards,
            sr-float-medium 7s ease-in-out 1s infinite;
        }
        .sr-card-list.sr-card-in {
          opacity: 1;
          animation: sr-card-in-list 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards,
            sr-float-slow 8s ease-in-out 1.2s infinite;
        }

        @keyframes sr-card-in-left {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes sr-card-in-top {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes sr-card-in-list {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sr-float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes sr-float-medium {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .sr-card:hover {
          transform: translateY(-6px) scale(1.01) !important;
          box-shadow: 0 22px 38px -12px rgba(58, 74, 40, 0.4);
          animation-play-state: paused;
        }

        /* ---------- Photo artisan : zoom doux au hover ---------- */
        .sr-photo {
          transform: translateY(10px);
        }
        .sr-card-in .sr-photo {
          animation: sr-rise 0.6s ease 0.3s forwards;
        }
        @keyframes sr-rise {
          to {
            transform: translateY(0);
          }
        }
        .sr-photo-img {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sr-photo:hover .sr-photo-img {
          transform: scale(1.08) rotate(0.5deg);
        }

        /* ---------- Cacao / poudre : entrée + flottement continu + hover ---------- */
        .sr-ingredient {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sr-ingredient-a {
          transform: translateX(-14px) rotate(-8deg) scale(0.85);
        }
        .sr-ingredient-b {
          transform: translateX(14px) rotate(8deg) scale(0.85);
        }
        .sr-ingredient-in {
          opacity: 1;
          transform: translateX(0) rotate(0deg) scale(1);
        }
        .sr-ingredient-in.sr-ingredient-a {
          animation: sr-bob-a 5s ease-in-out 0.9s infinite;
          transition-delay: 0.4s;
        }
        .sr-ingredient-in.sr-ingredient-b {
          animation: sr-bob-b 5.5s ease-in-out 0.9s infinite;
          transition-delay: 0.55s;
        }
        @keyframes sr-bob-a {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-7px) rotate(2deg);
          }
        }
        @keyframes sr-bob-b {
          0%,
          100% {
            transform: translateY(0) rotate(2deg);
          }
          50% {
            transform: translateY(-9px) rotate(-2deg);
          }
        }
        .sr-ingredient:hover {
          transform: scale(1.15) !important;
          animation-play-state: paused;
        }

        /* ---------- Texte "parfois vous doublerez..." : surlignage vivant permanent (pulsation douce) ---------- */
        .sr-highlight {
          background-image: linear-gradient(
            to right,
            rgba(122, 154, 58, 0.25),
            rgba(122, 154, 58, 0.25)
          );
          background-repeat: no-repeat;
          background-size: 0% 60%;
          background-position: 0 88%;
          transition: background-size 0.8s ease;
        }
        .sr-card-in .sr-highlight {
          background-size: 100% 60%;
          transition-delay: 1.1s;
          animation: sr-highlight-pulse 4s ease-in-out infinite 2s;
        }
        @keyframes sr-highlight-pulse {
          0%, 100% {
            background-image: linear-gradient(to right, rgba(122, 154, 58, 0.25), rgba(122, 154, 58, 0.25));
          }
          50% {
            background-image: linear-gradient(to right, rgba(122, 154, 58, 0.45), rgba(122, 154, 58, 0.45));
          }
        }

        /* ---------- CTA : halo qui respire + reflet au survol ---------- */
        .sr-cta {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease,
            background-color 0.3s ease;
        }
        .sr-card-in .sr-cta {
          animation: sr-cta-breathe 3.2s ease-in-out 1.4s infinite;
        }
        @keyframes sr-cta-breathe {
          0%,
          100% {
            box-shadow: 0 4px 14px rgba(74, 106, 31, 0.35);
          }
          50% {
            box-shadow: 0 8px 22px rgba(74, 106, 31, 0.55);
          }
        }
        .sr-cta:hover {
          transform: translateY(-2px) scale(1.03);
          background-color: #3d5819;
          animation-play-state: paused;
        }
        .sr-cta::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 70%
          );
          background-size: 220% 100%;
          background-position: 150% 0;
          transition: background-position 0.7s ease;
        }
        .sr-cta:hover::after {
          background-position: -50% 0;
        }
        .sr-cta-label {
          position: relative;
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .sr-cta:hover .sr-cta-label {
          transform: translateX(2px);
        }

        /* ---------- Icônes des avantages ---------- */
        .sr-advantage {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sr-advantage-in {
          opacity: 1;
          transform: translateX(0);
        }
        .sr-icon-badge {
          background-color: rgba(60, 74, 82, 0.08);
          transition: background-color 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sr-advantage-in .sr-icon-badge {
          animation: sr-icon-float 4.5s ease-in-out 1.6s infinite;
        }
        @keyframes sr-icon-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .sr-advantage:hover .sr-icon-badge {
          background-color: rgba(122, 154, 58, 0.22);
          transform: scale(1.12) rotate(-6deg);
          animation-play-state: paused;
        }
        .sr-icon {
          transition: transform 0.3s ease;
        }
        .sr-advantage:hover .sr-icon {
          transform: scale(1.1);
        }

        /* ---------- Ligne ondulée : se dessine puis ondule doucement ---------- */
        .sr-wave {
          opacity: 0;
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          transition: opacity 0.4s ease;
        }
        .sr-advantage-in .sr-wave {
          opacity: 1;
          animation: sr-wave-draw 0.9s ease forwards;
        }
        @keyframes sr-wave-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* ---------- Titre de clôture : arrivée mot par mot + pulsation légère permanente ---------- */
        .sr-word {
          opacity: 0;
          transform: translateY(14px);
          filter: blur(3px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.5s ease;
        }
        .sr-word-in {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .sr-section,
          .sr-card,
          .sr-photo,
          .sr-photo-img,
          .sr-ingredient,
          .sr-highlight,
          .sr-cta,
          .sr-cta::after,
          .sr-advantage,
          .sr-icon-badge,
          .sr-icon,
          .sr-wave,
          .sr-word {
            transition: none !important;
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            stroke-dashoffset: 0 !important;
            background-size: 100% 60% !important;
          }
        }
      `}</style>
    </section>
  );
}