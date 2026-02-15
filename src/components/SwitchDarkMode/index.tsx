'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TextBase } from '../TextBase'
import { cn } from '@/lib/utils'
import * as Switch from '@radix-ui/react-switch'

export function SwitchDarkMode() {
  const { theme, setTheme } = useTheme()
  const [localChecked, setLocalChecked] = useState(false)

  useEffect(() => {
    setLocalChecked(theme === 'dark')
  }, [theme])

  const isDark = localChecked

  return (
    <div className="group/switch relative w-full h-14 lg:h-11 px-1.25 flex items-center mx-auto rounded-lg bg-background-hover border border-border-default overflow-hidden justify-between transition-all duration-300 hover:bg-background-modal hover:border-border-hover hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-2 relative z-10">
        <div
          className={cn(
            'lg:h-8 lg:w-8 h-11 w-11 rounded-lg flex items-center shrink-0 justify-center transition-all duration-300 group-hover/switch:scale-110',
            isDark
              ? 'bg-indigo-500/10 text-indigo-400 group-hover/switch:bg-indigo-500/20 group-hover/switch:shadow-[0_0_12px_rgba(99,102,241,0.3)]'
              : 'bg-yellow-500/10 text-yellow-600 group-hover/switch:bg-yellow-500/20 group-hover/switch:shadow-[0_0_12px_rgba(202,138,4,0.3)]',
          )}
        >
          {isDark ? (
            <Moon className="w-4 h-4 transition-transform duration-300 group-hover/switch:rotate-12" />
          ) : (
            <Sun className="w-4 h-4 transition-transform duration-300 group-hover/switch:rotate-90" />
          )}
        </div>
        <div className="flex flex-col shrink-0">
          <TextBase
            as="span"
            className="font-semibold text-sm transition-colors duration-300 group-hover/switch:text-text-primary"
          >
            {isDark ? 'Modo Escuro' : 'Modo Claro'}
          </TextBase>
          <TextBase as="span" className="text-xs text-text-secondary">
            {isDark ? 'Tema escuro ativo' : 'Tema claro ativo'}
          </TextBase>
        </div>
      </div>

      <Switch.Root
        checked={localChecked}
        onCheckedChange={(checked) => {
          setLocalChecked(checked)
          setTimeout(() => setTheme(checked ? 'dark' : 'light'), 100)
        }}
        className={cn(
          'relative h-5 w-10 cursor-pointer rounded-full outline-none transition-all duration-300 hover:scale-110',
          localChecked
            ? 'data-[state=checked]:bg-background-hover hover:shadow-[0_0_10px_rgba(99,102,241,0.3)]'
            : 'bg-gray-300 hover:shadow-[0_0_10px_rgba(202,138,4,0.3)]',
        )}
      >
        <Switch.Thumb className="block size-3.75 bg-white translate-x-0.5 rounded-full transition-all duration-300 will-change-transform data-[state=checked]:translate-x-5.5 group-hover/switch:scale-110 group-hover/switch:shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </Switch.Root>
    </div>
  )
}
