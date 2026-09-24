import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AnimatedStarsBackground from "../AnimatedStarsBackground";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

const education = [
  {
    title: "Full Stack Web Developer",
    place: "Henry Bootcamp",
    dates: "Noviembre 2024 – Julio 2025",
  },
  {
    title: "Licenciatura en Educación Física",
    place: "UNLaM",
    dates: "2020 – 2022",
  },
  {
    title: "Profesorado en Educación Física",
    place: "UNLaM",
    dates: "2012 – 2016",
  },
];

export default function Education({ onPrev, onNext }: Props) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="snap-start flex-shrink-0 w-screen h-screen overflow-y-auto relative flex flex-col items-center justify-center px-4 sm:px-6 bg-gray-950 text-white"
      aria-label="Sección educación"
    >
      <AnimatedStarsBackground />

      <div className="z-20 max-w-2xl w-full px-2 sm:px-6 text-center my-auto">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
            Educación
          </h3>
        </div>

        <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
          <ul className="divide-y divide-white/10">
            {education.map((item) => (
              <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-lg font-semibold text-cyan-300">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300 mt-0.5">{item.place}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.dates}</p>
              </li>
            ))}
          </ul>
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
