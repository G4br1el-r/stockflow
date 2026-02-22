'use client'
import { useTheme } from 'next-themes'
import { PrismLogo } from '..'

export function PrismLogoClient() {
  const { theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  return <PrismLogo show="full" isDarkTheme={isDarkTheme} />
}
