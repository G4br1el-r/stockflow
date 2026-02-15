import { InputComponent } from '@/components/Input'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'

export function ProductPricing() {
  return (
    <div className="flex flex-col gap-5">
      <div className=" w-full h-full flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-green-neon/20 border-green-neon"
          classNameIcon="text-green-neon"
          iconName="banknote"
        />
        <TextBase
          as="span"
          className="font-bold text-[1.2rem] text-title-section"
        >
          Financeiro e Preficiação
        </TextBase>
      </div>

      <div className="flex flex-col gap-5">
        <div className="extrasm:grid extrasm:grid-cols-2 extrasm:gap-5 flex flex-col gap-5">
          <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.label label="Preço Custo" />
              <InputComponent.wrapper iconName="bankNoteArrowDown">
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>

          <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.label label="Preço Venda" />
              <InputComponent.wrapper iconName="banknoteArrowUp">
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>
        </div>

        <div className="flex flex-col gap-5 extrasm:grid extrasm:grid-cols-2">
          <div className="group/calc transition-all duration-300 hover:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.wrapper
                iconName="chartNoAxesCombined"
                classNameWrapper="border-dashed bg-green-100/20 justify-between h-full transition-all duration-300 group-hover/calc:bg-green-100/30 group-hover/calc:shadow-[0_2px_12px_rgba(0,0,0,0.3)] group-hover/calc:border-green-neon/30"
                classNameIcon="text-green-neon"
              >
                <TextBase as="span" className="text-green-neon w-full">
                  Margem Calculada
                </TextBase>
                <TextBase as="span" className="text-green-neon">
                  20%
                </TextBase>
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>

          <div className="group/profit transition-all duration-300 hover:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.wrapper
                iconName="piggyBank"
                classNameWrapper="border-dashed bg-green-100/20 justify-between h-full transition-all duration-300 group-hover/profit:bg-green-100/30 group-hover/profit:shadow-[0_2px_12px_rgba(0,0,0,0.3)] group-hover/profit:border-green-neon/30"
                classNameIcon="text-green-neon"
              >
                <TextBase as="span" className="text-green-neon flex-1">
                  Lucro Líquido
                </TextBase>
                <TextBase as="span" className="text-green-neon">
                  R$ 73,85
                </TextBase>
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>
        </div>
      </div>
    </div>
  )
}
