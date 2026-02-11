import { cn } from '@/lib/utils'
import { iconMap, type IconName } from '@/utils/iconsMap'

interface SectionHeaderProps {
  classNameBackGround?: string
  classNameIcon?: string
  iconName: IconName
}

export function SectionHeader({
  classNameBackGround,
  classNameIcon,
  iconName,
}: SectionHeaderProps) {
  const Icon = iconMap[iconName]
  return (
    <div
      className={cn(
        'w-10 h-10 border-2 rounded-sm flex-center',
        classNameBackGround,
      )}
    >
      {Icon && <Icon className={cn('w-6 h-6', classNameIcon)} />}
    </div>
  )
}
