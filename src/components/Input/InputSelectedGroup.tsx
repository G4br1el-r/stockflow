import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

const clothingGroups = [
  {
    id: 'upper',
    label: 'Parte Superior',
    items: [
      { value: 'coat', label: 'Casaco' },
      { value: 'tshirt', label: 'Camiseta' },
      { value: 'shirt', label: 'Camisa' },
      { value: 'blouse', label: 'Blusa' },
      { value: 'sweater', label: 'Suéter' },
    ],
  },
  {
    id: 'lower',
    label: 'Parte Inferior',
    items: [
      { value: 'pants', label: 'Calça' },
      { value: 'shorts', label: 'Shorts' },
      { value: 'skirt', label: 'Saia' },
      { value: 'jeans', label: 'Jeans' },
    ],
  },
  {
    id: 'footwear',
    label: 'Calçados',
    items: [
      { value: 'sneakers', label: 'Tênis' },
      { value: 'shoes', label: 'Sapato' },
      { value: 'sandals', label: 'Sandália' },
      { value: 'boots', label: 'Bota' },
    ],
  },
  {
    id: 'accessories',
    label: 'Acessórios',
    items: [
      { value: 'hat', label: 'Chapéu' },
      { value: 'belt', label: 'Cinto' },
      { value: 'scarf', label: 'Cachecol' },
      { value: 'bag', label: 'Bolsa' },
    ],
  },
]

export function InputSelectedGroup() {
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
          className="bg-blue-950 rounded-lg shadow-lg border border-gray-200 overflow-hidden  max-h-70 z-50"
        >
          <Select.Viewport className="p-1">
            {clothingGroups.map((group) => (
              <Select.Group key={group.id}>
                <Select.Label className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                  {group.label}
                </Select.Label>
                {group.items.map((item, index) => (
                  <Select.Item
                    key={`${item.value}-${index}`}
                    value={item.value}
                    className="flex gap-4 items-center px-3 py-2 rounded cursor-pointer outline-none transition-colors data-highlighted:bg-green-900 data-[state=checked]:bg-yellow-950 data-[state=checked]:text-blue-600"
                  >
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check className="w-4 h-4" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Group>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
