import { InputComponent } from '@/components/Input'
import ClothesForm from '@/components/ProductForms/ClothesForm'
import { Text } from '@/components/Text'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import {
  BadgeInfo,
  BadgePlus,
  Footprints,
  Gem,
  Rocket,
  Shirt,
  Trash2,
} from 'lucide-react'

export default function Register() {
  const SECTION_ITENS = [
    { title: 'Roupas', icon: Shirt },
    { title: 'Sapatos', icon: Footprints },
    { title: 'Acessórios', icon: Gem },
  ]

  return (
    <WrapperAlignMainPages className="flex flex-col gap-6 items-center justify-center">
      <section className="w-full flex flex-col gap-6 md:grid md:grid-cols-2">
        <div className="flex flex-col w-full justify-start items-center gap-2">
          <div className="flex w-full items-center justify-start gap-2 text-icon-activate">
            <BadgePlus className="w-5 h-5" />
            <Text as="p" className="font-semibold">
              ADICIONAR NOVO PRODUTO
            </Text>
          </div>
          <div className="flex w-full items-center justify-start flex-col gap-2">
            <Text as="h1" className="text-3xl w-full text-variant-secondary">
              Cadastro de Produtos
            </Text>
            <Text as="p" className="text-base-primary w-full leading-5 text-sm">
              Cadastre seus produtos de forma prática e rápida.
            </Text>
          </div>
        </div>

        <div className="bg-background-sidebar-user w-full p-2 self-end rounded-sm flex gap-2">
          {SECTION_ITENS.map((item) => {
            const IconComponent = item.icon

            return (
              <div
                key={item.title}
                className="w-1/3 h-10 bg-icon-activate font-semibold rounded-sm text-center justify-center flex items-center bg gap-1"
              >
                <IconComponent className="w-3 h-3 text-base-text" />
                <Text as="span" className="text-[0.8rem] text-base-text">
                  {item.title}
                </Text>
              </div>
            )
          })}
        </div>
      </section>
      <main className="bg-background-sidebar-main/90  shadow-header rounded-2xl w-full h-full">
        <div className="p-3 w-full flex items-center justify-start gap-2">
          <div className="h-8 w-8 rounded-sm flex items-center justify-center bg-icon-activate p-1.5">
            <BadgeInfo className="text-white" />
          </div>
          <Text as="span" className="text-[1.2rem] font-bold">
            Informações Gerais
          </Text>
        </div>
        <form className="w-full p-3 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="md:grid md:grid-cols-[2fr_auto] flex flex-col gap-3">
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
            </div>

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
                  IconMain="chartColumnStacked"
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
                  className="cursor-not-allowed w-full disabled:text-base-primary"
                  disabled={true}
                />
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>

          <div className="bg-background-register/60 border border-border-register w-full p-3 rounded-sm">
            <ClothesForm />
          </div>

          <div className="h-px w-full bg-linear-to-r from-border-main/15 via-border-main to-border-main/15" />

          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex items-center group cursor-pointer justify-start w-full gap-2">
              <Trash2 className="group-hover:text-red-300 transition-colors duration-300 ease-in-out text-base-secondary h-4 w-4" />
              <Text
                as="span"
                className="text-base-secondary group-hover:text-red-300 transition-colors duration-300 ease-in-out"
              >
                Limpar Tudo
              </Text>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 h-12 rounded-md bg-blue-neon text-white font-semibold hover:bg-blue-neon/90 
             shadow-[0_0_20px_0px_rgba(0,112,255,0.7)] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_rgba(0,112,255,0.7)] cursor-pointer focus:outline-none"
            >
              <Text as="span">Cadastrar Produto</Text>
              <Rocket className="h-4 w-4" />
            </button>
          </div>
        </form>
      </main>
    </WrapperAlignMainPages>
  )
}
