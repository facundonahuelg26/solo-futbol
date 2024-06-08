import React from 'react'

const Spinner = () => {
  return (
    <div
      className='size-8 inline-block rounded-full border-4 border-r-blue-light border-solid animate-spin'
      role='status'
    ></div>
  )
}

export default Spinner
