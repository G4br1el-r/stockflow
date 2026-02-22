import z from 'zod'

export const LoginRegisterSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'Informe o email' })
    .email({ message: 'Email inválido' }),
  password: z.string().min(1, { message: 'Informe a senha' }),
})

export type LoginFormData = z.infer<typeof LoginRegisterSchema>
