'use client';

import React, { useState } from 'react';
import Image from "next/image";

export function ProsperProduction({
  bgImgSrc = "/images/Newsletter 2 - Site web Aaprovidir.png"
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  // Style texte : VGA Rounded + points bleus
  const dottedTextStyle = {
    fontFamily: '"Arial Rounded MT Bold", "Varela Round", "Nunito", "Helvetica Rounded", sans-serif',
    backgroundImage: `
      radial-gradient(circle at 1.1px 1.1px, #0066cc 0.85px, transparent 1px),
      linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)
    `,
    backgroundSize: '3.4px 3.4px, 100% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.5))',
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[16/8] min-h-[480px] md:min-h-[560px]">
        {/* Image de fond */}
        <Image
          src={bgImgSrc}
          alt="Production de bouteilles"
          fill
          priority
          className="object-cover object-center"
        />

        {/* ===== TEXTE + FORMULAIRE ALIGNÉS À DROITE ===== */}
        <div className="absolute bottom-0 right-0 z-20 w-full max-w-md sm:max-w-lg pr-5 sm:pr-8 md:pr-10 pb-0">
          
         

          {/* Formulaire */}
          <div className="bg-white/95 backdrop-blur-sm rounded-t-2xl shadow-2xl border border-white/60 p-5 sm:p-6">
            <h3 className="text-[15px] sm:text-base font-semibold text-[#1e293b] mb-4 text-center">
              Abonnez-vous à notre newsletter
            </h3>

            {submitted ? (
              <div className="py-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mb-2 text-lg font-bold">
                  ✓
                </div>
                <p className="text-sm font-medium text-emerald-800">
                  Merci ! Votre inscription est prise en compte.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="newsletter-email"
                    className="block text-xs text-gray-500 mb-1.5 font-medium"
                  >
                    Saisissez votre adresse e-mail
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@domaine.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-full bg-[#0066cc] hover:bg-[#0055b3] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  S'inscrire à la liste de diffusion
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-tight">
                  En vous inscrivant, vous acceptez de recevoir nos communications.
                  Vous pouvez vous désabonner à tout moment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProsperProduction;