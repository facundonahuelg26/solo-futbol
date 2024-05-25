import { ENV_VAR } from '@/service'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
export const getDataFetch = async (endpoint: string) => {
  try {
    const session = await getServerSession(authOptions)

    const res = await fetch(`${ENV_VAR.API_PRODUCTS_URL}${endpoint}`, {
      // next: { revalidate: 10 }
      headers: {
        Authorization: `Bearer ${session?.user?.token}`
      },
      cache: 'no-store'
    })

    if (!res.ok) {
      const errorDetails = {
        status: res.status,
        statusText: res.statusText,
        url: res.url
      }
      console.error(
        `Error al cargar los datos del endpoint ${endpoint}, Detalles:`,
        errorDetails
      )
      throw new Error(
        `Error al cargar los datos del endpoint ${endpoint}: ${res.status} ${res.statusText}`
      )
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(`Error en fetchData para el endpoint ${endpoint}:`, error)
    return { error: `Error al cargar los datos del endpoint ${endpoint}` }
  }
}
