import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')
  const isSignIn = request.nextUrl.pathname.startsWith('/sign-in')

  if (accessToken && isSignIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!accessToken && !isSignIn) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: [
    '/sign-in',
    '/cadastro/:path*',
    '/caixa/:path*',
    '/dashboard/:path*',
    '/estoque/:path*',
    '/historico/:path*',
  ],
}
