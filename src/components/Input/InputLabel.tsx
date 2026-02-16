import { cn } from '@/lib/utils'
import { TextBase } from '../TextBase'

interface InputLabelProps {
  label: string
  htmlFor: string
  readOnly?: boolean
  classNameLabel?: string
}

export function InputLabel({
  label,
  htmlFor,
  readOnly,
  classNameLabel,
}: InputLabelProps) {
  return (
    <label htmlFor={htmlFor}>
      <TextBase
        as="p"
        className={cn(
          'font-bold transition-colors duration-300',
          readOnly
            ? 'text-gray-500'
            : 'group-focus-within:text-blue-neon text-label-input',
          classNameLabel,
        )}
      >
        {label}
      </TextBase>
    </label>
  )
}
