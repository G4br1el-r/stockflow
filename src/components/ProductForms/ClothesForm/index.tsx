import { InputComponent } from '@/components/Input'
import SizeForm from '../SizeForm'
import WrapperSegment from '../WrapperSegment'

export default function ClothesForm() {
  return (
    <WrapperSegment>
      <div className="lg:grid lg:grid-cols-[auto_1fr] flex flex-col gap-5">
        <SizeForm />

        <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
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
      </div>
    </WrapperSegment>
  )
}
