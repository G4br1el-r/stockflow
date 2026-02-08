import { Text } from '@/components/Text'
import { cn } from '@/lib/utils'
import { BadgeInfo, Banknote, Package } from 'lucide-react'

interface TitleSectionFormProps {
  IconMain: string
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
  const Icon = IconMain ? iconMap[IconMain as keyof typeof iconMap] : null

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
    </div>
  )
}
