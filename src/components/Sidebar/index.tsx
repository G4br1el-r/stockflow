'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  FilePlus,
  History,
  LayoutDashboard,
  Menu,
  Package,
  ShoppingCart,
  X,
} from 'lucide-react'
import { Text } from '../Text'
import { Logo } from '../Icon'
import { useLockBodyScroll } from '@/utils/useLockBodyScroll'
import { UserSection } from '../UserSection'
import { SwitchDarkMode } from '../SwitchDarkMode'

const MENU_ITEMS = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Cadastro', url: '/cadastro', icon: FilePlus },
  { title: 'Estoque', url: '/estoque', icon: Package },
  { title: 'Nova Venda', url: '/nova-venda', icon: ShoppingCart },
  { title: 'Histórico de Venda', url: '/historico', icon: History },
]

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()

  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() => setHovered(false), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])
  const openMobile = useCallback(() => setMobileOpen(true), [])

  useLockBodyScroll(mobileOpen)

  return (
    <div className="flex min-h-dvh">
      <aside
        className={cn(
          'hidden lg:flex flex-col bg-background-sidebar-main border-r fixed left-0 top-0 h-screen transition-[width] duration-300 z-50',
          hovered ? 'w-64' : 'w-17',
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex-1 py-6 px-3 flex flex-col justify-between gap-4 overflow-hidden">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 h-11">
              <Logo className="h-11 w-11 shrink-0" />
              <div className="flex items-start justify-center flex-col">
                <Text as="span" className="text-[1.3em] font-bold leading-7.5">
                  StockFlow
                </Text>
                <Text as="span" className="text-[0.7rem] text-base-primary">
                  ENTERPRISE
                </Text>
              </div>
            </div>

            <div className="w-full h-px  bg-linear-to-r from-border-main/5 via-border-main to-border-main/5" />

            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.url
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={cn(
                    'flex items-center h-11 group w-full relative gap-4 px-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-background-menu-activate text-blue-neon border-blue-neon border'
                      : 'hover:bg-background-hover-sidebar-menu',
                  )}
                >
                  <item.icon
                    className={cn(
                      'w-5 h-5 shrink-0',
                      !isActive &&
                        'text-icon-not-activate group-hover:text-icon-hover-sidebar-menu',
                    )}
                  />
                  <Text
                    as="span"
                    className={cn(
                      'transition-opacity duration-300 whitespace-nowrap text-sm font-semibold',
                      hovered ? 'opacity-100' : 'opacity-0 hidden',
                      !isActive &&
                        'text-icon-not-activate group-hover:text-icon-hover-sidebar-menu',
                    )}
                  >
                    {item.title}
                  </Text>
                </Link>
              )
            })}
          </div>
          <UserSection />
        </nav>
      </aside>

      {/* MOBILE */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={openMobile}
          className="fixed top-4 left-4 z-50 p-2 bg-background-sidebar-main rounded-lg shadow-lg"
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {mobileOpen && (
          <button
            type="button"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={closeMobile}
            aria-label="Fechar menu"
          />
        )}

        <aside
          className={cn(
            'fixed left-0 top-0 h-dvh w-64 flex flex-col gap-5 px-3 py-6 bg-background-sidebar-main justify-between z-50 shadow-xl transition-transform duration-300 ease-in-out border-r border-border-main',
            mobileOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo className="h-11 w-11" />
                <div className="flex items-start justify-center flex-col">
                  <Text
                    as="span"
                    className="text-[1.3em] font-bold leading-relaxed"
                  >
                    StockFlow
                  </Text>
                  <Text as="span" className="text-[0.7rem] text-base-primary">
                    ENTERPRISE
                  </Text>
                </div>
              </div>
              <button type="button" onClick={closeMobile} aria-label="Fechar">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full h-px  bg-linear-to-r from-border-main/5 via-border-main to-border-main/5" />

            <nav className="">
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.url

                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    onClick={closeMobile}
                    className={cn(
                      'flex items-center relative gap-4 px-3 py-4 rounded-lg transition-colors',
                      isActive &&
                        'bg-background-menu-activate text-blue-neon border-blue-neon border',
                    )}
                  >
                    <item.icon
                      className={cn(
                        'w-5 h-5',
                        !isActive && 'text-icon-not-activate',
                      )}
                    />
                    <Text
                      as="span"
                      className={cn(
                        !isActive && 'text-icon-not-activate text-sm font-bold',
                      )}
                    >
                      {item.title}
                    </Text>
                  </Link>
                )
              })}
            </nav>
          </div>
          <UserSection />
        </aside>
      </div>

      <div className="flex-1 lg:pl-21">{children}</div>
    </div>
  )
}
