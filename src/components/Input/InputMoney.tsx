'use client'
import { NumericFormat } from 'react-number-format'

export function InputMoney() {
  return (
    <NumericFormat
      className="w-full h-full focus:outline-none placeholder:text-input-placeholder"
      placeholder="R$ 0,00"
      prefix="R$ "
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      onValueChange={(values) => {
        console.log(values.floatValue)
        console.log(values.formattedValue)
      }}
    />
  )
}
