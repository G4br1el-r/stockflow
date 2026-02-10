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
    <div className="group relative w-full h-14 lg:h-11 px-1.25 flex items-center mx-auto rounded-lg bg-background-hover border border-border-default overflow-hidden justify-between">
      <div className="flex items-center gap-2 relative z-10">
        <div
          className={cn(
            'lg:h-8 lg:w-8 h-11 w-11 rounded-lg flex items-center shrink-0 justify-center transition-all duration-300',
            isDark
              ? 'bg-indigo-500/10 text-indigo-400'
              : 'bg-yellow-500/10 text-yellow-600',
          )}
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </div>
        <div className="flex flex-col shrink-0">
          <TextBase as="span" className="font-semibold text-sm">
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
          'relative h-5 w-10 cursor-pointer rounded-full outline-none',
          localChecked
            ? 'data-[state=checked]:bg-background-hover'
            : 'bg-gray-300',
        )}
      >
        <Switch.Thumb className="block size-3.75 bg-white translate-x-0.5 rounded-full transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-5.5" />
      </Switch.Root>
    </div>
  )
}
