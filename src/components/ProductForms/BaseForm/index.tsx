import { InputComponent } from '@/components/Input'
import { Controller, useFormContext } from 'react-hook-form'

const CLOTHES_CATEGORIES = [
  {
    title: 'Parte Superior',
    slug: 'upper-body',
    subcategories: [
      { title: 'Camisetas', slug: 'tshirts' },
      { title: 'Camisas', slug: 'shirts' },
      { title: 'Blusas', slug: 'blouses' },
      { title: 'Regatas', slug: 'tank-tops' },
      { title: 'Polos', slug: 'polos' },
      { title: 'Moletons', slug: 'sweatshirts' },
      { title: 'Suéteres', slug: 'sweaters' },
      { title: 'Jaquetas', slug: 'jackets' },
      { title: 'Casacos', slug: 'coats' },
    ],
  },
  {
    title: 'Parte Inferior',
    slug: 'lower-body',
    subcategories: [
      { title: 'Calças', slug: 'pants' },
      { title: 'Shorts', slug: 'shorts' },
      { title: 'Bermudas', slug: 'bermudas' },
      { title: 'Saias', slug: 'skirts' },
      { title: 'Vestidos', slug: 'dresses' },
      { title: 'Macacões', slug: 'jumpsuits' },
      { title: 'Conjuntos', slug: 'sets' },
    ],
  },
]

const ACCESSORY_CATEGORIES = [
  {
    title: 'Cabeça',
    slug: 'head',
    subcategories: [
      { title: 'Bonés', slug: 'caps' },
      { title: 'Chapéus', slug: 'hats' },
      { title: 'Toucas', slug: 'beanies' },
      { title: 'Viseiras', slug: 'visors' },
    ],
  },
  {
    title: 'Pescoço e Cintura',
    slug: 'waist-neck',
    subcategories: [
      { title: 'Cintos', slug: 'belts' },
      { title: 'Gravatas', slug: 'ties' },
      { title: 'Lenços', slug: 'scarves' },
    ],
  },
  {
    title: 'Bolsas e Carteiras',
    slug: 'bags',
    subcategories: [
      { title: 'Mochilas', slug: 'backpacks' },
      { title: 'Bolsas', slug: 'bags' },
      { title: 'Carteiras', slug: 'wallets' },
      { title: 'Necessaires', slug: 'pouches' },
    ],
  },
  {
    title: 'Joias e Bijuterias',
    slug: 'jewelry',
    subcategories: [
      { title: 'Colares', slug: 'necklaces' },
      { title: 'Pulseiras', slug: 'bracelets' },
      { title: 'Anéis', slug: 'rings' },
      { title: 'Brincos', slug: 'earrings' },
      { title: 'Relógios', slug: 'watches' },
    ],
  },
  {
    title: 'Óculos',
    slug: 'eyewear',
    subcategories: [
      { title: 'Óculos de Sol', slug: 'sunglasses' },
      { title: 'Óculos de Grau', slug: 'eyeglasses' },
    ],
  },
]

const SHOES_CATEGORIES = [
  {
    title: 'Esportivos',
    slug: 'sports',
    subcategories: [
      { title: 'Corrida', slug: 'running' },
      { title: 'Academia', slug: 'gym' },
      { title: 'Futebol', slug: 'soccer' },
      { title: 'Basquete', slug: 'basketball' },
      { title: 'Skate', slug: 'skate' },
    ],
  },
  {
    title: 'Casuais',
    slug: 'casual',
    subcategories: [
      { title: 'Sneakers', slug: 'sneakers' },
      { title: 'Slip-on', slug: 'slip-on' },
      { title: 'Casual', slug: 'casual' },
    ],
  },
  {
    title: 'Formais',
    slug: 'formal',
    subcategories: [
      { title: 'Sociais', slug: 'dress-shoes' },
      { title: 'Mocassim', slug: 'loafers' },
      { title: 'Botas', slug: 'boots' },
    ],
  },
  {
    title: 'Sandálias',
    slug: 'sandals',
    subcategories: [
      { title: 'Chinelos', slug: 'flip-flops' },
      { title: 'Rasteiras', slug: 'slides' },
      { title: 'Papetes', slug: 'sandals' },
    ],
  },
]

export default function BaseForm() {
  const { register, control } = useFormContext()
  return (
    <>
      <InputComponent.root>
        <InputComponent.label
          htmlFor="product"
          text="Descrição do Produto"
          className="text-sm"
        />
        <InputComponent.wrapper>
          <InputComponent.inputBase
            id="product"
            placeholder="Camiseta Oversized"
            IconMain="shirt"
            {...register('product')}
          />
        </InputComponent.wrapper>
      </InputComponent.root>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
        <InputComponent.root>
          <InputComponent.label
            htmlFor="store"
            text="Selecione a loja"
            className="text-sm"
          />
          <InputComponent.wrapper>
            <Controller
              name="store"
              control={control}
              render={({ field }) => (
                <InputComponent.inputSelected
                  {...field}
                  onValueChange={field.onChange}
                  IconMain="store"
                  options={[
                    { value: 'loja1', label: 'Loja Centro' },
                    { value: 'loja2', label: 'Loja Shopping' },
                    { value: 'loja3', label: 'Loja Norte' },
                  ]}
                  placeholder="Selecione a unidade"
                />
              )}
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
            <Controller
              name="subcategory"
              control={control}
              render={({ field }) => (
                <InputComponent.inputSelected
                  {...field}
                  IconMain="chartColumnStacked"
                  onValueChange={field.onChange}
                  options={CLOTHES_CATEGORIES}
                  placeholder="Selecione a unidade"
                  hasTitleGroup
                />
              )}
            />
          </InputComponent.wrapper>
        </InputComponent.root>
      </div>
    </>
  )
}
