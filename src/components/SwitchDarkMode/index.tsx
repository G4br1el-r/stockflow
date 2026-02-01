'use client'

import { Switch } from '@/components/ui/switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Text } from '../Text'
import { cn } from '@/lib/utils'

export function SwitchDarkMode() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <div className="group relative w-full h-14 lg:h-11 px-1.25 flex items-center mx-auto rounded-lg bg-background-sidebar-user border border-border-sidebar-user overflow-hidden justify-between">
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
          <Text as="span" className="font-semibold text-sm">
            {isDark ? 'Modo Escuro' : 'Modo Claro'}
          </Text>
          <Text as="span" className="text-xs text-base-primary">
            {isDark ? 'Tema escuro ativo' : 'Tema claro ativo'}
          </Text>
        </div>
      </div>

      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        className={cn(
          'relative z-10 cursor-pointer shrink-0',
          isDark && 'data-[state=checked]:bg-icon-activate',
        )}
      />
    </div>
  )
}
