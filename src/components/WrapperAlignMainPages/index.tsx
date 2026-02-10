import { cn } from '@/lib/utils'

interface WrapperAlignMainPagesProps {
  children: React.ReactNode
  classNameWrapper?: string
}

export function WrapperAlignMainPages({
  children,
  classNameWrapper,
}: WrapperAlignMainPagesProps) {
  return (
    <section className={cn('w-full flex flex-col px-3', classNameWrapper)}>
      {children}
    </section>
  )
}
