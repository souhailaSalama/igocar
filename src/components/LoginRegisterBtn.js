'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LoginRegisterBtn() {
    const route = usePathname().split('/')
    route.shift()
    const redirection = route[0] === 'login' ? 'register' : 'login'
    return (
        <div>
            { }
            <Link
                href={'/' + redirection}
                className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                <span className="relative text-sm font-semibold text-white">{redirection === 'login' ? "Connexion" : "S'inscrire"}</span>

            </Link>
        </div>

    )
}
