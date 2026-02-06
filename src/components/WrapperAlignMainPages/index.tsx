import { cn } from '@/lib/utils'

interface WrapperAlignMainPagesProps {
  children: React.ReactNode
  className?: string
}

export function WrapperAlignMainPages({
  children,
  className,
}: WrapperAlignMainPagesProps) {
  return (
    <section
      className={cn(
        'bg-background-main lg:rounded-b-2xl flex gap-3 px-3 pt-25 lg:pt-3 pb-3 flex-nowrap flex-1 md:px-5 md:pb-5',
        className,
      )}
    >
      {children}
    </section>
  )
}
