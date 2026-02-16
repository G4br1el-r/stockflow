'use client'

import { useRef, useEffect } from 'react'
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
import { FormProvider, useForm } from 'react-hook-form'

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
  const formRef = useRef<HTMLFormElement>(null)

  const methodsProduct = useForm({
    defaultValues: {
      product: '',
      store: '',
      category: '',
      status: '',
      costPrice: '',
      salePrice: '',
      variants: [
        {
          color: '',
          minimumStock: '',
          sizes: [{ size: '', quantity: '' }],
        },
      ],
    },
  })

  function handleFormSubmit(data: any) {
    console.log(data)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll reset intencional na mudança de breakpoint
  useEffect(() => {
    formRef.current?.scrollTo({ top: 0 })

    let parent = formRef.current?.parentElement
    while (parent) {
      if (parent.scrollTop > 0) {
        parent.scrollTo({ top: 0 })
      }
      parent = parent.parentElement
    }
  }, [isMobile])

  return (
    <WrapperAlignMainPages classNameWrapper="gap-5 extrasm:max-w-125 extrasm:mx-auto extramd:max-w-full xl:gap-0 xl:p-0 lg:max-w-250 xl:max-w-full">
      <ProductFormHeader />

      <main className="w-full h-full flex flex-col xl:grid xl:grid-cols-[1fr_400px]">
        <FormProvider {...methodsProduct}>
          <form
            id="product-form"
            onSubmit={methodsProduct.handleSubmit(handleFormSubmit)}
            ref={formRef}
            className="custom-scrollbar flex pb-5 flex-col gap-10 w-full xl:h-[calc(100vh-109.6px)] xl:overflow-y-auto xl:py-15 xl:px-20"
          >
            <TextBase
              as="span"
              className="text-[1.2rem] font-semibold hidden xl:block w-3/4 text-gray-600"
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
          {!isMobile && <ProductSidebarPreview idForm="product-form" />}
        </FormProvider>
      </main>
    </WrapperAlignMainPages>
  )
}
