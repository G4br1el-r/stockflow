import { InputComponent } from '@/components/Input'
import { Text } from '@/components/Text'
import { Zap } from 'lucide-react'

export default function SignIn() {
  return (
    <main className="min-h-full min-w-full flex items-center justify-center dark:bg-(image:--gradient-hero)">
      <section className="h-150 p-5 w-[90%] max-w-167.5 bg-background-modal-login relative flex items-center justify-center flex-col rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border">
        <div className="w-4/5 h-0.5 absolute top-0 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-neon/10 via-blue-neon to-blue-neon/10" />

        <section className="flex flex-col gap-3 items-center justify-center mb-15">
          <div className="bg-blue-neon h-13 w-13 flex items-center justify-center rounded-sm shadow-[0_0_8px_rgb(13_89_242)]">
            <Zap className="text-white" size={28} />
          </div>
          <Text as="h1" className="dark:text-white text-black sm:text-[2.4rem]">
            StockFlow
          </Text>
          <Text
            as="p"
            className="leading-4 text-sm font-light text-base-primary text-center sm:text-[1rem]"
          >
            Bem-vindo de volta. Acesse sua conta para gerenciar seu estoque com
            eficiência.
          </Text>
        </section>
        <form className="flex flex-col items-center w-full justify-center gap-5">
          <InputComponent.root>
            <InputComponent.title text="E-mail" />
            <InputComponent.wrapper>
              <InputComponent.main
                IconMain={'mail'}
                placeHolder="seu@email.com"
              />
            </InputComponent.wrapper>
          </InputComponent.root>

          <div className="space-y-2 w-full">
            <InputComponent.root>
              <InputComponent.title text="Senha" />
              <InputComponent.wrapper>
                <InputComponent.main
                  IconMain={'lock'}
                  placeHolder="••••••••••"
                  isPassword
                />
              </InputComponent.wrapper>
            </InputComponent.root>

            <Text
              as="p"
              className="text-base-primary cursor-pointer text-[0.8rem] w-full text-end"
            >
              Esqueceu a senha?
            </Text>
          </div>

          <button
            type="submit"
            className="w-full h-14 text-center flex items-center cursor-pointer justify-center text-white font-bold bg-blue-neon shadow-[0_0_6px_rgb(13_89_242)] rounded-sm"
          >
            <Text as="p" className="text-lg">
              Entrar
            </Text>
          </button>
        </form>
        <div className="mt-5 space-y-5">
          <div className="w-full h-px bg-border-main" />
          <div className="flex gap-1 items-center justify-center">
            <Text as="span" className="text-base-primary">
              Não tem uma conta?
            </Text>
            <button
              type="button"
              className="text-blue-neon cursor-pointer font-semibold"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
