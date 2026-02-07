import { Text } from '@/components/Text'
import { cn } from '@/lib/utils'
import { BadgePlus, Footprints, Gem, Shirt } from 'lucide-react'
import { motion } from 'framer-motion'

const SECTION_ITENS = [
  { title: 'Roupas', slug: 'clothes', icon: Shirt },
  { title: 'Sapatos', slug: 'shoes', icon: Footprints },
  { title: 'Acessórios', slug: 'acessory', icon: Gem },
]

interface HeaderFormProps {
  useActiveSection: string
  handleActiveSection: (value: string) => void
}
export default function HeaderForm({
  useActiveSection,
  handleActiveSection,
}: HeaderFormProps) {
  return (
    <>
      <div className="flex flex-col w-full justify-start items-center gap-2">
        <div className="flex w-full items-center justify-start gap-2 text-icon-activate">
          <BadgePlus className="w-5 h-5" />
          <Text as="h5" className="font-semibold">
            ADICIONAR NOVO PRODUTO
          </Text>
        </div>
        <div className="flex w-full items-center justify-start flex-col gap-2">
          <Text as="h1" className="text-4xl w-full text-variant-secondary">
            Cadastro de Produtos
          </Text>
          <Text
            as="p"
            className="text-base-primary hidden lg:block w-full leading-5 text-sm"
          >
            Cadastre seus produtos de forma prática e rápida.
          </Text>
        </div>
      </div>

      <div className="bg-background-sidebar-user max-w-125 w-full p-2 justify-self-end self-end rounded-sm flex gap-2">
        {SECTION_ITENS.map((item) => {
          const IconComponent = item.icon
          const isActive = useActiveSection === item.slug

          return (
            <button
              type="button"
              key={item.title}
              onClick={() => handleActiveSection(item.slug)}
              className={cn(
                'w-1/3 h-10 cursor-pointer font-bold rounded-sm text-center z-0 justify-center flex items-center gap-1 relative transition-colors duration-300',
                isActive
                  ? 'text-variant-primary dark:text-variant-secondary'
                  : 'text-variant-secondary',
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-icon-activate rounded-sm -z-1"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}
              <IconComponent className="w-3 h-3 " />
              <Text as="span" className={'text-[0.8rem] '}>
                {item.title}
              </Text>
            </button>
          )
        })}
      </div>
    </>
  )
}
