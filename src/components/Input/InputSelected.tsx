'use client'
import * as Select from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import { ChevronDown, Check, LucideIcon, Store } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface InputSelectedProps {
  // Props customizadas
  IconMain?: keyof typeof iconMap
  classNameIconMain?: string
  classNameTrigger?: string
  classNameContent?: string
  options: SelectOption[]
  placeholder?: string

  // Props do Radix Select
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  name?: string
}

const iconMap = {
  store: Store,
} as const

export default function InputSelected({
  IconMain,
  classNameIconMain,
  classNameTrigger,
  classNameContent,
  options,
  placeholder = 'Selecione...',
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  required = false,
  name,
}: InputSelectedProps) {
  const Icon: LucideIcon | null = IconMain ? iconMap[IconMain] : null

  return (
    <Select.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
      name={name}
    >
      <Select.Trigger
        className={cn(
          'group flex items-center gap-2 w-full',
          'border-none justify-between pr-2 outline-none bg-transparent',
          'text-[0.8rem] sm:text-[1rem] data-placeholder:text-base-primary/50',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          classNameTrigger,
        )}
      >
        <div className="flex gap-2 justify-center items-center">
          {Icon && (
            <Icon
              size={18}
              className={cn(
                'text-icon-not-activate group-focus:text-icon-activate transition-colors',
                classNameIconMain,
              )}
            />
          )}

          <Select.Value
            placeholder={placeholder}
            className="flex-1 text-left"
          />
        </div>

        <Select.Icon>
          <ChevronDown
            size={18}
            className="text-icon-not-activate transition-transform group-data-[state=open]:rotate-180"
          />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={cn(
            'bg-background-main rounded-lg shadow-lg',
            'overflow-hidden z-50',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-50 data-[state=open]:fade-in-5',
            'data-[state=closed]:-zoom-out-5 data-[state=open]:zoom-in-5',
            classNameContent,
          )}
          position="popper"
          align="end"
          sideOffset={2}
        >
          <Select.Viewport className="p-2 max-h-75">
            {options.map((option) => {
              return (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded cursor-pointer',
                    'outline-none select-none',
                    'text-[0.8rem] sm:text-[1rem]',
                    'hover:bg-accent-primary/10',
                    'data-[state=checked]:text-icon-activate hover:bg-background-sidebar-main',
                    'transition-colors focus-visible:bg-background-sidebar-main',
                  )}
                >
                  <Select.ItemText className="flex-1">
                    {option.label}
                  </Select.ItemText>

                  <Select.ItemIndicator>
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              )
            })}
          </Select.Viewport>

          <Select.Arrow className="fill-background-main -translate-x-28" />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
