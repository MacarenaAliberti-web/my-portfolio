import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AnimatedStarsBackground from "../AnimatedStarsBackground";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function Experience({ onPrev, onNext }: Props) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="snap-start flex-shrink-0 w-screen h-screen overflow-y-auto relative flex flex-col items-center px-4 sm:px-6 bg-gray-950 text-white"
      aria-label="Sección experiencia"
    >
      <AnimatedStarsBackground />

      <div className="z-20 max-w-5xl w-full px-2 sm:px-6 pt-10 sm:pt-32 pb-24 text-center">
        <div className="flex items-center justify-center mb-10 md:mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
            Experiencia
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <article className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 text-left">
            <h4 className="text-xl font-semibold text-cyan-300 mb-1">
              Teacher Assistant
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Henry Bootcamp · Remoto · Mayo 2025 – Diciembre 2025
            </p>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>
                Acompañé de principio a fin a una cohorte de unos 20 estudiantes
                durante los 8 meses de la formación Full Stack.
              </li>
              <li>
                Soporte técnico y pedagógico en React, TypeScript y Node.js,
                resolviendo bloqueos técnicos semanales.
              </li>
              <li>
                Code reviews en GitHub con feedback sobre buenas prácticas de
                programación.
              </li>
            </ul>
          </article>

          <article className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 text-left">
            <h4 className="text-xl font-semibold text-purple-300 mb-1">
              Profesora de Educación Física
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Escuelas públicas de la Prov. de Buenos Aires (2017 – Actualidad)
              <br />
              Instituto Buenos Aires (2019 – 2025)
            </p>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>
                Más de 10 años planificando y dictando clases para grupos de
                nivel inicial, primario, secundario y adultos.
              </li>
              <li>
                Trabajo como preceptora en nivel secundario: gestión,
                seguimiento y comunicación con las familias.
              </li>
              <li>
                Comunicación clara, resolución de conflictos y trabajo bajo
                presión, hoy aplicados como developer.
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="hidden md:flex z-30 absolute top-1/2 left-0 right-0 justify-between items-center px-10 -translate-y-1/2 pointer-events-none">
        <button
          onClick={onPrev}
          aria-label="Ir a la sección anterior"
          className={`pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
            animate ? "animate-bounce" : ""
          }`}
        >
          <FiArrowLeft size={22} />
        </button>
        <button
          onClick={onNext}
          aria-label="Ir a la siguiente sección"
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
