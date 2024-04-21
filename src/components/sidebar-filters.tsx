'use client'

import { RangeFilter, TagsFilter } from '@/components'
// Importa los nuevos componentes

// import GenderFilter from './GenderFilter'
// import PriceRangeFilter from './PriceRangeFilter'
// import LocationFilter from './LocationFilter'
import { Heading } from '@/components/ui'
import { useState } from 'react'

const brands = [
  {
    name: 'Todos'
  },
  {
    name: 'Nike'
  },
  {
    name: 'Adidas'
  },
  {
    name: 'Puma'
  }
]
const gender = [
  { name: 'Hombre' },
  { name: 'Mujer' },
  { name: 'Unisex' },
  { name: 'Niños' }
]

const PRICE_RANGE = [1, 500]
const SidebarFilters = () => {
  const [activeBrand, setActiveBrand] = useState('Todos')
  const [activeGender, setActiveGender] = useState('Unisex')
  const [rangePrices, setRangePrices] = useState(PRICE_RANGE)

  return (
    <div className='top-28 lg:sticky'>
      <Heading className='mb-0'>Filtrar productos</Heading>
      <div className='divide-y divide-neutral-300'>
        <TagsFilter
          tags={brands}
          onClick={(itemName: string) => setActiveBrand(itemName)}
          className={(itemName: string) =>
            activeBrand === itemName ? 'bg-blue text-white' : 'bg-gray'
          }
          text='Marcas'
        />
        <TagsFilter
          tags={gender}
          onClick={(itemName: string) => setActiveGender(itemName)}
          className={(itemName: string) =>
            activeGender === itemName ? 'bg-blue text-white' : 'bg-gray'
          }
          text='Género'
        />
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
