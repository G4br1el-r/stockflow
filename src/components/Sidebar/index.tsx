'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  BanknoteArrowUp,
  FilePlus,
  History,
  LayoutDashboard,
  Package,
  X,
} from 'lucide-react'
import { UserSection } from '../UserSection'
import { useTheme } from 'next-themes'
import { PrismLogo } from '../PrismLogo'

interface SidebarMobileProps {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

const MENU_ITEMS = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Cadastro', url: '/cadastro', icon: FilePlus },
  { title: 'Estoque', url: '/estoque', icon: Package },
  { title: 'Caixa', url: '/caixa', icon: BanknoteArrowUp },
  { title: 'Histórico de Venda', url: '/historico', icon: History },
]

function SidebarContent({
  onClose,
  showClose = false,
  isCollapsed = false,
}: {
  onClose?: () => void
  showClose?: boolean
  isCollapsed?: boolean
}) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  return (
    <div className="flex flex-col h-full overflow-hidden backdrop-blur-md bg-sidebar-lateral-background/90">
      <div className="flex items-center h-17 justify-between px-3 py-4 gap-2">
        <div className="relative flex items-center h-9 group/logo">
          <div className="relative w-11 h-full shrink-0 z-10 transition-all duration-300 group-hover/logo:scale-110">
            <PrismLogo isDarkTheme={isDarkTheme} show="icon" />
          </div>

          <div
            className={cn(
              'absolute left-12 h-full w-30 transition-all duration-500 ease-in-out pointer-events-none',
              isCollapsed
                ? 'opacity-0 -translate-x-1.5'
                : 'opacity-100 translate-x-0',
            )}
          >
            <PrismLogo isDarkTheme={isDarkTheme} show="text" />
          </div>
        </div>
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:scale-110 hover:rotate-90 active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 pt-4 overflow-hidden">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.url
          return (
            <Link
              key={item.title}
              href={item.url}
              onClick={onClose}
              className={cn(
                'relative flex items-center h-11 group/nav w-full px-3 rounded-lg transition-all duration-300 mb-2',
                isActive
                  ? 'text-blue-neon border border-icon-active '
                  : 'hover:-translate-x-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]',
              )}
            >
              <item.icon
                className={cn(
                  'w-5 h-5 shrink-0 z-10 transition-all duration-300',
                  !isActive &&
                    'text-text-tertiary group-hover/nav:text-text-primary group-hover/nav:scale-110',
                )}
              />

              <span
                className={cn(
                  'absolute left-12 whitespace-nowrap text-sm font-semibold transition-all duration-300 ease-in-out origin-left pointer-events-none',
                  isCollapsed
                    ? 'opacity-0 -translate-x-1.5 scale-x-95'
                    : 'opacity-100 translate-x-0 scale-x-100',
                  !isActive &&
                    'text-text-tertiary group-hover/nav:text-text-primary',
                )}
              >
                {item.title}
              </span>
            </Link>
          )
        })}
      </nav>

      {!showClose && (
        <div className="px-3 pb-6">
          <UserSection />
        </div>
      )}

      {showClose && (
        <div className="px-3 pb-6">
          <UserSection />
        </div>
      )}
    </div>
  )
}

export function SidebarDesktop() {
  const [hovered, setHovered] = useState(false)

  return (
    <aside
      className={cn(
        'hidden lg:flex lg:sticky flex-col xl:border-r-2 xl:border-sidebar-lateral-border bg-sidebar-lateral-background left-0 top-0 h-screen transition-all duration-500',
        hovered ? 'w-64' : 'w-17',
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SidebarContent isCollapsed={!hovered} />
    </aside>
  )
}

export function SidebarMobile({
  mobileOpen,
  setMobileOpen,
}: SidebarMobileProps) {
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-sidebar-lateral-background backdrop-blur-lg z-40"
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 h-dvh w-64 z-50 shadow-xl transition-transform duration-300 ease-in-out border-r border-border-subtle',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <SidebarContent onClose={() => setMobileOpen(false)} showClose />
      </aside>
    </>
  )
}
