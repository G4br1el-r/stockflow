import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        'bg-blue-neon h-13 w-13 flex items-center justify-center rounded-sm shadow-[0_0_8px_rgb(13_89_242)]',
        className,
      )}
    >
      <Zap className="text-white" size={28} />
    </div>
  )
}
