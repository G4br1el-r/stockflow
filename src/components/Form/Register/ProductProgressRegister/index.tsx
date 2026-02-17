import { SectionHeader } from '@/components/SectionHeader'
import { TextBase } from '@/components/TextBase'
import { useProductFormData } from '@/hooks/useProductFormData'
import { Check } from 'lucide-react'

export function ProductProgressRegister() {
  const { product, store, category, status, costPrice, salePrice, variants } =
    useProductFormData()

  const step1Fields = [product, store, category, status]
  const step1Filled = step1Fields.filter(Boolean).length
  const step1Complete = step1Fields.every(Boolean)
  const step1InProgress = step1Filled > 0 && !step1Complete

  const step2Fields = [costPrice, salePrice]
  const step2Filled = step2Fields.filter(Boolean).length
  const step2Complete = step2Fields.every(Boolean)
  const step2InProgress = step2Filled > 0 && !step2Complete

  const hasValidVariants = variants?.some(
    (variant) =>
      variant.hexName &&
      variant.minimumStock &&
      variant.sizes?.some(
        (size) =>
          size.size !== '' && size.quantity && Number(size.quantity) > 0,
      ),
  )
  const step3Complete = hasValidVariants

  const step3InProgress =
    variants &&
    variants.length > 0 &&
    variants.some(
      (v) =>
        v.hexName ||
        v.minimumStock ||
        v.sizes?.some(
          (s) => s.size !== '' || (s.quantity && Number(s.quantity) > 0),
        ),
    ) &&
    !step3Complete

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SectionHeader
          classNameBackGround="bg-blue-neon/20 border-blue-neon"
          classNameIcon="text-blue-neon"
          iconName="eye"
        />
        <TextBase as="span" className="font-bold text-[1.2rem]">
          Etapas
        </TextBase>
      </div>
      <div className="h-full w-full flex flex-col">
        <div className="flex items-center gap-4 group/step transition-all duration-300 hover:translate-x-1">
          <div
            className={`w-12 h-12 rounded-full flex-center transition-all duration-300 ${
              step1Complete
                ? 'bg-green-300 group-hover/step:shadow-[0_0_15px_rgba(134,239,172,0.5)]'
                : step1InProgress
                  ? 'bg-blue-neon group-hover/step:shadow-[0_0_15px_rgba(0,209,255,0.5)]'
                  : 'bg-gray-400/10 group-hover/step:bg-gray-400/20'
            }`}
          >
            {step1Complete ? (
              <Check className="transition-transform duration-300" />
            ) : (
              <TextBase as="span" className="transition-transform duration-300">
                1
              </TextBase>
            )}
          </div>
          <div className="flex flex-col">
            <TextBase
              as="span"
              className={`font-bold transition-colors duration-300 ${
                step1Complete
                  ? 'group-hover/step:text-green-300'
                  : step1InProgress
                    ? 'group-hover/step:text-blue-neon'
                    : 'text-gray-600 group-hover/step:text-gray-400'
              }`}
            >
              Informações Gerais
            </TextBase>
            <TextBase
              as="span"
              className={
                step1Complete
                  ? 'text-green-300'
                  : step1InProgress
                    ? 'text-blue-neon'
                    : 'text-gray-600'
              }
            >
              {step1Complete
                ? 'Completo'
                : step1InProgress
                  ? 'Em Edição'
                  : 'Aguardando'}
            </TextBase>
          </div>
        </div>
        <div className="ml-5.5 h-10 w-0.5 bg-gray-600 transition-all duration-300 hover:bg-gray-500 hover:w-1" />

        <div className="flex items-center gap-4 group/step transition-all duration-300 hover:translate-x-1">
          <div
            className={`w-12 h-12 rounded-full flex-center transition-all duration-300 ${
              step2Complete
                ? 'bg-green-300 group-hover/step:shadow-[0_0_15px_rgba(134,239,172,0.5)]'
                : step2InProgress
                  ? 'bg-blue-neon group-hover/step:shadow-[0_0_15px_rgba(0,209,255,0.5)]'
                  : 'bg-gray-400/10 group-hover/step:bg-gray-400/20'
            }`}
          >
            {step2Complete ? (
              <Check className="transition-transform duration-300" />
            ) : (
              <TextBase as="span" className="transition-transform duration-300">
                2
              </TextBase>
            )}
          </div>
          <div className="flex flex-col">
            <TextBase
              as="span"
              className={`font-bold transition-colors duration-300 ${
                step2Complete
                  ? 'group-hover/step:text-green-300'
                  : step2InProgress
                    ? 'group-hover/step:text-blue-neon'
                    : 'text-gray-600 group-hover/step:text-gray-400'
              }`}
            >
              Financeiro e Precificação
            </TextBase>
            <TextBase
              as="span"
              className={
                step2Complete
                  ? 'text-green-300'
                  : step2InProgress
                    ? 'text-blue-neon'
                    : 'text-gray-600'
              }
            >
              {step2Complete
                ? 'Completo'
                : step2InProgress
                  ? 'Em Edição'
                  : 'Aguardando'}
            </TextBase>
          </div>
        </div>
        <div className="ml-5.5 h-10 w-0.5 bg-gray-600 transition-all duration-300 hover:bg-gray-500 hover:w-1" />

        <div className="flex items-center gap-4 group/step transition-all duration-300 hover:translate-x-1">
          <div
            className={`w-12 h-12 rounded-full flex-center transition-all duration-300 ${
              step3Complete
                ? 'bg-green-300 group-hover/step:shadow-[0_0_15px_rgba(134,239,172,0.5)]'
                : step3InProgress
                  ? 'bg-blue-neon group-hover/step:shadow-[0_0_15px_rgba(0,209,255,0.5)]'
                  : 'bg-gray-400/10 group-hover/step:bg-gray-400/20'
            }`}
          >
            {step3Complete ? (
              <Check className="transition-transform duration-300" />
            ) : (
              <TextBase as="span" className="transition-transform duration-300">
                3
              </TextBase>
            )}
          </div>
          <div className="flex flex-col">
            <TextBase
              as="span"
              className={`font-bold transition-colors duration-300 ${
                step3Complete
                  ? 'group-hover/step:text-green-300'
                  : step3InProgress
                    ? 'group-hover/step:text-blue-neon'
                    : 'text-gray-600 group-hover/step:text-gray-400'
              }`}
            >
              Grade e Estoque
            </TextBase>
            <TextBase
              as="span"
              className={
                step3Complete
                  ? 'text-green-300'
                  : step3InProgress
                    ? 'text-blue-neon'
                    : 'text-gray-600'
              }
            >
              {step3Complete
                ? 'Completo'
                : step3InProgress
                  ? 'Em Edição'
                  : 'Aguardando'}
            </TextBase>
          </div>
        </div>
      </div>
    </div>
  )
}
