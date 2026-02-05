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
} from 'lucide-react'
import { InputHTMLAttributes, useRef, useState } from 'react'

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  IconMain?: keyof typeof iconMap
  classNameIconMain?: string
  classNameInput?: string
  isPassword?: boolean
  isOnlyNumeric?: boolean
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
} as const

export default function InputBase({
  IconMain,
  classNameIconMain,
  classNameInput,
  isPassword = false,
  isOnlyNumeric = false,
  onChange,
  ...props
}: InputBaseProps) {
  const [visiblePassword, setVisiblePassword] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const Icon: LucideIcon | null = IconMain ? iconMap[IconMain] : null
  const resolvedInputType =
    isPassword && visiblePassword ? 'password' : (props.type ?? 'text')

  function handleVisiblePassword() {
    setVisiblePassword(!visiblePassword)
    moveCursorToEndFocus()
  }

  function moveCursorToEndFocus() {
    const input = inputRef.current
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
        ref={inputRef}
        type={isOnlyNumeric ? 'tel' : resolvedInputType}
        inputMode={isOnlyNumeric ? 'numeric' : 'text'}
        onChange={handleChange}
        className={cn(
          'border-none w-full outline-none bg-transparent placeholder:text-base-secondary text-[0.8rem] sm:text-[1rem] dark:text-base-primary',
          classNameInput,
        )}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          className="cursor-pointer"
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
}
