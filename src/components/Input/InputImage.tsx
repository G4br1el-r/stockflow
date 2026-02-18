'use client'
import { useDropzone } from 'react-dropzone'
import { Upload, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useFormContext, useFormState, useWatch } from 'react-hook-form'
import { ProductFormData } from '@/@schema/Form/product-form.schema'

export function InputImage() {
  const { control, setValue, setError, clearErrors } =
    useFormContext<ProductFormData>()
  const { errors } = useFormState({ control })

  const file = useWatch({ control, name: 'image' })

  const [preview, setPreview] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // biome-ignore lint/correctness/useExhaustiveDependencies: not error
  useEffect(() => {
    if (!file) {
      if (preview) URL.revokeObjectURL(preview)
      setPreview(null)
      setDimensions({ width: 0, height: 0 })
      return
    }

    const url = URL.createObjectURL(file)
    setPreview(url)

    const img = new window.Image()
    img.onload = () => setDimensions({ width: img.width, height: img.height })
    img.src = url

    return () => URL.revokeObjectURL(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxSize: 5242880, // 5MB
    multiple: false,

    onDrop: (acceptedFiles) => {
      const selected = acceptedFiles[0]
      if (!selected) return

      clearErrors('image')
      setValue('image', selected, {
        shouldDirty: true,
        shouldValidate: true,
      })
    },

    onDropRejected: (rejections) => {
      const first = rejections?.[0]
      const code = first?.errors?.[0]?.code

      let message = 'Imagem inválida.'
      if (code === 'file-too-large')
        message = 'A imagem deve ter no máximo 5MB.'
      if (code === 'file-invalid-type')
        message = 'Formato inválido (use PNG, JPG ou WEBP).'

      setError('image', { type: 'manual', message })
    },
  })

  const handleRemove = () => {
    clearErrors('image')
    setValue('image', undefined, {
      shouldDirty: true,
      shouldValidate: true,
    })
  }

  return (
    <div className="w-full h-full xl:max-w-100.75">
      {!preview ? (
        <div
          {...getRootProps()}
          className={`flex flex-col extramd:w-70.5 md:w-90 items-center justify-center w-full h-full extramd:h-full border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            isDragActive
              ? 'border-blue-neon'
              : 'text-gray-300/40 hover:border-blue-neon'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="w-10 h-10 text-gray-400 mb-2" />

          <span className="text-sm text-gray-600">
            {isDragActive
              ? 'Solte a imagem aqui'
              : 'Arraste ou clique para selecionar'}
          </span>

          <span className="text-xs text-gray-400 mt-1">PNG, JPG até 5MB</span>

          {errors.image?.message && (
            <span className="text-xs text-red-500 mt-2">
              {errors.image.message as string}
            </span>
          )}
        </div>
      ) : (
        <div className="relative w-full focus-within:border-blue-neon extramd:w-70.5 md:w-90 extramd:h-full rounded-lg overflow-hidden border border-blue-neon bg-gray-950/70 ">
          <div
            className="relative w-full h-full"
            style={{
              aspectRatio: `${dimensions.width} / ${dimensions.height}`,
            }}
          >
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-fill rounded-sm"
            />
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 cursor-pointer bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
