import React, { HTMLAttributes } from 'react'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className='block text-sm font-medium leading-6 text-gray-900'
    >
      {children}
    </label>
  )
}

export default Label
