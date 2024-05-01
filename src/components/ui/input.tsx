import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //   fontClass?: string;
  sizeClass?: string
  rounded?: string
}

const Input = ({
  rounded = 'rounded-md',
  sizeClass = 'h-11 px-4 py-3',
  className = '',
  ...props
}: InputProps) => {
  return (
    <input
      className={`block w-full focus:ring focus:ring-transparent focus:ring-opacity-25 disabled:bg-neutral-800 ${rounded} ${sizeClass} ${className}`}
      {...props}
    />
  )
}

export default Input
