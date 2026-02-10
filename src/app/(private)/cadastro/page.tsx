import { InputComponent } from '@/components/Input'
import { InputImage } from '@/components/Input/InputImage'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { CircleFadingPlus } from 'lucide-react'

export default function RegisterProducts() {
  return (
    <WrapperAlignMainPages classNameWrapper="gap-10">
      <div className="w-full h-full flex flex-col gap-2">
        <div className="flex gap-2 items-center text-blue-neon">
          <CircleFadingPlus className="h-5 w-5" />
          <TextBase as="span" className="text-[0.8rem] font-bold">
            ADICIONAR NOVO PRODUTO
          </TextBase>
        </div>
        <div>
          <TextBase as="h1">Novo Produto</TextBase>
          <TextBase as="span" className="text-[0.8rem]">
            Cadastre seus produtos de forma prática e rápida.
          </TextBase>
        </div>
      </div>
      <main className="w-full h-full flex flex-col gap-5">
        <div className="w-full h-full flex items-center gap-3">
          <SectionHeader
            classNameBackGround="bg-blue-neon/20 border-blue-neon"
            classNameIcon="text-blue-neon"
            iconName="filePlus"
          />
          <TextBase as="span" className="font-bold">
            Informações Gerais
          </TextBase>
        </div>

        <section className="flex flex-col gap-5 w-full h-full">
          <div className="flex flex-col gap-5">
            <InputComponent.root>
              <InputComponent.label label="Nome do Produto" />
              <InputComponent.wrapper iconName="pencil">
                <InputComponent.inputBase placeHolder="Camiseta Oversized" />
              </InputComponent.wrapper>
            </InputComponent.root>

            <div className="flex flex-col gap-5">
              <InputComponent.root>
                <InputComponent.label label="Loja" />
                <InputComponent.wrapper iconName="store">
                  <InputComponent.inputSelectedBasic />
                </InputComponent.wrapper>
              </InputComponent.root>

              <InputComponent.root>
                <InputComponent.label label="Categoria" />
                <InputComponent.wrapper iconName="category">
                  <InputComponent.inputSelectedGroup />
                </InputComponent.wrapper>
              </InputComponent.root>
            </div>
          </div>

          <SectionDivider />

          <InputImage />

          <SectionDivider />

          <div className=" w-full h-full flex items-center gap-3">
            <SectionHeader
              classNameBackGround="bg-green-neon/20 border-green-neon"
              classNameIcon="text-green-neon"
              iconName="banknote"
            />
            <TextBase as="span" className="font-bold">
              Financeiro e Preficiação
            </TextBase>
          </div>

          <div className="flex flex-col gap-5">
            <InputComponent.root>
              <InputComponent.label label="Preço Custo" />
              <InputComponent.wrapper iconName="bankNoteArrowDown">
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>

            <InputComponent.root>
              <InputComponent.label label="Preço Venda" />
              <InputComponent.wrapper iconName="banknoteArrowUp">
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>

            <InputComponent.root>
              <InputComponent.label label="Lucro Bruto" />
              <InputComponent.wrapper
                iconName="piggyBank"
                classNameWrapper="border-dashed bg-green-100/20"
              >
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>

          <SectionDivider />

          <div className=" w-full h-full flex items-center gap-3">
            <SectionHeader
              classNameBackGround="bg-orange-neon/20 border-orange-neon"
              classNameIcon="text-orange-neon"
              iconName="shirt"
            />
            <TextBase as="span" className="font-bold">
              Especificação de Roupas
            </TextBase>
          </div>
        </section>
      </main>
    </WrapperAlignMainPages>
  )
}
