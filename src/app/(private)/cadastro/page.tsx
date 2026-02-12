import { InputComponent } from '@/components/Input'
import { InputImage } from '@/components/Input/InputImage'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import {
  CircleFadingPlus,
  Trash2,
  CirclePlus,
  Palette,
  Archive,
  Heart,
  RefreshCcw,
  Rocket,
} from 'lucide-react'

const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG']

const storeMap = [
  { value: 'mall', label: 'Loja Shopping' },
  { value: 'downtown', label: 'Loja Centro' },
  { value: 'north', label: 'Loja Zona Norte' },
]

const collorMap = [
  { value: '#000000', label: 'Preto' },
  { value: '#FFFFFF', label: 'Branco' },
  { value: '#808080', label: 'Cinza' },
  { value: '#F5F5DC', label: 'Bege' },
  { value: '#8B4513', label: 'Marrom' },
  { value: '#0000FF', label: 'Azul' },
  { value: '#FF0000', label: 'Vermelho' },
  { value: '#008000', label: 'Verde' },
  { value: '#FFFF00', label: 'Amarelo' },
  { value: '#FFA500', label: 'Laranja' },
  { value: '#FFC0CB', label: 'Rosa' },
  { value: '#800080', label: 'Roxo' },
  { value: '#FFD700', label: 'Dourado' },
  { value: '#C0C0C0', label: 'Prata' },
  { value: '#00FFFF', label: 'Ciano' },
  { value: '#FF00FF', label: 'Magenta' },
  { value: '#40E0D0', label: 'Turquesa' },
  { value: '#000080', label: 'Azul Marinho' },
  { value: '#800000', label: 'Vinho' },
  { value: '#EE82EE', label: 'Violeta' },
  { value: '#F0E68C', label: 'Creme' },
  { value: '#DEB887', label: 'Caramelo' },
  { value: '#FF6347', label: 'Coral' },
  { value: '#4B0082', label: 'Índigo' },
]

export default function RegisterProducts() {
  return (
    <WrapperAlignMainPages classNameWrapper="gap-10">
      <div className="w-full h-full flex flex-col gap-2">
        <div className="flex gap-2 items-center text-blue-neon">
          <CircleFadingPlus className="h-5 w-5" />
          <TextBase as="span" className="text-[0.8rem] font-bold">
            ADICIONAR NOVO PRODUTO
          </TextBase>
        </div>
        <div>
          <TextBase as="h1">Novo Produto</TextBase>
          <TextBase as="span" className="text-[0.8rem]">
            Cadastre seus produtos de forma prática e rápida.
          </TextBase>
        </div>
      </div>
      <main className="w-full h-full flex flex-col">
        <form className="flex pb-5 flex-col gap-5 w-full h-full">
          <div className="w-full h-full flex items-center gap-3">
            <SectionHeader
              classNameBackGround="bg-blue-neon/20 border-blue-neon"
              classNameIcon="text-blue-neon"
              iconName="filePlus"
            />
            <TextBase as="span" className="font-bold">
              Informações Gerais
            </TextBase>
          </div>

          <div className="flex flex-col gap-5">
            <InputComponent.root>
              <InputComponent.label label="Nome do Produto" />
              <InputComponent.wrapper iconName="pencil">
                <InputComponent.inputBase placeHolder="Camiseta Oversized" />
              </InputComponent.wrapper>
            </InputComponent.root>

            <div className="flex flex-col gap-5">
              <InputComponent.root>
                <InputComponent.label label="Loja" />
                <InputComponent.wrapper iconName="store">
                  <InputComponent.inputSelectedBasic
                    DataArray={storeMap}
                    placeHolder="Selecione um Produto"
                  />
                </InputComponent.wrapper>
              </InputComponent.root>

              <InputComponent.root>
                <InputComponent.label label="Categoria" />
                <InputComponent.wrapper iconName="category">
                  <InputComponent.inputSelectedGroup />
                </InputComponent.wrapper>
              </InputComponent.root>
            </div>
          </div>

          <SectionDivider />
          <InputImage />
          <SectionDivider />

          <div className=" w-full h-full flex items-center gap-3">
            <SectionHeader
              classNameBackGround="bg-green-neon/20 border-green-neon"
              classNameIcon="text-green-neon"
              iconName="banknote"
            />
            <TextBase as="span" className="font-bold">
              Financeiro e Preficiação
            </TextBase>
          </div>

          <div className="flex flex-col gap-5">
            <InputComponent.root>
              <InputComponent.label label="Preço Custo" />
              <InputComponent.wrapper iconName="bankNoteArrowDown">
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>

            <InputComponent.root>
              <InputComponent.label label="Preço Venda" />
              <InputComponent.wrapper iconName="banknoteArrowUp">
                <InputComponent.inputMoney />
              </InputComponent.wrapper>
            </InputComponent.root>

            <InputComponent.root>
              <InputComponent.wrapper
                iconName="piggyBank"
                classNameWrapper="border-dashed bg-green-100/20 justify-between"
                classNameIcon="text-green-neon"
              >
                <TextBase
                  as="span"
                  className="text-green-neon w-full whitespace-nowrap"
                >
                  Margem Calculada
                </TextBase>
                <TextBase as="span" className="text-green-neon">
                  20%
                </TextBase>
              </InputComponent.wrapper>
            </InputComponent.root>

            <InputComponent.root>
              <InputComponent.wrapper
                iconName="noIcon"
                classNameWrapper="bg-green-100/20 flex-col h-full items-center justify-center gap-1 "
                classNameIcon="text-green-neon"
              >
                <TextBase
                  as="span"
                  className="text-green-neon whitespace-nowrap"
                >
                  Lucro Líquido
                </TextBase>
                <TextBase
                  as="span"
                  className="text-green-neon whitespace-nowrap"
                >
                  R$ 73,85
                </TextBase>
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>

          <SectionDivider />

          <div className="flex items-center gap-3">
            <SectionHeader
              classNameBackGround="bg-blue-neon/20 border-blue-neon"
              classNameIcon="text-blue-neon"
              iconName="shirt"
            />
            <TextBase as="span" className="font-bold">
              Grade do Produto
            </TextBase>
          </div>

          <section className="w-full bg-gray-950/30 border-2 border-blue-neon/20 rounded-2xl flex flex-col">
            <div className="w-full h-20 p-3 flex items-center justify-between bg-blue-neon/5 rounded-t-2xl border-b-2 border-blue-neon/20">
              <div className="flex-center gap-3">
                <div className="bg-blue-neon h-8 w-8 rounded-sm" />
                <TextBase as="span">Azul Neon</TextBase>
              </div>
              <Trash2 className="w-4 h-4" />
            </div>

            <div className="w-full h-full p-3 flex flex-col gap-3">
              <InputComponent.root>
                <InputComponent.label label="Estoque Mínimo" />
                <InputComponent.wrapper
                  iconName="stock"
                  classNameWrapper="bg-gray-950 rounded-sm flex-1 text-center"
                >
                  <InputComponent.inputBase />
                </InputComponent.wrapper>
              </InputComponent.root>

              <div className="flex items-center justify-between">
                <TextBase as="span" className="text-[0.8rem]">
                  TAMANHOS & QUANTIDADES
                </TextBase>
                <div className="bg-blue-neon/20 px-2 py-1 flex-center rounded-sm border border-blue-neon/50">
                  <TextBase as="span" className="text-[0.7rem] text-blue-neon">
                    Total: 55
                  </TextBase>
                </div>
              </div>
              <div className="w-full h-full grid grid-cols-3 gap-3">
                <div className="w-full h-25 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <TextBase as="span" className="text-[0.9rem]">
                    TAM P
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-gray-700 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full h-25 bg-gray-950/70 border rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <TextBase as="span" className="text-[0.9rem]">
                    TAM M
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-gray-700 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full h-25 bg-gray-950/70 border rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <TextBase as="span" className="text-[0.9rem]">
                    TAM G
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-gray-700 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full h-25 bg-blue-neon/10 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5 border overflow-hidden border-blue-neon relative">
                  <div className="bg-blue-neon w-5 h-5 rounded-full absolute -top-1.5 -right-1.5" />
                  <TextBase as="span" className="text-[0.9rem] font-bold">
                    TAM GG
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-blue-neon/80 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-blue-neon rounded-full" />
                </div>
                <div className="w-full h-25 bg-gray-950/30 rounded-lg flex flex-col justify-center items-center p-3 gap-1.5 border-dashed border-2">
                  <CirclePlus className="text-gray-600" />
                  <TextBase as="span" className="text-[0.9rem] text-gray-600">
                    Adicionar
                  </TextBase>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-gray-950/30 border-2 border-red-500/20 rounded-2xl flex flex-col">
            <div className="w-full h-20 p-3 flex items-center justify-between bg-red-500/5 rounded-t-2xl border-b-2 border-red-500/20">
              <div className="flex-center gap-3">
                <div className="bg-red-500 h-8 w-8 rounded-sm" />
                <TextBase as="span">Vermelho Vívido</TextBase>
              </div>
              <Trash2 className="w-4 h-4" />
            </div>

            <div className="w-full h-full p-3 flex flex-col gap-3">
              <InputComponent.root>
                <InputComponent.label label="Estoque Mínimo" />
                <InputComponent.wrapper
                  iconName="stock"
                  classNameWrapper="bg-gray-950 rounded-sm flex-1 text-center"
                >
                  <InputComponent.inputBase />
                </InputComponent.wrapper>
              </InputComponent.root>

              <div className="flex items-center justify-between">
                <TextBase as="span" className="text-[0.8rem]">
                  TAMANHOS & QUANTIDADES
                </TextBase>
                <div className="bg-red-500/20 px-2 py-1 flex-center rounded-sm border border-red-500/50">
                  <TextBase as="span" className="text-[0.7rem] text-red-500">
                    Total: 55
                  </TextBase>
                </div>
              </div>
              <div className="w-full h-full grid grid-cols-3 gap-3">
                <div className="w-full h-25 border bg-gray-950/70 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <TextBase as="span" className="text-[0.9rem]">
                    TAM P
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-gray-700 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-red-500 rounded-full" />
                </div>
                <div className="w-full h-25 bg-gray-950/70 border rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <TextBase as="span" className="text-[0.9rem]">
                    TAM M
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-gray-700 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-red-500 rounded-full" />
                </div>
                <div className="w-full h-25 bg-gray-950/70 border rounded-lg flex flex-col justify-between items-center p-3 gap-1.5">
                  <TextBase as="span" className="text-[0.9rem]">
                    TAM G
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-gray-700 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-red-500 rounded-full" />
                </div>
                <div className="w-full h-25 bg-red-500/10 rounded-lg flex flex-col justify-between items-center p-3 gap-1.5 border overflow-hidden border-red-500 relative">
                  <div className="bg-red-500 w-5 h-5 rounded-full absolute -top-1.5 -right-1.5" />
                  <TextBase as="span" className="text-[0.9rem] font-bold">
                    TAM GG
                  </TextBase>
                  <InputComponent.inputBase className="w-full h-5 bg-gray-950 border border-red-500/80 rounded-sm flex-1 text-center" />
                  <div className="w-full h-1 bg-red-500 rounded-full" />
                </div>
                <div className="w-full h-25 bg-gray-950/30 rounded-lg flex flex-col justify-center items-center p-3 gap-1.5 border-dashed border-2">
                  <CirclePlus className="text-gray-600" />
                  <TextBase as="span" className="text-[0.9rem] text-gray-600">
                    Adicionar
                  </TextBase>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-15 shrink-0 rounded-lg bg-gray-950/30 border-2 border-dashed flex-center gap-3">
            <Palette className="w-5 h-5 text-gray-600" />
            <TextBase as="span" className="text-gray-600">
              Nova Variante de Cor
            </TextBase>
          </div>

          <div className="flex items-center gap-3">
            <SectionHeader
              classNameBackGround="bg-blue-neon/20 border-blue-neon"
              classNameIcon="text-blue-neon"
              iconName="eye"
            />
            <TextBase as="span" className="font-bold">
              Live Preview
            </TextBase>
          </div>

          <section className="w-full h-120 border rounded-lg shrink-0 flex flex-col">
            <div className="w-full h-70 rounded-t-lg bg-gray-100/5 flex-center relative">
              <Archive className="w-10 h-10 text-gray-600" />
              <TextBase
                as="span"
                className="text-[0.6em] px-2 py-0.5 bg-gray-600/90 border border-gray-600 rounded-lg absolute top-2 right-2"
              >
                NOVO
              </TextBase>
            </div>
            <div className="w-full flex-1 gap-7 p-3 flex flex-col items-center bg-blue-900/5">
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <TextBase
                    as="span"
                    className="text-[0.8rem] text-blue-neon font-semibold"
                  >
                    CAMISETAS
                  </TextBase>
                  <TextBase as="span" className="font-bold">
                    Camiseta Oversized Nike
                  </TextBase>
                </div>
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex items-center gap-5 w-full">
                  <TextBase
                    as="span"
                    className="text-[0.8rem] whitespace-nowrap"
                  >
                    OPÇÕES DE GRADE
                  </TextBase>
                  <SectionDivider />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-neon" />
                      <TextBase
                        as="span"
                        className="text-gray-500 font-semibold"
                      >
                        Azul Neon
                      </TextBase>
                    </div>
                    <TextBase
                      as="span"
                      className="text-[0.8rem] bg-gray-100/5 px-2 rounded-full text-gray-500"
                    >
                      45 Uni
                    </TextBase>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                      <TextBase as="span" className="font-bold text-[0.6rem]">
                        P
                      </TextBase>
                    </div>
                    <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                      <TextBase as="span" className="font-bold text-[0.6rem]">
                        M
                      </TextBase>
                    </div>
                    <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                      <TextBase as="span" className="font-bold text-[0.6rem]">
                        G
                      </TextBase>
                    </div>
                    <div className=" bg-blue-neon/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-blue-neon border">
                      <TextBase as="span" className="font-bold text-[0.6rem]">
                        GG
                      </TextBase>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <TextBase
                        as="span"
                        className="text-gray-500 font-semibold"
                      >
                        Vermelho Vívido
                      </TextBase>
                    </div>
                    <TextBase
                      as="span"
                      className="text-[0.8rem] bg-gray-100/5 px-2 rounded-full text-gray-500"
                    >
                      20 Uni
                    </TextBase>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className=" bg-red-500/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-red-500/60 border">
                      <TextBase as="span" className="font-bold text-[0.6rem]">
                        P
                      </TextBase>
                    </div>
                    <div className=" bg-red-500/10 w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border-red-500/60 border">
                      <TextBase as="span" className="font-bold text-[0.6rem]">
                        G
                      </TextBase>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-10 bg-gray-950/50 text-gray-600 border-t rounded-b-lg flex-center gap-2">
              <RefreshCcw className="w-3 h-3" />
              <TextBase as="span" className="text-[0.8rem]">
                Atualizado em tempo real
              </TextBase>
            </div>
          </section>

          <section className="flex flex-col w-full gap-5">
            <button type="button" className="flex items-center gap-1">
              <Trash2 className="w-3.5 h-3.5" />
              <TextBase as="span">Limpar</TextBase>
            </button>
            <button
              type="submit"
              className="w-full h-12 bg-blue-neon flex-center rounded-lg gap-2"
            >
              <TextBase as="span">Cadastrar Produto</TextBase>
              <Rocket className="w-4 h-4" />
            </button>
          </section>
        </form>
      </main>
    </WrapperAlignMainPages>
  )
}
