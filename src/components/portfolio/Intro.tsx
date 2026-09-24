import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  onNext: () => void;
}

export default function Intro({ onNext }: Props) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="snap-start min-w-screen h-screen overflow-y-auto relative flex items-center justify-center px-4 text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-start px-4 pt-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md text-balance">
          Macarena Aliberti
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl mt-2 text-gray-200">
          Full Stack Developer Junior
        </h2>

        <hr className="my-6 border-t border-white/20 w-24 mx-auto" />

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs sm:text-sm text-gray-300">
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-cyan-300" />
            Buenos Aires, Argentina
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-400">🚀</span>
            Disponible para trabajo remoto
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a
            href="/cv/Macarena_Aliberti_CV.pdf"
            download
            className="px-5 py-2.5 rounded-xl border border-cyan-500 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition text-sm font-medium"
          >
            Descargar CV (Español)
          </a>

          <a
            href="/cv/Macarena_Aliberti_CV_EN.pdf"
            download
            className="px-5 py-2.5 rounded-xl border border-purple-500 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition text-sm font-medium"
          >
            Download CV (English)
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className={`absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
          animate ? "animate-bounce hover:scale-105" : "hover:scale-105"
        } z-20`}
        aria-label="Ir a la siguiente sección"
      >
        <FiArrowRight size={24} className="text-white" />
      </button>
    </section>
  );
}
