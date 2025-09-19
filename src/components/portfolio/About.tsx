import { useEffect, useState } from "react"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export default function About({ onPrev, onNext, className }: Props) {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      className={`snap-start flex-shrink-0 w-screen h-screen relative flex flex-col items-center justify-start px-4 sm:px-6 bg-gray-950 text-white ${className ?? ""}`}
      tabIndex={0}
    >
      {/* Fondo animado */}
      <AnimatedStarsBackground />

      {/* Contenido */}
      <div className="z-20 max-w-prose w-full pt-16 sm:pt-20 pb-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 drop-shadow-lg">
          Sobre Mí
        </h3>

        {/* Flechas móviles: centradas debajo del título */}
        <div className="flex justify-center items-center gap-6 mb-10 md:hidden">
          <button
            onClick={onPrev}
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
              animate ? "animate-bounce" : ""
            }`}
            aria-label="Ir a la sección anterior"
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            onClick={onNext}
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
              animate ? "animate-bounce" : ""
            }`}
            aria-label="Ir a la siguiente sección"
          >
            <FiArrowRight size={18} />
          </button>
        </div>

        <div className="bg-gray-900/80 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm p-6 sm:p-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Comencé mi trayectoria en educación, donde aprendí a comunicar ideas de forma clara,
            organizar equipos y potenciar el trabajo colectivo, y me acerqué a la programación a través de capacitaciones.
            Con el tiempo, elegí reinventarme profesionalmente como desarrolladora.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mt-4">
            Mi enfoque está en el desarrollo <strong>Front-End</strong>, creando interfaces modernas y funcionales que aporten valor usando
            <strong> Next.js, React, TypeScript y Tailwind CSS</strong>. Busco integrarme a proyectos innovadores, aportando visión estratégica,
            organización y comunicación clara que faciliten el trabajo en equipo.
          </p>
        </div>
      </div>

      {/* Flechas desktop: a los costados */}
      <div className="hidden md:flex z-30 w-full absolute top-[45%] left-0 right-0 px-10 justify-between items-center transform -translate-y-1/2">
        <button
          onClick={onPrev}
          className={`bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
            animate ? "animate-bounce" : ""
          }`}
          aria-label="Ir a la sección anterior"
        >
          <FiArrowLeft size={22} />
        </button>
        <button
          onClick={onNext}
          className={`bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
            animate ? "animate-bounce" : ""
          }`}
          aria-label="Ir a la siguiente sección"
        >
          <FiArrowRight size={22} />
        </button>
      </div>
    </section>
  )
}
