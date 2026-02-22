'use client'

import { useTheme } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function ToastProvider() {
  const { theme } = useTheme()

  return <ToastContainer position="top-right" autoClose={3000} theme={theme} />
}
