'use client'

import { RangeFilter } from '@/components'
// Importa los nuevos componentes

// import GenderFilter from './GenderFilter'
// import PriceRangeFilter from './PriceRangeFilter'
// import LocationFilter from './LocationFilter'
import { Heading, Tags } from '@/components/ui'
import { useState } from 'react'

const brands = [
  {
    name: 'Todos',
    noVerifyStock: true
  },
  {
    name: 'Nike',
    noVerifyStock: true
  },
  {
    name: 'Adidas',
    noVerifyStock: true
  },
  {
    name: 'Puma',
    noVerifyStock: true
  }
]
const gender = [
  { name: 'Hombre', noVerifyStock: true },
  { name: 'Mujer', noVerifyStock: true },
  { name: 'Unisex', noVerifyStock: true },
  { name: 'Niños', noVerifyStock: true }
]

const PRICE_RANGE = [1, 500]
const SidebarFilters = () => {
  const [rangePrices, setRangePrices] = useState(PRICE_RANGE)

  return (
    <div className='top-28 lg:sticky'>
      <Heading>Filtrar productos</Heading>
      <div className='divide-y divide-neutral-300'>
        <div className='relative flex flex-col space-y-4 pb-8'>
          <div className='pt-4'>
            <Heading variant='h2'>Marcas</Heading>
          </div>
          <div className='w-full flex flex-wrap justify-between items-center'>
            <Tags initialState={brands[0]} tags={brands} />
          </div>
        </div>
        <div className='relative flex flex-col space-y-4 pb-8'>
          <div className='pt-4'>
            <Heading variant='h2'>Género</Heading>
          </div>
          <div className='w-full flex flex-wrap justify-between items-center'>
            <Tags initialState={gender[1]} tags={gender} />
          </div>
        </div>
        <RangeFilter
          ranges={PRICE_RANGE}
          onChange={(value: number | number[]) => {
            if (Array.isArray(value)) {
              setRangePrices(value)
            } else {
              setRangePrices([value, value])
            }
          }}
          text='Rango de precio'
          rangeState={rangePrices}
          minDescription='Precio mínimo'
          maxDescription='Precio máximo'
          sign='$'
        />
        {/* <GenderFilter
          activeGender={activeGender}
          setActiveGender={setActiveGender}
        />
        <PriceRangeFilter
          rangePrices={rangePrices}
          setRangePrices={setRangePrices}
        />
        <LocationFilter
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        /> */}
      </div>
    </div>
  )
}

export default SidebarFilters
