import { cn } from '@/lib/utils'

interface InputRootProps {
  children: React.ReactNode
  className?: string
}

export function InputRoot({ children, className }: InputRootProps) {
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-1 justify-between group',
        className,
      )}
    >
      {children}
    </div>
  )
}
