'use client'
import { InputComponent } from '@/components/Input'
import ClothesForm from '@/components/ProductForms/ClothesForm'
import ShoesForm from '@/components/ProductForms/ShoesForm'
import { Text } from '@/components/Text'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { cn } from '@/lib/utils'
import {
  BadgeInfo,
  BadgePlus,
  Banknote,
  Footprints,
  Gem,
  Package,
  Rocket,
  Shirt,
  Trash2,
} from 'lucide-react'
import { useState } from 'react'

export default function Register() {
  const SECTION_ITENS = [
    { title: 'Roupas', slug: 'clothes', icon: Shirt },
    { title: 'Sapatos', slug: 'shoes', icon: Footprints },
    { title: 'Acessórios', slug: 'acessory', icon: Gem },
  ]
  const [activeSection, setActiveSection] = useState('clothes')
  console.log(activeSection)

  return (
    <WrapperAlignMainPages className="flex flex-col gap-6 items-center">
      <section className="w-full flex flex-col gap-6 md:grid md:grid-cols-2">
        <div className="flex flex-col w-full justify-start items-center gap-2">
          <div className="flex w-full items-center justify-start gap-2 text-icon-activate">
            <BadgePlus className="w-5 h-5" />
            <Text as="h5" className="font-semibold">
              ADICIONAR NOVO PRODUTO
            </Text>
          </div>
          <div className="flex w-full items-center justify-start flex-col gap-2">
            <Text as="h1" className="text-4xl w-full text-variant-secondary">
              Cadastro de Produtos
            </Text>
            <Text
              as="p"
              className="text-base-primary hidden lg:block w-full leading-5 text-sm"
            >
              Cadastre seus produtos de forma prática e rápida.
            </Text>
          </div>
        </div>

        <div className="bg-background-sidebar-user max-w-125 w-full p-2 justify-self-end self-end rounded-sm flex gap-2">
          {SECTION_ITENS.map((item) => {
            const IconComponent = item.icon

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveSection(item.slug)}
                className={cn(
                  'w-1/3 h-10 cursor-pointer font-bold rounded-sm text-center justify-center flex items-center bg gap-1',
                  activeSection === item.slug
                    ? 'bg-icon-activate text-variant-primary dark:text-variant-secondary'
                    : 'bg-transparent text-variant-secondary',
                )}
              >
                <IconComponent className="w-3 h-3 " />
                <Text as="span" className={'text-[0.8rem] '}>
                  {item.title}
                </Text>
              </button>
            )
          })}
        </div>
      </section>

      <main className="bg-background-sidebar-main/90  shadow-header rounded-2xl w-full h-full justify-between items-center flex flex-col">
        <div className="p-3 w-full flex items-center gap-2">
          <div className="h-8 w-8 rounded-sm flex items-center justify-center bg-icon-activate/30 border-icon-activate border p-1.5">
            <BadgeInfo className="text-icon-activate" />
          </div>

          <Text as="span" className="text-[1.2rem] font-bold whitespace-nowrap">
            Informações Gerais
          </Text>

          <div className="flex-1 mx-5 lg:mx-30 h-px bg-linear-to-r from-border-main/10 via-border-main to-border-main/10" />
        </div>

        <form className="w-full p-3 flex flex-col flex-1 gap-10">
          <div className="flex flex-col flex-1 justify-around gap-5">
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

            <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
              <InputComponent.root>
                <InputComponent.label
                  htmlFor="store"
                  text="Selecione a loja"
                  className="text-sm"
                />
                <InputComponent.wrapper>
                  <InputComponent.inputSelected
                    name="store"
                    IconMain="store"
                    options={[
                      { value: 'loja1', label: 'Loja Centro' },
                      { value: 'loja2', label: 'Loja Shopping' },
                      { value: 'loja3', label: 'Loja Norte' },
                    ]}
                    placeholder="Selecione a unidade"
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
            </div>

            <div className="flex flex-col gap-5 xl:gap-10 xl:grid xl:grid-cols-2">
              <div>
                <div className="my-5 w-full flex items-center gap-2">
                  <div className="h-8 w-8 rounded-sm border border-base-orange flex items-center justify-center bg-base-orange/30 p-1.5">
                    <Package className="text-base-orange" />
                  </div>

                  <Text
                    as="span"
                    className="text-[1.2rem] font-bold whitespace-nowrap"
                  >
                    Estoque
                  </Text>

                  <div className="flex-1 mx-5 lg:mx-30 h-px bg-linear-to-r from-border-main/10 via-border-main to-border-main/10" />
                </div>

                <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
                  <InputComponent.root>
                    <InputComponent.label
                      htmlFor="sku"
                      className="text-sm"
                      text="SKU"
                    />
                    <InputComponent.wrapper className="bg-variant-primary">
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
                        name="minimumStock"
                        placeholder="0"
                        type="tel"
                        inputMode="numeric"
                        isOnlyNumeric={true}
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>
                </div>
              </div>

              <div>
                <div className="my-5 w-full flex items-center gap-2">
                  <div className="h-8 w-8 rounded-sm border border-base-green flex items-center justify-center bg-base-green/30 p-1.5">
                    <Banknote className="text-base-green" />
                  </div>

                  <Text
                    as="span"
                    className="text-[1.2rem] font-bold whitespace-nowrap"
                  >
                    Financeiro e Precificação
                  </Text>

                  <div className="flex-1 mx-5 lg:mx-30 h-px bg-linear-to-r from-border-main/10 via-border-main to-border-main/10" />
                </div>

                <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
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

                  <InputComponent.root>
                    <InputComponent.label
                      htmlFor="profitMargin"
                      className="text-sm"
                      text="Lucro Bruto"
                    />
                    <InputComponent.wrapper className="bg-variant-primary">
                      <InputComponent.inputBase
                        id="profitMargin"
                        name="profitMargin"
                        placeholder="Margem de Lucro"
                        className="cursor-not-allowed w-full disabled:text-base-primary"
                        disabled={true}
                        IconMain="banknoteArrowUp"
                      />
                    </InputComponent.wrapper>
                  </InputComponent.root>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-register/60 border border-border-register w-full p-3 rounded-sm">
            {activeSection === 'clothes' && <ClothesForm key="clothes" />}
            {activeSection === 'shoes' && <ShoesForm key="shoes" />}
            {/* {activeSection === 'acessory' && <AcessoryForm key="acessory" />} */}
          </div>

          <div className="flex flex-col extrasm:flex-row items-start justify-center gap-5 extrasm:items-center extrasm:justify-between">
            <div className="flex group items-center self-start justify-center md:self-end cursor-pointer gap-2">
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
              className="w-full md:max-w-75 flex items-center justify-center gap-2 h-12 rounded-4xl bg-blue-neon text-white font-semibold hover:bg-blue-neon/90 
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
