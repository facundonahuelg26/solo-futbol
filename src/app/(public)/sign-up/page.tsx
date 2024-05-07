import { LinkForm, PasswordInput, TextInput } from '@/components'
import { Button, Heading } from '@/components/ui'
import { ROUTES } from '@/utils'
import Image from 'next/image'
const SignUp = () => {
  return (
    <div className='w-full min-h-screen py-16 flex justify-center items-center'>
      <div className='w-full sm:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/4 px-4 sm:px-0 py-8 sm:border-2 border-gray border-dotted rounded'>
        <div className='w-full flex flex-col items-center'>
          <Image
            src='/assets/images/logo_solofutbol_1.png'
            alt='Icono'
            className='object-cover'
            width={73}
            height={49}
          />
          <div className='w-full mt-4 flex justify-center'>
            <Heading variant='h2'>Registrarse</Heading>
          </div>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form>
            <TextInput
              label='Nombre'
              id='name'
              name='name'
              type='text'
              autoComplete='given-name'
              required
              placeholder='Juan'
            />
            <TextInput
              label='Apellido'
              id='lastname'
              name='lastname'
              type='text'
              autoComplete='family-name'
              required
              placeholder='Garcia'
            />
            <TextInput
              label='Correo electrónico'
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              placeholder='usuario@example.com'
            />

            <PasswordInput
              label='Contraseña'
              id='password'
              name='password'
              autoComplete='current-password'
              required
              placeholder='*********'
            />

            <div>
              <Button className='w-full' type='submit'>
                Crear una cuenta
              </Button>
            </div>
          </form>

          <LinkForm
            text='Ya tengo una cuenta.'
            link={ROUTES.SIGN_IN}
            textLink='Iniciar sesión'
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp
