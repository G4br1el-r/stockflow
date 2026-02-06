import InputBase from './InputBase'
import InputRoot from './InputRoot'
import InputSelected from './InputSelected'
import InputLabel from './InputText'
import InputWrapper from './InputWrapper'
import { InputMaskPrice } from './MaskInputs/InputMaskPrice'

export const InputComponent = {
  root: InputRoot,
  inputBase: InputBase,
  inputMaskPrice: InputMaskPrice,
  inputSelected: InputSelected,
  label: InputLabel,
  wrapper: InputWrapper,
}
