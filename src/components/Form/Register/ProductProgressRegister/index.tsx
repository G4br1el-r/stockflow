import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { Check } from 'lucide-react'

export function ProductProgressRegister() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="eye"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Etapas
        </TextBase>
      </div>
      <div className="h-full w-full flex flex-col">
        <div className="flex items-center gap-4 group/step transition-all duration-300 hover:translate-x-1">
          <div className="w-12 h-12 bg-green-300 rounded-full flex-center transition-all duration-300 group-hover/step:shadow-[0_0_15px_rgba(134,239,172,0.5)]">
            <Check className="transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <TextBase
              as="span"
              className="font-bold transition-colors duration-300 group-hover/step:text-green-300"
            >
              Informações Gerais
            </TextBase>
            <TextBase as="span" className="text-green-300">
              Completo
            </TextBase>
          </div>
        </div>
        <div className="ml-5.5 h-10 w-0.5 bg-gray-600 transition-all duration-300 hover:bg-gray-500 hover:w-1" />

        <div className="flex items-center gap-4 group/step transition-all duration-300 hover:translate-x-1">
          <div className="w-12 h-12 bg-blue-neon rounded-full flex-center transition-all duration-300 group-hover/step:shadow-[0_0_15px_rgba(0,209,255,0.5)]">
            <TextBase
              as="span"
              className="font-bold transition-transform duration-300"
            >
              2
            </TextBase>
          </div>
          <div className="flex flex-col">
            <TextBase
              as="span"
              className="font-bold transition-colors duration-300 group-hover/step:text-blue-neon"
            >
              Financeiro e Precificação
            </TextBase>
            <TextBase as="span" className="text-blue-neon">
              Em Edição
            </TextBase>
          </div>
        </div>
        <div className="ml-5.5 h-10 w-0.5 bg-gray-600 transition-all duration-300 hover:bg-gray-500 hover:w-1" />

        <div className="flex items-center gap-4 group/step transition-all duration-300 hover:translate-x-1">
          <div className="w-12 h-12 bg-gray-400/10 rounded-full flex-center transition-all duration-300 group-hover/step:bg-gray-400/20">
            <TextBase as="span" className="transition-transform duration-300">
              3
            </TextBase>
          </div>
          <div className="flex flex-col">
            <TextBase
              as="span"
              className="font-bold text-gray-600 transition-colors duration-300 group-hover/step:text-gray-400"
            >
              Grade e Estoque
            </TextBase>
            <TextBase as="span" className="text-gray-600">
              Aguardando
            </TextBase>
          </div>
        </div>
      </div>
    </div>
  )
}
