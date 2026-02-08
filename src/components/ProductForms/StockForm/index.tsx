import { InputComponent } from '@/components/Input'
import { useFormContext } from 'react-hook-form'

interface StockFormProps {
  index: number
}

export default function StockForm({ index }: StockFormProps) {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col items-start justify-center gap-5 md:grid md:grid-cols-2">
      <InputComponent.root>
        <InputComponent.label
          htmlFor={`sizes.${index}.sku`}
          className="text-sm whitespace-nowrap"
          text="SKU"
        />
        <InputComponent.wrapper className="bg-variant-primary cursor-not-allowed pointer-events-none select-none">
          <InputComponent.inputBase
            id={`sizes.${index}.sku`}
            placeholder="SKU"
            IconMain="scanBarcode"
            className="cursor-not-allowed w-full pointer-events-none select-none"
            readOnly
            tabIndex={-1}
            autoComplete="off"
            value=""
          />
        </InputComponent.wrapper>
      </InputComponent.root>

      <div className="flex gap-5 items-start justify-center">
        <InputComponent.root>
          <InputComponent.label
            htmlFor={`sizes.${index}.quantity`}
            className="text-sm whitespace-nowrap"
            text="Quantidade"
          />
          <InputComponent.wrapper>
            <InputComponent.inputBase
              id={`sizes.${index}.quantity`}
              placeholder="0"
              type="tel"
              inputMode="numeric"
              isOnlyNumeric={true}
              {...register(`sizes.${index}.quantity`)}
            />
          </InputComponent.wrapper>
        </InputComponent.root>

        <InputComponent.root>
          <InputComponent.label
            htmlFor={`sizes.${index}.minimumStock`}
            className="text-sm whitespace-nowrap"
            text="Estoque mínimo"
          />
          <InputComponent.wrapper>
            <InputComponent.inputBase
              id={`sizes.${index}.minimumStock`}
              placeholder="0"
              type="tel"
              inputMode="numeric"
              isOnlyNumeric={true}
              {...register(`sizes.${index}.minimumStock`)}
            />
          </InputComponent.wrapper>
        </InputComponent.root>
      </div>
    </div>
  )
}
