'use client'
import { ProductCard } from '@/components/products'
import { ProductGallery } from '@/components/products'
import { getDataFetch } from '@/service'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
const LoadMore = () => {
  const [products, setProducts] = useState<any>([])
  const [pageLoaded, setPageLoaded] = useState(1)
  const { ref, inView } = useInView()

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  const loadMoreProducts = async () => {
    await delay(2000)
    const nextPage = pageLoaded + 1
    const newProducts = await getDataFetch(`/list?page=${nextPage}&limit=9`)
    setProducts([...products, ...newProducts])
    setPageLoaded(nextPage)
  }

  useEffect(() => {
    if (inView) {
      console.log('scrolled to the end')
      loadMoreProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div>
      <ProductGallery products={products} />
      <div ref={ref}>
        <h1>Cargando...</h1>
      </div>
      LoadMore
    </div>
  )
}

export default LoadMore
