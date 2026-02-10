export interface FormData {
  product: string
  store: string
  subcategory: string
  costPrice: number | undefined
  sellingPrice: number | undefined
  collor: string
  sizes: {
    size: string
    quantity: string
    minimumStock: string
    sku: string
  }[]
}
