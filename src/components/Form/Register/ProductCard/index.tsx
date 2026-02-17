import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'
import { InputComponent } from '@/components/Input'
import { TextBase } from '@/components/TextBase'
import { Palette, Trash2 } from 'lucide-react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { ProductSize } from '../ProductSize'
import { cn } from '@/lib/utils'
import { ProductFormData } from '@/@schema/Form/product-form.schema'

interface ProductCardProps {
  dataArraySize: SizesType[]
}

interface Variant {
  colorName: string
  hexName: string
  minimumStock: number
  sizes: Array<{ size: string; quantity: number }>
}

const colorMap = [
  { value: '#FFFF00', label: 'Amarelo' },
  { value: '#0000FF', label: 'Azul' },
  { value: '#000080', label: 'Azul Marinho' },
  { value: '#F5F5DC', label: 'Bege' },
  { value: '#FFFFFF', label: 'Branco' },
  { value: '#DEB887', label: 'Caramelo' },
  { value: '#00FFFF', label: 'Ciano' },
  { value: '#808080', label: 'Cinza' },
  { value: '#FF6347', label: 'Coral' },
  { value: '#F0E68C', label: 'Creme' },
  { value: '#FFD700', label: 'Dourado' },
  { value: '#4B0082', label: 'Índigo' },
  { value: '#FFA500', label: 'Laranja' },
  { value: '#FF00FF', label: 'Magenta' },
  { value: '#8B4513', label: 'Marrom' },
  { value: '#000000', label: 'Preto' },
  { value: '#C0C0C0', label: 'Prata' },
  { value: '#FFC0CB', label: 'Rosa' },
  { value: '#800080', label: 'Roxo' },
  { value: '#40E0D0', label: 'Turquesa' },
  { value: '#FF0000', label: 'Vermelho' },
  { value: '#008000', label: 'Verde' },
  { value: '#800000', label: 'Vinho' },
  { value: '#EE82EE', label: 'Violeta' },
]

export function ProductCard({ dataArraySize }: ProductCardProps) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variants',
  })

  const allVariants =
    useWatch({
      control,
      name: 'variants',
    }) || []

  const showRemoveButton = fields.length > 1

  function getAvailableColors(currentIndex: number) {
    const usedColors = allVariants
      .filter((_, idx) => idx !== currentIndex)
      .map((v) => v?.hexName)
      .filter(Boolean)

    return colorMap.filter((color) => !usedColors.includes(color.value))
  }

  function AddNewCard() {
    append({
      colorName: '',
      hexName: '',
      minimumStock: 0,
      sizes: [{ size: '', quantity: 0 }],
    })
  }

  function removeCard(index: number) {
    remove(index)
  }

  return (
    <>
      <section className="extramd:grid extramd:grid-cols-2 extramd:w-fit extralg:grid-cols-3 xl:extramd:grid-cols-2 2xl:grid-cols-3 2xl:w-full h-fit gap-5 flex flex-col items-center w-full">
        {fields.map((field, index) => {
          const selectedColor = allVariants[index]?.hexName
          const totalQuantity =
            allVariants[index]?.sizes?.reduce((acc, cur) => {
              return acc + (Number(cur.quantity) || 0)
            }, 0) || 0

          return (
            <div
              key={field.id}
              className="w-full h-fit extramd:h-full bg-modal-background border-2 rounded-2xl flex flex-col 2xl:max-w-full relative overflow-hidden group/card transition-all duration-500 hover:-translate-y-1 focus-within:-translate-y-1"
              style={{
                borderColor: selectedColor ? `${selectedColor}33` : '#80808033',
              }}
            >
              <div
                className="w-full h-20 p-3 flex items-center justify-between rounded-t-2xl border-b-2 gap-5 relative z-10 transition-colors duration-500"
                style={{
                  backgroundColor: `${selectedColor || '#808080'}0D`,
                  borderBottomColor: `${selectedColor || '#808080'}33`,
                }}
              >
                <div
                  className="w-9 h-9 bg-red-950 rounded-full shrink-0 transition-all duration-500 group-hover/card:scale-110 group-focus-within/card:scale-110"
                  style={{
                    backgroundColor: selectedColor || '#808080',
                  }}
                />

                <InputComponent.root>
                  <InputComponent.inputSelectedBasic
                    id={`color-${index}`}
                    name={`variants.${index}.hexName`}
                    dataArray={getAvailableColors(index)}
                    placeHolder="Selecione uma cor"
                    classNameWrapper={cn(
                      errors.variants?.[index]?.hexName && 'text-red-500!',
                    )}
                    onValueChange={(hexValue) => {
                      const colorData = colorMap.find(
                        (c) => c.value === hexValue,
                      )
                      if (colorData) {
                        setValue(`variants.${index}.colorName`, colorData.label)
                      }
                    }}
                  />
                </InputComponent.root>

                {showRemoveButton && (
                  <button
                    onClick={() => removeCard(index)}
                    type="button"
                    tabIndex={0}
                    className="shrink-0 cursor-pointer transition-all duration-300 hover:text-red-400 hover:scale-110 focus:text-red-400 focus:outline-none active:scale-95"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="w-full h-full p-3 flex flex-col gap-3 relative z-10">
                <InputComponent.root>
                  <InputComponent.label
                    label="Est. Mínimo"
                    htmlFor={`minimumStock-${index}`}
                    classNameLabel="!text-label-input"
                  />
                  <InputComponent.wrapper
                    iconName="stock"
                    classNameWrapper={cn(
                      'w-1/2 rounded-sm flex-1 text-center',
                      errors.product && 'border-red-500',
                    )}
                    classNameIcon="!text-gray-600"
                  >
                    <InputComponent.inputNumeric
                      placeHolder="-"
                      id={`minimumStock-${index}`}
                      name={`variants.${index}.minimumStock`}
                    />
                  </InputComponent.wrapper>
                  {errors.variants?.[index]?.minimumStock && (
                    <TextBase as="span" className="text-red-500 text-sm mt-1">
                      {errors.variants?.[index]?.minimumStock.message as string}
                    </TextBase>
                  )}
                </InputComponent.root>

                <div className="flex items-center justify-between">
                  <TextBase
                    as="span"
                    className="text-[0.8rem] text-label-input font-bold"
                  >
                    TAMANHOS & QUANTIDADES
                  </TextBase>
                  <div
                    className="px-2 py-1 flex-center rounded-sm border transition-all duration-300"
                    style={{
                      backgroundColor: `${selectedColor || '#808080'}33`,
                      borderColor: `${selectedColor || '#808080'}80`,
                    }}
                  >
                    <TextBase
                      as="span"
                      className="text-[0.7rem]"
                      style={{
                        color:
                          selectedColor === '#000000'
                            ? '#ffffff'
                            : selectedColor || '#808080',
                      }}
                    >
                      Total: {totalQuantity}
                    </TextBase>
                  </div>
                </div>

                <ProductSize
                  dataArraySize={dataArraySize}
                  variantIndex={index}
                  selectedColor={selectedColor}
                />
              </div>
            </div>
          )
        })}
      </section>

      <button
        type="button"
        tabIndex={0}
        onClick={AddNewCard}
        className="w-full active:scale-95 h-15 shrink-0 cursor-pointer rounded-lg bg-input-background border-2 border-dashed border-input-border flex-center gap-3 transition-all duration-500 hover:border-blue-neon/50 focus:border-dashed focus:border-blue-neon hover:bg-input-background/50 hover:-translate-y-0.5 focus:outline-none focus:ring-blue-neon/50 focus:bg-input-background/50 focus:-translate-y-0.5 group/new relative overflow-hidden"
      >
        <Palette className="w-5 h-5 text-gray-600 transition-all duration-500 group-hover/new:text-blue-neon group-hover/new:scale-110 group-hover/new:rotate-12 group-focus/new:text-blue-neon group-focus/new:scale-110 group-focus/new:rotate-12 relative z-10" />
        <TextBase
          as="span"
          className="text-gray-600 transition-all duration-300 group-hover/new:text-blue-neon group-focus/new:text-blue-neon relative z-10"
        >
          Nova Variante de Cor
        </TextBase>
      </button>
    </>
  )
}
