import '@/app/globals.css'
import { ToastProvider } from '@/components/ToastProvider'
import { ProvidersSwitchDarkAndLight } from '@/providers/ProviderSwitchDarkAndLight'

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh h-dvh antialiased bg-background-main flex items-center justify-center">
        <ProvidersSwitchDarkAndLight>
          <ToastProvider />
          {children}
        </ProvidersSwitchDarkAndLight>
      </body>
    </html>
  )
}
