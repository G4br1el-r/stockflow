import { SizesType } from '@/@types/Form/Register/ProductDetailsForm/sizes.types'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { ProductCard } from '../ProductCard'

interface ProductVarianteGridProps {
  dataArraySize: SizesType[]
}

export function ProductVariantGrid({
  dataArraySize,
}: ProductVarianteGridProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="shirt"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Grade do Produto
        </TextBase>
      </div>

      <ProductCard dataArraySize={dataArraySize} />
    </div>
  )
}
