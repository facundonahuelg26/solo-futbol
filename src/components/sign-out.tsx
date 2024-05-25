'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return (
    <button
      className='text-blue-light hover:text-blue-light'
      onClick={() => signOut()}
    >
      Cerrar sesión
    </button>
  )
}

export default SignOut
