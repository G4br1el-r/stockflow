import { useEffect } from 'react'

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (locked) {
      body.style.overflow = 'hidden'
      html.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
      html.style.overflow = ''
    }

    return () => {
      body.style.overflow = ''
      html.style.overflow = ''
    }
  }, [locked])
}
