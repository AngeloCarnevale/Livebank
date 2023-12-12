'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Spinner, useToast } from '@chakra-ui/react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const toast = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password
      }).catch((error) => {
        console.log("erro: ", error)
      })

      if (!response?.error) {
        toast({
          status: 'success',
          title: "Login success",
          position: 'bottom'
        })
        router.refresh()  
        router.push('/profile')
      }
      return response
    }
    catch {
      console.log("Erro")
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-full flex items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <Image
            src={Logo}
            alt='Logo image'
            width={200}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div className='flex justify-center'>
              {loading ?
                <Spinner
                  size='lg'
                  speed='0.45s'
                  className='text-primary' /> :
                <button
                  type='submit'
                  className="flex w-full justify-center rounded-md bg-primary hover:bg-primary-hover px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500"
                >
                  Sign in
                </button>
              }
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/" className="font-semibold leading-6 text-primary hover:text-primary-hover">
              Go home and register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}