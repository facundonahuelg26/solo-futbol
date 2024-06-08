'use client'
import { ProductGallery } from '@/components/products'
import { Spinner } from '@/components/ui'
import { getDataClientFetch } from '@/service'
import { ENDPOINTS } from '@/service/endpoints'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
const LoadMore = () => {
  const [products, setProducts] = useState<any>([])
  const [pageLoaded, setPageLoaded] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  const loadMoreProducts = async () => {
    await delay(2000)
    const nextPage = pageLoaded + 1
    const newProducts = await getDataClientFetch(
      `${ENDPOINTS.PRODUCTS}?page=${nextPage}&limit=6`
    )
    setHasMore(newProducts.hasMore)

    setProducts([...products, ...newProducts.products])
    setPageLoaded(nextPage)
  }

  useEffect(() => {
    if (inView) {
      // console.log('scrolled to the end')
      loadMoreProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div>
      <ProductGallery products={products} />
      <div ref={ref} className='py-8 flex justify-center'>
        {hasMore ? (
          <Spinner />
        ) : (
          <p className='text-2xl font-bold'>Fin de los resultados</p>
        )}
      </div>
    </div>
  )
}

export default LoadMore
