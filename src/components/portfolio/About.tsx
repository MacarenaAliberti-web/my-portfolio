import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export default function About({ onPrev, onNext, className }: Props) {
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

{/* Flechas de navegación, responsive */}
<div className="z-20 w-full flex justify-center items-center gap-6 -mt-10
                md:absolute md:top-[45%] md:left-0 md:right-0 md:transform md:-translate-y-1/2 md:justify-between md:px-10 md:mt-0">


  <button
    onClick={onPrev}
    className="bg-white/20 hover:bg-white/40 text-white p-3 sm:p-4 md:p-5 rounded-full animate-bounce transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
    aria-label="Ir a la sección anterior"
  >
    <FiArrowLeft size={24} className="sm:size-6 md:size-7" />
  </button>

  <button
    onClick={onNext}
    className="bg-white/20 hover:bg-white/40 text-white p-3 sm:p-4 md:p-5 rounded-full animate-bounce transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
    aria-label="Ir a la siguiente sección"
  >
    <FiArrowRight size={24} className="sm:size-6 md:size-7" />
  </button>
</div>


    </section>
  )
}
