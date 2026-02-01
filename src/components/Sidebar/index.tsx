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
import { UserSection } from '../UserSection'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import Image from 'next/image'

const MENU_ITEMS = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Cadastro', url: '/cadastro', icon: FilePlus },
  { title: 'Estoque', url: '/estoque', icon: Package },
  { title: 'Nova Venda', url: '/nova-venda', icon: ShoppingCart },
  { title: 'Histórico de Venda', url: '/historico', icon: History },
]

// Componente do conteúdo da sidebar (reutilizável)
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

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-6">
        <div className="flex items-center gap-2">
          <Logo className="h-11 w-11 shrink-0" />
          {!isCollapsed && (
            <div className="flex items-start justify-center flex-col">
              <Text as="span" className="text-[1.3em] font-bold leading-7">
                StockFlow
              </Text>
              <Text
                as="span"
                className="text-[0.7rem] text-base-primary leading-4"
              >
                ENTERPRISE
              </Text>
            </div>
          )}
        </div>
        {showClose && (
          <button type="button" onClick={onClose} aria-label="Fechar">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="w-full h-px bg-linear-to-r from-border-main/5 via-border-main to-border-main/5 mt-6" />

      {/* Navigation */}
      <nav className="flex-1 px-3 pt-4 overflow-hidden">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.url
          return (
            <Link
              key={item.title}
              href={item.url}
              onClick={onClose}
              className={cn(
                'flex items-center h-11 group w-full relative gap-4 px-3 rounded-lg transition-colors mb-2',
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
              {!isCollapsed && (
                <Text
                  as="span"
                  className={cn(
                    'text-sm font-semibold whitespace-nowrap',
                    !isActive &&
                      'text-icon-not-activate group-hover:text-icon-hover-sidebar-menu',
                  )}
                >
                  {item.title}
                </Text>
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Section - Desktop */}
      {!showClose && (
        <div className="px-3 pb-6">
          <UserSection />
        </div>
      )}

      {/* User Section - Mobile */}
      {showClose && (
        <div className="px-3 pb-6">
          <UserSection />
        </div>
      )}
    </div>
  )
}

// Sidebar Desktop
export function SidebarDesktop() {
  const [hovered, setHovered] = useState(false)

  return (
    <aside
      className={cn(
        'hidden lg:flex flex-col bg-background-sidebar-main border-r fixed left-0 top-0 h-screen transition-[width] duration-300 z-50',
        hovered ? 'w-64' : 'w-17',
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SidebarContent isCollapsed={!hovered} />
    </aside>
  )
}

// Botão e Menu Mobile
export function SidebarMobile({ isVisible }: { isVisible?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useLockBodyScroll(mobileOpen)

  return (
    <>
      {/* Botão hamburguer */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className={cn(
          'fixed top-4 left-4 z-50 p-2 bg-background-sidebar-main border border-border-main rounded-lg shadow-lg transition-transform duration-700 lg:hidden',
          isVisible ? 'translate-y-0' : '-translate-y-20',
        )}
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
        />
      )}

      {/* Menu lateral */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-dvh w-64 bg-background-sidebar-main z-50 shadow-xl transition-transform duration-300 ease-in-out border-r border-border-main',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <SidebarContent onClose={() => setMobileOpen(false)} showClose />
      </aside>
    </>
  )
}
