import ProductCard from '@/components/products/product-card'
import React from 'react'

const ProductGallery = ({ products }: any) => {
  return (
    <div className='grid flex-1 gap-x-8 gap-y-10 xs:grid-cols-2 lg:grid-cols-3'>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGallery
