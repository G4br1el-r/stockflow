import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

const storeMap = [
  { value: 'mall', label: 'Loja Shopping' },
  { value: 'downtown', label: 'Loja Centro' },
  { value: 'north', label: 'Loja Zona Norte' },
]

export function InputSelectedBasic() {
  return (
    <Select.Root>
      <Select.Trigger className="flex w-full focus:outline-none justify-between group">
        <Select.Value placeholder="Selecione uma Categoria" />
        <Select.Icon asChild>
          <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          align="end"
          position="popper"
          className="bg-blue-950 rounded-lg shadow-lg border border-gray-200 overflow-hidden  max-h-70 w-45 z-50"
        >
          <Select.Viewport className="p-1">
            {storeMap.map((store, index) => (
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
