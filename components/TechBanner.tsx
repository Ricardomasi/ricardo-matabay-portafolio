// components/TechBanner.tsx
'use client';

import React from 'react';
import { FaPython, FaRProject, FaDatabase, FaTable, FaChartBar, FaChartPie } from 'react-icons/fa';
import { SiTableau } from 'react-icons/si';

export default function TechBanner() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50 h-[72px] flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <h1 className="text-white font-bold tracking-wide uppercase text-sm sm:text-lg">
          Data<span className="text-blue-400">Σ</span>Statistics
        </h1>
        <nav className="hidden sm:flex space-x-2 sm:space-x-6 text-xs sm:text-sm">
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
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span title="Python" className="text-white hover:text-yellow-400 transition-colors duration-300">
          <FaPython className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span title="R" className="text-white hover:text-red-400 transition-colors duration-300">
          <FaRProject className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span title="SQL" className="text-white hover:text-blue-400 transition-colors duration-300">
          <FaDatabase className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span title="Excel" className="text-white hover:text-green-400 transition-colors duration-300">
          <FaTable className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span title="Power BI" className="text-white hover:text-purple-400 transition-colors duration-300">
          <FaChartPie className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span title="Tableau" className="text-white hover:text-orange-400 transition-colors duration-300">
          <SiTableau className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span title="Charts" className="text-white hover:text-teal-400 transition-colors duration-300">
          <FaChartBar className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </div>
    </header>
  );
}