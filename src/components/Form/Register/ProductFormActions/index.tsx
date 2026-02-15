import { TextBase } from '@/components/TextBase'
import { Rocket, Trash2 } from 'lucide-react'

export function ProductFormActions() {
  return (
    <div className="flex flex-col w-full gap-5">
      <button
        type="button"
        className="flex items-center gap-1 group/clear transition-all duration-300"
      >
        <Trash2 className="w-3.5 h-3.5 transition-all duration-300 group-hover/clear:text-red-400 group-hover/clear:scale-110" />
        <TextBase
          as="span"
          className="transition-colors duration-300 group-hover/clear:text-red-400"
        >
          Limpar
        </TextBase>
      </button>

      <button
        type="submit"
        className="w-full h-12 bg-blue-neon flex-center rounded-lg gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
      >
        <TextBase as="span" className="font-semibold">
          Cadastrar Produto
        </TextBase>
        <Rocket className="w-4 h-4" />
      </button>
    </div>
  )
}
