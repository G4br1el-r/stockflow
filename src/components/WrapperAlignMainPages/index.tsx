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
        'h-full w-full bg-background-main lg:rounded-b-2xl flex gap-3 px-3 lg:pt-0 pt-30 pb-5 flex-nowrap',
        className,
      )}
    >
      {children}
    </section>
  )
}
