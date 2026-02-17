import { TextBase } from '@/components/TextBase'
import { Rocket, Trash2 } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

interface ProductFormActionsDesktopProps {
  idForm?: string
}

export function ProductFormActionsDesktop({
  idForm,
}: ProductFormActionsDesktopProps) {
  const { reset } = useFormContext()

  return (
    <div className="flex flex-col w-full gap-5">
      <button
        type="button"
        onClick={() => reset()}
        className="flex active:scale-95 cursor-pointer items-center gap-1 group/clear transition-all duration-300 w-fit focus:outline-none"
      >
        <Trash2 className="w-3.5 h-3.5 text-red-400 xl:text-white transition-all duration-300 group-hover/clear:text-red-400 group-hover/clear:scale-110 group-focus/clear:text-red-400 group-focus/clear:scale-110" />
        <TextBase
          as="span"
          className="transition-colors text-red-400 xl:text-white duration-300 group-hover/clear:text-red-400 group-focus/clear:text-red-400"
        >
          Limpar
        </TextBase>
      </button>

      <button
        form={idForm}
        type="submit"
        className="w-full h-12 cursor-pointer bg-blue-neon flex-center rounded-lg gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-neon/70 focus:ring-offset-2 focus:ring-offset-background"
      >
        <TextBase as="span" className="font-semibold">
          Cadastrar Produto
        </TextBase>
        <Rocket className="w-4 h-4" />
      </button>
    </div>
  )
}
