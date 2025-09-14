import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt} from 'react-icons/fa'
import AnimatedStarsBackground from '../components/AnimatedStarsBackground'
import { MdEmail } from 'react-icons/md'

export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <AnimatedStarsBackground />

    {/* Sección principal */}
<div className="relative z-10 flex flex-col items-center justify-start px-4 pt-8 text-center max-w-3xl mx-auto">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
    Macarena Ailen Aliberti
  </h1>
  <h2 className="text-base sm:text-lg md:text-xl mt-2 text-gray-200">
    Full Stack Developer
  </h2>
  <p className="text-sm sm:text-base mt-1 text-cyan-300">
    Especializada en Front-End
  </p>

  {/* Info adicional */}
  <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs sm:text-sm text-gray-300">
    <span className="flex items-center gap-1.5">
      <FaMapMarkerAlt className="text-cyan-300" />
      Ituzaingó, Buenos Aires, Argentina
    </span>
    <span className="flex items-center gap-1.5">
      <span className="text-yellow-400">🚀</span>
      En búsqueda de nuevos desafíos
    </span>
  </div>
</div>


{/* Sección Sobre Mí */}
<section id="about" className="relative z-10 max-w-6xl mx-auto px-4 mt-6">
  <div className="bg-gray-900/80 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm p-6 sm:p-8 text-center transition-transform duration-300 hover:-translate-y-1">
    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
      Sobre Mí
    </h3>

    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
      Comencé mi trayectoria en educación, donde aprendí a comunicar ideas de forma clara, organizar equipos y potenciar el trabajo colectivo, y me acerqué a la programación a través de capacitaciones. Con el tiempo, elegí reinventarme profesionalmente como desarrolladora. Esta transición me permitió combinar lo mejor de ambos mundos: enseñanza y tecnología.
    </p>

    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mt-4">
      Mi enfoque está en el desarrollo <strong>Front-End</strong>, creando interfaces modernas y funcionales que aporten valor a los usuarios usando <strong>Next.js, React, TypeScript y Tailwind CSS</strong>. Busco integrarme a proyectos innovadores, aportando visión estratégica, organización y comunicación clara que faciliten el trabajo en equipo.
    </p>
  </div>
</section>


{/* Stack Tecnológico */}
 <section id="stack" className="relative z-10 max-w-6xl mx-auto px-4 py-10 text-center">
  <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center">
    Stack Tecnológico
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Front-End */}
    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
      <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">
        Front-End
      </h4>
      <div className="flex flex-wrap justify-center gap-2">
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">React</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Next.js</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">JavaScript</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">TypeScript</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">HTML5</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">CSS3</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Tailwind CSS</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Bootstrap</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Figma</span>
      </div>
    </div>

    {/* Back-End */}
    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
      <h4 className="text-lg font-semibold text-green-400 mb-4 text-center">
        Back-End
      </h4>
      <div className="flex flex-wrap justify-center gap-2">
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Node.js</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Express</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">NestJS</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">PostgreSQL</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">MongoDB</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Mongoose</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">TypeORM</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">JWT</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Swagger</span>
      </div>
    </div>

    {/* Herramientas */}
    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-center">
      <h4 className="text-lg font-semibold text-purple-400 mb-4 text-center">
        Herramientas
      </h4>
      <div className="flex flex-wrap justify-center gap-2">
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Git</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">GitHub</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Vercel</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Render</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Postman</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">VSCode</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Cloudinary</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Supabase</span>
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Stripe</span>
      </div>
    </div>
  </div>
</section>

{/* Sección proyectos */}
<section
  id="projects"
  className="relative z-10 max-w-6xl mx-auto px-4 py-10"
>
  <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center">
    Proyectos Destacados
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Proyecto 1 */}
    <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center">
      <div>
        <h4 className="text-xl font-semibold text-cyan-300 mb-2">
          Hearts & Paws 🐾
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          Plataforma para ONGs dedicadas al rescate animal. Permite gestionar animales, campañas de donación y comunicación con adoptantes y donantes.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          <strong>Tecnologías:</strong> Next.js, React, Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB
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
    <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center">
      <div>
        <h4 className="text-xl font-semibold text-yellow-400 mb-2">
          Gestión de Turnos — AMA 🗓️
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          Aplicación Full Stack para reservar turnos médicos. Autenticación, validación de horarios y gestión de usuarios. Simple y efectiva.
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
    <div className="bg-gray-900/80 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-center">
      <div>
        <h4 className="text-xl font-semibold text-pink-400 mb-2">
          E-commerce Full Stack 🛒
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          Tienda online con autenticación JWT, carrito persistente, vistas dinámicas, órdenes y panel de usuario. Frontend moderno y backend robusto.
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
</section>


{/*
<section id="services" className="relative z-10 max-w-6xl mx-auto px-4 py-10 text-center">
  <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
    Mis Servicios
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-left hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4 text-cyan-400">
        <FaLaptopCode className="w-6 h-6" />
        <h4 className="text-xl font-semibold text-white">Landing Page</h4>
      </div>
      <p className="text-gray-300 mb-4">
        Ideal para promocionar un servicio, producto o evento en una sola página.
      </p>
      <p className="text-gray-300 font-semibold">Incluye:</p>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
        <li>Hasta 6 secciones (Inicio, Servicios, Sobre mí, Contacto, Testimonios, etc.)</li>
        <li>Panel de administración simple</li>
        <li>Formulario de contacto</li>
        <li>Hasta 3 ajustes luego de la entrega</li>
        <li>Entrega en 7-10 días hábiles</li>
      </ul>
    </div>

    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-left hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4 text-purple-400">
        <FaBuilding className="w-6 h-6" />
        <h4 className="text-xl font-semibold text-white">Sitio Institucional</h4>
      </div>
      <p className="text-gray-300 mb-4">
        Ideal para profesionales, marcas o emprendimientos con distintas áreas.
      </p>
      <p className="text-gray-300 font-semibold">Incluye:</p>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
        <li>Hasta 5 páginas (Inicio, Servicios, Portfolio, Contacto, etc.)</li>
        <li>Panel de administración completo</li>
        <li>Formulario de contacto</li>
        <li>Hasta 3 ajustes incluidos</li>
        <li>Entrega en 10-15 días hábiles</li>
      </ul>
    </div>

    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-left hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4 text-yellow-400">
        <FaShoppingCart className="w-6 h-6" />
        <h4 className="text-xl font-semibold text-white">E-commerce Básico</h4>
      </div>
      <p className="text-gray-300 mb-4">
        Ideal para emprendedores o marcas que venden productos físicos o digitales.
      </p>
      <p className="text-gray-300 font-semibold">Incluye:</p>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
        <li>Hasta 20 productos cargados al inicio</li>
        <li>Panel de administración para productos</li>
        <li>Carrito de compras y pagos online</li>
        <li>Hasta 3 ajustes sin cargo</li>
        <li>Entrega en 15-20 días hábiles</li>
      </ul>
    </div>

    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-left hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4 text-green-400">
        <FaMobileAlt className="w-6 h-6" />
        <h4 className="text-xl font-semibold text-white">App Móvil</h4>
      </div>
      <p className="text-gray-300 mb-4">
        Desarrollo de aplicaciones móviles nativas o híbridas para iOS y Android.
      </p>
      <p className="text-gray-300 font-semibold">Incluye:</p>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
        <li>App funcional con diseño adaptativo</li>
        <li>Integración con backend o API existente</li>
        <li>Publicación en App Store y Google Play</li>
        <li>Hasta 3 ajustes luego de la entrega</li>
        <li>Entrega en 20-25 días hábiles</li>
      </ul>
    </div>

    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 text-left hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4 text-pink-400">
        <FaRocket className="w-6 h-6" />
        <h4 className="text-xl font-semibold text-white">Optimización & Performance</h4>
      </div>
      <p className="text-gray-300 mb-4">
        Mejora de velocidad, rendimiento y SEO para tus proyectos web.
      </p>
      <p className="text-gray-300 font-semibold">Incluye:</p>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
        <li>Auditoría completa del sitio o app</li>
        <li>Optimización de código y assets</li>
        <li>Mejoras en SEO y accesibilidad</li>
        <li>Hasta 3 ajustes luego de la entrega</li>
        <li>Entrega en 7-10 días hábiles</li>
      </ul>
    </div>

  </div>
</section>
*/}


{/* Sección de Contacto / CTA */}
<section
  id="contact"
  className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center"
>
  <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12">
    <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
      🚀 ¿Buscás una desarrolladora Full Stack?
    </h3>

    <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
      Perfil <span className="text-cyan-400 font-semibold">técnico, proactivo y orientado a resultados</span>, 
      con habilidades de liderazgo y dominio de tecnologías modernas.  
      <br />
      <strong className="text-white">
        Especializada en crear soluciones escalables
      </strong>{" "}
      que impulsan el crecimiento de startups y proyectos innovadores.
    </p>

    {/* Botones de acción */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="mailto:alibertimacarena@gmail.com"
        className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition font-medium flex items-center gap-2"
      >
        <MdEmail className="text-lg" /> alibertimacarena@gmail.com
      </a>
      <a
        href="https://github.com/MacarenaAliberti-web"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition font-medium flex items-center gap-2"
      >
        <FaGithub className="text-lg" /> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/macarena-aliberti-440b03373/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition font-medium flex items-center gap-2"
      >
        <FaLinkedin className="text-lg" /> LinkedIn
      </a>
    </div>
  </div>

  {/* Footer pequeño */} 
  <p className="mt-10 text-sm text-gray-900"
  > 
  Impulsando ideas con tecnología y creatividad 💡 
  </p>
</section>

{/*
<section id="contact" className="relative z-10 max-w-5xl mx-auto px-4 py-10 text-center">
  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
    Contacto
  </h3>
  <p className="text-gray-300 mb-8">
    Cuantos más detalles me cuentes, mejor podré ayudarte.
  </p>
  <form className="max-w-lg mx-auto text-left space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-200">Nombre</label>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
        placeholder="Tu nombre"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
        placeholder="tu@email.com"
      />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Teléfono (opcional)</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
        placeholder="+54 9 11 1234 5678"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-1">
        Selecciona el/los tipo(s) de servicio que te interesan (puedes seleccionar más de una opción)
      </label>
      <div className="space-y-2">
        {['Landing Page', 'Sitio Institucional', 'Sitio con Blog', 'E-commerce Básico', 'Sitio a Medida'].map((service) => (
          <div key={service} className="flex items-center">
            <input
              type="checkbox"
              id={service}
              name="services"
              value={service}
              className="h-4 w-4 text-cyan-500 focus:ring-cyan-400 border-gray-700 rounded"
            />
            <label htmlFor={service} className="ml-2 block text-sm text-gray-300">
              {service}
            </label>
          </div>
        ))}
      </div>
    </div>
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-200">Breve descripción del proyecto o necesidades</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
        placeholder="Cuéntame sobre tu proyecto..."
      />
    </div>
    <div>
      <label htmlFor="domain" className="block text-sm font-medium text-gray-200">¿Ya tienes dominio y hosting?</label>
      <select
        id="domain"
        name="domain"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
      >
        <option value="">Selecciona una opción</option>
        <option value="sí">Sí</option>
        <option value="no">No</option>
      </select>
    </div>
    <div>
      <label htmlFor="deadline" className="block text-sm font-medium text-gray-200">Plazo estimado o urgencia (opcional)</label>
      <input
        type="text"
        id="deadline"
        name="deadline"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
        placeholder="Ej: 1 mes, lo antes posible, etc."
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-200">Mensaje adicional</label>
      <textarea
        id="message"
        name="message"
        rows="3"
        className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2"
        placeholder="Información extra que quieras agregar"
      />
    </div>
    <div className="text-center">
      <button
        type="submit"
        className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 px-6 rounded transition"
      >
        Enviar mensaje
      </button>
    </div>
  </form>
</section>
*/}


    </main>
  )
}
