import { cn } from '@/lib/utils'

interface InputWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function InputWrapper({
  children,
  className,
}: InputWrapperProps) {
  return (
    <div
      className={cn(
        'group w-full transition-colors duration-300 h-12 flex gap-2 items-center justify-start p-3 focus-within:border-icon-activate border border-base-primary/50 rounded-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}
