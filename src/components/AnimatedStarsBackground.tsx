// components/AnimatedStarsBackground.tsx
"use client";
import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  baseSpeed: number;
}

const NUM_STARS = 120;

export default function AnimatedStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    mouseRef.current = {
      x: parent.clientWidth / 2,
      y: parent.clientHeight / 2,
    };

    const updateCanvasSize = () => {
      const width = parent.clientWidth;
      // Obtenemos la altura real de todo el contenido interno
      const height = Math.max(parent.scrollHeight, parent.clientHeight);

      // 1. Ajustamos la resolución interna del canvas
      canvas.width = width;
      canvas.height = height;

      // 2. FORZAMOS la altura visual en CSS para que acompañe el scroll completo
      canvas.style.height = `${height}px`;

      if (starsRef.current.length === 0) {
        const stars: Star[] = [];
        for (let i = 0; i < NUM_STARS; i++) {
          const size = Math.random() * 1.8 + 0.5;
          const baseSpeed = Math.random() * 0.03 + 0.01;
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size,
            speed: baseSpeed,
            angle: Math.random() * Math.PI * 2,
            baseSpeed,
          });
        }
        starsRef.current = stars;
      }
    };

    updateCanvasSize();

    // El ResizeObserver re-calcula si el contenido cambia de tamaño
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(parent);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(10, 42, 67, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        const dx = (mouseRef.current.x - star.x) * 0.002;
        const dy = (mouseRef.current.y - star.y) * 0.002;

        const dist = Math.sqrt(dx * dx + dy * dy);
        const speedBoost = Math.max(1, 6 - dist * 3);
        star.speed = star.baseSpeed * speedBoost;
        star.angle += star.speed;

        const starX = star.x + Math.cos(star.angle) * 2 + dx * 30;
        const starY = star.y + Math.sin(star.angle) * 2 + dy * 30;

        const sizeVariation = star.size + (1 - Math.min(dist, 1)) * 1.2;

        ctx.beginPath();
        ctx.arc(starX, starY, sizeVariation, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";

        ctx.shadowColor = "#00ccff";
        ctx.shadowBlur = 8 + star.speed * 50;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
