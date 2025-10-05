import { useEffect, useState } from "react"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onPrev: () => void
  onNext: () => void
}

interface Project {
  id: string
  title: string
  description: string
  technologies?: string
  technologiesFrontend?: string
  technologiesBackend?: string
  image: string
  link: string
  linkLabel: string
  bgColor: string
  hoverShadow: string
}

const projects: Project[] = [
  {
    id: "heartsypaws",
    title: "Hearts & Paws 🐾",
    description:
      "Plataforma para ONGs dedicadas al rescate animal. Gestión de animales, campañas y adopciones.",
    technologies:
      "Next.js, React, Tailwind, Node.js, Express, PostgreSQL, MongoDB",
    image: "/heartsypaws.jpg",
    link: "https://repo-prueba-zeta.vercel.app/",
    linkLabel: "Ver Proyecto",
    bgColor: "bg-cyan-600",
    hoverShadow: "hover:shadow-cyan-500/30",
  },
  {
    id: "ecommerce",
    title: "E-commerce Full Stack 🛒",
    description:
      "Tienda online con JWT, carrito, vistas dinámicas y panel de usuario.",
    technologiesFrontend: "Next.js, React, Tailwind, Zustand",
    technologiesBackend: "Express, TypeScript, PostgreSQL, JWT, Swagger",
    image: "/ecommerce.jpg",
    link: "https://github.com/MacarenaAliberti-web/E-commerce",
    linkLabel: "Ver Repositorio",
    bgColor: "bg-pink-500",
    hoverShadow: "hover:shadow-pink-400/30",
  },
  {
    id: "gestor-turnos",
    title: "Gestión de Turnos 🗓️",
    description:
      "Aplicación Full Stack para reservar turnos médicos. Autenticación, horarios y usuarios.",
    technologies:
      "React + Vite, Bootstrap, TypeScript, Express, TypeORM, PostgreSQL",
    image: "/clinica.jpg",
    link: "https://github.com/MacarenaAliberti-web/gestor-de-turnos",
    linkLabel: "Ver Repositorio",
    bgColor: "bg-yellow-500",
    hoverShadow: "hover:shadow-yellow-400/30",
  },
]

export default function Projects({ onPrev, onNext }: Props) {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      className="snap-start flex-shrink-0 w-screen min-h-screen overflow-y-auto relative flex flex-col items-center px-4 sm:px-6 bg-gray-950 text-white"
      aria-label="Sección proyectos destacados"
    >
      <AnimatedStarsBackground />

      <div className="z-20 max-w-6xl w-full px-2 sm:px-6 pt-10 sm:pt-32 pb-24 text-center">

        {/* Título */}
        <div className="flex items-center justify-center mb-10 md:mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
            Proyectos Destacados
          </h3>
        </div>

        {/* Grid proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            ({
              id,
              title,
              description,
              technologies,
              technologiesFrontend,
              technologiesBackend,
              image,
              link,
              linkLabel,
              bgColor,
              hoverShadow,
            }) => (
              <article
                key={id}
                className={`bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center transition duration-300 ${hoverShadow} hover:scale-[1.01]`}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div>
                  <h4
                    className={`text-xl font-semibold mb-2 ${
                      bgColor === "bg-cyan-600"
                        ? "text-cyan-300"
                        : bgColor === "bg-pink-500"
                        ? "text-pink-400"
                        : bgColor === "bg-yellow-500"
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    {title}
                  </h4>
                  <p className="text-gray-300 text-sm">{description}</p>
                  <p className="mt-2 text-sm text-gray-400">
                    {technologiesFrontend && (
                      <>
                        <strong>Frontend:</strong> {technologiesFrontend}
                        <br />
                      </>
                    )}
                    {technologiesBackend && (
                      <>
                        <strong>Backend:</strong> {technologiesBackend}
                        <br />
                      </>
                    )}
                    {technologies && (
                      <>
                        <strong>Tecnologías:</strong> {technologies}
                      </>
                    )}
                  </p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bgColor} mt-4 inline-block text-sm text-white font-medium py-1.5 px-4 rounded transition mx-auto hover:brightness-110`}
                >
                  {linkLabel}
                </a>
              </article>
            )
          )}
        </div>

        {/* Flechas Desktop */}
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
      </div>
    </section>
  )
}
