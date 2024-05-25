import { ENV_VAR } from '@/service'
import { ENDPOINTS } from '@/service/endpoints'
import { ROUTES } from '@/utils'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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
        return user
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      return { ...token, ...user }
    },
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
