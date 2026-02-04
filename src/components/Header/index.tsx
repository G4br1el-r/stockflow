'use client'

import { useEffect, useRef, useState } from 'react'
import { SidebarMobile } from '../Sidebar'
import { Text } from '../Text'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useTheme } from 'next-themes'
import { Bell, Menu } from 'lucide-react'
import { PrismLogo } from '../PrismLogo'

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile(1024)
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
        className="lg:relative fixed top-3 lg:w-full lg:top-0 left-1/2 z-40 w-[95%] lg:h-10 h-15 transition-transform duration-700 ease-in-out -translate-x-1/2 data-[visible=true]:translate-y-0 data-[visible=false]:-translate-y-25 rounded-full lg:rounded-b-none lg:rounded-t-2xl lg:border-b lg:border-border-main lg:bg-background-main lg:translate-y-0"
      >
        {isMobile && (
          <div className="px-7 bg-background-sidebar-main/60 backdrop-blur-xs rounded-full grid grid-cols-[1fr_2fr_1fr] w-full h-15 items-center justify-center border border-border-main/60">
            <div className="w-full group h-full flex items-center justify-start">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="bg-background-main border border-border-main rounded-sm shadow-header hover:scale-105 transition-transform duration-300 p-0.5 flex items-center justify-center relative"
                aria-label="Abrir menu"
              >
                <Menu className="text-base-secondary h-6 w-6" />
              </button>
            </div>

            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full max-w-35 h-full relative">
                <PrismLogo isDarkTheme={isDarkTheme} show="full" />
              </div>
            </div>

            <div className="flex w-full h-full group items-center groud justify-end">
              <div className="relative flex justify-center">
                <Bell className="text-base-secondary h-7 w-7 group-hover:scale-105 cursor-pointer transition-transform duration-300" />
                <div className="bg-icon-activate absolute right-0 transition-transform duration-300 group-hover:scale-105 -top-1 flex items-center justify-center w-4 h-4 rounded-full">
                  <Text
                    as="span"
                    className="text-[0.8rem] text-white font-semibold"
                  >
                    3
                  </Text>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <SidebarMobile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </>
  )
}
