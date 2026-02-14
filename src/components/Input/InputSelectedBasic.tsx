import { StoreType } from '@/@types/Form/Register/ProductDetailsForm/story.types'
import { cn } from '@/lib/utils'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export interface inputSelectedBasicProps {
  placeHolder: string
  dataArray?: StoreType[]
  classNameArrow?: string
}

const statusProduct = [
  {
    value: 'active',
    label: 'Ativo',
  },
  {
    value: 'inactive',
    label: 'Inativo',
  },
]

export function InputSelectedBasic({
  placeHolder,
  dataArray = statusProduct,
  classNameArrow,
}: inputSelectedBasicProps) {
  return (
    <Select.Root>
      <Select.Trigger className="flex w-full items-center focus:outline-none justify-between group data-placeholder:text-gray-300/40">
        <Select.Value placeholder={placeHolder} />
        <Select.Icon asChild>
          <ChevronDown
            className={cn(
              'transition-transform duration-200 group-data-[state=open]:rotate-180',
              classNameArrow,
            )}
          />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          align="end"
          position="popper"
          className="bg-blue-950 rounded-lg shadow-lg border border-gray-200 overflow-hidden  max-h-70 w-45 z-50"
        >
          <Select.Viewport className="p-1">
            {dataArray.map((store, index) => (
              <Select.Item
                key={`${store.value}-${index}`}
                value={store.value}
                className="flex gap-4 items-center justify-between px-3 py-2 rounded cursor-pointer outline-none transition-colors data-highlighted:bg-green-900 data-[state=checked]:bg-yellow-950 data-[state=checked]:text-blue-600"
              >
                <Select.ItemText>{store.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="w-4 h-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
