import { CategoryTypes } from '@/@types/Form/Register/ProductDetailsForm/category.types'
import { StoreType } from '@/@types/Form/Register/ProductDetailsForm/story.types'
import { InputComponent } from '@/components/Input'
import { InputImage } from '@/components/Input/InputImage'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'

interface ProductDetailsProps {
  dataArrayStore: StoreType[]
  dataArrayCategory: CategoryTypes[]
}

export function ProductDetails({
  dataArrayStore,
  dataArrayCategory,
}: ProductDetailsProps) {
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

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 extralg:order-2">
          <InputComponent.root>
            <InputComponent.label label="Nome do Produto" />
            <InputComponent.wrapper
              iconName="pencil"
              classNameWrapper="bg-gray-950/70"
            >
              <InputComponent.inputBase placeHolder="Camiseta Oversized" />
            </InputComponent.wrapper>
          </InputComponent.root>

          <div className="flex flex-col gap-5 extramd:grid extramd:grid-cols-[auto_1fr]">
            <div className="flex flex-col gap-5 order-1 justify-between">
              <InputComponent.root>
                <InputComponent.label label="Loja" />
                <InputComponent.wrapper
                  iconName="store"
                  classNameWrapper="bg-gray-950/70"
                >
                  <InputComponent.inputSelectedBasic
                    dataArray={dataArrayStore}
                    placeHolder="-"
                  />
                </InputComponent.wrapper>
              </InputComponent.root>

              <InputComponent.root>
                <InputComponent.label label="Categoria" />
                <InputComponent.wrapper
                  iconName="category"
                  classNameWrapper="bg-gray-950/70"
                >
                  <InputComponent.inputSelectedGroup
                    placeHolder="-"
                    dataArray={dataArrayCategory}
                  />
                </InputComponent.wrapper>
              </InputComponent.root>

              <InputComponent.root>
                <InputComponent.label label="Situação" />
                <InputComponent.wrapper
                  iconName="shieldCheck"
                  classNameWrapper="bg-gray-950/70"
                >
                  <InputComponent.inputSelectedBasic placeHolder="-" />
                </InputComponent.wrapper>
              </InputComponent.root>

              <InputComponent.root>
                <InputComponent.label label="SKU" />
                <InputComponent.wrapper
                  iconName="scanBarCode"
                  classNameWrapper="bg-gray-950/70"
                >
                  <InputComponent.inputBase />
                </InputComponent.wrapper>
              </InputComponent.root>
            </div>

            <InputImage />
          </div>
        </div>
      </section>
    </div>
  )
}
