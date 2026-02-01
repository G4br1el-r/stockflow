import '@/app/globals.css'

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className="min-h-dvh h-dvh antialiased bg-background-main transition-colors duration-500 flex items-center justify-center">
        {children}
      </body>
    </html>
  )
}
