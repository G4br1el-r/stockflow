'use client'
import Image from 'next/image'
import { ReactElement, useEffect, useState } from 'react'

type PrismLogoshow = 'full' | 'icon' | 'text'

interface PrismLogoProps {
  isDarkTheme: boolean
  show: PrismLogoshow
}

const LOGO_MAP = {
  full: {
    dark: '/prism-light.png',
    light: '/prism-dark.png',
  },
  icon: {
    dark: '/prism-light-logo.png',
    light: '/prism-dark-logo.png',
  },
  text: {
    dark: '/prism-light-text.png',
    light: '/prism-dark-text.png',
  },
} as const

export function PrismLogo({
  isDarkTheme,
  show,
}: PrismLogoProps): ReactElement | null {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light'
  const logoSrc = LOGO_MAP[show][theme]

  return (
    <Image
      src={logoSrc}
      alt="Prism logo"
      fill
      priority
      className="object-cover"
    />
  )
}
