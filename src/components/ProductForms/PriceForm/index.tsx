import { InputComponent } from '@/components/Input'

export default function PriceForm() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
        <div className="flex-1 min-w-0">
          <InputComponent.root>
            <InputComponent.label
              htmlFor="costPrice"
              className="text-sm"
              text="Preço Custo"
            />
            <InputComponent.wrapper>
              <InputComponent.inputMaskPrice />
            </InputComponent.wrapper>
          </InputComponent.root>
        </div>

        <div className="flex-1 min-w-0">
          <InputComponent.root>
            <InputComponent.label
              htmlFor="sellingPrice"
              className="text-sm"
              text="Preço Venda"
            />
            <InputComponent.wrapper>
              <InputComponent.inputMaskPrice />
            </InputComponent.wrapper>
          </InputComponent.root>
        </div>

        <InputComponent.root>
          <InputComponent.label
            htmlFor="profitMargin"
            className="text-sm"
            text="Lucro Bruto"
          />
          <InputComponent.wrapper className="bg-variant-primary">
            <InputComponent.inputBase
              id="profitMargin"
              placeholder="Margem de Lucro"
              className="cursor-not-allowed w-full disabled:text-base-primary"
              disabled={true}
              IconMain="banknoteArrowUp"
            />
          </InputComponent.wrapper>
        </InputComponent.root>
      </div>
    </div>
  )
}
