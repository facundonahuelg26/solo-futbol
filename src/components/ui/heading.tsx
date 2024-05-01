import React from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading: React.FC<HeadingProps> = ({
  variant = 'h1',
  children,
  ...rest
}) => {
  let className = ''
  switch (variant) {
    case 'h1':
      className = 'text-3xl font-semibold'
      break
    case 'h2':
      className = 'mb-2.5 text-xl font-medium'
      break

    default:
      className = 'text-3xl font-semibold'
  }

  return React.createElement(variant, { className, ...rest }, children)
}

export default Heading
