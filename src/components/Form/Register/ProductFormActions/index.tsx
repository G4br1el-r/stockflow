import * as Dialog from '@radix-ui/react-dialog'
import { TextBase } from '@/components/TextBase'
import { Megaphone, Rocket, Trash2 } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { useIsMobile } from '@/hooks/useIsMobile'
import { ProductLivePreview } from '../ProductLivePreview'

interface ProductFormActionsProps {
  onSubmit: () => void
  isDialogOpen: boolean
  setIsDialogOpen: (open: boolean) => void
}

export function ProductFormActions({
  onSubmit,
  isDialogOpen,
  setIsDialogOpen,
}: ProductFormActionsProps) {
  const { reset } = useFormContext()
  const isMobile = useIsMobile(1280)

  return (
    <div className="flex flex-col w-full gap-5">
      <button
        type="button"
        onClick={() => reset()}
        className="flex active:scale-95 cursor-pointer items-center gap-1 group/clear transition-all duration-300 w-fit focus:outline-none"
      >
        <Trash2 className="w-3.5 h-3.5 text-red-400 xl:text-white transition-all duration-300 group-hover/clear:text-red-400 group-hover/clear:scale-110 group-focus/clear:text-red-400 group-focus/clear:scale-110" />
        <TextBase
          as="span"
          className="transition-colors text-red-400 xl:text-white duration-300 group-hover/clear:text-red-400 group-focus/clear:text-red-400"
        >
          Limpar
        </TextBase>
      </button>

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="w-full h-12 cursor-pointer bg-blue-neon flex-center rounded-lg gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-neon/70 focus:ring-offset-2 focus:ring-offset-background"
          >
            <TextBase as="span" className="font-semibold">
              Cadastrar Produto
            </TextBase>
            <Rocket className="w-4 h-4" />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-3 w-[95vw] md:w-full md:max-w-4xl shadow-2xl z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 bg-modal-background border border-modal-border max-h-[90vh] overflow-y-auto custom-scrollbar xl:w-fit xl:p-8">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:flex xl:flex-row xl:gap-0 w-fit">
              {isMobile && (
                <div className="md:border-r md:border-modal-border md:pr-8">
                  <ProductLivePreview />
                </div>
              )}

              <div className="w-full md:hidden h-px bg-linear-to-r from-transparent via-gray-600 to-transparent" />

              <div className="flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-neon/10 flex-center border-2 border-orange-neon/30">
                  <Megaphone className="h-7 w-7 text-orange-neon" />
                </div>

                <Dialog.Title className="text-2xl font-bold text-center mb-3">
                  Confirmar Cadastro
                </Dialog.Title>

                <Dialog.Description className="text-center mb-8 leading-relaxed">
                  Tem certeza que deseja cadastrar este produto no sistema? Esta
                  ação não poderá ser desfeita.
                </Dialog.Description>

                <div className="flex gap-3">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex-1 h-11 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none bg-red-neon text-white focus:ring-red-neon/50 cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </Dialog.Close>

                  <button
                    type="button"
                    onClick={onSubmit}
                    className="flex-1 h-11 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none bg-green-neon text-white focus:ring-green-neon/50 cursor-pointer"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
