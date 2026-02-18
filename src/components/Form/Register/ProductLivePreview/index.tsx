'use client'

import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { useProductFormData } from '@/hooks/useProductFormData'
import { cn } from '@/lib/utils'
import { Archive, Heart, RefreshCcw, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { ProductFormData } from '@/@schema/Form/product-form.schema'

const sizeOrder = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG', 'EXGG']

function sortSizes<T extends { size: string }>(sizes: T[]) {
  return [...sizes].sort((a, b) => {
    const indexA = sizeOrder.indexOf(a.size)
    const indexB = sizeOrder.indexOf(b.size)

    if (indexA === -1) return 1
    if (indexB === -1) return -1

    return indexA - indexB
  })
}

export function ProductLivePreview() {
  const {
    product,
    categoryLabel,
    statusLabel,
    variants,
    costPrice,
    salePrice,
  } = useProductFormData()

  // ✅ pega o File da imagem direto do RHF
  const { control } = useFormContext<ProductFormData>()
  const imageFile = useWatch({ control, name: 'image' })

  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!imageFile) {
      setImagePreviewUrl(null)
      return
    }

    const url = URL.createObjectURL(imageFile)
    setImagePreviewUrl(url)

    return () => URL.revokeObjectURL(url)
  }, [imageFile])

  const status = {
    Ativo: 'bg-green-neon/80 border-green-neon text-title-page',
    Inativo: 'bg-red-neon/80 border-red-neon text-title-page',
  } as const

  type StatusKey = keyof typeof status

  const statusClassName =
    statusLabel && status[statusLabel as StatusKey]
      ? status[statusLabel as StatusKey]
      : 'bg-gray-neon/80 border-gray-neon text-title-page'

  const validVariants =
    variants?.filter(
      (variant) =>
        variant.hexName && variant.sizes?.some((size) => size.size !== ''),
    ) || []

  function formatPrice(price: number) {
    if (!price) return 'R$ 0,00'

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const profit = costPrice && salePrice ? salePrice - costPrice : 0

  const profitPercentage =
    costPrice && salePrice && costPrice > 0
      ? ((profit / costPrice) * 100).toFixed(1)
      : '0'

  const hasPricing = costPrice && salePrice

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="eye"
        />
        <TextBase
          as="span"
          className="font-bold text-[1.2rem] text-title-section"
        >
          Pré-visualização
        </TextBase>
      </div>

      <section className="w-full h-fit border rounded-lg shrink-0 flex flex-col transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-gray-700 overflow-hidden">
        <div className="w-full h-60 rounded-t-lg bg-gray-100/5 flex-center relative group/image transition-colors duration-300 hover:bg-gray-100/10 shrink-0 overflow-hidden">
          {imagePreviewUrl ? (
            <Image
              src={imagePreviewUrl}
              alt="Imagem do produto"
              fill
              className="object-cover"
              priority={false}
            />
          ) : (
            <Archive className="w-10 h-10 text-gray-600 transition-all duration-300 group-hover/image:scale-110 group-hover/image:text-gray-500" />
          )}

          <TextBase
            as="span"
            className={cn(
              'text-[0.7em] font-bold px-2 py-0.5 border rounded-lg absolute top-2 right-2 z-10',
              statusClassName,
            )}
          >
            {statusLabel ? statusLabel : 'Aguardando'}
          </TextBase>
        </div>

        <div className="w-full gap-7 px-3 py-6 flex flex-col items-center bg-blue-900/5 flex-1 overflow-hidden">
          <div className="w-full flex justify-between gap-3 shrink-0">
            <div className="flex flex-col flex-1 min-w-0">
              <TextBase
                as="span"
                className="text-[0.8rem] text-blue-neon font-semibold"
              >
                {categoryLabel ? categoryLabel : 'Categoria'}
              </TextBase>
              <TextBase as="span" className="font-bold wrap-break-words">
                {product ? product : '-'}
              </TextBase>
            </div>
            <Heart className="w-5 h-5 text-red-500 fill-current cursor-pointer shrink-0 transition-all duration-300 hover:scale-125 active:scale-95" />
          </div>

          {hasPricing && (
            <div className="w-full grid grid-cols-3 gap-2 shrink-0">
              <div className="flex flex-col items-center justify-center p-3 bg-gray-100/5 rounded-lg border border-gray-800/50">
                <TextBase
                  as="span"
                  className="text-[0.65rem] text-gray-500 uppercase"
                >
                  Custo
                </TextBase>
                <TextBase
                  as="span"
                  className="text-[0.9rem] font-bold text-gray-300"
                >
                  {formatPrice(costPrice)}
                </TextBase>
              </div>

              <div className="flex flex-col items-center justify-center p-3 bg-blue-neon/5 rounded-lg border border-blue-neon/30">
                <TextBase
                  as="span"
                  className="text-[0.65rem] text-blue-neon uppercase"
                >
                  Venda
                </TextBase>
                <TextBase
                  as="span"
                  className="text-[0.9rem] font-bold text-blue-neon"
                >
                  {formatPrice(salePrice)}
                </TextBase>
              </div>

              <div
                className={cn(
                  'flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300',
                  profit >= 0
                    ? 'bg-green-neon/5 border-green-neon/30'
                    : 'bg-red-500/5 border-red-500/30',
                )}
              >
                <TextBase
                  as="span"
                  className={cn(
                    'text-[0.65rem] uppercase flex items-center gap-1',
                    profit >= 0 ? 'text-green-neon' : 'text-red-500',
                  )}
                >
                  <TrendingUp className="w-3 h-3" />
                  Lucro
                </TextBase>
                <TextBase
                  as="span"
                  className={cn(
                    'text-[0.9rem] font-bold',
                    profit >= 0 ? 'text-green-neon' : 'text-red-500',
                  )}
                >
                  {profitPercentage}%
                </TextBase>
              </div>
            </div>
          )}

          <div className="w-full flex flex-col gap-5 flex-1 overflow-y-auto">
            <div className="flex items-center gap-5 w-full shrink-0">
              <TextBase
                as="span"
                className="text-[0.8rem] whitespace-nowrap font-bold"
              >
                OPÇÕES DE GRADE
              </TextBase>
            </div>

            {validVariants.length > 0 ? (
              validVariants.map((items) => {
                const totalQuantity =
                  items?.sizes?.reduce((acc, cur) => {
                    return acc + (Number(cur.quantity) || 0)
                  }, 0) || 0

                const sortedSizes = sortSizes(items.sizes)

                return (
                  <div key={items.hexName} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
                          style={{
                            backgroundColor: items.hexName,
                            boxShadow: `0 0 10px ${items.hexName}60`,
                          }}
                        />
                        <TextBase
                          as="span"
                          className="text-gray-500 font-semibold"
                        >
                          {items?.colorName}
                        </TextBase>
                      </div>
                      <TextBase
                        as="span"
                        className="text-[0.8rem] bg-gray-100/5 px-2 rounded-full text-gray-500"
                      >
                        {totalQuantity} Uni
                      </TextBase>
                    </div>
                    <div className="flex items-center gap-1 flex-wrap">
                      {sortedSizes.map((size) =>
                        size.size ? (
                          <div
                            key={size.size}
                            className="w-7 items-center justify-center flex px-2 py-0.5 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
                            style={{
                              backgroundColor: `${items.hexName}1A`,
                              borderColor: items.hexName,
                            }}
                          >
                            <TextBase
                              as="span"
                              className="font-bold text-[0.6rem]"
                            >
                              {size.size}
                            </TextBase>
                          </div>
                        ) : null,
                      )}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="w-full flex flex-col items-center justify-center gap-3 py-8">
                <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-center">
                  <Archive className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <TextBase as="span" className="text-gray-500 font-semibold">
                    Nenhuma variante cadastrada
                  </TextBase>
                  <TextBase as="span" className="text-[0.75rem] text-gray-600">
                    Adicione cores e tamanhos para visualizar
                  </TextBase>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-10 bg-modal-background text-gray-600 border-t rounded-b-lg flex-center gap-2 group/footer transition-colors duration-300 shrink-0">
          <RefreshCcw className="w-3 h-3 transition-all duration-300 group-hover/footer:rotate-180 group-hover/footer:text-gray-400" />
          <TextBase
            as="span"
            className="text-[0.8rem] transition-colors duration-300 group-hover/footer:text-gray-400"
          >
            Atualizado em tempo real
          </TextBase>
        </div>
      </section>
    </div>
  )
}
