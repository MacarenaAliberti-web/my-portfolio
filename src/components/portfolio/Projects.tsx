import { useEffect, useState } from "react"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export default function Projects({ onPrev, onNext }: Props) {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="snap-start flex-shrink-0 w-screen min-h-screen overflow-y-auto relative flex flex-col items-center px-4 sm:px-6 bg-gray-950 text-white">
      <AnimatedStarsBackground />

      {/* Contenido principal */}
      <div className="z-20 max-w-6xl w-full pt-10 sm:pt-32 pb-24 px-2 sm:px-6">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-lg text-center whitespace-nowrap">
          Proyectos Destacados
        </h3>

        {/* Flechas solo en MOBILE (debajo del título) */}
        <div className="flex justify-center items-center gap-6 mb-10 md:hidden">
          <button
            onClick={onPrev}
            aria-label="Ir al proyecto anterior"
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
              animate ? "animate-bounce" : ""
            }`}
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            onClick={onNext}
            aria-label="Ir al siguiente proyecto"
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
              animate ? "animate-bounce" : ""
            }`}
          >
            <FiArrowRight size={18} />
          </button>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center transition duration-300 hover:shadow-cyan-500/30 hover:scale-[1.01]">
            <div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-2">Hearts & Paws 🐾</h4>
              <p className="text-gray-300 text-sm">
                Plataforma para ONGs dedicadas al rescate animal. Gestión de animales, campañas y adopciones.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Tecnologías:</strong> Next.js, React, Tailwind, Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
            <a
              href="https://repo-prueba-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-1.5 px-4 rounded transition mx-auto"
            >
              Ver Proyecto
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center transition duration-300 hover:shadow-yellow-400/30 hover:scale-[1.01]">
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">Gestión de Turnos 🗓️</h4>
              <p className="text-gray-300 text-sm">
                Aplicación Full Stack para reservar turnos médicos. Autenticación, horarios y usuarios.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Tecnologías:</strong> React + Vite, Bootstrap, TypeScript, Express, TypeORM, PostgreSQL
              </p>
            </div>
            <a
              href="https://github.com/MacarenaAliberti-web/gestor-de-turnos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-1.5 px-4 rounded transition mx-auto"
            >
              Ver Repositorio
            </a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center transition duration-300 hover:shadow-pink-400/30 hover:scale-[1.01]">
            <div>
              <h4 className="text-xl font-semibold text-pink-400 mb-2">E-commerce Full Stack 🛒</h4>
              <p className="text-gray-300 text-sm">
                Tienda online con JWT, carrito, vistas dinámicas y panel de usuario.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Frontend:</strong> Next.js, React, Tailwind, Zustand<br />
                <strong>Backend:</strong> Express, TypeScript, PostgreSQL, JWT, Swagger
              </p>
            </div>
            <a
              href="https://github.com/MacarenaAliberti-web/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm bg-pink-500 hover:bg-pink-400 text-white font-medium py-1.5 px-4 rounded transition mx-auto"
            >
              Ver Repositorio
            </a>
          </div>
        </div>
      </div>

      {/* Flechas solo en DESKTOP (a los costados) */}
      <div className="hidden md:flex z-30 absolute top-1/2 left-0 right-0 justify-between items-center px-10 -translate-y-1/2 pointer-events-none">
        <button
          onClick={onPrev}
          aria-label="Ir al proyecto anterior"
          className={`pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
            animate ? "animate-bounce" : ""
          }`}
        >
          <FiArrowLeft size={22} />
        </button>
        <button
          onClick={onNext}
          aria-label="Ir al siguiente proyecto"
          className={`pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
            animate ? "animate-bounce" : ""
          }`}
        >
          <FiArrowRight size={22} />
        </button>
      </div>
    </section>
  )
}
