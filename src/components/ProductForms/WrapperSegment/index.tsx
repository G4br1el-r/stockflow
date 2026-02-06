import { Text } from '@/components/Text'
import { Cog } from 'lucide-react'

export default function WrapperSegment({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="py-3 pr-3 flex items-center gap-2">
        <div className="h-8 w-8 rounded-sm flex items-center justify-center bg-icon-activate/30 border border-icon-activate p-1.5">
          <Cog className="text-icon-activate" />
        </div>

        <Text as="span" className="text-[1.2rem] font-bold ">
          Segmento
        </Text>
      </div>
      {children}
    </div>
  )
}
