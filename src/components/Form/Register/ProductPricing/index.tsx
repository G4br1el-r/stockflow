import { InputComponent } from '@/components/Input'
import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { useProductFormData } from '@/hooks/useProductFormData'
import { cn } from '@/lib/utils'
import { useFormContext } from 'react-hook-form'

export function ProductPricing() {
  const { costPrice, salePrice } = useProductFormData()
  const {
    formState: { errors },
  } = useFormContext()

  const profit =
    costPrice && salePrice ? parseFloat(salePrice) - parseFloat(costPrice) : 0

  const profitMargin =
    costPrice && salePrice && parseFloat(salePrice) > 0
      ? (
          ((parseFloat(salePrice) - parseFloat(costPrice)) /
            parseFloat(salePrice)) *
          100
        ).toFixed(1)
      : '0.0'

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const isNegative = profit < 0

  return (
    <div className="flex flex-col gap-5">
      <div className=" w-full h-full flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-green-neon/20 border-green-neon"
          classNameIcon="text-green-neon"
          iconName="banknote"
        />
        <TextBase
          as="span"
          className="font-bold text-[1.2rem] text-title-section"
        >
          Financeiro e Preficiação
        </TextBase>
      </div>

      <div className="flex flex-col gap-5">
        <div className="extrasm:grid extrasm:grid-cols-2 extrasm:gap-5 flex flex-col gap-5">
          <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.label label="Preço Custo" htmlFor="costPrice" />
              <InputComponent.wrapper
                iconName="bankNoteArrowDown"
                classNameWrapper={cn(errors.costPrice && 'border-red-500')}
              >
                <InputComponent.inputMoney id="costPrice" name="costPrice" />
              </InputComponent.wrapper>
              {errors.costPrice && (
                <TextBase as="span" className="text-red-500 text-sm mt-1">
                  {errors.costPrice.message as string}
                </TextBase>
              )}
            </InputComponent.root>
          </div>

          <div className="group/input transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.label label="Preço Venda" htmlFor="salePrice" />
              <InputComponent.wrapper
                iconName="banknoteArrowUp"
                classNameWrapper={cn(errors.costPrice && 'border-red-500')}
              >
                <InputComponent.inputMoney id="salePrice" name="salePrice" />
              </InputComponent.wrapper>
              {errors.salePrice && (
                <TextBase as="span" className="text-red-500 text-sm mt-1">
                  {errors.salePrice.message as string}
                </TextBase>
              )}
            </InputComponent.root>
          </div>
        </div>

        <div className="flex flex-col gap-5 extrasm:grid extrasm:grid-cols-2">
          <div className="group/calc transition-all duration-300 hover:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.wrapper
                iconName="chartNoAxesCombined"
                classNameWrapper={`border-dashed justify-between h-full transition-all duration-300 group-hover/calc:shadow-[0_2px_12px_rgba(0,0,0,0.3)] ${
                  isNegative
                    ? 'bg-red-100/20 group-hover/calc:bg-red-100/30 group-hover/calc:border-red-500/30'
                    : 'bg-green-100/20 group-hover/calc:bg-green-100/30 group-hover/calc:border-green-neon/30'
                }`}
                classNameIcon={isNegative ? 'text-red-500' : 'text-green-neon'}
              >
                <TextBase
                  as="span"
                  className={`w-full ${isNegative ? 'text-red-500' : 'text-green-neon'}`}
                >
                  Margem de Lucro
                </TextBase>
                <TextBase
                  as="span"
                  className={isNegative ? 'text-red-500' : 'text-green-neon'}
                >
                  {profitMargin}%
                </TextBase>
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>

          <div className="group/profit transition-all duration-300 hover:-translate-y-0.5">
            <InputComponent.root>
              <InputComponent.wrapper
                iconName="piggyBank"
                classNameWrapper={`border-dashed justify-between h-full transition-all duration-300 group-hover/profit:shadow-[0_2px_12px_rgba(0,0,0,0.3)] ${
                  isNegative
                    ? 'bg-red-100/20 group-hover/profit:bg-red-100/30 group-hover/profit:border-red-500/30'
                    : 'bg-green-100/20 group-hover/profit:bg-green-100/30 group-hover/profit:border-green-neon/30'
                }`}
                classNameIcon={isNegative ? 'text-red-500' : 'text-green-neon'}
              >
                <TextBase
                  as="span"
                  className={`flex-1 ${isNegative ? 'text-red-500' : 'text-green-neon'}`}
                >
                  Lucro Bruto
                </TextBase>
                <TextBase
                  as="span"
                  className={isNegative ? 'text-red-500' : 'text-green-neon'}
                >
                  {formatPrice(profit)}
                </TextBase>
              </InputComponent.wrapper>
            </InputComponent.root>
          </div>
        </div>
      </div>
    </div>
  )
}
