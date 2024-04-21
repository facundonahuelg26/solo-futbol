'use client'
import { Button, Heading, Input } from '@/components/ui'
import Slider from 'rc-slider'
import { pathOr } from 'ramda'
import 'rc-slider/assets/index.css'
interface RangeFilterProps {
  ranges: number[]
  onChange: (value: number | number[]) => void
  text: string
  rangeState: number[]
  minDescription?: string
  maxDescription?: string
  sign?: string
}
const RangeFilter = ({
  ranges,
  onChange,
  text,
  rangeState,
  minDescription,
  maxDescription,
  sign
}: RangeFilterProps) => {
  return (
    <div className='relative flex flex-col space-y-4 pb-8'>
      <div className='pt-4'>
        <Heading subtitle={true}>{text}</Heading>
      </div>
      <div className='space-y-5'>
        <Slider
          range
          min={ranges[0]}
          max={ranges[1]}
          step={1}
          defaultValue={[
            pathOr(0, [0], rangeState),
            pathOr(0, [1], rangeState)
          ]}
          allowCross={false}
          onChange={onChange}
        />
      </div>
      <div className='flex justify-between space-x-5'>
        <div>
          <div className='block text-sm font-medium'>{minDescription}</div>
          <div className='relative mt-1 rounded-md'>
            <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm'>
              {sign}
            </span>
            <Input
              type='text'
              name='minPrice'
              disabled
              id='minPrice'
              value={rangeState[0]}
              rounded='rounded-full'
              className='block w-32 rounded-full border-[1px] border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm'
            />
            {/* <input
              type='text'
              name='minPrice'
              disabled
              id='minPrice'
              className='block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm'
              value={rangeState[0]}
            /> */}
          </div>
        </div>
        <div>
          <div className='block text-sm font-medium'>{maxDescription}</div>
          <div className='relative mt-1 rounded-md'>
            <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm'>
              {sign}
            </span>
            <Input
              type='text'
              disabled
              name='maxPrice'
              id='maxPrice'
              value={rangeState[1]}
              rounded='rounded-full'
              className='block w-32 rounded-full border-[1px] border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm'
            />
            {/* <input
              type='text'
              disabled
              name='maxPrice'
              id='maxPrice'
              className='block w-32 rounded-full border-2 border-zinc-900 bg-transparent pl-4 pr-10 sm:text-sm'
              value={rangeState[1]}
            /> */}
          </div>
          <div className='mt-4 flex justify-end'>
            <Button>Aplicar rango</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeFilter
