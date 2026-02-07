import { InputComponent } from '@/components/Input'

export default function StockForm() {
  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
      <InputComponent.root>
        <InputComponent.label htmlFor="sku" className="text-sm" text="SKU" />
        <InputComponent.wrapper className="bg-variant-primary">
          <InputComponent.inputBase
            id="sku"
            placeholder="GERADO-AUTOMATICAMENTE"
            IconMain="scanBarcode"
            className="cursor-not-allowed w-full pointer-events-none select-none"
            readOnly
            tabIndex={-1}
          />
        </InputComponent.wrapper>
      </InputComponent.root>

      <InputComponent.root>
        <InputComponent.label
          htmlFor="quantity"
          className="text-sm"
          text="Quantidade"
        />
        <InputComponent.wrapper>
          <InputComponent.inputBase
            id="quantity"
            placeholder="0"
            type="tel"
            inputMode="numeric"
            isOnlyNumeric={true}
          />
        </InputComponent.wrapper>
      </InputComponent.root>

      <InputComponent.root>
        <InputComponent.label
          htmlFor="minimumStock"
          className="text-sm"
          text="Estoque mínimo"
        />
        <InputComponent.wrapper>
          <InputComponent.inputBase
            id="minimumStock"
            placeholder="0"
            type="tel"
            inputMode="numeric"
            isOnlyNumeric={true}
          />
        </InputComponent.wrapper>
      </InputComponent.root>
    </div>
  )
}
