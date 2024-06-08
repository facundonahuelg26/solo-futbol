import { ROUTES } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

// import type { ProductType } from '@/data/types';

// import LikeButton from './LikeButton';

interface ProductCardProps {
  product: any
  // product: ProductType;
  className?: string
  showPrevPrice?: boolean
}

const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
  return (
    <div
      className={`transitionEffect relative rounded-md p-3 shadow-md ${className}`}
    >
      <div className=' overflow-hidden rounded-md'>
        <Link
          // href={`/products/${product.slug}`}
          href={`${ROUTES.PRODUCT}/${product.href}`}
          className='w-full h-[360px] block relative'
        >
          <Image
            src={product.images[0].src}
            // src={product.coverImage}
            // alt={`${product.shoeName} cover photo`}
            alt={product.images[0].alt}
            fill
            sizes='100vw, 100vh'
            priority
            className='size-full object-cover'
          />
        </Link>
      </div>

      <div className='flex flex-col justify-between'>
        <h2 className='font-xl font-semibold'>{product.name}</h2>
        <h3 className='pt-3 line-clamp-2'>{product.description}</h3>
        <p className='pt-3 text-lg font-medium text-blue'>${product.price}</p>
      </div>
      {/* <div className='mt-3'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold'>{product.shoeName}</h3>
          <p
            className={`text-neutral-500 ${
              showPrevPrice ? 'block' : 'hidden'
            } text-sm line-through`}
          >
            ${product.previousPrice}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-neutral-500'>{product.shoeCategory}</p>
          <p className='text-lg font-medium text-primary'>
            ${product.currentPrice}
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default ProductCard
