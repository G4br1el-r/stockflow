import { z } from 'zod'

export const productRegisterSchema = z.object({
  product: z.string().min(1, 'Informe o nome do produto'),

  store: z.string().min(1, 'Selecione uma loja'),
  storeLabel: z.string(),

  category: z.string().min(1, 'Selecione uma categoria'),
  categoryLabel: z.string(),

  status: z.string().min(1, 'Selecione um status'),
  statusLabel: z.string(),

  costPrice: z.union([
    z.string().min(1, 'Informe o preço de custo'),
    z.number().positive('Preço deve ser maior que zero'),
  ]),

  salePrice: z.union([
    z.string().min(1, 'Informe o preço de venda'),
    z.number().positive('Preço deve ser maior que zero'),
  ]),

  variants: z
    .array(
      z.object({
        colorName: z.string(),
        hexName: z.string().min(1, 'Selecione uma cor'),

        minimumStock: z.union([
          z.string().min(1, 'Informe o estoque mínimo'),
          z.number().min(1, 'Informe o estoque mínimo'),
        ]),

        sizes: z
          .array(
            z.object({
              size: z.string().min(1, 'Selecione um tamanho'),

              quantity: z.union([
                z.string().min(1, 'Informe a quantidade'),
                z.number().min(0, 'Informe a quantidade'),
              ]),
            }),
          )
          .min(1, 'Adicione pelo menos um tamanho'),
      }),
    )
    .min(1, 'Adicione pelo menos uma variante'),
})

export type ProductFormData = z.infer<typeof productRegisterSchema>
