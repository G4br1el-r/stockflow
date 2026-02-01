import { cn } from '@/lib/utils'
import { Text } from '../Text'

interface InputTitleProps {
  text: string
  className?: string
}

export default function InputTitle({ text, className }: InputTitleProps) {
  return (
    <Text as="p" className={cn('text-base-secondary font-semibold', className)}>
      {text}
    </Text>
  )
}
