import { Search } from '@/components/icons'
import { Input } from '@/components/ui'
import React from 'react'

const SearchData = () => {
  return (
    <div
      // tabIndex={0}
      // className='flex flex-1 items-center gap-2 rounded-md border border-neutral-300 px-4 focus:border-2 focus:border-slate'
      className='relative w-full'
    >
      <Search className='text-2xl text-slate absolute top-1/2 left-3 -translate-y-1/2' />
      <Input
        // rounded='rounded-md'
        placeholder='Buscar...'
        // sizeClass='h-12 px-0 py-3'
        // className='border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent'
        variant='search'
      />
    </div>
  )
}

export default SearchData
