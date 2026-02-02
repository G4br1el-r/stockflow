import { Footprints, Gem, Shirt } from 'lucide-react'

export default function Register() {
  const SECTION_ITENS = [
    { title: 'Roupas', icon: Shirt },
    { title: 'Sapatos', icon: Footprints },
    { title: 'Acessórios', icon: Gem },
  ]

  return (
    <main className="h-full w-full flex-col bg-background-main lg:rounded-b-2xl flex items-center gap-3 px-3 lg:pt-0 pt-23 flex-nowrap">
      <div className="bg-red-100 h-200 w-20"></div>
      <div className="bg-red-100 h-200 w-20"></div>
      <div className="bg-red-100 h-200 w-20"></div>
      <div className="bg-red-100 h-200 w-20"></div>
      <div className="bg-red-100 h-200 w-20"></div>
    </main>
  )
}
