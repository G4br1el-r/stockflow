import { ProductFormActionsDesktop } from '../ProductFormActionsDesktop'
import { ProductLivePreview } from '../ProductLivePreview'
import { ProductProgressRegister } from '../ProductProgressRegister'

interface ProductSidebarPreviewProps {
  idForm?: string
}

export function ProductSidebarPreview({ idForm }: ProductSidebarPreviewProps) {
  return (
    <aside className="custom-scrollbar w-full flex flex-col gap-10 p-5 sticky top-0 overflow-y-scroll bg-sidebar-lateral-background max-h-[calc(100vh-109.6px)]">
      <div className="flex flex-col gap-10">
        <ProductLivePreview />
        <ProductProgressRegister />
        <ProductFormActionsDesktop idForm={idForm} />
      </div>
    </aside>
  )
}
