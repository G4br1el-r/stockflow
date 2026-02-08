import { Rocket, Trash2 } from 'lucide-react'
import { Text } from '@/components/Text'
import { cn } from '@/lib/utils'
import { useFormContext } from 'react-hook-form'

export default function FooterForm() {
  const { reset } = useFormContext()

  return (
    <div className="flex flex-col extrasm:flex-row items-start justify-center gap-5 extrasm:items-center extrasm:justify-between">
      <button
        onClick={() => reset()}
        type="button"
        className="flex group items-center self-start justify-center md:self-end cursor-pointer gap-1"
      >
        <Trash2 className="lg:group-hover:text-red-400 transition-colors duration-300 ease-in-out text-red-400 lg:text-base-secondary h-4 w-4" />
        <Text
          as="span"
          className="text-red-400 lg:text-base-secondary lg:group-hover:text-red-400 transition-colors duration-300 ease-in-out"
        >
          Limpar Tudo
        </Text>
      </button>
      <button
        type="submit"
        className={cn(
          'w-full md:max-w-75 flex items-center justify-center gap-2 h-12 rounded-4xl',
          'bg-blue-neon text-white font-semibold hover:bg-blue-neon/90',
          'shadow-[0_0_20px_0px_rgba(0,112,255,0.7)] transition duration-300 ease-in-out',
          'hover:shadow-[0_0_10px_2px_rgba(0,112,255,0.7)] cursor-pointer focus:outline-none',
        )}
      >
        <Text as="span">Cadastrar Produto</Text>
        <Rocket className="h-4 w-4" />
      </button>
    </div>
  )
}
