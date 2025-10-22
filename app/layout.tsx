// app/layout.tsx
import './globals.css';
import ParticlesBackground from '@/components/particlesbackground';
import TechBanner from '@/components/TechBanner'; // Nueva importación
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ricardo Matabay | Economista & Data Analyst',
  description: 'Portafolio profesional de Ricardo Matabay - análisis de datos, reportería financiera y gestión administrativa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} text-[#ffffff] antialiased relative`} style={{ background: '#1a1a2e' }}>
        <ParticlesBackground />
        <TechBanner /> {/* Añadido el banner */}
        <main className="pt-[72px] min-h-screen"> {/* Espaciado superior para evitar superposición */}
          {children}
        </main>
      </body>
    </html>
  );
}