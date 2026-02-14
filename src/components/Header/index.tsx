'use client'

import { useIsMobile } from '@/hooks/useIsMobile'
import { Bell, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { PrismLogo } from '../PrismLogo'
import { TextBase } from '../TextBase'
import { SidebarMobile } from '../Sidebar'

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile(1280)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()

  const isDarkTheme = theme === 'dark'

  useEffect(() => {
    if (!isMobile || !headerRef.current) return

    let lastScroll = 0
    const header = headerRef.current

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 50) {
        header.dataset.visible = 'false'
      } else {
        header.dataset.visible = 'true'
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <>
      <div
        ref={headerRef}
        data-visible="true"
        className="fixed w-full data-[visible=true]:translate-y-0 data-[visible=false]:-translate-y-20 xl:hidden transition-all duration-500 ease-in-out"
      >
        <div className="px-4 backdrop-blur-lg bg-gray-950/20 flex items-center justify-center h-17">
          <div className="flex items-center w-full h-full justify-between">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="p-1 bg-gray-600/20 backdrop-blur-sm rounded-sm"
            >
              <Menu className="h-7 w-7 " />
            </button>
            <button type="button" className="w-40 h-full flex-center relative">
              <PrismLogo isDarkTheme={isDarkTheme} show="full" />
            </button>
            <button type="button" className="relative">
              <Bell className="h-6 w-6" />
              <div className="h-3 w-3 absolute -top-1 right-0 bg-blue-neon rounded-full flex-center">
                <TextBase as="span" className="text-[0.6rem]">
                  3
                </TextBase>
              </div>
            </button>
          </div>
        </div>
      </div>

      <SidebarMobile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </>
  )
}
