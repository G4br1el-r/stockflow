'use client'
import { cn } from '@/lib/utils'
import { Controller, useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

interface InputNumericProps {
  id: string
  name: string
  className?: string
  placeHolder?: string
  readOnly?: boolean
  thousandSeparator?: boolean
  decimalScale?: number
  prefix?: string
}

export function InputNumeric({
  id,
  name,
  className,
  placeHolder,
  readOnly,
  thousandSeparator = true,
  decimalScale = 0,
  prefix,
}: InputNumericProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NumericFormat
          id={id}
          value={field.value}
          tabIndex={readOnly ? -1 : 0}
          placeholder={placeHolder}
          readOnly={readOnly}
          thousandSeparator={thousandSeparator ? '.' : false}
          decimalSeparator=","
          decimalScale={decimalScale}
          fixedDecimalScale={decimalScale > 0}
          allowNegative={false}
          prefix={prefix}
          type="tel"
          inputMode="decimal"
          enterKeyHint="next"
          onValueChange={(values) => {
            field.onChange(values.floatValue)
          }}
          className={cn(
            'w-full h-full placeholder:text-input-placeholder focus:outline-none flex',
            className,
          )}
        />
      )}
    />
  )
}
