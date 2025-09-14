// components/AnimatedStarsBackground.tsx
'use client'
import React, { useRef, useEffect } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number
  angle: number
  baseSpeed: number
}

const NUM_STARS = 120

export default function AnimatedStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // ahora sí usamos window porque estamos en cliente
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const stars: Star[] = []
    for (let i = 0; i < NUM_STARS; i++) {
      const size = Math.random() * 1.8 + 0.5
      const baseSpeed = Math.random() * 0.03 + 0.01
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size,
        speed: baseSpeed,
        angle: Math.random() * Math.PI * 2,
        baseSpeed,
      })
    }
    starsRef.current = stars
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      // efecto trail
      ctx.fillStyle = 'rgba(10, 42, 67, 0.25)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // invertir dirección: ahora las estrellas siguen al mouse
        const dx = (mouseRef.current.x - star.x) * 0.002
        const dy = (mouseRef.current.y - star.y) * 0.002

        const dist = Math.sqrt(dx * dx + dy * dy)

        // boost más alto → más rápido
        const speedBoost = Math.max(1, 6 - dist * 3)
        star.speed = star.baseSpeed * speedBoost
        star.angle += star.speed

        // influencia del mouse más fuerte
        const starX = star.x + Math.cos(star.angle) * 2 + dx * 30
        const starY = star.y + Math.sin(star.angle) * 2 + dy * 30

        const sizeVariation = star.size + (1 - Math.min(dist, 1)) * 1.2

        ctx.beginPath()
        ctx.arc(starX, starY, sizeVariation, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'

        ctx.shadowColor = '#00ccff'
        ctx.shadowBlur = 8 + star.speed * 50
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
