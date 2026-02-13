import { TextBase } from '@/components/TextBase'
import { Rocket, Trash2 } from 'lucide-react'

export function ProductFormActions() {
  return (
    <section className="flex flex-col w-full gap-5">
      <button type="button" className="flex items-center gap-1">
        <Trash2 className="w-3.5 h-3.5" />
        <TextBase as="span">Limpar</TextBase>
      </button>
      <button
        type="submit"
        className="w-full h-12 bg-blue-neon flex-center rounded-lg gap-2"
      >
        <TextBase as="span">Cadastrar Produto</TextBase>
        <Rocket className="w-4 h-4" />
      </button>
    </section>
  )
}
