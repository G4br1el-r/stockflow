import { CategoryTypes } from '@/@types/Form/Register/ProductDetailsForm/category.types'
import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'
import { StoreType } from '@/@types/Form/Register/ProductDetailsForm/story.types'
import { ProductDetails } from '@/components/Form/Register/ProductDetails'
import { ProductFormActions } from '@/components/Form/Register/ProductFormActions'
import { ProductFormHeader } from '@/components/Form/Register/ProductFormHeader'
import { ProductLivePreview } from '@/components/Form/Register/ProductLivePreview'
import { ProductPricing } from '@/components/Form/Register/ProductPricing'
import { ProductVariantGrid } from '@/components/Form/Register/ProductVariantGrid'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'

interface RegisterProductsFormProps {
  dataArrayCategory: CategoryTypes[]
  dataArrayStore: StoreType[]
  dataArraySize: SizesType[]
}

export default function RegisterProductsForm({
  dataArrayCategory,
  dataArrayStore,
  dataArraySize,
}: RegisterProductsFormProps) {
  return (
    <WrapperAlignMainPages classNameWrapper="gap-10">
      <ProductFormHeader />
      <main className="w-full h-full flex flex-col">
        <form className="flex pb-5 flex-col gap-5 w-full h-full">
          <ProductDetails
            dataArrayCategory={dataArrayCategory}
            dataArrayStore={dataArrayStore}
          />
          <ProductPricing />
          <ProductVariantGrid dataArraySize={dataArraySize} />
          <ProductLivePreview />
          <ProductFormActions />
        </form>
      </main>
    </WrapperAlignMainPages>
  )
}
