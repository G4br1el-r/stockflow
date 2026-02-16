import { cn } from '@/lib/utils'
import { useFormContext } from 'react-hook-form'
import { readonly } from 'zod'

interface InputBaseWrapper {
  id: string
  name: string
  className?: string
  placeHolder?: string
  readOnly?: boolean
}

export function InputBase({
  id,
  name,
  className,
  placeHolder,
  readOnly,
}: InputBaseWrapper) {
  const { register } = useFormContext()
  return (
    <input
      id={id}
      {...register(name)}
      tabIndex={readOnly ? -1 : 0}
      placeholder={placeHolder}
      readOnly={readOnly}
      className={cn(
        'w-full h-full placeholder:text-input-placeholder focus:outline-none flex ',
        className,
      )}
    />
  )
}
