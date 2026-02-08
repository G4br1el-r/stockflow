'use client'
import * as Select from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  Check,
  LucideIcon,
  Store,
  ChartColumnStacked,
} from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface Subcategory {
  title: string
  slug: string
}

interface CategoryGroup {
  title: string
  slug: string
  subcategories: Subcategory[]
}

interface InputSelectedProps {
  // Props customizadas
  IconMain: string
  classNameIconMain?: string
  classNameTrigger?: string
  classNameContent?: string
  options: SelectOption[] | CategoryGroup[]
  placeholder: string
  hasTitleGroup?: boolean

  // Props do Radix Select
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onChange?: (value: string) => void
  name?: string
}

const iconMap = {
  store: Store,
  chartColumnStacked: ChartColumnStacked,
} as const

export default function InputSelected({
  IconMain,
  classNameIconMain,
  classNameTrigger,
  classNameContent,
  options,
  placeholder = 'Selecione...',
  hasTitleGroup = false,
  value,
  defaultValue,
  onValueChange,
  onChange,
  name,
}: InputSelectedProps) {
  const Icon = IconMain ? iconMap[IconMain as keyof typeof iconMap] : null

  return (
    <Select.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      name={name}
    >
      <Select.Trigger
        className={cn(
          'group flex items-center gap-2 w-full',
          'border-none justify-between pr-2 outline-none bg-transparent',
          'text-[0.8rem] sm:text-[1rem] data-placeholder:text-base-primary/50',
          'disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap',
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
            'data-[state=open]:animate-in',
            'data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0',
            'data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95',
            'data-[state=open]:zoom-in-100',
            classNameContent,
          )}
          position="popper"
          align="end"
          sideOffset={2}
        >
          <Select.Viewport className="p-2 max-h-75">
            {hasTitleGroup ? (
              <RenderGroupedOptions options={options as CategoryGroup[]} />
            ) : (
              <RenderOptions options={options as SelectOption[]} />
            )}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

function RenderOptions({ options }: { options: SelectOption[] }) {
  return (
    <>
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
            <Select.ItemText className="flex-1">{option.label}</Select.ItemText>

            <Select.ItemIndicator>
              <Check size={16} />
            </Select.ItemIndicator>
          </Select.Item>
        )
      })}
    </>
  )
}

function RenderGroupedOptions({ options }: { options: CategoryGroup[] }) {
  return (
    <>
      {options.map((group) => (
        <Select.Group key={group.slug}>
          <Select.Label className="px-3 py-1.5 text-xs font-semibold text-base-secondary uppercase tracking-wide">
            {group.title}
          </Select.Label>

          {group.subcategories.map((subcategory) => (
            <Select.Item
              key={subcategory.slug}
              value={subcategory.slug}
              className={cn(
                'flex items-center gap-2 px-3 py-2 pl-6 rounded cursor-pointer',
                'outline-none select-none',
                'text-[0.8rem] sm:text-[1rem]',
                'hover:bg-accent-primary/10',
                'data-[state=checked]:text-icon-activate hover:bg-background-sidebar-main',
                'transition-colors focus-visible:bg-background-sidebar-main',
              )}
            >
              <Select.ItemText className="flex-1">
                {subcategory.title}
              </Select.ItemText>

              <Select.ItemIndicator>
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
          ))}

          <Select.Separator className="h-px bg-border-main/20 my-1" />
        </Select.Group>
      ))}
    </>
  )
}
