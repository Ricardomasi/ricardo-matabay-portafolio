// components/particlesbackground.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim(window.tsParticles).then(() => setInit(true));
  }, []);

  const particlesOptions = {
    fpsLimit: 20,
    fullScreen: { enable: true },
    particles: {
      number: { value: 40, density: { enable: true, value_area: 600 } },
      color: { value: '#89fc00' },
      shape: { type: 'circle' },
      opacity: { value: 0.9, random: true },
      size: { value: { min: 2, max: 6 } },
      links: {
        enable: true,
        distance: 120,
        color: '#89fc00',
        opacity: 0.8,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        //ELIMINADO: random: false
		//ELIMINADO: straight: false
        outModes: { default: 'out' },
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: false } },
      modes: { grab: { distance: 150, line_linked: { opacity: 0.7 } } },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      {init && <Particles id="tsparticles" options={particlesOptions} />}
    </div>
  );
}