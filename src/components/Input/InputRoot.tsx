import { cn } from '@/lib/utils'

interface InputRootProps {
  children: React.ReactNode
  className?: string
}

export default function InputRoot({ children, className }: InputRootProps) {
  return <div className={cn('w-full space-y-1', className)}>{children}</div>
}
