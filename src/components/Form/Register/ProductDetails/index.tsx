import { CategoryTypes } from '@/@types/Form/Register/ProductDetailsForm/category.types'
import { StoreType } from '@/@types/Form/Register/ProductDetailsForm/story.types'
import { InputComponent } from '@/components/Input'
import { InputImage } from '@/components/Input/InputImage'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { useFormContext, useFormState } from 'react-hook-form'
import { ProductFormData } from '@/@schema/Form/product-form.schema'

interface ProductDetailsProps {
  dataArrayStore: StoreType[]
  dataArrayCategory: CategoryTypes[]
}

const DataStatusProduct = [
  {
    value: 'active',
    label: 'Ativo',
  },
  {
    value: 'inactive',
    label: 'Inativo',
  },
]

export function ProductDetails({
  dataArrayStore,
  dataArrayCategory,
}: ProductDetailsProps) {
  const { control, setValue } = useFormContext<ProductFormData>()
  const { errors } = useFormState({ control })

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-full flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="filePlus"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Informações Gerais
        </TextBase>
      </div>

      <section className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-5 extralg:order-2">
          <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.label label="Nome do Produto" htmlFor="product" />
              <InputComponent.wrapper iconName="pencil">
                <InputComponent.inputBase
                  placeHolder="Camiseta Oversized"
                  id="product"
                  name="product"
                />
              </InputComponent.wrapper>

              {errors.product && (
                <TextBase as="span" className="text-red-500 text-sm mt-1">
                  {errors.product.message as string}
                </TextBase>
              )}
            </InputComponent.root>
          </div>

          <div className="flex flex-col gap-5 extramd:grid extramd:grid-cols-[auto_1fr]">
            <div className="flex flex-col gap-5 order-1 justify-between">
              <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
                <InputComponent.root>
                  <InputComponent.label label="Loja" htmlFor="store" />
                  <InputComponent.wrapper iconName="store">
                    <InputComponent.inputSelectedBasic
                      id="store"
                      name="store"
                      dataArray={dataArrayStore}
                      placeHolder="-"
                      onValueChange={(storeValue) => {
                        const storeLabel = dataArrayStore.find(
                          (item) => item.value === storeValue,
                        )
                        if (storeLabel) {
                          setValue(`storeLabel`, storeLabel.label)
                        }
                      }}
                    />
                  </InputComponent.wrapper>
                  {errors.store && (
                    <TextBase as="span" className="text-red-500 text-sm mt-1">
                      {errors.store.message as string}
                    </TextBase>
                  )}
                </InputComponent.root>
              </div>

              <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
                <InputComponent.root>
                  <InputComponent.label label="Categoria" htmlFor="category" />
                  <InputComponent.wrapper iconName="category">
                    <InputComponent.inputSelectedGroup
                      id="category"
                      name="category"
                      placeHolder="-"
                      dataArray={dataArrayCategory}
                      onValueChange={(categoryValue) => {
                        for (const category of dataArrayCategory) {
                          const item = category.items.find(
                            (i) => i.value === categoryValue,
                          )

                          if (item) {
                            setValue('categoryLabel', item.label)
                            break
                          }
                        }
                      }}
                    />
                  </InputComponent.wrapper>
                  {errors.category && (
                    <TextBase as="span" className="text-red-500 text-sm mt-1">
                      {errors.category.message as string}
                    </TextBase>
                  )}
                </InputComponent.root>
              </div>

              <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
                <InputComponent.root>
                  <InputComponent.label label="Situação" htmlFor="status" />
                  <InputComponent.wrapper iconName="shieldCheck">
                    <InputComponent.inputSelectedBasic
                      placeHolder="-"
                      id="status"
                      name="status"
                      dataArray={DataStatusProduct}
                      onValueChange={(statusValue) => {
                        const statusLabel = DataStatusProduct.find(
                          (item) => item.value === statusValue,
                        )
                        if (statusLabel) {
                          setValue(`statusLabel`, statusLabel.label)
                        }
                      }}
                    />
                  </InputComponent.wrapper>
                  {errors.status && (
                    <TextBase as="span" className="text-red-500 text-sm mt-1">
                      {errors.status.message as string}
                    </TextBase>
                  )}
                </InputComponent.root>
              </div>

              <div className="group/input">
                <InputComponent.root readOnly>
                  <InputComponent.label label="SKU" htmlFor="sku" readOnly />
                  <InputComponent.wrapper iconName="scanBarCode" readOnly>
                    <InputComponent.inputBase readOnly id="sku" name="sku" />
                  </InputComponent.wrapper>
                </InputComponent.root>
              </div>
            </div>

            <InputImage />
          </div>
        </div>
      </section>
    </div>
  )
}
