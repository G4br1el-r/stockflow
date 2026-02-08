import { Text } from '@/components/Text'
import { cn } from '@/lib/utils'
import { Cog, CogIcon } from 'lucide-react'

interface WrapperSegmentProps {
  children: React.ReactNode
  IconMain: string
  classNameIconMain?: string
  classNameWrapperIcon?: string
  label: string
}

const iconMap = {
  cog: CogIcon,
} as const

export default function WrapperSegment({
  children,
  IconMain,
  label,
  classNameIconMain,
  classNameWrapperIcon,
}: WrapperSegmentProps) {
  const Icon = IconMain ? iconMap[IconMain as keyof typeof iconMap] : null

  return (
    <div className="flex flex-col gap-5">
      <div className="py-3 pr-3 flex items-center gap-2">
        <div
          className={cn(
            'h-8 w-8 rounded-sm flex items-center justify-center p-1.5',
            classNameWrapperIcon,
          )}
        >
          {Icon && <Icon className={classNameIconMain} />}
        </div>

        <Text as="span" className="text-[1.2rem] font-bold ">
          {label}
        </Text>
      </div>
      {children}
    </div>
  )
}
