'use client'
import { cn } from '@/lib/utils'
import { Controller, useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

interface InputMoneyProps {
  id: string
  name: string
  readOnly?: boolean
}

export function InputMoney({ id, name, readOnly }: InputMoneyProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NumericFormat
          id={id}
          value={field.value}
          className={cn(
            'w-full h-full focus:outline-none placeholder:text-input-placeholder',
            readOnly && 'cursor-not-allowed',
          )}
          placeholder="R$ 0,00"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          allowNegative={false}
          readOnly={readOnly}
          type="tel"
          inputMode="decimal"
          enterKeyHint="next"
          onValueChange={(values) => {
            field.onChange(values.floatValue)
          }}
        />
      )}
    />
  )
}
