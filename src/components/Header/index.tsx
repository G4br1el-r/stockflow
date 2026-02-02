'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { useScrollVisibility } from '@/hooks/useScrollVisible'
import { SidebarMobile } from '../Sidebar'
import { cn } from '@/lib/utils'
import { Text } from '../Text'
import { getGreeting } from '@/utils/getGreeting'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useIsMobile } from '@/hooks/useIsMobile'

export function Header() {
  const isMobile = useIsMobile(1024)
  console.log(isMobile)
  const { isVisible } = useScrollVisibility()
  const pathname = usePathname().replace('/', '').toLocaleUpperCase()
  const [mobileOpen, setMobileOpen] = useState(false)

  const greeting = getGreeting()

  return (
    <>
      <div
        className={cn(
          'lg:relative fixed top-3 lg:top-0 left-1/2 z-40 flex items-center justify-center w-[90%] lg:h-10 h-18 lg:bg-b lg:w-full  transition-transform duration-700 ease-in-out transform lg:translate-y-0 rounded-full lg:rounded-b-none lg:rounded-t-2xl lg:border-b lg:border-border-main lg:bg-background-main ',
          isVisible
            ? 'translate-y-0 -translate-x-1/2'
            : '-translate-y-25 -translate-x-1/2',
        )}
      >
        {isMobile && (
          <div className="absolute inset-0 overflow-hidden rounded-full lg:rounded-none">
            <Image
              src={greeting.url}
              alt="Fundo"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
        )}

        {isMobile && (
          <div className="relative flex w-full h-full items-center">
            <div className="max-w-1/2 w-1/2 h-full gap-2 flex items-center justify-start pl-4 md:pl-15">
              <Text as="span" className="small:text-lg">
                {greeting.emoji}
              </Text>
              <div className="flex flex-col">
                <Text
                  as="span"
                  className="text-sm lg:text-base text-white/90 font-medium"
                >
                  {greeting.text}
                </Text>
                <Text
                  as="span"
                  className="text-sm small:text-lg lg:text-base w-18 xs:w-full truncate xs:whitespace-normal text-white/90 font-medium"
                >
                  Maria Julia!
                </Text>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-2 bg-background-sidebar-main border border-border-main rounded-lg shadow-header"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            <div className="w-1/2 h-full flex items-center pr-4 md:pr-15 justify-end">
              <Text
                as="span"
                className="text-sm small:text-lg text-white/90 lg:text-base font-bold"
              >
                {pathname}
              </Text>
            </div>
          </div>
        )}
      </div>

      <SidebarMobile
        isVisible={isVisible}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
    </>
  )
}
