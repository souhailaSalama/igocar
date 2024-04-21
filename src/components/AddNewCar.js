import Link from 'next/link';
import React from 'react'

export default function AddNewCar() {
    return (
        <div className='mb-5 flex'>
            <Link href="/profil/cars/addCar" className="w-auto focus:outline-none bg-purple-600 text-white text-center font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                Ajouter une nouvelle voiture
            </Link>
        </div>
    )
}
