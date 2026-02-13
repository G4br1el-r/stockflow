export interface CategoryTypes {
  id: string
  label: string
  items: ItemsTypes[]
}

interface ItemsTypes {
  value: string
  label: string
}
