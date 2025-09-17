import { FiArrowRight } from "react-icons/fi"
import { FaMapMarkerAlt } from "react-icons/fa"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onNext: () => void
}

export default function Intro({ onNext }: Props) {
  return (
    <section className="snap-start min-w-screen h-screen overflow-y-auto relative flex items-center justify-center px-4 bg-black text-white">
      {/* Fondo animado */}
      <AnimatedStarsBackground />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 pt-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md text-balance">
          Macarena Ailen Aliberti
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl mt-2 text-gray-200">
          Full Stack Developer
        </h2>

        <p className="text-sm sm:text-base mt-1 text-cyan-300">
          Especializada en Front-End
        </p>

        {/* Info adicional */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs sm:text-sm text-gray-300">
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-cyan-300" />
            Ituzaingó, Buenos Aires, Argentina
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-400">🚀</span>
            En busca de nuevos desafíos
          </span>
        </div>
      </div>

      {/* Flecha de avance */}
      <button
        onClick={onNext}
        className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition animate-bounce z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Ir a la siguiente sección"
      >
        <FiArrowRight size={24} className="text-white" />
      </button>
    </section>
  )
}
