'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { register } from '@/lib/api'
import { useRouter } from 'next/navigation';

const initial = { email: "", password: "", name: "" }

function Register() {

  const [formState, setFormState] = useState({ ...initial });
  const router = useRouter();
  async function handelSubmit(event) {
    event.preventDefault();
    const res = await register(formState)
    router.replace("/login");
  }

  return (
    <section className="min-h-screen flex flex-col pt-20">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={handelSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              S'inscrire
            </h1>
            <div className="py-2 text-left">
              <input required onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))} type="text" value={formState.name} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Name" name="name" />
            </div>
            <div className="py-2 text-left">
              <input required type="email" onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" name="email" />
            </div>
            <div className="py-2 text-left">
              <input required type="password" onChange={(e) => setFormState((s) => ({ ...s, password: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" name="password" />
            </div>
            <div className="py-2">
              <button type='submit' className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                S'inscrire
              </button>
            </div>
          </form>
          <div className="text-center mt-12">
            <span>
              Avez-vous déjà un compte ?
            </span>
            <Link href="/login" className="pl-1.5 transition font-medium text-primary">Connexion</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
