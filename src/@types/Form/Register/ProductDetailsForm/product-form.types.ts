export interface ProductFormData {
  product: string
  store: string
  storeLabel: ''
  category: ''
  categoryLabel: ''
  status: ''
  statusLabel: ''
  costPrice: string
  salePrice: string
  variants: Variant[]
}

interface Variant {
  colorName: string
  hexName: string
  minimumStock: string
  sizes: Size[]
}

interface Size {
  size: string
  quantity: string
}
