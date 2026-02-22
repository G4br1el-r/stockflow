import { InputBase } from './InputBase'
import { InputPassword } from './InputPassword'
import { InputLabel } from './InputLabel'
import { InputMoney } from './InputMoney'
import { InputNumeric } from './InputNumeric'
import { InputRoot } from './InputRoot'
import { InputSelectedBasic } from './InputSelectedBasic'
import { InputSelectedGroup } from './InputSelectedGroup'
import { InputWrapper } from './InputWrapper'

export const InputComponent = {
  root: InputRoot,
  inputBase: InputBase,
  inputPassword: InputPassword,
  inputMoney: InputMoney,
  inputNumeric: InputNumeric,
  inputSelectedBasic: InputSelectedBasic,
  inputSelectedGroup: InputSelectedGroup,
  label: InputLabel,
  wrapper: InputWrapper,
}
