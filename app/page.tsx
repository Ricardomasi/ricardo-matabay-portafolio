// app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* Sección Inicio */}
      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="mb-8">
          <Image
            src="/perfil.png"
            alt="Ricardo Matabay"
            width={200}
            height={200}
            className="rounded-full shadow-lg border-2 border-[#f5ebe0]"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Hola, soy Ricardo Matabay</h1>
        <p className="text-lg text-[#73fbd3] max-w-md">
          Economista y en camino a ser ingeniero en ciencias de datos e IA.
          Bienvenido a mi portafolio, donde comparto mi viaje en análisis de
          datos.
        </p>
        <div className="flex space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/ricardo-matabay/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ricardomasi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.youtube.com/@ricciduck" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300">
            <FaYoutube size={24} />
          </a>
        </div>
      </section>

      {/* Sección Sobre mí */}
      <section
        id="sobre-mi"
        className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#1a1a2e] bg-opacity-90"
      >
        <div className="flex flex-col md:flex-row w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-12">
          {/* Columna izquierda */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-6">Sobre mí</h2>
            <p className="text-lg text-[#ffea00] max-w-md text-justify">
              En los últimos 10 años he trabajado como asistente en áreas contables,
              administrativas, financieras y de atención al cliente. En todas ellas he
              realizado actividades relacionadas a ETL y el uso de herramientas
              como son <strong>Excel, Power BI, R, Python</strong>. Me gusta el
              análisis de datos y la inteligencia artificial, por lo que actualmente,
              estoy reforzando y desarrollando nuevas habilidades en este vasto campo.
              Mi objetivo es combinar mi experiencia como economista y la tecnología
              para transformar información en conocimiento útil.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="flex-1 text-center md:text-left relative">
            <h2 className="text-3xl font-bold text-teal-50 mb-4">Educación</h2>
            <p className="text-lg text-[#caf0f8] max-w-lg">
              <strong>Universidad Central del Ecuador</strong> - Economista (RS-RN1005—2017)
            </p>
            <p className="text-lg text-[#caf0f8] max-w-lg">
              Oracle Next Education - Especialización en Ciencia de Datos (2025 - 2026)
            </p>

            <a
              href="/CV_RicardoMatabay_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Descargar CV
            </a>
          </div> {/*Cierre correcto de la columna derecha */}
        </div> {/*Cierre correcto del contenedor de columnas */}
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="min-h-screen py-20 px-4 flex items-center bg-[#1a1a2e] bg-opacity-90">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Proyecto 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src="/project1.jpg"
                  alt="KPI Productividad Laboral"
                  fill
                  className="object-cover rounded-t-xl group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">KPI Productividad Laboral</h3>
                <p className="text-gray-300 mb-4">
                  Dashboard interactivo para visualización de métricas de los empleados de una institución pública.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-green-900/50 text-green-200 text-sm rounded-full">Tableau</span>
                </div>
                <a
                  href="https://github.com/tu-repositorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver en GitHub
                </a>
              </div>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src="/project2.jpg"
                  alt="Predictor de Mercado"
                  fill
                  className="object-cover rounded-t-xl group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Predictor de Mercado</h3>
                <p className="text-gray-300 mb-4">
                  Modelo de machine learning para predecir tendencias de mercado con 92% de precisión.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-200 text-sm rounded-full">R</span>
                  <span className="px-3 py-1 bg-yellow-900/50 text-yellow-200 text-sm rounded-full">Python</span>
                </div>
                <a
                  href="https://github.com/tu-repositorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver en GitHub
                </a>
              </div>
            </motion.div>

            {/* Proyecto 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src="/project3.jpg"
                  alt="Optimización de Procesos"
                  fill
                  className="object-cover rounded-t-xl group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Optimización de Procesos</h3>
                <p className="text-gray-300 mb-4">
                  Sistema para mejorar eficiencia en procesos administrativos reduciendo tiempos en 40%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-900/50 text-red-200 text-sm rounded-full">MySQL</span>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-sm rounded-full">Docker</span>
                </div>
                <a
                  href="https://github.com/tu-repositorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver en GitHub
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="min-h-screen py-20 px-4 flex items-center bg-[#1a1a2e] bg-opacity-90">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Contáctame</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">¿Tienes un proyecto en mente?</h3>
                <p className="text-lg text-gray-300">
                  Estoy siempre interesado en nuevos desafíos y oportunidades para colaborar. Hablemos sobre cómo puedo ayudarte a transformar tus datos en insights valiosos.
                </p>
              </div>

              {/* Iconos de redes sociales */}
              <div className="flex gap-6">
                <a
                  href="https://github.com/Ricardomasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ffffff] transition-all duration-300 hover:scale-110 transform"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ricardo-matabay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://www.youtube.com/@ricciduck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <FaYoutube size={40} />
                </a>
                <a
                  href="https://wa.me/593998014809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <FaWhatsapp size={40} />
                </a>
              </div>
            </div>

            {/* Formulario con GetForm.io */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <form
                action="https://getform.io/f/axozpljb"
                method="POST"
                className="space-y-6"
                onSubmit={(e) => {
                  const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                  if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = 'Enviando...';
                    setTimeout(() => {
                      submitButton.disabled = false;
                      submitButton.textContent = 'Enviar Mensaje';
                    }, 2000); // Simula un envío de 2 segundos
                  }
                }}
              >
                <input type="hidden" name="_subject" value="Nuevo mensaje desde portafolio - Ricardo Matabay" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_language" value="es" />

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#2a2a3e] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#2a2a3e] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="email@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Mensaje *</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#2a2a3e] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
                >
                  Enviar Mensaje
                </button>

                <p className="text-xs text-gray-500 text-center">* Campos obligatorios</p>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sección Spotify Embed */}
      <section className="py-12 bg-[#1a1a2e] bg-opacity-90 flex items-center justify-center">
        <div className="text-center">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3TO7bbrUKrOSPGRTB5MeCz?utm_source=generator"
            width="300"
            height="80"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded mx-auto"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Construido con Next.js
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Diseñado con Tailwind CSS
            </a>
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Desplegado en Vercel
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Copyright © 2025 Ricardo Matabay. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
