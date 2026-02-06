import { InputComponent } from '@/components/Input'
import SizeForm from '../SizeForm'
import { Text } from '@/components/Text'
import { Cog } from 'lucide-react'

export default function ClothesForm() {
  return (
    <div className="flex flex-col gap-5">
      <div className="py-3 pr-3 flex items-center gap-2">
        <div className="h-8 w-8 rounded-sm flex items-center justify-center bg-icon-activate/30 border border-icon-activate p-1.5">
          <Cog className="text-icon-activate" />
        </div>

        <Text as="span" className="text-[1.2rem] font-bold ">
          Segmento
        </Text>
      </div>

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
    </div>
  )
}
