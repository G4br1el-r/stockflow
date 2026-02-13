import { TextBase } from '@/components/TextBase'
import { CircleFadingPlus } from 'lucide-react'

export function ProductFormHeader() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex gap-2 items-center text-blue-neon">
        <CircleFadingPlus className="h-5 w-5" />
        <TextBase as="span" className="text-[0.8rem] font-bold">
          ADICIONAR NOVO PRODUTO
        </TextBase>
      </div>
      <div>
        <TextBase as="h1">Novo Produto</TextBase>
        <TextBase as="span" className="text-[0.8rem]">
          Cadastre seus produtos de forma prática e rápida.
        </TextBase>
      </div>
    </div>
  )
}
