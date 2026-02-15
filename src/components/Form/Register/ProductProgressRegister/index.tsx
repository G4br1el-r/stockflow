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
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-300 rounded-full flex-center">
            <Check />
          </div>
          <div className="flex flex-col">
            <TextBase as="span" className="font-bold">
              Informações Gerais
            </TextBase>
            <TextBase as="span" className=" text-green-300">
              Completo
            </TextBase>
          </div>
        </div>
        <div className="ml-5.5 h-10 w-0.5 bg-gray-600" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-neon rounded-full flex-center">
            2
          </div>
          <div className="flex flex-col">
            <TextBase as="span" className="font-bold">
              Financeiro e Precificação
            </TextBase>
            <TextBase as="span" className=" text-blue-neon">
              Em Edição
            </TextBase>
          </div>
        </div>
        <div className="ml-5.5 h-10 w-0.5 bg-gray-600" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-400/10 rounded-full flex-center">
            3
          </div>
          <div className="flex flex-col">
            <TextBase as="span" className="font-bold text-gray-600">
              Grade e Estoque
            </TextBase>
            <TextBase as="span" className="text-gray-600">
              Em Edição
            </TextBase>
          </div>
        </div>
      </div>
    </div>
  )
}
