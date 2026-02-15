import { ProductFormActions } from '../ProductFormActions'
import { ProductLivePreview } from '../ProductLivePreview'
import { ProductProgressRegister } from '../ProductProgressRegister'

export function ProductSidebarPreview() {
  return (
    <aside className="custom-scrollbar w-full flex flex-col gap-10 p-5 sticky top-0 overflow-y-scroll bg-sidebar-lateral-background max-h-[calc(100vh-109.6px)]">
      <div className="flex flex-col gap-10">
        <ProductLivePreview />
        <ProductProgressRegister />
        <ProductFormActions />
      </div>
    </aside>
  )
}
