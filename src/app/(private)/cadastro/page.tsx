'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import BaseForm from '@/components/ProductForms/BaseForm'
import ClothesForm from '@/components/ProductForms/ClothesForm'
import FooterForm from '@/components/ProductForms/FooterForm'
import HeaderForm from '@/components/ProductForms/HeaderForm'
import PriceForm from '@/components/ProductForms/PriceForm'
import ShoesForm from '@/components/ProductForms/ShoesForm'
import TitleSectionForm from '@/components/ProductForms/TitleSectionForm'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Text } from '@/components/Text'
import WrapperSegment from '@/components/ProductForms/WrapperSegment'
import StockForm from '@/components/ProductForms/StockForm'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import SizeForm, { SIZES } from '@/components/ProductForms/SizeForm'
import { DoorOpen, Trash2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FormData } from '@/@types/FormRegister/FormData'

export default function RegisterProducts() {
  const [activeSection, setActiveSection] = useState('clothes')
  const methods = useForm<FormData>({
    defaultValues: {
      product: '',
      store: '',
      subcategory: '',
      costPrice: undefined,
      sellingPrice: undefined,

      sizes: [
        { size: '', collor: '', quantity: '', minimumStock: '', sku: '' },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray<FormData, 'sizes'>({
    control: methods.control,
    name: 'sizes',
  })

  const cannAddSizes = fields.length < SIZES.length

  function onSubmitRHF(data: any) {
    console.log(data)
  }

  return (
    <WrapperAlignMainPages className="flex flex-col gap-5 items-center">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col gap-6 md:grid md:grid-cols-2"
      >
        <HeaderForm
          handleActiveSection={setActiveSection}
          useActiveSection={activeSection}
        />
      </motion.section>

      <motion.main
        className="bg-background-sidebar-main/90 shadow-header rounded-2xl w-full h-full justify-between items-center flex flex-col"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* FORM */}
        <FormProvider {...methods}>
          <motion.form
            className="w-full p-3 flex flex-col flex-1 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onSubmit={methods.handleSubmit(onSubmitRHF)}
          >
            <motion.div
              className="flex flex-col flex-1 justify-around gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TitleSectionForm
                label="Informações Gerais"
                IconMain="badgeInfo"
                classNameBackgroundIcon="bg-icon-activate/30 border border-icon-activate"
                classNameIcon="text-icon-activate"
              />

              {/* FORMULÁRIO BASE */}
              <BaseForm />
              <motion.div
                className="flex flex-col gap-5 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <motion.div
                  className="flex flex-col gap-5 "
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <TitleSectionForm
                    label="Financeiro e Precificação"
                    IconMain="banknote"
                    classNameBackgroundIcon="border border-base-green bg-base-green/30"
                    classNameIcon="text-base-green"
                  />

                  {/* FORMULÁRIO PREÇO */}
                  <PriceForm />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-background-register/60 border border-border-register w-full p-3 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AnimatePresence mode="wait">
                {activeSection === 'clothes' && (
                  <motion.div
                    key="clothes"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-5 lg:grid lg:grid-cols-2"
                  >
                    <ClothesForm />

                    {fields.map((field, index) => (
                      <div
                        key={field.id}
                        className={cn(
                          'flex relative flex-col gap-5',
                          index === SIZES.length - 1 && 'lg:col-span-2',
                        )}
                      >
                        <SizeForm index={index} fieldsLength={fields.length} />
                        <StockForm index={index} />

                        {fields.length > 1 && (
                          <Tooltip.Provider delayDuration={500}>
                            <Tooltip.Root>
                              <Tooltip.Trigger asChild>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="absolute top-0.5 right-0 cursor-pointer transition-colors duration-300 ease-initial text-red-400 lg:p-1 rounded-xs hover:bg-background-main"
                                >
                                  <Trash2Icon className="h-4 w-4" />
                                </button>
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content
                                  className="TooltipContent bg-background-tooltip z-50 text-sm p-1 px-3 rounded-md shadow-lg text-variant-primary"
                                  sideOffset={5}
                                >
                                  <Text as="p" className="text-sm">
                                    Remover Tamanho
                                  </Text>

                                  <Tooltip.Arrow className="TooltipArrow fill-background-tooltip" />
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        )}
                      </div>
                    ))}

                    {cannAddSizes && (
                      <button
                        type="button"
                        className={cn(
                          'w-full group hover:bg-background-register rounded-lg p-3 flex items-center justify-center gap-2',
                          fields.length % 2 === 0 &&
                            'lg:col-span-2 lg:min-h-[172]',
                        )}
                        onClick={() =>
                          append({
                            size: '',
                            collor: '',
                            quantity: '',
                            minimumStock: '',
                            sku: '',
                          })
                        }
                      >
                        <Text
                          as="span"
                          className="text-base-secondary cursor-pointer group-hover:text-icon-activate w-full transition-colors duration-300 ease-in-out"
                        >
                          Adicionar outro Tamanho
                        </Text>
                      </button>
                    )}
                  </motion.div>
                )}
                {activeSection === 'shoes' && (
                  <motion.div
                    key="shoes"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ShoesForm />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <FooterForm />
            </motion.div>
          </motion.form>
        </FormProvider>
      </motion.main>
    </WrapperAlignMainPages>
  )
}
