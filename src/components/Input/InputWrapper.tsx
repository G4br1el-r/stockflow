import { cn } from '@/lib/utils'
import { iconMap, type IconName } from '@/utils/iconsMap'

interface InputWrapperProps {
  children: React.ReactNode
  iconName: IconName
  classNameWrapper?: string
  classNameIcon?: string
}

export function InputWrapper({
  children,
  iconName,
  classNameWrapper,
  classNameIcon,
}: InputWrapperProps) {
  const Icon = iconMap[iconName]
  return (
    <div
      className={cn(
        'w-full h-11.75 px-3 py-3 flex gap-3 items-center rounded-md border bg-input-background/70 transition-all duration-300',
        'group-hover/input:not(:focus-within):border-input-border-hover',
        'group-hover/input:not(:focus-within):shadow-[0_2px_12px_rgba(0,0,0,0.3)]',
        'group-focus-within/input:border-blue-neon',
        classNameWrapper,
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            'w-5 h-5 shrink-0 text-gray-300/40 group-focus-within:text-blue-neon transition-colors duration-300',
            classNameIcon,
          )}
        />
      )}
      {children}
    </div>
  )
}
