import { Text } from '@/components/Text'
import { cn } from '@/lib/utils'
import { BadgeInfo, Banknote, LucideIcon, Package } from 'lucide-react'

interface TitleSectionFormProps {
  IconMain?: keyof typeof iconMap
  classNameBackgroundIcon?: string
  classNameIcon?: string
  label: string
}

const iconMap = {
  badgeInfo: BadgeInfo,
  package: Package,
  banknote: Banknote,
} as const

export default function TitleSectionForm({
  IconMain,
  label,
  classNameBackgroundIcon,
  classNameIcon,
}: TitleSectionFormProps) {
  const Icon: LucideIcon | null = IconMain ? iconMap[IconMain] : null

  return (
    <div className="w-full flex items-center gap-2">
      <div
        className={cn(
          'h-8 w-8 rounded-sm flex items-center justify-center p-1.5',
          classNameBackgroundIcon,
        )}
      >
        {Icon && <Icon className={classNameIcon} />}
      </div>

      <Text as="span" className="text-[1.2rem] font-bold whitespace-nowrap">
        {label}
      </Text>

      <div className="flex-1 mx-5 lg:mx-30 h-px bg-linear-to-r from-border-main/10 via-border-main to-border-main/10" />
    </div>
  )
}
