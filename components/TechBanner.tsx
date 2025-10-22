// components/TechBanner.tsx
'use client';

import React from 'react';
import { FaPython, FaRProject, FaDatabase, FaTable, FaChartBar, FaChartPie } from 'react-icons/fa'; // Añadido FaChartPie
import { SiTableau } from 'react-icons/si'; // Quitado SiPowerBi

export default function TechBanner() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50 h-[72px] flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-white font-bold tracking-wide uppercase text-lg">
          Data<span className="text-blue-400">Σ</span>Statistics
        </h1>
        <nav className="flex space-x-6 text-sm">
          <a href="#inicio" className="text-white hover:text-neutral-200 transition-colors duration-300">
            Inicio
          </a>
          <a href="#sobre-mi" className="text-white hover:text-neutral-200 transition-colors duration-300">
            Sobre mí
          </a>
          <a href="#proyectos" className="text-white hover:text-neutral-200 transition-colors duration-300">
            Proyectos
          </a>
          <a href="#contacto" className="text-white hover:text-neutral-200 transition-colors duration-300">
            Contacto
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <span title="Python" className="text-white hover:text-yellow-400 transition-colors duration-300">
          <FaPython size={20} />
        </span>
        <span title="R" className="text-white hover:text-red-400 transition-colors duration-300">
          <FaRProject size={20} />
        </span>
        <span title="SQL" className="text-white hover:text-blue-400 transition-colors duration-300">
          <FaDatabase size={20} />
        </span>
        <span title="Excel" className="text-white hover:text-green-400 transition-colors duration-300">
          <FaTable size={20} />
        </span>
        <span title="Power BI" className="text-white hover:text-purple-400 transition-colors duration-300">
          <FaChartPie size={20} /> {/* Reemplazo de SiPowerBi */}
        </span>
        <span title="Tableau" className="text-white hover:text-orange-400 transition-colors duration-300">
          <SiTableau size={20} />
        </span>
        <span title="Charts" className="text-white hover:text-teal-400 transition-colors duration-300">
          <FaChartBar size={20} />
        </span>
      </div>
    </header>
  );
}