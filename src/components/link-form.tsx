import React from 'react'

interface LinkFormProps {
  text: string
  textLink: string
  link: string
}
const LinkForm = ({ text, textLink, link }: LinkFormProps) => {
  return (
    <p className='mt-10 text-center text-md text-gray-500'>
      {text}{' '}
      <a
        href={link}
        className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
      >
        {textLink}
      </a>
    </p>
  )
}

export default LinkForm
