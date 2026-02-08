'use client'
import { cn } from '@/lib/utils'
import {
  Eye,
  EyeOff,
  LucideIcon,
  Mail,
  User,
  LockKeyhole,
  Shirt,
  Store,
  Palette,
  Banknote,
  ScanBarcode,
  ChartColumnStacked,
  Spool,
  Ruler,
  BanknoteArrowUp,
} from 'lucide-react'
import { InputHTMLAttributes, useRef, useState } from 'react'

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  IconMain?: string
  classNameIconMain?: string
  classNameInput?: string
  isPassword?: boolean
  isOnlyNumeric?: boolean
  autoFocusNext?: boolean
}

const iconMap = {
  mail: Mail,
  eye: Eye,
  eyeOff: EyeOff,
  user: User,
  lock: LockKeyhole,
  shirt: Shirt,
  store: Store,
  palette: Palette,
  banknote: Banknote,
  scanBarcode: ScanBarcode,
  chartColumnStacked: ChartColumnStacked,
  spool: Spool,
  ruler: Ruler,
  banknoteArrowUp: BanknoteArrowUp,
} as const

import { forwardRef } from 'react'

export default forwardRef<HTMLInputElement, InputBaseProps>(function InputBase(
  {
    IconMain,
    classNameIconMain,
    classNameInput,
    isPassword = false,
    isOnlyNumeric = false,
    autoFocusNext = true,
    onChange,
    onKeyDown,
    ...props
  },
  forwardedRef,
) {
  const [visiblePassword, setVisiblePassword] = useState(true)
  const internalRef = useRef<HTMLInputElement>(null)

  const Icon = IconMain ? iconMap[IconMain as keyof typeof iconMap] : null
  const resolvedInputType =
    isPassword && visiblePassword ? 'password' : (props.type ?? 'text')

  function handleVisiblePassword() {
    setVisiblePassword(!visiblePassword)
    moveCursorToEndFocus()
  }

  function moveCursorToEndFocus() {
    const input = internalRef.current
    if (!input) return

    input.focus()
    setTimeout(() => {
      const length = input.value.length
      input.setSelectionRange(length, length)
    }, 0)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isOnlyNumeric) {
      const onlyNumbers = e.currentTarget.value.replace(/\D/g, '')
      e.currentTarget.value = onlyNumbers
    }

    onChange?.(e)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && autoFocusNext && !props.disabled) {
      e.preventDefault()

      const form = e.currentTarget.form
      if (!form) return

      const formElements = Array.from(
        form.querySelectorAll(
          'input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button[role="combobox"]:not([disabled])',
        ),
      )

      const currentIndex = formElements.indexOf(e.currentTarget)
      const nextElement = formElements[currentIndex + 1] as HTMLElement

      if (nextElement) {
        nextElement.focus()
      } else {
        e.currentTarget.blur()
      }
    }

    onKeyDown?.(e)
  }

  function setRefs(element: HTMLInputElement | null) {
    internalRef.current = element

    if (typeof forwardedRef === 'function') {
      forwardedRef(element)
    } else if (forwardedRef) {
      forwardedRef.current = element
    }
  }

  return (
    <>
      {Icon && (
        <Icon
          size={18}
          className={cn(
            'text-icon-not-activate group-focus-within:text-icon-activate transition-colors duration-300',
            classNameIconMain,
          )}
        />
      )}

      <input
        ref={setRefs}
        type={isOnlyNumeric ? 'tel' : resolvedInputType}
        inputMode={isOnlyNumeric ? 'numeric' : 'text'}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          'border-none w-full outline-none bg-transparent placeholder:text-base-primary/50 text-[0.8rem] sm:text-[1rem]',
          classNameInput,
        )}
        enterKeyHint={autoFocusNext ? 'next' : 'done'}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          className="cursor-pointer"
          tabIndex={-1}
          onClick={handleVisiblePassword}
        >
          {visiblePassword ? (
            <Eye size={18} className="text-icon-not-activate" />
          ) : (
            <EyeOff size={18} className="text-icon-not-activate" />
          )}
        </button>
      )}
    </>
  )
})
