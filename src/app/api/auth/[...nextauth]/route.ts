import { ENV_VAR } from '@/service'
import { ENDPOINTS } from '@/service/endpoints'
import { ROUTES } from '@/utils'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import jwt from 'jsonwebtoken'

interface DecodedToken {
  exp: number
  iat: number
  email: string
  [key: string]: any // Para cualquier otro campo opcional
}
const refreshTokenApiCall = async (refreshToken: string) => {
  const url = `${ENV_VAR.API_PRODUCTS_URL}${ENDPOINTS.REFRESH_TOKEN}`
  console.log(url)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ refreshToken })
  })
  console.log(refreshToken, 'REFRESH')
  console.log(res.status, 'RESPUESTA REFRESHs')
  if (res.ok) {
    const data = await res.json()
    const decodedToken = jwt.decode(data.accessToken) as DecodedToken
    console.log('RESPUESTA REFRESH')
    console.log(data.accessToken, 'ACCESSTOKEN en api refresh')
    console.log(decodedToken, 'DECODED en api refresh')
    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresIn: decodedToken.exp * 1000 // Convertir a milisegundos
    }
  } else {
    throw new Error('Failed to refresh token')
  }
}
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const res = await fetch(
          `${ENV_VAR.API_PRODUCTS_URL}${ENDPOINTS.AUTH}`,
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const user = await res.json()

        if (user.error) throw user
        // console.log(user, 'USER')
        const decodedToken = jwt.decode(user.accessToken) as DecodedToken
        console.log(decodedToken, 'DECODED en api authorize')
        const userData = {
          ...user,
          expiresIn: decodedToken.exp * 1000
        }
        return userData
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.expiresIn = user.expiresIn
        token.email = user.email
      }
      console.log(token.accessToken, 'ACCESSTOKEN ooooooooooo')
      const now = Date.now()
      const refreshMargin = 5000 // margen de 5 segundos

      console.log(now < token.expiresIn - refreshMargin, token.expiresIn)

      if (now < token.expiresIn - refreshMargin) {
        return token
      }

      try {
        console.log('algoooooooo')
        const refreshedTokens = await refreshTokenApiCall(token.refreshToken)
        console.log('perrooo', refreshedTokens.accessToken)
        console.log(refreshedTokens, 'REFRESHED TOKENS')
        return {
          ...token,
          accessToken: refreshedTokens.accessToken,
          refreshToken: refreshedTokens.refreshToken,
          expiresIn: refreshedTokens.expiresIn
        }
      } catch (error) {
        return {
          ...token,
          error: 'RefreshAccessTokenError'
        }
      }
    },
    // async jwt({ token, user }: any) {
    //   return { ...token, ...user }
    // },
    async session({ session, token }: any) {
      session.user = token as any

      return session
    }
  },
  pages: {
    signIn: ROUTES.SIGN_IN,
    signOut: ROUTES.SIGN_IN
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
