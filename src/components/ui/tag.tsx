import React from 'react'

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  className?: string
}

const Tag = ({ onClick, className, children, ...props }: TagProps) => {
  return (
    <button type='button' onClick={onClick} className={className} {...props}>
      {children}
    </button>
  )
}

export default Tag
