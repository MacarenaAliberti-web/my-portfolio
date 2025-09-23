import React, { useEffect, useState, useRef } from "react"
import type { JSX } from "react"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import AnimatedStarsBackground from "../AnimatedStarsBackground"
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiFigma, SiNodedotjs, SiExpress, SiNestjs,
  SiPostgresql, SiMongodb, SiJsonwebtokens, SiSwagger, SiGit, SiGithub,
  SiVercel, SiRender, SiPostman, SiCloudinary, SiSupabase, SiStripe,
  SiMongoose, SiTypeorm
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

interface Props {
  onPrev: () => void
  onNext: () => void
}

export default function Stack({ onPrev, onNext }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)

  const [frontendVisible, setFrontendVisible] = useState<boolean[]>([])
  const [backendVisible, setBackendVisible] = useState<boolean[]>([])
  const [toolsVisible, setToolsVisible] = useState<boolean[]>([])
  const [animate, setAnimate] = useState(true)
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".tech-icon")) {
        setSelectedTech(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const frontend = [
    { name: "React", icon: <SiReact className="text-cyan-400 w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white w-12 h-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-12 h-12" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-12 h-12" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-400 w-12 h-12" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 w-12 h-12" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-12 h-12" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 w-12 h-12" /> },
  ]

  const backend = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-12 h-12" /> },
    { name: "Express", icon: <SiExpress className="text-gray-200 w-12 h-12" /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-500 w-12 h-12" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 w-12 h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-12 h-12" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-600 w-12 h-12" /> },
    { name: "TypeORM", icon: <SiTypeorm className="text-orange-400 w-12 h-12" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-400 w-12 h-12" /> },
    { name: "Swagger", icon: <SiSwagger className="text-green-400 w-12 h-12" /> },
  ]

  const tools = [
    { name: "VS Code", icon: <VscCode className="text-blue-500 w-12 h-12" /> },
    { name: "Git", icon: <SiGit className="text-orange-500 w-12 h-12" /> },
    { name: "GitHub", icon: <SiGithub className="text-white w-12 h-12" /> },
    { name: "Vercel", icon: <SiVercel className="text-white w-12 h-12" /> },
    { name: "Render", icon: <SiRender className="text-blue-400 w-12 h-12" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 w-12 h-12" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400 w-12 h-12" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-400 w-12 h-12" /> },
    { name: "Stripe", icon: <SiStripe className="text-indigo-500 w-12 h-12" /> },
  ]

  const showSequentially = (
    list: { name: string; icon: JSX.Element }[],
    setState: React.Dispatch<React.SetStateAction<boolean[]>>
  ) => {
    const arr = new Array(list.length).fill(false)
    setState(arr)
    list.forEach((_, i) => {
      setTimeout(() => {
        setState(prev => {
          const copy = [...prev]
          copy[i] = true
          return copy
        })
      }, i * 100)
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFrontendVisible([])
          setBackendVisible([])
          setToolsVisible([])

          setTimeout(() => {
            showSequentially(frontend, setFrontendVisible)
            showSequentially(backend, setBackendVisible)
            showSequentially(tools, setToolsVisible)
          }, 100)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const renderIcons = (
    list: { name: string; icon: JSX.Element }[],
    visible: boolean[]
  ) =>
    list.map((tech, i) => (
      <div
        key={tech.name}
        onClick={() => setSelectedTech(prev => (prev === tech.name ? null : tech.name))}
        className={`tech-icon flex flex-col items-center cursor-pointer transform transition-all duration-500 
          ${visible[i] ? "opacity-100 scale-100 animate-fadeIn" : "opacity-0 scale-90"} 
          hover:scale-110 icon-glow`}
        style={{ animationDelay: `${i * 100}ms` }}
        title={tech.name}
      >
        {tech.icon}
        <span
          className={`mt-2 text-sm sm:hidden transition-opacity duration-300 ${
            selectedTech === tech.name ? "opacity-100" : "opacity-0"
          }`}
        >
          {tech.name}
        </span>
      </div>
    ))

  return (
    <section
      ref={sectionRef}
      className="snap-start flex-shrink-0 w-screen min-h-screen overflow-y-auto relative flex flex-col items-center px-4 sm:px-6 bg-gray-950 text-white"
    >
      <AnimatedStarsBackground />

      <div className="z-20 max-w-6xl w-full px-2 sm:px-6 pt-10 sm:pt-32 pb-24 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-lg">Stack Tecnológico</h3>

        {/* Flechas MOBILE */}
        <div className="flex justify-center items-center gap-6 mb-10 md:hidden">
          <button
            onClick={onPrev}
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${animate ? "animate-bounce" : ""}`}
            aria-label="Ir a la sección anterior"
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            onClick={onNext}
            className={`bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${animate ? "animate-bounce" : ""}`}
            aria-label="Ir a la siguiente sección"
          >
            <FiArrowRight size={18} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-orange-400 mb-4">Front-End</h4>
            <div className="flex flex-wrap justify-center gap-6">{renderIcons(frontend, frontendVisible)}</div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-green-400 mb-4">Back-End</h4>
            <div className="flex flex-wrap justify-center gap-6">{renderIcons(backend, backendVisible)}</div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Herramientas</h4>
            <div className="flex flex-wrap justify-center gap-6">{renderIcons(tools, toolsVisible)}</div>
          </div>
        </div>
      </div>

      {/* Flechas DESKTOP */}
      <div className="hidden md:flex z-30 absolute top-1/2 left-0 right-0 justify-between items-center px-10 -translate-y-1/2 pointer-events-none">
        <button
          onClick={onPrev}
          className={`pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${animate ? "animate-bounce" : ""}`}
          aria-label="Ir a la sección anterior"
        >
          <FiArrowLeft size={22} />
        </button>
        <button
          onClick={onNext}
          className={`pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${animate ? "animate-bounce" : ""}`}
          aria-label="Ir a la siguiente sección"
        >
          <FiArrowRight size={22} />
        </button>
      </div>
    </section>
  )
}
