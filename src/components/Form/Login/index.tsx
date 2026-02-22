'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoginInputs } from './LoginInputs'
import { FieldErrors, FormProvider, useForm } from 'react-hook-form'
import {
  LoginFormData,
  LoginRegisterSchema,
} from '@/@schema/Login/login-form.schema'
import { toast } from 'react-toastify'

export function LoginForm() {
  const methodsLogin = useForm<LoginFormData>({
    resolver: zodResolver(LoginRegisterSchema),
    shouldFocusError: false,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleFormSubmit(data: LoginFormData) {
    console.log(data)
    methodsLogin.reset()
    toast.success('Login realizado com sucesso!')
    console.log('aqui')
  }

  function handleFormError(data: FieldErrors<LoginFormData>) {
    console.log(data)
    toast.error(
      'Não foi possível realizar o login. Verifique suas credenciais.',
    )
  }

  return (
    <FormProvider {...methodsLogin}>
      <form
        onSubmit={methodsLogin.handleSubmit(handleFormSubmit, handleFormError)}
        className="w-full flex flex-col gap-5"
      >
        <LoginInputs />
      </form>
    </FormProvider>
  )
}
