// stores/forms/useSizeFormStore.ts
import { create } from 'zustand'

type Size = 'PP' | 'P' | 'M' | 'G' | 'GG'

interface SizeForm {
  id: string
  selectedSize: Size | null
  isLocked: boolean // ✅ NOVO: indica se está bloqueado
}

interface SizeFormsStore {
  forms: SizeForm[]
  addForm: () => void
  removeForm: (id: string) => void
  updateSize: (formId: string, size: Size) => void
  getUsedSizes: () => Size[]
  getAvailableSizes: (currentFormId: string) => Size[]
  isFormLocked: (formId: string) => boolean // ✅ NOVO
}

const ALL_SIZES: Size[] = ['PP', 'P', 'M', 'G', 'GG']

export const useSizeFormStore = create<SizeFormsStore>((set, get) => ({
  forms: [{ id: crypto.randomUUID(), selectedSize: null, isLocked: false }],

  // ✅ ATUALIZADO: Bloqueia todos os anteriores ao adicionar novo
  addForm: () =>
    set((state) => ({
      forms: [
        ...state.forms.map((form) => ({ ...form, isLocked: true })), // Bloqueia os anteriores
        { id: crypto.randomUUID(), selectedSize: null, isLocked: false }, // Novo desbloqueado
      ],
    })),

  // ✅ ATUALIZADO: Desbloqueia o último ao remover
  removeForm: (id) =>
    set((state) => {
      const newForms = state.forms.filter((form) => form.id !== id)

      // Se ainda tem formulários, desbloqueia o último
      if (newForms.length > 0) {
        newForms[newForms.length - 1].isLocked = false
      }

      return { forms: newForms }
    }),

  updateSize: (formId, size) =>
    set((state) => ({
      forms: state.forms.map((form) =>
        form.id === formId ? { ...form, selectedSize: size } : form,
      ),
    })),

  getUsedSizes: () => {
    const { forms } = get()
    return forms
      .map((form) => form.selectedSize)
      .filter((size): size is Size => size !== null)
  },

  getAvailableSizes: (currentFormId) => {
    const { forms } = get()
    const currentForm = forms.find((f) => f.id === currentFormId)

    const usedSizes = forms
      .filter((form) => form.id !== currentFormId)
      .map((form) => form.selectedSize)
      .filter((size): size is Size => size !== null)

    return ALL_SIZES.filter(
      (size) => !usedSizes.includes(size) || size === currentForm?.selectedSize,
    )
  },

  // ✅ NOVO: Verifica se o form está bloqueado
  isFormLocked: (formId) => {
    const { forms } = get()
    const form = forms.find((f) => f.id === formId)
    return form?.isLocked ?? false
  },
}))
