// components/LinkTreeHome.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaGlobe, FaStar } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'   

type LinkItem = {
  title: string
  subtitle?: string
  href: string
  colorClass: string
  Icon: React.ComponentType<React.ComponentProps<'svg'>>
}

const LINKS: LinkItem[] = [
  { 
    title: 'Portfolio Personal', 
    subtitle: 'Mis proyectos y experiencia profesional', 
    href: '/portfolio', 
    colorClass: 'bg-gradient-to-r from-purple-500 to-pink-500', 
    Icon: FaGlobe 
  },
  { 
    title: 'GitHub', 
    subtitle: 'Repositorios y código abierto', 
    href: 'https://github.com/MacarenaAliberti-web', 
    colorClass: 'bg-zinc-800', 
    Icon: FaGithub 
  },
  { 
    title: 'LinkedIn', 
    subtitle: 'Perfil profesional y networking', 
    href: 'https://www.linkedin.com/in/macarena-aliberti-440b03373/', 
    colorClass: 'bg-blue-600', 
    Icon: FaLinkedin 
  },
  { 
    title: 'WhatsApp', 
    subtitle: 'Solo mensajes escritos', 
    href: 'https://wa.me/5491140458808', 
    colorClass: 'bg-green-500', 
    Icon: FaWhatsapp 
  },
  { 
    title: 'Best Proyect', 
    subtitle: 'best project in dev', 
    href: 'https://repo-prueba-zeta.vercel.app/', 
    colorClass: 'bg-yellow-600',
    Icon: FaStar 
  },
  { 
    title: 'Email', 
    subtitle: 'Contacto directo', 
    href: 'mailto:alibertimacarena@gmail.com', 
    colorClass: 'bg-red-500', 
    Icon: FaEnvelope 
  },
]

export default function LinkTreeHome() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 font-sans bg-animated">
      <div className="w-full max-w-md text-center py-12">
        
       {/* Avatar */}
<div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto relative rounded-full ring-2 ring-white/10 shadow-lg overflow-hidden">
  <Image src="/profile.jpg" alt="Macu" fill style={{ objectFit: 'cover' }} />
</div>

{/* Nombre y subtítulos */}
<h1 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold">Macarena Ailen Aliberti</h1>
<h2 className="text-base sm:text-lg text-gray-300 mt-0.5">Full Stack Developer & Teaching Assistant</h2>
<p className="text-xs sm:text-sm text-gray-400 mt-0.5">📍 Buenos Aires, Argentina</p>


        {/* Links */}
      <div className="mt-8 flex flex-col gap-3 w-full max-w-md mx-auto sm:max-w-md lg:max-w-4xl">
  {LINKS.map((l) => {
    const Icon = l.Icon
    return (
      <motion.a
        key={l.title}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${l.colorClass} group flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-lg transition-colors duration-300 hover:brightness-110 font-sans relative w-full`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-3 bg-white/10 rounded-lg">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" /> {/* iconos más pequeños en móvil */}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <div className="font-medium text-sm sm:text-base truncate">{l.title}</div> {/* título más pequeño y truncado */}
              {l.title === 'Portfolio Personal' && (
                <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-semibold">
                  ⭐ Destacado
                </span>
              )}
            </div>
            {l.subtitle && (
              <div className="text-xs sm:text-sm text-white/80 mt-1 truncate">{l.subtitle}</div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg opacity-80">
          <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </motion.a>
    )
  })}
</div>

        {/* Mensaje final */}
        <p className="mt-6 text-xs text-gray-400 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">
          Disponible para proyectos, consultas o colaboraciones. Contáctame.
        </p>
      </div>
    </div>
  )
}
