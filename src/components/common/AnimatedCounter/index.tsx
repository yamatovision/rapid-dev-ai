'use client'
import { useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
}

export const AnimatedCounter = ({ 
  from, 
  to, 
  duration = 2, 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(from)
  const count = useMotionValue(from)

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      onUpdate: (value) => {
        setDisplayValue(Math.round(value))
      },
    })

    return controls.stop
  }, [count, to, duration])

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
