import { useEffect, useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onPrev: () => void
  className?: string
}

export default function Contact({ onPrev }: Props) {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="snap-start flex-shrink-0 w-full min-h-screen overflow-y-auto relative flex flex-col items-center justify-center px-4 bg-gray-950 text-white">
      {/* Fondo animado */}
      <AnimatedStarsBackground />

      {/* Contenido */}
      <div className="z-20 max-w-3xl w-full mx-auto px-4 pt-20 sm:pt-32 pb-24 text-center">
        <h3 className="text-2xl sm:text-4xl font-extrabold mb-6 drop-shadow-lg text-balance">
          🚀 ¿Buscás una desarrolladora Full Stack?
        </h3>

        {/* Flecha solo en mobile: debajo del título */}
        <div className="flex justify-center items-center mb-8 md:hidden">
          <button
            onClick={onPrev}
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
              animate ? "animate-bounce" : ""
            }`}
            aria-label="Volver a la sección anterior"
          >
            <FiArrowLeft size={18} />
          </button>
        </div>

        <div className="bg-gray-900/80 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md p-6 sm:p-10 overflow-y-auto">
          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6 text-balance">
            Perfil <span className="text-cyan-400 font-semibold">técnico, proactivo y orientado a resultados</span>, con habilidades de liderazgo y dominio de tecnologías modernas. <br />
            <strong className="text-white">Especializada en soluciones escalables</strong> que impulsan el crecimiento de startups.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="mailto:alibertimacarena@gmail.com"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition font-medium flex items-center justify-center gap-2"
            >
              <MdEmail className="text-lg" /> Email
            </a>
            <a
              href="https://github.com/MacarenaAliberti-web"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition font-medium flex items-center justify-center gap-2"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/macarena-aliberti-440b03373/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition font-medium flex items-center justify-center gap-2"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Impulsando ideas con tecnología y creatividad 💡
          </p>
        </div>
      </div>

      {/* Flecha solo en DESKTOP (costado izquierdo) */}
      <div className="hidden md:flex z-30 absolute top-1/2 left-0 transform -translate-y-1/2 px-10">
        <button
          onClick={onPrev}
          className={`bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
            animate ? "animate-bounce" : ""
          }`}
          aria-label="Volver a la sección anterior"
        >
          <FiArrowLeft size={22} />
        </button>
      </div>
    </section>
  )
}
