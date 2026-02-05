import { InputComponent } from '@/components/Input'
import SizeForm from '../SizeForm'

export default function ClothesForm() {
  return (
    <div className="flex flex-col gap-3">
      <SizeForm />
      <InputComponent.root>
        <InputComponent.label
          htmlFor="clothing"
          className="text-sm"
          text="Tecido"
        />
        <InputComponent.wrapper>
          <InputComponent.inputBase
            id="clothing"
            name="clothing"
            placeholder="Algodão"
            IconMain="spool"
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
            name="sleeve"
            placeholder="Longa"
            IconMain="shirt"
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
            name="lenght"
            placeholder="Longa"
            IconMain="ruler"
          />
        </InputComponent.wrapper>
      </InputComponent.root>
    </div>
  )
}
