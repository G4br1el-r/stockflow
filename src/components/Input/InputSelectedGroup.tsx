import { CategoryTypes } from '@/@types/Form/Register/ProductDetailsForm/category.types'
import { cn } from '@/lib/utils'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { useFormContext, Controller } from 'react-hook-form'

export interface InputSelectedGroupProps {
  id: string
  name: string
  placeHolder: string
  onValueChange?: (value: string) => void
  dataArray: CategoryTypes[]
  readOnly?: boolean
}

export function InputSelectedGroup({
  id,
  name,
  placeHolder,
  onValueChange,
  dataArray,
  readOnly,
}: InputSelectedGroupProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select.Root
          value={field.value}
          onValueChange={(value) => {
            field.onChange(value)
            onValueChange?.(value)
          }}
          disabled={readOnly}
        >
          <Select.Trigger
            id={id}
            className={cn(
              'flex w-full focus:outline-none justify-between group data-placeholder:text-input-placeholder transition-all duration-300',
              readOnly
                ? 'cursor-not-allowed text-gray-600'
                : 'cursor-pointer hover:text-text-primary',
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
                )}
              />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              align="end"
              position="popper"
              className="bg-gray-950 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-gray-800 overflow-hidden max-h-70 z-50 animate-in fade-in-0 zoom-in-95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            >
              <Select.Viewport className="p-2">
                {dataArray.map((group) => (
                  <Select.Group key={group.id} className="mb-2 last:mb-0">
                    <Select.Label className="px-3 py-2 text-xs font-bold text-blue-neon/70 uppercase tracking-wider border-b border-gray-800/50 mb-1">
                      {group.label}
                    </Select.Label>
                    {group.items.map((item, index) => (
                      <Select.Item
                        key={`${item.value}-${index}`}
                        value={item.value}
                        className="relative flex gap-3 items-center px-3 py-2.5 rounded-md cursor-pointer outline-none transition-all duration-200 text-gray-400 hover:bg-gray-800/70 hover:text-white hover:pl-4 focus:bg-blue-neon/20 focus:text-blue-neon focus:pl-4 data-[state=checked]:bg-blue-neon/10 data-[state=checked]:text-blue-neon data-[state=checked]:border-l-2 data-[state=checked]:border-blue-neon group/item"
                      >
                        <Select.ItemText className="flex-1 font-medium">
                          {item.label}
                        </Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className="w-4 h-4 text-blue-neon transition-transform duration-200 group-hover/item:scale-110" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Group>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      )}
    />
  )
}
