import { InputComponent } from '@/components/Input'
import { Controller, useFormContext } from 'react-hook-form'

export default function PriceForm() {
  const { control } = useFormContext()

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
              <Controller
                name="costPrice"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <InputComponent.inputMaskPrice
                    defaultValue={value}
                    onValueChange={onChange}
                  />
                )}
              />
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
              <Controller
                name="sellingPrice"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <InputComponent.inputMaskPrice
                    defaultValue={value}
                    onValueChange={onChange}
                  />
                )}
              />
            </InputComponent.wrapper>
          </InputComponent.root>
        </div>

        <InputComponent.root>
          <InputComponent.label
            htmlFor="profitMargin"
            className="text-sm"
            text="Lucro Bruto"
          />
          <InputComponent.wrapper className="border border-base-green border-dashed bg-base-green/10">
            <InputComponent.inputBase
              id="profitMargin"
              IconMain="banknoteArrowUp"
              classNameIconMain="text-base-green"
              className="cursor-not-allowed w-full pointer-events-none select-none text-base-green"
              readOnly
              tabIndex={-1}
            />
          </InputComponent.wrapper>
        </InputComponent.root>
      </div>
    </div>
  )
}
