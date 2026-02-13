import { InputComponent } from '@/components/Input'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'

export function ProductPricing() {
  return (
    <>
      <div className=" w-full h-full flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-green-neon/20 border-green-neon"
          classNameIcon="text-green-neon"
          iconName="banknote"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Financeiro e Preficiação
        </TextBase>
      </div>

      <div className="flex flex-col gap-5">
        <div className="extrasm:grid extrasm:grid-cols-2 extrasm:gap-5 flex flex-col gap-5">
          <InputComponent.root>
            <InputComponent.label label="Preço Custo" />
            <InputComponent.wrapper
              iconName="bankNoteArrowDown"
              classNameWrapper="bg-gray-950/70"
            >
              <InputComponent.inputMoney />
            </InputComponent.wrapper>
          </InputComponent.root>

          <InputComponent.root>
            <InputComponent.label label="Preço Venda" />
            <InputComponent.wrapper
              iconName="banknoteArrowUp"
              classNameWrapper="bg-gray-950/70"
            >
              <InputComponent.inputMoney />
            </InputComponent.wrapper>
          </InputComponent.root>
        </div>

        <InputComponent.root>
          <InputComponent.wrapper
            iconName="piggyBank"
            classNameWrapper="border-dashed bg-green-100/20 justify-between"
            classNameIcon="text-green-neon"
          >
            <TextBase
              as="span"
              className="text-green-neon w-full whitespace-nowrap"
            >
              Margem Calculada
            </TextBase>
            <TextBase as="span" className="text-green-neon">
              20%
            </TextBase>
          </InputComponent.wrapper>
        </InputComponent.root>

        <InputComponent.root>
          <InputComponent.wrapper
            iconName="noIcon"
            classNameWrapper="bg-green-100/20 flex-col h-full items-center justify-center gap-1 "
            classNameIcon="text-green-neon"
          >
            <TextBase as="span" className="text-green-neon whitespace-nowrap">
              Lucro Líquido
            </TextBase>
            <TextBase as="span" className="text-green-neon whitespace-nowrap">
              R$ 73,85
            </TextBase>
          </InputComponent.wrapper>
        </InputComponent.root>
      </div>
    </>
  )
}
