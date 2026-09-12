"use client"

import React, { useEffect, useId, useMemo, useRef, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/shared/utils"

// ============================================================
// DOT PATTERN — warna dot pakai currentColor (ikut text-border)
// Ganti dari text-neutral-400/80 ke text-border supaya
// ikut token Expo (#f0f0f3 light / gelap di dark) secara otomatis
// ============================================================

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  [key: string]: unknown
}

export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const dots = useMemo(() => {
    const cols = Math.ceil(dimensions.width / width)
    const rows = Math.ceil(dimensions.height / height)
    const length = cols * rows

    return Array.from({ length }, (_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const delay = ((col + row * cols) % 10) * 0.5
      const duration = 2 + ((col * row) % 3)

      return { x: col * width + cx, y: row * height + cy, delay, duration }
    })
  }, [dimensions.width, dimensions.height, width, height, cx, cy])

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        // ✅ text-border ikut token Expo otomatis (hairline #f0f0f3 / gelap di dark)
        "pointer-events-none absolute inset-0 h-full w-full text-border",
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          initial={glow ? { opacity: 0.4, scale: 1 } : {}}
          animate={glow ? { opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] } : {}}
          transition={
            glow
              ? {
                  duration: dot.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: dot.delay,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </svg>
  )
}
