import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
export const useAuth = () => {
  const [errors, setErrors] = useState<string[]>()
  const router = useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // setErrors([]);
    try {
      const data = new FormData(event.currentTarget)
      const email = data.get('email') as string
      const password = data.get('password') as string

      const responseNextAuth = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      if (responseNextAuth?.error) {
        console.log(responseNextAuth.error)
        setErrors(responseNextAuth.error.split(','))
        return
      }

      router.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }
  return {
    handleSubmit,
    errors
  }
}
