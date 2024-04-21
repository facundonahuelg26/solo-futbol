import Image from 'next/image'
import Link from 'next/link'

const Header = ({ isLoggedIn = false }) => {
  return (
    <header className='bg-slate sticky top-0 z-50'>
      <div className='container py-4 px-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <Image
            src='/assets/images/logo_solofutbol_1.png'
            alt='Icono'
            // className='w-8 h-8 mr-4'
            width={73}
            height={49}
          />
        </div>
        <div className='flex-grow text-center'>
          <Link href='/products' className='text-white'>
            Ver Productos
          </Link>
        </div>
        <div className='flex items-center'>
          {/* <img src="/usuario.png" alt="Usuario" className="w-6 h-6 mr-2" />
        <img src="/carrito.png" alt="Carrito" className="w-6 h-6" /> */}
          {isLoggedIn ? (
            <Link href='/account' className='text-white mr-4'>
              Mi cuenta
            </Link>
          ) : (
            <span className='text-white mr-4'>Ingresá o Registrate</span>
          )}
          <Link href='/cart' className='text-white mr-4'>
            Carrito
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
