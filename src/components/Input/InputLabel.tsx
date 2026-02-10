import { TextBase } from '../TextBase'

interface InputLabelProps {
  label: string
}

export function InputLabel({ label }: InputLabelProps) {
  return <TextBase as="p">{label}</TextBase>
}
