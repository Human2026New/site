'use client'

import { useEffect, useState } from 'react'

// DATA DE LANÇAMENTO (HORA LOCAL)
const LAUNCH_DATE = new Date(2026, 0, 1, 0, 0, 0).getTime()

export default function Countdown() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number>(0)

  // Garantir que só corre no CLIENT
  useEffect(() => {
    setMounted(true)
    setTimeLeft(LAUNCH_DATE - Date.now())

    const timer = setInterval(() => {
      setTimeLeft(LAUNCH_DATE - Date.now())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // ❗ NÃO renderizar nada no servidor
  if (!mounted) {
    return null
  }

  if (timeLeft <= 0) {
    return (
      <p
        style={{
          marginTop: '32px',
          opacity: 0.7,
          fontSize: '0.95rem',
        }}
      >
        A aplicação foi lançada.
      </p>
    )
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <div
      style={{
        marginTop: '32px',
        fontSize: '1rem',
        opacity: 0.8,
        letterSpacing: '0.05em',
      }}
    >
      Lançamento em {days}d {hours}h {minutes}m {seconds}s
    </div>
  )
}
