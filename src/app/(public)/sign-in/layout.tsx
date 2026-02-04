import '@/app/globals.css'
import { ProvidersSwitchDarkAndLight } from '@/providers/ProviderSwitchDarkAndLight'

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh h-dvh antialiased bg-background-main flex items-center justify-center">
        <ProvidersSwitchDarkAndLight>{children}</ProvidersSwitchDarkAndLight>
      </body>
    </html>
  )
}
