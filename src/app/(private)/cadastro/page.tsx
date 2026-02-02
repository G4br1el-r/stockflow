import { InputComponent } from '@/components/Input'
import { Text } from '@/components/Text'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { BadgePlus, Footprints, Gem, Shirt } from 'lucide-react'

export default function Register() {
  const SECTION_ITENS = [
    { title: 'Roupas', icon: Shirt },
    { title: 'Sapatos', icon: Footprints },
    { title: 'Acessórios', icon: Gem },
  ]

  return (
    <WrapperAlignMainPages className="flex flex-col gap-6 items-center justify-center">
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-icon-activate">
          <BadgePlus className="w-5 h-5" />
          <Text as="p" className="font-semibold">
            ADICIONAR NOVO PRODUTO
          </Text>
        </div>
        <Text as="h1" className="text-3xl text-variant-secondary">
          Cadastro de Produtos
        </Text>
        <Text as="p" className="text-base-primary leading-5">
          Cadastre seus produtos de forma prática e rápida.
        </Text>
      </section>
      <main className="bg-background-sidebar-main rounded-2xl w-full h-full">
        <form className="h-full w-full p-3 flex flex-col gap-3">
          <InputComponent.root>
            <InputComponent.label
              htmlFor="product"
              text="Descrição do Produto"
            />
            <InputComponent.wrapper>
              <InputComponent.main
                id="product"
                name="product"
                placeholder="Camiseta Oversized"
                IconMain="shirt"
              />
            </InputComponent.wrapper>
          </InputComponent.root>

          <InputComponent.root>
            <InputComponent.label htmlFor="loja" text="Selecione a loja" />
            <InputComponent.wrapper>
              <InputComponent.main
                id="product"
                name="product"
                placeholder="Camiseta Oversized"
                IconMain="shirt"
              />
            </InputComponent.wrapper>
          </InputComponent.root>
        </form>
      </main>
    </WrapperAlignMainPages>
  )
}
