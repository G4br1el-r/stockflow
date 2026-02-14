import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { Archive, Heart, RefreshCcw } from 'lucide-react'

export function ProductLivePreview() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="eye"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Live Preview
        </TextBase>
      </div>
      <section className="w-full h-170 border rounded-lg shrink-0 flex flex-col">
        <div className="w-full  flex-1 rounded-t-lg bg-gray-100/5 flex-center relative">
          <Archive className="w-10 h-10 text-gray-600" />
          <TextBase
            as="span"
            className="text-[0.6em] px-2 py-0.5 bg-gray-600/90 border border-gray-600 rounded-lg absolute top-2 right-2"
          >
            NOVO
          </TextBase>
        </div>
        <div className="w-full gap-7 px-3 py-6 flex flex-col items-center bg-blue-900/5">
          <div className="w-full flex justify-between">
            <div className="flex flex-col">
              <TextBase
                as="span"
                className="text-[0.8rem] text-blue-neon font-semibold"
              >
                CAMISETAS
              </TextBase>
              <TextBase as="span" className="font-bold">
                Camiseta Oversized Nike
              </TextBase>
            </div>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="flex items-center gap-5 w-full">
              <TextBase as="span" className="text-[0.8rem] whitespace-nowrap">
                OPÇÕES DE GRADE
              </TextBase>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-neon" />
                  <TextBase as="span" className="text-gray-500 font-semibold">
                    Azul Neon
                  </TextBase>
                </div>
                <TextBase
                  as="span"
                  className="text-[0.8rem] bg-gray-100/5 px-2 rounded-full text-gray-500"
                >
                  45 Uni
                </TextBase>
              </div>
              <div className="flex items-center gap-1">
                <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                  <TextBase as="span" className="font-bold text-[0.6rem]">
                    P
                  </TextBase>
                </div>
                <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                  <TextBase as="span" className="font-bold text-[0.6rem]">
                    M
                  </TextBase>
                </div>
                <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                  <TextBase as="span" className="font-bold text-[0.6rem]">
                    G
                  </TextBase>
                </div>
                <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                  <TextBase as="span" className="font-bold text-[0.6rem]">
                    GG
                  </TextBase>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <TextBase as="span" className="text-gray-500 font-semibold">
                    Vermelho Vívido
                  </TextBase>
                </div>
                <TextBase
                  as="span"
                  className="text-[0.8rem] bg-gray-100/5 px-2 rounded-full text-gray-500"
                >
                  20 Uni
                </TextBase>
              </div>
              <div className="flex items-center gap-1">
                <div className=" bg-red-500/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-red-500/60 border">
                  <TextBase as="span" className="font-bold text-[0.6rem]">
                    P
                  </TextBase>
                </div>
                <div className=" bg-red-500/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-red-500/60 border">
                  <TextBase as="span" className="font-bold text-[0.6rem]">
                    G
                  </TextBase>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-10 bg-gray-950/50 text-gray-600 border-t rounded-b-lg flex-center gap-2">
          <RefreshCcw className="w-3 h-3" />
          <TextBase as="span" className="text-[0.8rem]">
            Atualizado em tempo real
          </TextBase>
        </div>
      </section>
    </div>
  )
}
