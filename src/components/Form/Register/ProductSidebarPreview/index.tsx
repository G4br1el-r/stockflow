import { ProductFormActions } from '../ProductFormActions'
import { ProductLivePreview } from '../ProductLivePreview'
import { ProductProgressRegister } from '../ProductProgressRegister'

interface ProductSidebarPreviewProps {
  onSubmit: () => void
  isDialogOpen: boolean
  setIsDialogOpen: (open: boolean) => void
}

export function ProductSidebarPreview({
  onSubmit,
  isDialogOpen,
  setIsDialogOpen,
}: ProductSidebarPreviewProps) {
  return (
    <aside className="custom-scrollbar w-full flex flex-col gap-10 p-5 sticky top-0 overflow-y-scroll max-h-[calc(100vh-109.6px)]">
      <div className="flex flex-col gap-10">
        <ProductLivePreview />
        <ProductProgressRegister />
        <ProductFormActions
          onSubmit={onSubmit}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      </div>
    </aside>
  )
}
