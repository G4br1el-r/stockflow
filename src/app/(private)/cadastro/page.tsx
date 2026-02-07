'use client'
import BaseForm from '@/components/ProductForms/BaseForm'
import ClothesForm from '@/components/ProductForms/ClothesForm'
import FooterForm from '@/components/ProductForms/FooterForm'
import HeaderForm from '@/components/ProductForms/HeaderForm'
import PriceForm from '@/components/ProductForms/PriceForm'
import ShoesForm from '@/components/ProductForms/ShoesForm'
import StockForm from '@/components/ProductForms/Stock'
import TitleSectionForm from '@/components/ProductForms/TitleSectionForm'
import { WrapperAlignMainPages } from '@/components/WrapperAlignMainPages'
import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

export default function RegisterProducts() {
  const [activeSection, setActiveSection] = useState('clothes')
  const footerRef = useRef(null)
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.3 })

  return (
    <WrapperAlignMainPages className="flex flex-col gap-6 items-center">
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
        <motion.form
          className="w-full p-3 flex flex-col flex-1 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.div
            className="flex flex-col flex-1 justify-around gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <TitleSectionForm
              label="Informações Gerais"
              IconMain="badgeInfo"
              classNameBackgroundIcon="bg-icon-activate/30 border border-icon-activate"
              classNameIcon="text-icon-activate"
            />
            <BaseForm />
            <motion.div
              className="flex flex-col gap-5 xl:gap-10 xl:grid xl:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TitleSectionForm
                  label="Estoque"
                  IconMain="package"
                  classNameBackgroundIcon="border border-base-orange bg-base-orange/30"
                  classNameIcon="text-base-orange"
                />

                <StockForm />
              </motion.div>

              <motion.div
                className="flex flex-col gap-5"
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
                <PriceForm />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-background-register/60 border border-border-register w-full p-3 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {activeSection === 'clothes' && (
                <motion.div
                  key="clothes"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ClothesForm />
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
      </motion.main>
    </WrapperAlignMainPages>
  )
}
