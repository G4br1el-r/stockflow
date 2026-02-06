import { cn } from '@/lib/utils'
import { LabelHTMLAttributes } from 'react'

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string
  className?: string
}

export default function InputLabel({
  text,
  className,
  ...props
}: InputLabelProps) {
  return (
    <label
      className={cn(
        'text-variant-secondary/80 transition-colors duration-300 group-focus-within:text-icon-activate font-semibold',
        className,
      )}
      {...props}
    >
      {text}
    </label>
  )
}
