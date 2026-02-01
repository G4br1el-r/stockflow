import { cn } from '@/lib/utils'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: React.ReactNode
}

const defaultStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-sm',
  span: 'text-sm',
}

export function Text({
  as: Tag = 'p',
  children,
  className,
  ...props
}: TextProps) {
  return (
    <Tag className={cn(defaultStyles[Tag], className)} {...props}>
      {children}
    </Tag>
  )
}
