import { SwitchDarkMode } from '../SwitchDarkMode'
import { User } from '../User'

export function UserSection() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full h-px  bg-linear-to-r from-border-main/15 via-border-main to-border-main/15" />
      <SwitchDarkMode />
      <User />
    </div>
  )
}
