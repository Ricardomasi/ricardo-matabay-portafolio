'use client';

import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import('@tsparticles/engine');
      await loadSlim(tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: 0 },
    detectRetina: true,
    particles: {
      number: {
        value: 45,
        density: { enable: true, area: 800 },
      },
      color: { value: '#00bcd4' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
      links: {
        enable: true,
        distance: 130,
        color: '#00bcd4',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none' as const,
        outModes: { default: 'out' as const },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: false },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.6 } },
      },
    },
  };

  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      {init && <Particles id="tsparticles" options={particlesOptions} />}
    </div>
  );
}
