'use client'
import { cn } from '@/lib/utils'
import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function SwitchDarkModeMinimum() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center justify-center gap-2">
      <Sun
        className={cn(
          'text-gray-neon transition-colors duration-300 ease-in-out h-5 w-5',
          !isDark && 'text-yellow-neon',
        )}
      />
      <Switch.Root
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        className={cn(
          'relative h-5 border w-10 cursor-pointer rounded-full outline-none transition-all duration-300',
        )}
      >
        <Switch.Thumb className="block size-3.75 bg-white translate-x-0.5 rounded-full transition-all duration-300 will-change-transform data-[state=checked]:translate-x-5.5  group-hover/switch:shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </Switch.Root>
      <Moon
        className={cn(
          'text-gray-neon transition-colors duration-300 ease-in-out h-5 w-5',
          isDark && 'text-blue-neon',
        )}
      />
    </div>
  )
}
