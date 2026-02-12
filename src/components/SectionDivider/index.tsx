import { cn } from '@/lib/utils'

interface SectionDividerProps {
  classNameDivider?: string
}

export function SectionDivider({ classNameDivider }: SectionDividerProps) {
  return (
    <div
      className={cn(
        'w-full h-0.5 bg-linear-to-r from-gray-800/10 via-gray-800 to-gray-800/10',
        classNameDivider,
      )}
    />
  )
}
