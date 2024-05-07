'use client'
import { Eye, EyeOff } from '@/components/icons'
import { Input, Label } from '@/components/ui'
import React, { useState } from 'react'

interface PasswordInputProps {
  label: string
  id: string
  name: string
  autoComplete: string
  required: boolean
  placeholder: string
}

const PasswordInput = ({
  label,
  id,
  name,
  autoComplete,
  required = false,
  placeholder
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='h-28'>
      <Label
        htmlFor={id}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </Label>

      <div className='mt-2 relative rounded-mdbg-transparent'>
        <Input
          id={id}
          name={name}
          type={showPassword ? 'text' : 'password'}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
        />
        <span
          className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <Eye className='text-gray-dark' />
          ) : (
            <EyeOff className='text-gray-dark' />
          )}
        </span>
      </div>
    </div>
  )
}

export default PasswordInput
