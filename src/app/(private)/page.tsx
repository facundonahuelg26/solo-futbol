import React from 'react'
import { LoadMore, ProductGallery } from '@/components/products'
import SidebarFilters from '@/components/sidebar-filters'
import { Dropdown } from '@/components/ui'
import { getDataFetch } from '@/service'
import { SearchData } from '@/components'
import { ENDPOINTS } from '@/service/endpoints'

const orderByMinOrMaxPrice = ['Menor precio', 'Mayor precio']
const Products = async () => {
  const data = await getDataFetch(ENDPOINTS.PRODUCTS)

  return (
    <div className=''>
      <div className='container relative flex flex-col lg:flex-row' id='body'>
        <div className='pr-4 pt-10 lg:basis-1/3 xl:basis-1/4'>
          <SidebarFilters />
        </div>
        <div className='mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0' />
        <div className='relative flex-1'>
          <div className='z-10 mb-3 items-center gap-5 space-y-5  py-10 lg:sticky lg:flex lg:space-y-0'>
            <SearchData />
            <div className='flex justify-between items-center gap-5'>
              <span className='min-w-max'>Ordernar por:</span>
              <Dropdown />
            </div>
          </div>
          <ProductGallery products={data.products} />
          <LoadMore />
        </div>
      </div>
    </div>
  )
}

export default Products
