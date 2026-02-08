import { FormData } from '@/@types/FormRegister/FormData'
import { InputComponent } from '@/components/Input'
import { useFormContext } from 'react-hook-form'

export const SIZES = [
  { id: 1, value: 'PP' },
  { id: 2, value: 'P' },
  { id: 3, value: 'M' },
  { id: 4, value: 'G' },
  { id: 5, value: 'GG' },
]

interface SizeFormProps {
  index: number
  fieldsLength: number
}

export default function SizeForm({ index, fieldsLength }: SizeFormProps) {
  const { register, watch } = useFormContext<FormData>()
  const selectedSizes = watch('sizes') || []

  const isLastForm = index === fieldsLength - 1

  function isSizeAlreadySelected(sizeValue: string) {
    return selectedSizes.some(
      (item, idx) => idx !== index && item?.size === sizeValue,
    )
  }

  return (
    <div className="flex gap-3 flex-col">
      <legend className="text-variant-secondary text-sm font-semibold">
        Tamanho
      </legend>

      <div className="flex gap-2 w-fit">
        {SIZES.map((size) => {
          const isDisabled = !isLastForm || isSizeAlreadySelected(size.value)

          return (
            <InputComponent.root key={size.id} className="flex-1">
              <input
                type="radio"
                id={`sizes.${index}.size-${size.value}`}
                value={size.value}
                className="peer sr-only"
                disabled={isDisabled}
                {...register(`sizes.${index}.size`)}
              />
              <InputComponent.label
                htmlFor={`sizes.${index}.size-${size.value}`}
                text={size.value}
                className="flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 rounded-sm border border-base-secondary text-sm font-medium text-variant-secondary cursor-pointer select-none transition-all hover:border-icon-activate hover:text-icon-activate peer-checked:bg-icon-activate peer-checked:border-icon-activate peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-icon-activate peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:hover:border-base-secondary peer-disabled:hover:text-variant-secondary"
              />
            </InputComponent.root>
          )
        })}
      </div>
    </div>
  )
}
