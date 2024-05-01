// import React from 'react'

// interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   onClick: () => void
//   className?: string
// }

// const Tag = ({ onClick, className, children, ...props }: TagProps) => {
//   return (
//     <button type='button' onClick={onClick} className={className} {...props}>
//       {children}
//     </button>
//   )
// }

// export default Tag
'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

interface Tag {
  name: string
  inStock?: boolean
  noVerifyStock?: boolean
  // Otras propiedades comunes...
}

interface TagProps {
  initialState: Tag
  tags: Tag[]
  onClick?: (tag: Tag) => void
  className?: string
  // variant?: 'circle' | 'square'
  // Otras props adicionales...
}
function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

const Tags = ({
  initialState,
  tags,
  onClick,
  className
}: // variant
TagProps) => {
  const [selectedSize, setSelectedSize] = useState(initialState)
  return (
    <RadioGroup
      value={selectedSize}
      onChange={setSelectedSize}
      className='mt-4'
    >
      <RadioGroup.Label className='sr-only'>Elegí un talle</RadioGroup.Label>
      <div className='grid grid-cols-4 gap-4 sm:grid-cols-4'>
        {tags.map((item) => (
          <RadioGroup.Option
            key={item.name}
            value={item}
            // disabled={!item.inStock}
            className={({ active, checked }) =>
              classNames(
                item.inStock || item.noVerifyStock
                  ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                  : 'cursor-not-allowed bg-gray hover:bg-gray hover:text-slate',
                checked ? 'bg-white text-blue-light' : '',
                active ? 'ring-2 ring-blue-light border border-blue-light' : '',
                // variant === 'circle'
                //   ? 'w-[70px]'
                //   : '',
                'w-[70px] min-h-[70px] group relative flex items-center justify-center rounded-md border border-gray py-3 px-4 text-sm font-bold uppercase focus:outline-none sm:flex-1 sm:py-6 hover:bg-blue-light hover:border-blue-light hover:text-white-light'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as='span'>{item.name}</RadioGroup.Label>
                {item.inStock || item.noVerifyStock ? (
                  <span
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-blue-light' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-md'
                    )}
                    aria-hidden='true'
                  />
                ) : (
                  <span
                    aria-hidden='true'
                    className='pointer-events-none absolute -inset-px rounded-md'
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
    </RadioGroup>
  )
}

export default Tags
