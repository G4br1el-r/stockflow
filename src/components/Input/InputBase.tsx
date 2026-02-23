import { cn } from '@/lib/utils'
import { Controller, useFormContext } from 'react-hook-form'

interface InputBaseWrapper {
  id: string
  name: string
  className?: string
  placeHolder?: string
  readOnly?: boolean
  disable?: boolean
}

export function InputBase({
  id,
  name,
  className,
  placeHolder,
  readOnly,
  disable,
}: InputBaseWrapper) {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          {...field}
          id={id}
          tabIndex={readOnly ? -1 : 0}
          placeholder={placeHolder}
          readOnly={readOnly}
          disabled={disable}
          className={cn(
            'w-full h-full placeholder:text-input-placeholder focus:outline-none flex',
            className,
          )}
        />
      )}
    />
  )
}
