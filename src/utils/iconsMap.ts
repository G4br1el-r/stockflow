import {
  FilePlus,
  HandCoins,
  Pencil,
  ScanText,
  Store,
  ChartColumnStacked,
  Banknote,
  BanknoteArrowUp,
  BanknoteArrowDown,
  PiggyBank,
  Shirt,
} from 'lucide-react'

export const iconMap = {
  scanText: ScanText,
  pencil: Pencil,
  store: Store,
  category: ChartColumnStacked,
  banknote: Banknote,
  banknoteArrowUp: BanknoteArrowUp,
  bankNoteArrowDown: BanknoteArrowDown,
  piggyBank: PiggyBank,
  handCoins: HandCoins,
  filePlus: FilePlus,
  shirt: Shirt,
} as const

export type IconName = keyof typeof iconMap
