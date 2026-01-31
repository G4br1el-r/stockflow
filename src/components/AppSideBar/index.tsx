'use client'

import { useState, useCallback, useMemo } from 'react'
import {
  ChartNoAxesCombined,
  Package,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react'
import Link from 'next/link'

const MENU_ITEMS = [
  { title: 'Dashboard', url: '#', icon: ChartNoAxesCombined },
  { title: 'Estoque', url: '#', icon: Package },
  { title: 'Vendas', url: '#', icon: ShoppingCart },
]

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() => setHovered(false), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])
  const openMobile = useCallback(() => setMobileOpen(true), [])

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-white  border-r fixed left-0 top-0 h-screen transition-[width] duration-300 ${
          hovered ? 'w-64' : 'w-20'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex-1 px-3 overflow-hidden">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="flex items-center gap-4 px-3 py-4 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <item.icon className="w-7 h-7 shrink-0" />
              <span
                className={`transition-opacity duration-300 whitespace-nowrap ${hovered ? 'opacity-100' : 'opacity-0 hidden'}`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={openMobile}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {mobileOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMobile}
              aria-label="Fechar menu"
            />

            <aside className="fixed left-0 top-0 h-screen w-64 bg-white z-50 shadow-xl">
              <div className="flex items-center justify-between p-6">
                <button type="button" onClick={closeMobile} aria-label="Fechar">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="px-3">
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    onClick={closeMobile}
                    className="flex items-center gap-4 px-3 py-4 rounded-lg hover:bg-gray-100 transition-colors mb-2"
                  >
                    <item.icon className="w-7 h-7" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </nav>
            </aside>
          </>
        )}
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 transition-[margin] duration-300 ${hovered ? 'md:ml-64' : 'md:ml-20'}`}
      >
        {children}
      </main>
    </div>
  )
}
