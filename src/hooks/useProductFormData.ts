// hooks/useProductFormData.ts
import { ProductFormData } from '@/@schema/Form/product-form.schema'
import { useFormContext, useWatch } from 'react-hook-form'

export function useProductFormData() {
  const { control } = useFormContext()
  return useWatch({ control }) as ProductFormData
}
