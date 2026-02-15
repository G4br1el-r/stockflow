import { TextBase } from '@/components/TextBase'
import { CircleFadingPlus } from 'lucide-react'

export function ProductFormHeader() {
  return (
    <div className="w-full h-full flex flex-col gap-2 xl:px-15 xl:py-5 xl:bg-sidebar-lateral-background xl:border-b-2 xl:border-sidebar-border">
      <div className="flex gap-2 items-center text-blue-neon">
        <CircleFadingPlus className="h-5 w-5" />
        <TextBase as="span" className="text-[0.8rem] font-bold">
          ADICIONAR NOVO PRODUTO
        </TextBase>
      </div>
      <div>
        <TextBase as="h1" className="text-title-page">
          Novo Produto
        </TextBase>
      </div>
    </div>
  )
}
