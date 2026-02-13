import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'
import { InputComponent } from '@/components/Input'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { CirclePlus, Palette, Trash2 } from 'lucide-react'

interface ProductVarianteGridProps {
  dataArraySize: SizesType[]
}

const collorMap = [
  { value: '#000000', label: 'Preto' },
  { value: '#FFFFFF', label: 'Branco' },
  { value: '#808080', label: 'Cinza' },
  { value: '#F5F5DC', label: 'Bege' },
  { value: '#8B4513', label: 'Marrom' },
  { value: '#0000FF', label: 'Azul' },
  { value: '#FF0000', label: 'Vermelho' },
  { value: '#008000', label: 'Verde' },
  { value: '#FFFF00', label: 'Amarelo' },
  { value: '#FFA500', label: 'Laranja' },
  { value: '#FFC0CB', label: 'Rosa' },
  { value: '#800080', label: 'Roxo' },
  { value: '#FFD700', label: 'Dourado' },
  { value: '#C0C0C0', label: 'Prata' },
  { value: '#00FFFF', label: 'Ciano' },
  { value: '#FF00FF', label: 'Magenta' },
  { value: '#40E0D0', label: 'Turquesa' },
  { value: '#000080', label: 'Azul Marinho' },
  { value: '#800000', label: 'Vinho' },
  { value: '#EE82EE', label: 'Violeta' },
  { value: '#F0E68C', label: 'Creme' },
  { value: '#DEB887', label: 'Caramelo' },
  { value: '#FF6347', label: 'Coral' },
  { value: '#4B0082', label: 'Índigo' },
]

export function ProductVariantGrid({
  dataArraySize,
}: ProductVarianteGridProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="shirt"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Grade do Produto
        </TextBase>
      </div>

      <section className="extramd:grid extramd:grid-cols-2 gap-5 flex flex-col">
        <div className="w-full bg-gray-950/30 border-2 border-blue-neon/20 rounded-2xl flex flex-col">
          <div className="w-full h-20 p-3 flex items-center justify-between bg-blue-neon/5 rounded-t-2xl border-b-2 border-blue-neon/20">
            <div className="flex-center gap-3">
              <div className="bg-blue-neon h-8 w-8 rounded-sm" />
              <TextBase as="span">Azul Neon</TextBase>
            </div>
            <Trash2 className="w-4 h-4" />
          </div>

          <div className="w-full h-full p-3 flex flex-col gap-3">
            <InputComponent.root>
              <InputComponent.label label="Estoque Mínimo" />
              <InputComponent.wrapper
                iconName="stock"
                classNameWrapper="bg-gray-950 rounded-sm flex-1 text-center"
              >
                <InputComponent.inputBase />
              </InputComponent.wrapper>
            </InputComponent.root>

            <div className="flex items-center justify-between">
              <TextBase as="span" className="text-[0.8rem]">
                TAMANHOS & QUANTIDADES
              </TextBase>
              <div className="bg-blue-neon/20 px-2 py-1 flex-center rounded-sm border border-blue-neon/50">
                <TextBase as="span" className="text-[0.7rem] text-blue-neon">
                  Total: 55
                </TextBase>
              </div>
            </div>
            <div className="w-full h-full flex-center">
              <div className="w-full h-full grid grid-cols-3 gap-3">
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>

                <div className="w-full h-35 bg-gray-950/30 rounded-lg flex flex-col justify-center items-center p-3 gap-1.5 border-dashed border-2">
                  <CirclePlus className="text-gray-600" />
                  <TextBase as="span" className="text-[0.9rem] text-gray-600">
                    Adicionar
                  </TextBase>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-950/30 border-2 border-blue-neon/20 rounded-2xl flex flex-col">
          <div className="w-full h-20 p-3 flex items-center justify-between bg-blue-neon/5 rounded-t-2xl border-b-2 border-blue-neon/20">
            <div className="flex-center gap-3">
              <div className="bg-blue-neon h-8 w-8 rounded-sm" />
              <TextBase as="span">Azul Neon</TextBase>
            </div>
            <Trash2 className="w-4 h-4" />
          </div>

          <div className="w-full h-full p-3 flex flex-col gap-3">
            <InputComponent.root>
              <InputComponent.label label="Estoque Mínimo" />
              <InputComponent.wrapper
                iconName="stock"
                classNameWrapper="bg-gray-950 rounded-sm flex-1 text-center"
              >
                <InputComponent.inputBase />
              </InputComponent.wrapper>
            </InputComponent.root>

            <div className="flex items-center justify-between">
              <TextBase as="span" className="text-[0.8rem]">
                TAMANHOS & QUANTIDADES
              </TextBase>
              <div className="bg-blue-neon/20 px-2 py-1 flex-center rounded-sm border border-blue-neon/50">
                <TextBase as="span" className="text-[0.7rem] text-blue-neon">
                  Total: 55
                </TextBase>
              </div>
            </div>
            <div className="w-full h-full flex-center">
              <div className="w-full h-full grid grid-cols-3 gap-3">
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <InputComponent.root>
                    <InputComponent.wrapper
                      iconName="noIcon"
                      classNameWrapper="border-none whitespace-nowrap p-0 h-fit text-[0.8rem]"
                    >
                      <InputComponent.inputSelectedBasic
                        dataArray={dataArraySize}
                        placeHolder="-"
                        classNameArrow="h-3 w-3"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>

                  <InputComponent.inputBase className="w-full h-13 bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>

                <div className="w-full h-35 bg-gray-950/30 rounded-lg flex flex-col justify-center items-center p-3 gap-1.5 border-dashed border-2">
                  <CirclePlus className="text-gray-600" />
                  <TextBase as="span" className="text-[0.9rem] text-gray-600">
                    Adicionar
                  </TextBase>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-15 shrink-0 rounded-lg bg-gray-950/30 border-2 border-dashed flex-center gap-3">
        <Palette className="w-5 h-5 text-gray-600" />
        <TextBase as="span" className="text-gray-600">
          Nova Variante de Cor
        </TextBase>
      </div>
    </>
  )
}
