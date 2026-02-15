'use client'
import { useDropzone } from 'react-dropzone'
import { Upload, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function InputImage() {
  const [preview, setPreview] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxSize: 5242880, // 5MB
    multiple: false,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file) {
        const url = URL.createObjectURL(file)
        setPreview(url)

        // Obter dimensões da imagem
        const img = new window.Image()
        img.onload = () => {
          setDimensions({ width: img.width, height: img.height })
        }
        img.src = url
      }
    },
  })

  const handleRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setPreview(null)
    setDimensions({ width: 0, height: 0 })
  }

  return (
    <div className="w-full h-full xl:max-w-100.75">
      {!preview ? (
        <div
          {...getRootProps()}
          className={`flex flex-col extramd:w-70.5 md:w-90 items-center justify-center w-full h-60 extramd:min-h-100 extramd:h-full border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
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
        </div>
      ) : (
        <div className="relative w-full focus-within:border-blue-neon extramd:w-70.5 md:w-90 extramd:h-100 max-h-100 rounded-lg overflow-hidden border border-blue-neon bg-gray-950/70 ">
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
            className="absolute top-2 right-2 p-1 cursor-pointer  bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
