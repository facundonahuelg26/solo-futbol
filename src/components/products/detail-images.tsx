import Image from 'next/image'
import React from 'react'

const DetailImages = ({ product }: any) => {
  return (
    <div className='lg:col-span-3 xl:col-span-2 mx-auto flex flex-col-reverse justify-end lg:justify-start xl:flex-row'>
      <div className='w-full xl:w-1/4 flex xl:flex-col gap-8'>
        <div className='w-24 h-24 lg:w-28 lg:h-28 relative'>
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            className='object-cover'
            fill
          />
        </div>
        <div className='w-24 h-24 lg:w-28 lg:h-28 relative'>
          <Image
            src={product.images[1].src}
            alt={product.images[1].alt}
            className='object-cover'
            fill
          />
        </div>
      </div>
      <div className='w-full lg:w-2/3 relative'>
        <Image
          src='/assets/images/products/camiseta-seleccion.jpg'
          alt={product.images[0].alt}
          className='object-cover object-center'
          width={1200}
          height={1200}
        />
      </div>
    </div>
  )
}

export default DetailImages
