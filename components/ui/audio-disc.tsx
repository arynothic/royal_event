'use client';

import React from 'react';

const AudioDisc: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white/90 text-center">
        Chill & Listen to Music 🎧
        <span className="block text-sm font-normal text-white/50 mt-1">
           We&apos;ll Take Care of the Rest
        </span>
      </h3>
      {/* First Track */}
      <div className="flex items-center gap-4 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
        <div className={`relative w-12 h-12 ${className}`}>
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </div>
        </div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/5ByLpy1feHoHXoM4IC4BvW?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      
      {/* Second Track */}
      <div className="flex items-center gap-4 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
        <div className={`relative w-12 h-12 ${className}`}>
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </div>
        </div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/7tNg3NMlZLpuhGVt0SUxT3?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      {/* Third Track */}
      <div className="flex items-center gap-4 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
        <div className={`relative w-12 h-12 ${className}`}>
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </div>
        </div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/3PkogUL3uwQsY129SjQZ2U?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      {/* Fourth Track */}
      <div className="flex items-center gap-4 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
        <div className={`relative w-12 h-12 ${className}`}>
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </div>
        </div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/4LMlVCXHJtCE9abhmn0mYo?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      {/* Fifth Track */}
      <div className="flex items-center gap-4 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
        <div className={`relative w-12 h-12 ${className}`}>
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </div>
        </div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/2pNdSpsMfrWrvYkqBizYbW?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AudioDisc;
