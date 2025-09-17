import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import AnimatedStarsBackground from "../AnimatedStarsBackground"

interface Props {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export default function Stack({ onPrev, onNext }: Props) {
  return (
    <section className="snap-start flex-shrink-0 w-screen min-h-screen overflow-y-auto relative flex flex-col items-center px-4 sm:px-6 bg-gray-950 text-white">
      {/* Fondo animado de estrellas */}
      <AnimatedStarsBackground />

      {/* Contenido */}
     <div className="z-20 max-w-6xl w-full px-2 sm:px-6 pt-10 sm:pt-32 pb-24 text-center">
  <h3 className="text-3xl sm:text-4xl font-bold mb-12 drop-shadow-lg">
    Stack Tecnológico
  </h3>

        {/* Grid responsive con 3 contenedores separados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Front-End */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-orange-400 mb-4">Front-End</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5',
                'CSS3', 'Tailwind CSS', 'Bootstrap', 'Figma'
              ].map((tech) => (
                <span key={tech} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Back-End */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-green-400 mb-4">Back-End</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB',
                'Mongoose', 'TypeORM', 'JWT', 'Swagger'
              ].map((tech) => (
                <span key={tech} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Herramientas</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Git', 'GitHub', 'Vercel', 'Render', 'Postman',
                'VSCode', 'Cloudinary', 'Supabase', 'Stripe'
              ].map((tool) => (
                <span key={tool} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

     {/* Flechas de navegación, responsive */}
<div className="z-20 w-full flex justify-center items-center gap-6 -mt-10
                md:absolute md:top-[45%] md:left-0 md:right-0 md:transform md:-translate-y-1/2 md:justify-between md:px-10 md:mt-0">

        {/* Flecha izquierda */}
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
