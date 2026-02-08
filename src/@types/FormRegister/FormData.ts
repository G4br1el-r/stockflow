export interface FormData {
  product: string
  store: string
  subcategory: string
  costPrice: number | undefined
  sellingPrice: number | undefined
  sizes: {
    size: string
    collor: string
    quantity: string
    minimumStock: string
    sku: string
  }[]
}
