import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'
import { InputComponent } from '@/components/Input'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { CirclePlus, Palette, Trash2 } from 'lucide-react'

interface ProductVarianteGridProps {
  dataArraySize: SizesType[]
}

const collorMap = [
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

export function ProductVariantGrid({
  dataArraySize,
}: ProductVarianteGridProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="shirt"
        />
        <TextBase
          as="span"
          className="font-bold text-[1.2rem] text-title-section"
        >
          Grade do Produto
        </TextBase>
      </div>

      <section className="extramd:grid extramd:grid-cols-2 extramd:w-fit extralg:grid-cols-3 xl:extramd:grid-cols-2 2xl:grid-cols-3 2xl:w-full gap-5 flex flex-col items-center w-full">
        <div className="w-full bg-gray-950/30 border-2 border-blue-neon/20 rounded-2xl flex flex-col 2xl:max-w-full relative overflow-hidden group/card transition-all duration-500 hover:border-blue-neon/50 hover:bg-gray-950/50 hover:-translate-y-1 focus-within:border-blue-neon/50 focus-within:bg-gray-950/50 focus-within:-translate-y-1">
          <div className="w-full h-20 p-3 flex items-center justify-between bg-blue-neon/5 rounded-t-2xl border-b-2 border-blue-neon/20 gap-5 relative z-10 group-hover/card:bg-blue-neon/10 group-focus-within/card:bg-blue-neon/10 transition-colors duration-500">
            <div className="w-9 h-9 rounded-full bg-blue-neon shrink-0 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-[0_0_15px_rgba(0,209,255,0.4)] group-focus-within/card:scale-110 group-focus-within/card:shadow-[0_0_15px_rgba(0,209,255,0.4)]" />
            <InputComponent.root>
              <InputComponent.inputSelectedBasic
                dataArray={collorMap}
                placeHolder="Selecione uma cor"
              />
            </InputComponent.root>
            <Trash2 className="w-4.5 h-4.5 shrink-0 cursor-pointer transition-all duration-300 hover:text-red-400 hover:scale-125 active:scale-95" />
          </div>

          <div className="w-full h-full p-3 flex flex-col gap-3 relative z-10">
            <InputComponent.root>
              <InputComponent.label label="Est. Mínimo" />
              <InputComponent.wrapper
                iconName="stock"
                classNameWrapper="bg-gray-950 w-1/2 rounded-sm flex-1 text-center"
              >
                <InputComponent.inputBase />
              </InputComponent.wrapper>
            </InputComponent.root>

            <div className="flex items-center justify-between">
              <TextBase as="span" className="text-[0.8rem]">
                TAMANHOS & QUANTIDADES
              </TextBase>
              <div className="bg-blue-neon/20 px-2 py-1 flex-center rounded-sm border border-blue-neon/50 transition-all duration-300 group-hover/card:bg-blue-neon/25 group-hover/card:border-blue-neon/70 group-focus-within/card:bg-blue-neon/25 group-focus-within/card:border-blue-neon/70">
                <TextBase as="span" className="text-[0.7rem] text-blue-neon">
                  Total: 55
                </TextBase>
              </div>
            </div>
            <div className="w-full h-full flex-center">
              <div className="w-full h-full grid grid-cols-3 gap-3">
                <div className="w-full w h-35 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5 group/size transition-all duration-300 focus-within:border-blue-neon focus-within:bg-gray-950 focus-within:shadow-[0_4px_15px_rgba(0,0,0,0.3)] focus-within:-translate-y-0.5 hover:border-blue-neon/50 hover:bg-gray-950 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-neon/50 via-blue-neon to-blue-neon/50 group-hover/size:w-full group-focus-within/size:w-full transition-all duration-500" />

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

                  <InputComponent.inputBase className="w-full h-13 group-focus-within/size:border-blue-neon bg-gray-950 border border-gray-700 rounded-sm text-center shrink-0 transition-all duration-300 group-hover/size:border-blue-neon/50" />
                  <div className="w-0 h-1 bg-blue-neon rounded-full group-focus-within/size:w-full transition-all duration-300" />
                </div>

                <div className="w-full h-35 bg-gray-950/30 cursor-pointer rounded-lg flex flex-col justify-center items-center p-3 gap-1.5 border-dashed border-2 border-gray-700 transition-all duration-300 hover:border-blue-neon/50 hover:bg-gray-950/50 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 group/add relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/0 ggroup-hover/add:bg-white/2 rounded-lg transition-all duration-500" />

                  <CirclePlus className="text-gray-600 transition-all duration-500 group-hover/add:text-blue-neon group-hover/add:scale-125 group-hover/add:rotate-90 relative z-10" />
                  <TextBase
                    as="span"
                    className="text-[0.9rem] text-gray-600 transition-all duration-300 group-hover/add:text-blue-neon relative z-10"
                  >
                    Adicionar
                  </TextBase>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-15 shrink-0 cursor-pointer rounded-lg bg-gray-950/30 border-2 border-dashed border-gray-700 flex-center gap-3 transition-all duration-500 hover:border-blue-neon/50 hover:bg-gray-950/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 group/new relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent scale-x-0 group-hover/new:scale-x-100 transition-transform duration-700 origin-left" />

        <Palette className="w-5 h-5 text-gray-600 transition-all duration-500 group-hover/new:text-blue-neon group-hover/new:scale-110 group-hover/new:rotate-12 relative z-10" />
        <TextBase
          as="span"
          className="text-gray-600 transition-all duration-300 group-hover/new:text-blue-neon relative z-10"
        >
          Nova Variante de Cor
        </TextBase>
      </div>
    </div>
  )
}
