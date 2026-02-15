import { TextBase } from '../TextBase'

interface InputLabelProps {
  label: string
}

export function InputLabel({ label }: InputLabelProps) {
  return (
    <TextBase
      as="p"
      className="group-focus-within:text-blue-neon transition-colors duration-300 text-label-input font-bold"
    >
      {label}
    </TextBase>
  )
}
