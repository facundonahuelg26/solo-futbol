'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, DownArrow } from '@/components/icons'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  {
    id: 1,
    name: 'Todos'
  },
  {
    id: 2,
    name: 'Menor precio'
  },
  {
    id: 3,
    name: 'Mayor precio'
  }
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className='relative'>
          <Listbox.Button className='relative w-36 cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-slate shadow-sm ring-1 ring-inset ring-gray focus:outline-none focus:ring-2 focus:ring-gray sm:text-sm sm:leading-6'>
            <span className='flex items-center'>
              <span className='ml-3 block truncate'>{selected.name}</span>
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              <DownArrow />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray ring-opacity-5 focus:outline-none sm:text-sm'>
              {people.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-gray-light text-blue' : 'text-zinc',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <div className='flex items-center'>
                        <span
                          className={classNames(
                            selected ? 'font-extrabold' : 'font-normal',
                            'ml-3 block'
                          )}
                        >
                          {item.name}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-blue' : 'text-zinc',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <Check />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
