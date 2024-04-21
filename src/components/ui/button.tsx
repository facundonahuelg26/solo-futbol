import Link from 'next/link'
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  link?: never
}

export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  link: string
}

export type HybridButtonProps = ButtonProps | LinkButtonProps

const Button = ({
  children,
  variant = 'primary',
  link,
  className = '',
  ...props
}: HybridButtonProps) => {
  const buttonClasses = `inline-block px-6 py-3 rounded-full font-semibold focus:outline-none ${
    variant === 'primary'
      ? 'bg-gray text-slate'
      : 'bg-gray-light border-2 border-blue text-blue'
  } ${className}`

  const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  if (link) {
    return (
      <Link href={link} className={buttonClasses} {...linkProps}>
        {children}
      </Link>
    )
  }
  return (
    <button className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
