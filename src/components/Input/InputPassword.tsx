import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface InputPasswordWrapper {
  id: string
  name: string
  className?: string
  placeHolder?: string
  disable?: boolean
}

export function InputPassword({
  id,
  name,
  className,
  placeHolder,
  disable,
}: InputPasswordWrapper) {
  const { control } = useFormContext()
  const [show, setShow] = useState(false)

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={id}
            type={show ? 'text' : 'password'}
            placeholder={placeHolder}
            disabled={disable}
            className={cn(
              'w-full h-full placeholder:text-input-placeholder disabled:cursor-auto focus:outline-none flex',
              className,
            )}
          />
        )}
      />
      <button
        type="button"
        disabled={disable}
        className="focus:outline-none cursor-pointer disabled:cursor-auto"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? (
          <Eye className="w-5 h-5 text-gray-neon" />
        ) : (
          <EyeOff className="w-5 h-5 text-gray-neon" />
        )}
      </button>
    </>
  )
}
