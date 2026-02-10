import { SwitchDarkMode } from '../SwitchDarkMode'
import { User } from '../User'

export function UserSection() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full h-px bg-linear-to-r from-gray-100/5 via-gray-100/20 to-gray-100/5" />
      <SwitchDarkMode />
      <User />
    </div>
  )
}
