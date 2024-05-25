import { ROUTES } from '@/utils'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

interface PublicRoutes {
  [key: string]: string
}
interface PrivateRoutes {
  [key: string]: string
}

const isPrivateRoute = (
  pathname: string,
  privateRoutes: PrivateRoutes
): boolean => {
  return Object.keys(privateRoutes).some((key) => {
    const prefix = key
    const withParam = key + '/'
    return (
      pathname.startsWith(prefix) &&
      (pathname === prefix || pathname.startsWith(withParam))
    )
  })
}
export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const url = req.nextUrl.clone()

  const publicRoutes: PublicRoutes = {
    '/sign-in': ROUTES.SIGN_IN,
    '/sign-up': ROUTES.SIGN_UP
  }
  const privateRoutes: PrivateRoutes = {
    '/profile': ROUTES.PROFILE,
    '/cart': ROUTES.CART,
    '/products': ROUTES.PRODUCTS
  }

  if (token && url.pathname === publicRoutes[url.pathname]) {
    return NextResponse.redirect(new URL(ROUTES.PROFILE, req.url))
  }

  // Proteger rutas privadas
  if (!token && isPrivateRoute(url.pathname, privateRoutes)) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/sign-up',
    '/sign-in',
    '/profile/:path*',
    '/cart/:path*',
    '/products/:path*'
  ]
}
