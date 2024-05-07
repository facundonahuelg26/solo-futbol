import { ENV_VAR } from '@/service'

export const getDataFetch = async (endpoint: string) => {
  try {
    const res = await fetch(`${ENV_VAR.API_PRODUCTS_URL}${endpoint}`, {
      // next: { revalidate: 10 }
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error(`Error al cargar los datos del endpoint ${endpoint}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(`Error en fetchData para el endpoint ${endpoint}:`, error)
    return { error: `Error al cargar los datos del endpoint ${endpoint}` }
  }
}
