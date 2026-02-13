'use client'
import { useDropzone } from 'react-dropzone'
import { Upload, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function InputImage() {
  const [preview, setPreview] = useState<string | null>(null)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxSize: 5242880, // 5MB
    multiple: false,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file) {
        setPreview(URL.createObjectURL(file))
      }
    },
  })

  const handleRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setPreview(null)
  }

  return (
    <div className="w-full">
      {!preview ? (
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center w-full h-60 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : 'text-gray-300/40 hover:bg-gray-50'
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
        <div className="relative w-full h-60 rounded-lg overflow-hidden border border-gray-300">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-contain"
            unoptimized
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
