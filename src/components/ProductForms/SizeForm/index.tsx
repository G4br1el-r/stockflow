import { InputComponent } from '@/components/Input'

const SIZES = [
  { id: 1, value: 'PP' },
  { id: 2, value: 'P' },
  { id: 3, value: 'M' },
  { id: 4, value: 'G' },
  { id: 5, value: 'GG' },
]

export default function SizeForm() {
  return (
    <div className="flex gap-1 flex-col ">
      <legend className="text-variant-secondary text-sm font-semibold">
        Tamanho
      </legend>
      <div className="flex gap-2 w-fit">
        {SIZES.map((size) => (
          <InputComponent.root key={size.id} className="flex-1">
            <input
              type="radio"
              id={`size-${size.value}`}
              name="size"
              value={size.value}
              className="peer sr-only"
            />
            <InputComponent.label
              htmlFor={`size-${size.value}`}
              text={size.value}
              className="
              flex items-center justify-center
              w-10 h-10
              xs:w-12 xs:h-12
              rounded-sm
              border border-base-secondary
              text-sm font-medium
              text-variant-secondary
              cursor-pointer select-none
              transition-all
              hover:border-icon-activate
              hover:text-icon-activate

              peer-checked:bg-icon-activate
              peer-checked:border-icon-activate
              peer-checked:text-white

              peer-focus-visible:ring-2
              peer-focus-visible:ring-icon-activate
            "
            />
          </InputComponent.root>
        ))}
      </div>
    </div>
  )
}
