'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { login } from '@/lib/api'
import { useRouter } from 'next/navigation';

const initialValue = {
  email: '',
  password: ''
}
function Login() {
  const [formState, setFormState] = useState(initialValue)
  const [errors, setErrors] = useState('')
  const router = useRouter()

  async function handelSubmit(event) {
    event.preventDefault();
    try {
      await login(formState)
      router.replace("/");
      router.refresh()
    } catch (error) {
      setErrors(error.message)
    }
  }
  return (
    <section className="min-h-screen flex flex-col pt-20">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <p className='text-secondary'>{errors}</p>
          <form className="text-center" onSubmit={handelSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Se connecter
            </h1>
            <div className="py-2 text-left">
              <input required name="email" onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))} value={formState.email} type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
            </div>
            <div className="py-2 text-left">
              <input required type="password" name="password" onChange={(e) => setFormState((s) => ({ ...s, password: e.target.value }))} value={formState.password} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
            </div>
            <div className="py-2">
              <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                connecter
              </button>
            </div>
          </form>
          <div className="text-center mt-12">
            <span>
              Vous n'avez pas de compte ?
            </span>
            <Link href="/register" className="pl-1.5 transition font-medium text-primary">En créez un</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
