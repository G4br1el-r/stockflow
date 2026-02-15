'use client'

import { CategoryTypes } from '@/@types/Form/Register/ProductDetailsForm/category.types'
import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'
import { StoreType } from '@/@types/Form/Register/ProductDetailsForm/story.types'
import { ProductDetails } from '@/components/Form/Register/ProductDetails'
import { ProductFormActions } from '@/components/Form/Register/ProductFormActions'
import { ProductFormHeader } from '@/components/Form/Register/ProductFormHeader'
import { ProductLivePreview } from '@/components/Form/Register/ProductLivePreview'
import { ProductPricing } from '@/components/Form/Register/ProductPricing'
import { ProductVariantGrid } from '@/components/Form/Register/ProductVariantGrid'
import { TextBase } from '@/components/TextBase'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { useIsMobile } from '@/hooks/useIsMobile'
import { ProductSidebarPreview } from './ProductSidebarPreview'

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
  const isMobile = useIsMobile(1280)

  return (
    <WrapperAlignMainPages classNameWrapper="gap-5 extrasm:max-w-125 extrasm:mx-auto extramd:max-w-full xl:gap-0 xl:p-0 lg:max-w-250 xl:max-w-full">
      <ProductFormHeader />

      <main className="w-full h-full flex flex-col xl:grid xl:grid-cols-[1fr_400px]">
        <form className="custom-scrollbar flex pb-5 flex-col gap-10 w-full xl:h-[calc(100vh-109.6px)] xl:max-h-full xl:overflow-y-auto xl:py-15 xl:px-20 2xl:px-50">
          <TextBase
            as="span"
            className="text-[1.2rem] hidden xl:block w-2/3 text-gray-600"
          >
            Cadastre seus produtos de forma prática e rápida. Preencha as
            informações essenciais e organize seu catálogo em minutos
          </TextBase>
          <div className="w-full flex flex-col gap-20">
            <ProductDetails
              dataArrayCategory={dataArrayCategory}
              dataArrayStore={dataArrayStore}
            />
            <ProductPricing />
            <ProductVariantGrid dataArraySize={dataArraySize} />
            {isMobile && <ProductFormActions />}
          </div>
        </form>
        {!isMobile && <ProductSidebarPreview />}
      </main>
    </WrapperAlignMainPages>
  )
}
