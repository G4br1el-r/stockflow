'use client'

import { useScrollVisibility } from '@/hooks/useScrollVisible'
import { SidebarMobile } from '../Sidebar'

export function Header() {
  const { isVisible } = useScrollVisibility()

  return (
    <>
      {/* Background do header */}
      <div
        className={`lg:relative fixed top-0 left-0 z-40 flex h-23 w-full items-center justify-center transition-transform duration-700 ease-in-out bg-background-sidebar-main border-b border-border-main lg:translate-y-0 shadow-header ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Conteúdo do header aqui */}
      </div>

      {/* Menu mobile */}
      <SidebarMobile isVisible={isVisible} />
    </>
  )
}
