'use client'
import { Input, Label } from '@/components/ui'
import React, { useState } from 'react'

interface TextInputProps {
  label: string
  id: string
  name: string
  type: string
  autoComplete: string
  required: boolean
  placeholder: string
}
const TextInput = ({
  label,
  id,
  name,
  type,
  autoComplete,
  required = false,
  placeholder
}: TextInputProps) => {
  const [error, setError] = useState<string | null>(null)

  const validateInput = (value: string, type: string) => {
    // Expresión regular y mensaje de error según el tipo de validación
    let regex
    let errorMessage

    // Validar campo obligatorio
    if (value.trim() === '') {
      setError('Este campo es obligatorio')
      return
    }

    // Seleccionar la expresión regular y el mensaje de error según el tipo
    switch (type) {
      case 'name':
        regex = /^[a-zA-Z\s]+$/
        errorMessage = 'El nombre ingresado no es válido.'
        break
      case 'email':
        regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        errorMessage = 'El correo electrónico ingresado no es válido.'
        break
      // Otros tipos de validación
      default:
        regex = /^.*$/ // Validación por defecto
        errorMessage = 'El valor ingresado no es válido.'
    }

    // Realizar la validación con la expresión regular
    if (!regex.test(value)) {
      setError(errorMessage)
    } else {
      setError(null)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateInput(event.target.value, name)
  }
  return (
    <div className='h-28'>
      <Label
        htmlFor='email'
        className='block text-sm font-medium leading-6 text-slate'
      >
        {label}
      </Label>

      <div className='mt-2 rounded-md bg-transparent'>
        <Input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {error && <span className='text-sm text-red'>{error}</span>}
      </div>
    </div>
  )
}

export default TextInput
