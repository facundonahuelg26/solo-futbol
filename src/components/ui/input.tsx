import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'search' | 'range' | 'form'
}

const Input = ({ variant = 'form', ...props }: InputProps) => {
  let inputClassName = ''
  switch (variant) {
    case 'search':
      inputClassName += 'pl-12 border border-gray outline-gray'
      break
    case 'range':
      inputClassName += ''
      break
    case 'form':
    default:
      inputClassName += ' border border-gray outline-gray'
      break
  }

  return (
    <input
      className={`block w-full pl-4 h-12 py-3 bg-transparent placeholder:text-neutral-500 focus:border-transparent rounded-md focus:ring focus:ring-transparent focus:ring-opacity-25 disabled:bg-neutral-800
      ${inputClassName}	
      `}
      {...props}
    />
  )
}

export default Input
