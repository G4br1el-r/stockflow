import { LoginForm } from '@/components/Form/Login'
import { PrismLogoClient } from '@/components/PrismLogo/PrismLogoClient'
import { SwitchDarkModeMinimum } from '@/components/SwtichDarkModeMinimum'
import { TextBase } from '@/components/TextBase'
import { Box, Star } from 'lucide-react'
import Image from 'next/image'

export default function SignIn() {
  return (
    <main className="bg-main w-screen min-h-dvh h-full flex flex-col items-center p-4 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-150 h-150 rounded-full bg-blue-neon/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-125 h-125 rounded-full bg-blue-neon/4 blur-[100px]"
      />

      <section className="relative z-10 justify-between items-center flex flex-col xl:grid! xl:grid-cols-2! w-full h-full">
        <div className="w-55 h-15 min-h-15 mx-auto relative xl:col-span-2 xl:self-start">
          <PrismLogoClient />
        </div>

        <div className="hidden xl:flex flex-col xl:p-20 items-center gap-10 px-20 xl:h-full">
          <div className="w-full">
            <div className="relative w-15 h-15 group">
              <div className="absolute -inset-2 rounded-xl bg-blue-neon/8 blur-xl transition-all duration-700 group-hover:bg-blue-neon/15 group-hover:blur-2xl" />
              <div className="absolute -inset-0.5 rounded-sm bg-linear-to-br from-blue-neon/30 to-transparent blur-sm" />
              <div className="relative w-15 h-15 bg-linear-to-br from-blue-neon/20 to-blue-neon/5 border border-blue-neon/40 rounded-sm flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Box className="w-10 h-10 text-blue-neon" strokeWidth={1.25} />
              </div>
            </div>
          </div>

          <TextBase
            as="h1"
            className="text-[4rem] 3xl:text-[5rem] leading-18 3xl:leading-18 font-semibold tracking-tight"
          >
            Controle total do seu{' '}
            <TextBase
              as="span"
              className="relative inline-block text-blue-neon font-bold text-[4rem] 3xl:text-[5rem]"
            >
              <span
                aria-hidden
                className="absolute inset-0 text-blue-neon font-bold text-[4rem] 3xl:text-[5rem] blur-2xl opacity-40 select-none pointer-events-none"
              >
                fluxo de vendas
              </span>
              fluxo de vendas
            </TextBase>
          </TextBase>

          <TextBase
            as="h2"
            className="text-[1.5rem] 3xl:text-[1.8rem] leading-relaxed text-gray-neon font-normal"
          >
            Prism transforma dados complexos em inteligência de negócios. A
            plataforma premium para líderes que buscam excelência
          </TextBase>
        </div>

        <section className="w-full 3xl:h-full! transition-all duration-300 flex flex-col gap-6 max-w-100 xl:justify-self-center xl:justify-around xl:py-20 xl:h-140 xl:rounded-3xl xl:max-w-170 3xl:max-w-200 xl:px-10 xl:gap-15 xl:bg-linear-to-b xl:from-modal-background/3 xl:to-transparent xl:backdrop-blur-xl relative overflow-hidden">
          <div
            aria-hidden
            className="hidden xl:block absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
          />

          <div className="flex flex-col gap-1.5 w-full">
            <TextBase
              as="span"
              className="text-[1.15rem] xl:text-[1.80rem] 3xl:text-[2.2rem] font-semibold tracking-tight"
            >
              Bem-Vindo
            </TextBase>

            <TextBase
              as="span"
              className="text-gray-neon/80 text-[0.95rem] xl:text-[1.30rem] 3xl:text-[1.6rem] font-normal"
            >
              Acesse seu painel administrativo.
            </TextBase>
          </div>

          <LoginForm />
        </section>

        <div className="w-full xl:pl-20 flex flex-col items-center max-w-100 3xl:max-w-130 gap-3 xl:self-start xl:max-w-120">
          <div className="flex w-full justify-between items-center">
            <TextBase
              as="span"
              className="text-gray-neon/50 text-[0.75rem] 3xl:text-[1rem]! tracking-[0.22em] font-medium uppercase"
            >
              Confiança de líderes
            </TextBase>

            <SwitchDarkModeMinimum />
          </div>

          <div className="group flex flex-col w-full xs:flex-row! rounded-3xl border border-white/[0.07] dark:border-white/5 bg-linear-to-br from-white/4 to-transparent dark:from-white/3 dark:to-transparent p-5 backdrop-blur-xl items-center justify-between gap-6 shadow-[0_2px_24px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.04)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.40),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-500 hover:border-white/12 dark:hover:border-white/9 hover:shadow-[0_8px_40px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.06)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] relative overflow-hidden">
            <div
              aria-hidden
              className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
            />

            <div className="flex items-center -space-x-3">
              {[
                '/avatar-login-2.png',
                '/avatar-login.png',
                '/avatar-login-3.png',
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative h-11 w-11 overflow-hidden rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.10)]"
                  style={{ zIndex: 3 - i }}
                >
                  <Image src={src} alt="Avatar" fill className="object-cover" />
                </div>
              ))}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[0.75rem] font-semibold tracking-tight shadow-[0_0_0_2px_rgba(255,255,255,0.06)]">
                <TextBase as="span" className="text-[0.75rem]">
                  +2k
                </TextBase>
              </div>
            </div>

            <div className="flex flex-col items-center xs:items-end! gap-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-3.75 w-3.75 text-yellow-neon"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(250,190,0,0.55))',
                    }}
                    fill="currentColor"
                  />
                ))}
                <TextBase
                  as="span"
                  className="ml-1.5 text-[0.9rem] 3xl:text-[1rem]! font-semibold"
                >
                  4.9
                </TextBase>
              </div>

              <TextBase
                as="span"
                className="text-[0.82rem] 3xl:text-[1rem] text-gray-neon/60 text-right tracking-wide"
              >
                Avaliação média de clientes
              </TextBase>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
