import { LoginFormData } from '@/@schema/Login/login-form.schema'
import { InputComponent } from '@/components/Input'
import { TextBase } from '@/components/TextBase'
import { cn } from '@/lib/utils'
import { ArrowRight, Loader } from 'lucide-react'
import { useFormContext, useFormState } from 'react-hook-form'

interface LoginInputsProsp {
  isPending: boolean
}

export function LoginInputs({ isPending }: LoginInputsProsp) {
  const { control } = useFormContext<LoginFormData>()
  const { errors } = useFormState({ control })

  return (
    <>
      <div
        className={cn(
          'group/input transition-all duration-300',
          !isPending && 'hover:-translate-y-0.5 focus-within:-translate-y-0.5',
        )}
      >
        <InputComponent.root>
          <InputComponent.label
            label="E-mail corporativo"
            htmlFor="email"
            classNameLabel="xl:text-[1.25rem]"
          />
          <InputComponent.wrapper iconName="mail">
            <InputComponent.inputBase
              placeHolder="nome@empresa.com"
              id="email"
              name="email"
              disable={isPending}
            />
          </InputComponent.wrapper>

          <div className="min-h-5 mt-1">
            {errors.email && (
              <TextBase as="span" className="text-red-500 text-sm leading-none">
                {errors.email.message as string}
              </TextBase>
            )}
          </div>
        </InputComponent.root>
      </div>

      <div
        className={cn(
          'group/input transition-all duration-300',
          !isPending && 'hover:-translate-y-0.5 focus-within:-translate-y-0.5',
        )}
      >
        <InputComponent.root>
          <div className="flex items-center justify-between">
            <InputComponent.label
              label="Senha"
              htmlFor="password"
              classNameLabel="xl:text-[1.25rem]"
            />
            <TextBase
              as="span"
              className="text-[0.8rem] xl:text-[1rem]! text-blue-neon font-semibold"
            >
              Recuperar acesso?
            </TextBase>
          </div>
          <InputComponent.wrapper iconName="lockKeyhole">
            <InputComponent.inputPassword
              placeHolder="*********"
              id="password"
              name="password"
              disable={isPending}
            />
          </InputComponent.wrapper>

          <div className="min-h-5 mt-1">
            {errors.password && (
              <TextBase as="span" className="text-red-500 text-sm leading-none">
                {errors.password.message as string}
              </TextBase>
            )}
          </div>
        </InputComponent.root>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 cursor-pointer bg-blue-neon flex-center rounded-lg gap-2 transition-all duration-300 disabled:cursor-auto hover:scale-[1.02] disabled:hover:scale-100 disabled:bg-blue-neon/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-neon/70 focus:ring-offset-2 focus:ring-offset-background"
      >
        <TextBase as="span" className="font-semibold text-white">
          {isPending ? (
            <Loader className="animate-spin" />
          ) : (
            'Entrar na plataforma'
          )}
        </TextBase>
        {!isPending && <ArrowRight className="w-4 h-4 text-white" />}
      </button>

      <div className="flex items-center justify-center gap-1">
        <TextBase as="span" className="text-[0.8rem] xl:text-[1rem]!">
          Não possui uma conta?
        </TextBase>
        <TextBase
          as="span"
          className="text-[0.8rem] xl:text-[1rem]! text-blue-neon font-semibold"
        >
          Fale com vendas!
        </TextBase>
      </div>
    </>
  )
}
