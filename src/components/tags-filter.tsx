import { Heading, Tag } from '@/components/ui'
import React, { FC } from 'react'

interface TagsFilterProps {
  tags: { name: string }[]
  onClick: (itemName: string) => void
  className?: (itemName: string) => string
  text: string
}
const TagsFilter = ({ tags, onClick, className, text }: TagsFilterProps) => {
  return (
    <div className='relative flex flex-col space-y-4 pb-8'>
      <div className='pt-4'>
        <Heading subtitle={true}>{text}</Heading>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {tags.map((item) => (
          <Tag
            key={item.name}
            onClick={() => onClick(item.name)}
            className={`rounded-lg py-4 ${
              className ? className(item.name) : ''
            }`}
          >
            {item.name}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default TagsFilter
