import { cn } from '@/lib/utils'

interface InputBaseWrapper {
  className?: string
  placeHolder?: string
}

export function InputBase({ className, placeHolder }: InputBaseWrapper) {
  return (
    <input
      placeholder={placeHolder}
      className={cn(
        'w-full h-full placeholder:text-gray-300/40 focus:outline-none flex',
        className,
      )}
    />
  )
}
