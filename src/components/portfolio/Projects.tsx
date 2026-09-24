import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AnimatedStarsBackground from "../AnimatedStarsBackground";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string;
  technologiesFrontend?: string;
  technologiesBackend?: string;
  image: string;
  link: string;
  linkLabel: string;
  bgColor: string;
  hoverShadow: string;
}

const projects: Project[] = [
  {
    id: "maletfit",
    title: "MaletFit 🏋️",
    description:
      "SaaS de gestión de turnos, reservas y rutinas de entrenamiento. Lo uso hoy con mis alumnos en clases online.",
    technologiesFrontend:
      "Next.js 16, React, TypeScript, Tailwind CSS, Shadcn UI",
    technologiesBackend: "NestJS, Prisma, PostgreSQL (Supabase), JWT",
    image: "/maletfit.jpeg",
    link: "https://maletfit-frontend.vercel.app",
    linkLabel: "Ver Proyecto",
    bgColor: "bg-green-600",
    hoverShadow: "hover:shadow-green-500/30",
  },
  {
    id: "zhyra",
    title: "ZHYRA 🛍️",
    description:
      "E-commerce full stack en producción, desarrollado en equipo. Hice gran parte del frontend, login con Google, Mercado Pago y el panel de administración.",
    technologiesFrontend: "Next.js, React, Tailwind CSS, Context API",
    technologiesBackend: "NestJS, TypeScript, Prisma, PostgreSQL (Supabase)",
    image: "/zhyra.jpeg",
    link: "https://zhyra.online",
    linkLabel: "Ver Tienda",
    bgColor: "bg-pink-500",
    hoverShadow: "hover:shadow-pink-400/30",
  },
  {
    id: "heartsypaws",
    title: "Hearts & Paws 🐾",
    description:
      "Plataforma para ONGs de rescate animal. Diseñé la interfaz en Figma y desarrollé gran parte del frontend, en un equipo de 6 personas.",
    technologies: "Next.js, React, Tailwind CSS, Figma",
    image: "/heartsypaws.jpg",
    link: "https://github.com/MacarenaAliberti-web/frontend-hearts-paws-",
    linkLabel: "Ver Código",
    bgColor: "bg-cyan-600",
    hoverShadow: "hover:shadow-cyan-500/30",
  },
];

export default function Projects({ onPrev, onNext }: Props) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="snap-start flex-shrink-0 w-screen h-screen overflow-y-auto relative flex flex-col items-center px-4 sm:px-6 bg-gray-950 text-white"
      aria-label="Sección proyectos destacados"
    >
      <AnimatedStarsBackground />

      <div className="z-20 max-w-6xl w-full px-2 sm:px-6 pt-10 sm:pt-20 pb-16 text-center my-auto">
        {/* Título */}
        <div className="flex items-center justify-center mb-8 md:mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
            Proyectos Destacados
          </h3>
        </div>

        {/* Grid proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className={`bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-5 flex flex-col justify-between text-center transition duration-300 ${hoverShadow} hover:scale-[1.01]`}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={title}
                  className={`w-full h-32 rounded-lg mb-3 ${
                    id === "heartsypaws" ? "object-cover" : "object-contain"
                  }`}
                />
                <div>
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      bgColor === "bg-cyan-600"
                        ? "text-cyan-300"
                        : bgColor === "bg-pink-500"
                          ? "text-pink-400"
                          : "text-white"
                    }`}
                  >
                    {title}
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {description}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
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
                  className={`${bgColor} mt-3 inline-block text-xs sm:text-sm text-white font-medium py-1.5 px-4 rounded transition mx-auto hover:brightness-110`}
                >
                  {linkLabel}
                </a>
              </article>
            ),
          )}
        </div>
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
    </section>
  );
}
