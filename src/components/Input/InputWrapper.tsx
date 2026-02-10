import { cn } from '@/lib/utils'
import { iconMap, type IconName } from '@/utils/iconsMap'

interface InputWrapperProps {
  children: React.ReactNode
  iconName: IconName
  classNameWrapper?: string
}

export function InputWrapper({
  children,
  iconName,
  classNameWrapper,
}: InputWrapperProps) {
  const Icon = iconMap[iconName]
  return (
    <div
      className={cn(
        'w-full h-11.75 px-3 py-3 flex gap-3 items-center rounded-md border border-green-100',
        classNameWrapper,
      )}
    >
      <Icon className="w-5 h-5" />
      {children}
    </div>
  )
}
