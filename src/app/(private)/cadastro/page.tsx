import RegisterProductsForm from '@/components/Form/Register'

const sizesMap = [
  { value: 'P', label: 'TAM P' },
  { value: 'M', label: 'TAM M' },
  { value: 'G', label: 'TAM G' },
  { value: 'GG', label: 'TAM GG' },
  { value: 'XG', label: 'TAM XG' },
]

const storeMap = [
  { value: 'mall', label: 'Loja Shopping' },
  { value: 'downtown', label: 'Loja Centro' },
  { value: 'north', label: 'Loja Zona Norte' },
]

const clothingGroupsMap = [
  {
    id: 'upper',
    label: 'Parte Superior',
    items: [
      { value: 'coat', label: 'Casaco' },
      { value: 'tshirt', label: 'Camiseta' },
      { value: 'shirt', label: 'Camisa' },
      { value: 'blouse', label: 'Blusa' },
      { value: 'sweater', label: 'Suéter' },
    ],
  },
  {
    id: 'lower',
    label: 'Parte Inferior',
    items: [
      { value: 'pants', label: 'Calça' },
      { value: 'shorts', label: 'Shorts' },
      { value: 'skirt', label: 'Saia' },
      { value: 'jeans', label: 'Jeans' },
    ],
  },
  {
    id: 'footwear',
    label: 'Calçados',
    items: [
      { value: 'sneakers', label: 'Tênis' },
      { value: 'shoes', label: 'Sapato' },
      { value: 'sandals', label: 'Sandália' },
      { value: 'boots', label: 'Bota' },
    ],
  },
  {
    id: 'accessories',
    label: 'Acessórios',
    items: [
      { value: 'hat', label: 'Chapéu' },
      { value: 'belt', label: 'Cinto' },
      { value: 'scarf', label: 'Cachecol' },
      { value: 'bag', label: 'Bolsa' },
    ],
  },
]

export default function Cadastro() {
  // FAZER OS FETCH INICIAIS
  return (
    <RegisterProductsForm
      dataArrayCategory={clothingGroupsMap}
      dataArraySize={storeMap}
      dataArrayStore={sizesMap}
    />
  )
}
