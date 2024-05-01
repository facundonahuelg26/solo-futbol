'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Button, Tags } from '@/components/ui'
import { Product, Review } from '@/features/products'

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
const ProductOptions = ({
  product,
  reviews
}: {
  product: Product
  reviews: Review
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <div className='mt-4 lg:mt-0 lg:border-l lg:border-gray px-4 sm:px-0 lg:pl-8 lg:col-span-2 xl:col-span-1'>
      <h2 className='sr-only'>Product information</h2>
      <p className='text-3xl tracking-tight text-gray-900'>{product.price}</p>

      {/* Reviews */}
      <div className='mt-6'>
        <h3 className='sr-only'>Reviews</h3>
        <div className='flex items-center'>
          <div className='flex items-center'>
            {[0, 1, 2, 3, 4].map(
              (rating) =>
                // <StarIcon
                //   key={rating}
                //   className={classNames(
                //     reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                //     'h-5 w-5 flex-shrink-0'
                //   )}
                //   aria-hidden="true"
                // />
                'e'
            )}
          </div>
          <p className='sr-only'>{reviews.average} out of 5 stars</p>
          <a
            href={reviews.href}
            className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
          >
            {reviews.totalCount} reviews
          </a>
        </div>
      </div>

      <form className='mt-10'>
        {/* Colors */}
        <div>
          <h3 className='text-sm font-medium text-gray-900'>Color</h3>

          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className='mt-4'
          >
            <RadioGroup.Label className='sr-only'>
              Choose a color
            </RadioGroup.Label>
            <div className='flex items-center space-x-3'>
              {product.colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      color.selectedClass,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                    )
                  }
                >
                  <RadioGroup.Label as='span' className='sr-only'>
                    {color.name}
                  </RadioGroup.Label>
                  <span
                    aria-hidden='true'
                    className={classNames(
                      color.class,
                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Sizes */}
        <div className='mt-10 xs:w-3/4 sm:w-full'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-medium text-gray-900'>Talle</h3>
            <a
              href='#'
              className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
            >
              Guía de talles
            </a>
          </div>

          {/* <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            className='mt-4'
          >
            <RadioGroup.Label className='sr-only'>
              Elegí un talle
            </RadioGroup.Label>
            <div className='grid grid-cols-4 gap-4 sm:grid-cols-4'>
              {product.sizes.map((size) => (
                <RadioGroup.Option
                  key={size.name}
                  value={size}
                  disabled={!size.inStock}
                  className={({ active, checked }) =>
                    classNames(
                      size.inStock
                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                        : 'cursor-not-allowed bg-gray hover:bg-gray hover:text-slate',
                      checked ? 'bg-white text-blue-light' : '',
                      active
                        ? 'ring-2 ring-blue-light border border-blue-light'
                        : '',
                      'min-h-[70px] group relative flex items-center justify-center rounded-full border border-gray py-3 px-4 text-sm font-bold uppercase focus:outline-none sm:flex-1 sm:py-6 hover:bg-blue-light hover:border-blue-light hover:text-white-light'
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label as='span'>{size.name}</RadioGroup.Label>
                      {size.inStock ? (
                        <span
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked
                              ? 'border-blue-light'
                              : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-full'
                          )}
                          aria-hidden='true'
                        />
                      ) : (
                        <span
                          aria-hidden='true'
                          className='pointer-events-none absolute -inset-px rounded-full'
                        >
                          <svg
                            className='absolute inset-0 h-full w-full stroke-2'
                            viewBox='0 0 100 100'
                            preserveAspectRatio='none'
                            stroke='currentColor'
                          >
                            <line
                              x1={0}
                              y1={100}
                              x2={100}
                              y2={0}
                              vectorEffect='non-scaling-stroke'
                            />
                          </svg>
                        </span>
                      )}
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup> */}
          <Tags initialState={product.sizes[2]} tags={product.sizes} />
        </div>

        {/* <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue px-8 py-3 text-base font-medium text-white hover:bg-slate focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Add to bag
              </button> */}

        <Button className='mt-10 w-full' type='submit'>
          Agregar al carrito
        </Button>
      </form>
    </div>
  )
}

export default ProductOptions
