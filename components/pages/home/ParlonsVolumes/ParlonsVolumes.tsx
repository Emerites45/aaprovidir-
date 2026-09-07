'use client';

import React, { useState, useRef, useEffect } from 'react';

/**
 * Composant ParlonsVolumes
 * 
 * @param {string} videoSrc - Chemin vers votre vidéo dans /public (ex: "/videos/cocoa-volumes.mp4")
 * @param {string} posterSrc - Image de secours si la vidéo ne charge pas ou est en pause
 * @param {string} phoneNumber - Numéro de téléphone pour l'action "Par appel"
 * @param {string} emailAddress - Adresse e-mail pour l'action "Par mail"
 */
export function ParlonsVolumes({
  videoSrc = "/videos/cocoa-volumes.mp4",
  posterSrc = "/images/cocoa-background-fallback.jpg",
  phoneNumber = "+237 600 00 00 00",
  emailAddress = "contact@back2mboa.cm"
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'call' | 'mail' | null

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // En cas de blocage d'autoplay par le navigateur, on garde en pause
        setIsPlaying(false);
      });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] bg-[#1a0d08] text-white overflow-hidden flex items-center justify-start select-none">
      
      {}
      <div className="absolute inset-0 z-0">
        {!hasError ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            loop
            muted={isMuted}
            playsInline
            autoPlay
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover object-center transition-transform duration-1000 scale-105"
          />
        ) : (
          /* Image de secours si vidéo absente */
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${posterSrc})` }}
          />
        )}

        {/* Degradé vignette sombre pour garantir la parfaite lisibilité des textes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/30 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 flex flex-col justify-between min-h-[500px] sm:min-h-[580px]">
        
        {/* BLOC HAUT-GAUCHE : TITRE ET PILULES DE CONTACT */}
        <div className="max-w-xl space-y-6 sm:space-y-8 animate-fadeIn">
          
          {/* Titre Principal */}
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-lg">
            Parlons de <br />
            <span className="font-normal">vos volumes</span>
          </h2>

          {/* Boutons d'actions Pilules */}
          <div className="flex items-center gap-3.5 sm:gap-4 pt-2">
            
            {/* Bouton Par appel (Vert vif) */}
            <button
              type="button"
              onClick={() => setActiveModal('call')}
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Par appel</span>
            </button>

            {/* Bouton Par mail (Semi-transparent / Blanc cassé) */}
            <button
              type="button"
              onClick={() => setActiveModal('mail')}
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white/80 hover:bg-white text-[#2a2a2a] font-medium text-sm sm:text-base tracking-wide backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Par mail</span>
            </button>

          </div>
        </div>

        {}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Mettre en pause la vidéo" : "Lancer la vidéo"}
            className="pointer-events-auto group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            {/* Effet d'onde en arrière plan */}
            <span className="absolute -inset-2 rounded-full border border-white/20 animate-ping opacity-40 pointer-events-none" />

            {isPlaying ? (
              /* Icône Pause */
              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-white/90 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              /* Icône Play */
              <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current text-white/90 group-hover:text-white transition-colors ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#1f140e] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>

            {activeModal === 'call' && (
              <div className="space-y-4 text-center">
                <div className="w-14 h-14 rounded-full bg-[#10b981]/20 text-[#10b981] mx-auto flex items-center justify-center text-2xl">
                  📞
                </div>
                <h3 className="text-2xl font-semibold">Contact Téléphonique</h3>
                <p className="text-sm text-gray-300">
                  Planifiez un échange direct avec nos experts logistiques & approvisionnement.
                </p>
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="block w-full py-3.5 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-base transition-all shadow-lg"
                >
                  Appeler {phoneNumber}
                </a>
              </div>
            )}

            {activeModal === 'mail' && (
              <div className="space-y-4 text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 text-white mx-auto flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <h3 className="text-2xl font-semibold">Envoyer un message</h3>
                <p className="text-sm text-gray-300">
                  Transmettez-nous le détail de vos volumes estimés par e-mail.
                </p>
                <a
                  href={`mailto:${emailAddress}?subject=Demande%20d'informations%20Volumes`}
                  className="block w-full py-3.5 rounded-2xl bg-white hover:bg-gray-100 text-[#1f140e] font-bold text-base transition-all shadow-lg"
                >
                  Écrire à {emailAddress}
                </a>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}

export default ParlonsVolumes;