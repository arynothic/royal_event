"use client";

import Particles from "@/components/reactdev/Backgrounds/Particles/Particles";

interface ParticleBackgroundProps {
  children?: React.ReactNode;
}

export function ParticleBackground({ children }: ParticleBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-blue-900/20" />
      {children}
    </div>
  );
}
