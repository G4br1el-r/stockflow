import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { InputComponent } from '@/components/Input'
import { TextBase } from '@/components/TextBase'
import { CirclePlus } from 'lucide-react'
import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'

interface ProductSizeProps {
  variantIndex: number
  selectedColor?: string
  dataArraySize: SizesType[]
}

interface Size {
  size: string
  quantity: number
}

export function ProductSize({
  variantIndex,
  selectedColor,
  dataArraySize,
}: ProductSizeProps) {
  const { control } = useFormContext()

  const {
    fields: sizesFields,
    append: addSize,
    remove: removeSize,
  } = useFieldArray({
    control,
    name: `variants.${variantIndex}.sizes`,
  })

  const selectedSizes: Size[] =
    useWatch({
      control,
      name: `variants.${variantIndex}.sizes`,
      defaultValue: [],
    }) || []

  function getAvailableSizes(currentSizeIndex: number) {
    const usedSizes = selectedSizes
      .filter((_, idx) => idx !== currentSizeIndex)
      .map((s) => s?.size)
      .filter(Boolean)

    return dataArraySize.filter((size) => !usedSizes.includes(size.value))
  }

  const showRemoveButton = sizesFields.length > 1
  const showAddSize = sizesFields.length !== dataArraySize.length

  console.log('renderizou o productsize')

  return (
    <div className="w-full h-full flex-center">
      <div className="w-full h-full grid grid-cols-3 gap-3">
        {sizesFields.map((sizeField, sizeIndex) => (
          <div
            key={sizeField.id}
            className="w-full h-35 bg-input-background rounded-lg flex flex-col justify-between items-center px-3 pb-3 pt-5.5 gap-1.5 group/size transition-all duration-300 focus-within:-translate-y-0.5 hover:-translate-y-0.5 relative overflow-hidden"
            style={{
              border: `1px solid ${selectedColor || '#808080'}33`,
            }}
          >
            <div
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover/size:w-full group-focus-within/size:w-full transition-all duration-500"
              style={{
                background: `linear-gradient(to right, ${selectedColor || '#808080'}80, ${selectedColor || '#808080'}, ${selectedColor || '#808080'}80)`,
              }}
            />

            <InputComponent.root>
              <InputComponent.wrapper
                iconName="noIcon"
                classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
              >
                <InputComponent.inputSelectedBasic
                  id={`size-${variantIndex}-${sizeIndex}`}
                  name={`variants.${variantIndex}.sizes.${sizeIndex}.size`}
                  dataArray={getAvailableSizes(sizeIndex)}
                  placeHolder="-"
                  classNameArrow="h-3 w-3"
                />
              </InputComponent.wrapper>
            </InputComponent.root>

            <InputComponent.root>
              <InputComponent.label
                label=""
                htmlFor={`quantity-${variantIndex}-${sizeIndex}`}
              />
              <InputComponent.inputNumeric
                id={`quantity-${variantIndex}-${sizeIndex}`}
                name={`variants.${variantIndex}.sizes.${sizeIndex}.quantity`}
                placeHolder="-"
                className="w-full h-13 border border-modal-border rounded-sm text-center shrink-0 transition-all duration-300"
              />
            </InputComponent.root>

            <div
              className="w-0 h-1 rounded-full group-focus-within/size:w-full transition-all duration-300"
              style={{
                backgroundColor: selectedColor || '#808080',
              }}
            />

            {showRemoveButton && (
              <button
                type="button"
                onClick={() => removeSize(sizeIndex)}
                className="absolute top-0.5 right-1.5 text-red-400 hover:scale-110 text-[0.8rem] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        {showAddSize && (
          <button
            type="button"
            onClick={() => addSize({ size: '', quantity: 0 })}
            className="w-full h-35 bg-input-background cursor-pointer rounded-lg flex flex-col justify-center items-center p-3 gap-1.5 border-dashed border-2 transition-all duration-300 hover:bg-input-background/50 hover:-translate-y-1 group/add relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/0 group-hover/add:bg-white/2 rounded-lg transition-all duration-500" />

            <CirclePlus
              className="transition-all duration-500 group-hover/add:scale-125 group-hover/add:rotate-90 relative z-10"
              style={{ color: '#4B5563' }}
            />
            <TextBase
              as="span"
              className="text-[0.9rem] transition-all duration-300 relative z-10"
              style={{ color: '#4B5563' }}
            >
              Adicionar
            </TextBase>
          </button>
        )}
      </div>
    </div>
  )
}
