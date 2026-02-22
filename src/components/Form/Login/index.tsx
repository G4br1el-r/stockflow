'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoginInputs } from './LoginInputs'
import { FieldErrors, FormProvider, useForm } from 'react-hook-form'
import {
  LoginFormData,
  LoginRegisterSchema,
} from '@/@schema/Login/login-form.schema'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

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

  const router = useRouter()

  async function handleFormSubmit(data: LoginFormData) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })

    if (!response.ok) {
      const error = await response.json()
      return toast.error(error.error)
    }

    const { name } = await response.json()

    methodsLogin.reset()
    toast.success(`Bem-vindo(a) ${name}`, {
      onClose: () => router.push('/cadastro'),
      autoClose: 1000,
    })
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
