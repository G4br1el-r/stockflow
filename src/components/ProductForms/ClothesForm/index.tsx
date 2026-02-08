import { InputComponent } from '@/components/Input'
import { useFormContext } from 'react-hook-form'

export default function ClothesForm() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-5 lg:col-span-2">
      <div className="flex flex-col gap-5 md:grid md:grid-cols-4">
        <InputComponent.root>
          <InputComponent.label
            htmlFor="collor"
            className="text-sm"
            text="Cor"
          />
          <InputComponent.wrapper>
            <InputComponent.inputBase
              id="collor"
              placeholder="Azul"
              IconMain="palette"
              {...register('collor')}
            />
          </InputComponent.wrapper>
        </InputComponent.root>

        <InputComponent.root>
          <InputComponent.label
            htmlFor="clothing"
            className="text-sm"
            text="Tecido"
          />
          <InputComponent.wrapper>
            <InputComponent.inputBase
              id="clothing"
              placeholder="Algodão"
              IconMain="spool"
              {...register('clothing')}
            />
          </InputComponent.wrapper>
        </InputComponent.root>

        <InputComponent.root>
          <InputComponent.label
            htmlFor="sleeve"
            text="Tipo de Manga"
            className="text-sm"
          />
          <InputComponent.wrapper>
            <InputComponent.inputBase
              id="sleeve"
              placeholder="Longa"
              IconMain="shirt"
              {...register('sleeve')}
            />
          </InputComponent.wrapper>
        </InputComponent.root>

        <InputComponent.root>
          <InputComponent.label
            htmlFor="lenght"
            text="Comprimento"
            className="text-sm"
          />
          <InputComponent.wrapper>
            <InputComponent.inputBase
              id="lenght"
              placeholder="Longa"
              IconMain="ruler"
              {...register('lenght')}
            />
          </InputComponent.wrapper>
        </InputComponent.root>
      </div>
    </div>
  )
}
