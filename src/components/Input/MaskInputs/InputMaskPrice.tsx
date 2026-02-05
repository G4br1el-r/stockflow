'use client'

import { cn } from '@/lib/utils'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

interface InputMaskPriceProps
  extends Omit<NumericFormatProps, 'onValueChange'> {
  value?: number | string
  onValueChange?: (value: number | undefined) => void
  placeholder?: string
  classNameInput?: string
}

export function InputMaskPrice({
  value,
  onValueChange,
  placeholder = 'R$ 0,00',
  classNameInput = '',
  ...props
}: InputMaskPriceProps) {
  return (
    <NumericFormat
      type="tel"
      inputMode="decimal"
      value={value}
      onValueChange={(values) => {
        onValueChange?.(values.floatValue)
        console.log(values)
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      placeholder={placeholder}
      className={cn(
        'border-none w-full outline-none bg-transparent placeholder:text-base-secondary text-[0.8rem] sm:text-[1rem] ',
        classNameInput,
      )}
      enterKeyHint="next"
      {...props}
    />
  )
}
