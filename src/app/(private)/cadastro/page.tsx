import { InputComponent } from '@/components/Input'
import { Text } from '@/components/Text'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { BadgePlus, Divide, Footprints, Gem, Shirt } from 'lucide-react'

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
              className="text-sm"
            />
            <InputComponent.wrapper>
              <InputComponent.inputBase
                id="product"
                name="product"
                placeholder="Camiseta Oversized"
                IconMain="shirt"
              />
            </InputComponent.wrapper>
          </InputComponent.root>

          <InputComponent.root>
            <InputComponent.label
              htmlFor="store"
              text="Selecione a loja"
              className="text-sm"
            />
            <InputComponent.wrapper>
              <InputComponent.inputBase
                id="store"
                name="store"
                placeholder="Selecione a unidade"
                IconMain="store"
              />
            </InputComponent.wrapper>
          </InputComponent.root>

          <InputComponent.root>
            <InputComponent.label
              htmlFor="subcategory"
              className="text-sm"
              text="Subcategoria"
            />
            <InputComponent.wrapper>
              <InputComponent.inputBase
                id="subcategory"
                name="subcategory"
                placeholder="Camisetas"
                IconMain="shirt"
              />
            </InputComponent.wrapper>
          </InputComponent.root>

          <InputComponent.root>
            <InputComponent.label
              htmlFor="collor"
              className="text-sm"
              text="Cor"
            />
            <InputComponent.wrapper>
              <InputComponent.inputBase
                id="collor"
                name="collor"
                placeholder="Azul"
                IconMain="palette"
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
                name="quantity"
                placeholder="0"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]"
                isOnlyNumeric={true}
              />
            </InputComponent.wrapper>
          </InputComponent.root>

          <div className="flex gap-3 w-full">
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
          </div>

          <InputComponent.root>
            <InputComponent.label
              htmlFor="sku"
              className="text-sm"
              text="Preço Custo"
            />
            <InputComponent.wrapper>
              <InputComponent.inputBase
                id="sku"
                name="sku"
                placeholder="GERADO-AUTOMATICAMENTE"
                IconMain="scanBarcode"
              />
            </InputComponent.wrapper>
          </InputComponent.root>
        </form>
      </main>
    </WrapperAlignMainPages>
  )
}
