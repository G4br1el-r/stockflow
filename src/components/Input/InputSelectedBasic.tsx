import { StoreType } from '@/@types/Form/Register/ProductDetailsForm/story.types'
import { cn } from '@/lib/utils'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { useFormContext, Controller } from 'react-hook-form'

export interface inputSelectedBasicProps {
  id: string
  name: string
  placeHolder: string
  dataArray?: StoreType[]
  classNameArrow?: string
  classNameWrapper?: string
  readOnly?: boolean
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
  id,
  name,
  placeHolder,
  dataArray = statusProduct,
  classNameArrow,
  readOnly,
  classNameWrapper,
}: inputSelectedBasicProps) {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select.Root
          value={field.value}
          onValueChange={field.onChange}
          disabled={readOnly}
        >
          <Select.Trigger
            id={id}
            className={cn(
              'flex w-full py-2 items-center justify-between focus:outline-none group data-placeholder:text-input-placeholder transition-all duration-300',
              readOnly
                ? 'cursor-not-allowed text-gray-600'
                : 'cursor-pointer hover:text-text-primary ',
              classNameWrapper,
            )}
          >
            <Select.Value placeholder={placeHolder} />
            <Select.Icon asChild>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-all duration-300',
                  readOnly
                    ? 'text-gray-600'
                    : 'group-data-[state=open]:rotate-180 group-hover:text-blue-neon',
                  classNameArrow,
                )}
              />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              align="end"
              position="popper"
              className="bg-gray-950 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-gray-800 overflow-hidden max-h-70 w-45 z-50 animate-in fade-in-0 zoom-in-95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            >
              <Select.Viewport className="p-2">
                {dataArray.map((store, index) => (
                  <Select.Item
                    key={`${store.value}-${index}`}
                    value={store.value}
                    className="relative flex gap-3 items-center justify-between px-3 py-2.5 rounded-md cursor-pointer outline-none transition-all duration-200 text-gray-400 hover:bg-gray-800/70 hover:text-white hover:pl-4 focus:bg-blue-neon/20 focus:text-blue-neon focus:pl-4 data-[state=checked]:bg-blue-neon/10 data-[state=checked]:text-blue-neon data-[state=checked]:border-l-2 data-[state=checked]:border-blue-neon group/item"
                  >
                    <Select.ItemText className="font-medium">
                      {store.label}
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      <Check className="w-4 h-4 text-blue-neon transition-transform duration-200 group-hover/item:scale-110" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      )}
    />
  )
}
