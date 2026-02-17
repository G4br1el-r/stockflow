// hooks/useProductFormData.ts
import { useFormContext, useWatch } from 'react-hook-form'
import { ProductFormData } from '@/@types/Form/Register/ProductDetailsForm/product-form.types'

export function useProductFormData() {
  const { control } = useFormContext()
  return useWatch({ control }) as ProductFormData
}
