import { cn } from '@/lib/utils'

interface InputRootProps {
  children: React.ReactNode
  className?: string
}

export default function InputRoot({ children, className }: InputRootProps) {
  return (
    <div className={cn('w-full flex flex-col gap-1 group', className)}>
      {children}
    </div>
  )
}
