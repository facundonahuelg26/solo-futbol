import React from 'react'
import { LoadMore, ProductCard, ProductGallery } from '@/components/products'
import SidebarFilters from '@/components/sidebar-filters'
import { Search } from '@/components/icons'
import { Dropdown, Input } from '@/components/ui'
import { getDataFetch } from '@/service'

const shoes = [
  {
    slug: 'airForce1',
    shoeName: 'Air Force 1',
    coverImage: '/assets/images/products/A.webp',
    // coverImage: airForce1,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    // shots: [airForce1, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        // icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%'
      },
      {
        // icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days'
      },
      {
        // icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box'
      },
      {
        // icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23'
      }
    ]
  },
  {
    slug: 'blackLebron',
    shoeName: 'Lebron Black',
    coverImage: '/assets/images/products/A.webp',
    // coverImage: blackLebron,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    // shots: [blackLebron, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        // icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%'
      },
      {
        // icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days'
      },
      {
        // icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box'
      },
      {
        // icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23'
      }
    ]
  },
  {
    slug: 'blackLebron',
    shoeName: 'Lebron Black',
    coverImage: '/assets/images/products/A.webp',
    // coverImage: blackLebron,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    // shots: [blackLebron, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        // icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%'
      },
      {
        // icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days'
      },
      {
        // icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box'
      },
      {
        // icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23'
      }
    ]
  }
]
const orderByMinOrMaxPrice = ['Menor precio', 'Mayor precio']
const Products = async () => {
  const productsList = await getDataFetch('/list?page=1&limit=9')
  return (
    <div className=''>
      <div className='container relative flex flex-col lg:flex-row' id='body'>
        <div className='pr-4 pt-10 lg:basis-1/3 xl:basis-1/4'>
          <SidebarFilters />
        </div>
        <div className='mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0' />
        <div className='relative flex-1'>
          <div className='z-10 mb-3 items-center gap-5 space-y-5  py-10 lg:sticky lg:flex lg:space-y-0'>
            <div className='flex flex-1 items-center gap-2 rounded-md border border-neutral-300 px-4'>
              <Search className='text-2xl text-neutral-500' />
              <Input
                type='password'
                rounded='rounded-md'
                placeholder='Buscar...'
                sizeClass='h-12 px-0 py-3'
                className='border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent'
              />
            </div>
            <div className='flex justify-between items-center gap-5'>
              <span>Ordernar por:</span>
              <Dropdown />
            </div>
          </div>
          <ProductGallery products={productsList} />
          <LoadMore />
        </div>
      </div>
    </div>
  )
}

export default Products
