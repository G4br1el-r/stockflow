import { InputComponent } from '@/components/Input'
import { InputImage } from '@/components/Input/InputImage'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { CircleFadingPlus, Trash2 } from 'lucide-react'

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
      <main className="w-full h-full flex flex-col gap-5">
        <section className="flex pb-20 flex-col gap-5 w-full h-full">
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

          <div className="w-full px-4 bg-blue-950/40 rounded-sm flex flex-col gap-3.5">
            <InputComponent.root className="pt-3.5 w-full flex-row items-center gap-5">
              <div className="flex items-center justify-between flex-row gap-3 w-full h-10 border border-gray-400 bg-gray-950/80 px-3 py-1 rounded-lg">
                <div className="w-4 h-4 shrink-0 bg-blue-neon rounded-full " />
                <InputComponent.inputSelectedBasic
                  placeHolder="Cor"
                  DataArray={collorMap}
                />
              </div>
              <Trash2 className="h-5 w-5 shrink-0" />
            </InputComponent.root>
            <SectionDivider />
            <div className="flex items-center justify-between gap-3">
              <InputComponent.root className="w-full">
                <InputComponent.label label="Estoque Minimo" />
                <InputComponent.wrapper
                  iconName="blocks"
                  classNameWrapper="flex items-center justify-between flex-row gap-3 w-full h-10 border border-gray-400 bg-gray-950/80 px-3 rounded-lg"
                >
                  <InputComponent.inputBase placeHolder="0" />
                </InputComponent.wrapper>
              </InputComponent.root>

              <InputComponent.root className="w-full">
                <InputComponent.label label="Localização" />
                <InputComponent.wrapper
                  iconName="blocks"
                  classNameWrapper="flex items-center justify-between flex-row gap-3 w-full h-10 border border-gray-400 bg-gray-950/80 px-3 rounded-lg"
                >
                  <InputComponent.inputBase placeHolder="0" />
                </InputComponent.wrapper>
              </InputComponent.root>
            </div>
          </div>
        </section>
      </main>
    </WrapperAlignMainPages>
  )
}
