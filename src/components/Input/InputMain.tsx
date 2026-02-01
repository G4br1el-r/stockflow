'use client'
import { cn } from '@/lib/utils'
import { Eye, EyeOff, LucideIcon, Mail, User, LockKeyhole } from 'lucide-react'
import { useRef, useState } from 'react'

interface InputMainProps {
  IconMain?: keyof typeof iconMap
  classNameIconMain?: string
  placeHolder: string
  classNameInput?: string
  isPassword?: boolean
}

const iconMap = {
  mail: Mail,
  eye: Eye,
  eyeOff: EyeOff,
  user: User,
  lock: LockKeyhole,
} as const

export default function InputMain({
  IconMain,
  classNameIconMain,
  placeHolder,
  classNameInput,
  isPassword = false,
}: InputMainProps) {
  const [visiblePassword, setVisiblePassword] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const Icon: LucideIcon | null = IconMain ? iconMap[IconMain] : null

  function handleVisiblePassword() {
    setVisiblePassword(!visiblePassword)
    moveCursorToEndFocus()
  }

  function moveCursorToEndFocus() {
    const input = inputRef.current

    if (input) {
      input.focus()
      setTimeout(() => {
        const length = input.value.length
        input.setSelectionRange(length, length)
      }, 0)
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
        type={isPassword && visiblePassword ? 'password' : 'text'}
        ref={inputRef}
        placeholder={placeHolder}
        className={cn(
          'border-none outline-none bg-transparent flex-1 placeholder:text-base-secondary text-[0.8rem] text-base-secondary',
          classNameInput,
        )}
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
