import { cn } from '@/lib/utils'
import { iconMap, type IconName } from '@/utils/iconsMap'

interface InputWrapperProps {
  children: React.ReactNode
  iconName: IconName
  classNameWrapper?: string
  classNameIcon?: string
  readOnly?: boolean
}

export function InputWrapper({
  children,
  iconName,
  classNameWrapper,
  classNameIcon,
  readOnly,
}: InputWrapperProps) {
  const Icon = iconMap[iconName]
  return (
    <div
      className={cn(
        'w-full h-11.75 px-3 py-3 flex gap-3 items-center rounded-md border transition-all duration-300',
        readOnly
          ? 'bg-input-background/30 border-gray-700/50 cursor-not-allowed'
          : 'bg-input-background/70 group-hover/input:border-input-border-hover group-focus-within/input:border-blue-neon group-focus-within/input:shadow-[0_2px_12px_rgba(0,0,0,0.3)] group-hover/input:not(:has(:focus)):shadow-[0_2px_12px_rgba(0,0,0,0.3)]',
        classNameWrapper,
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            'w-5 h-5 shrink-0 transition-colors duration-300',
            readOnly
              ? 'text-gray-600 '
              : 'text-gray-300/40 group-focus-within:text-blue-neon',
            classNameIcon,
          )}
        />
      )}
      {children}
    </div>
  )
}
