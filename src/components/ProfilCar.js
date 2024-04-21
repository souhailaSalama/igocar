'use client'
import React from 'react'
import Image from 'next/image'
import { deleteCar } from '@/lib/api'
import Link from 'next/link'
export default function ProfilCar({ carData, updateDataAction }) {
  const { name, brand, fuelType, seatingCapacity, rentPerDay, carImage, transmission } = carData
  const { updateData, setUpdateData } = { ...updateDataAction }
  async function handleDelete() {
    await deleteCar(carData._id)
    setUpdateData(!updateData)
  }
  return (
    <tr>
      <td className='border border-slate-300 text-left p-2'>
        <Image src={carImage} alt={name} width="63" height="42"></Image>
      </td>
      <td className='border border-slate-300 text-left p-2'>
        {name}
      </td>
      <td className='border border-slate-300 text-left p-2'>
        {brand}
      </td>
      <td className='border border-slate-300 text-left p-2'>
        {fuelType}
      </td>
      <td className='border border-slate-300 text-left p-2'>
        {rentPerDay}
      </td>
      <td className='border border-slate-300 text-left p-2'>
        {seatingCapacity}
      </td>
      <td className='border border-slate-300 text-left p-2'>
        {transmission}
      </td>
      <td className='border border-slate-300 text-left p-2'>
        <div className="flex flex-wrap ">
          <Link href={`/profil/cars/editCar/${carData._id}`} className='text-primary flex-100 font-semibold hover:underline'>Modifier</Link>
          <button className='text-secondary font-semibold hover:underline' onClick={handleDelete}>Supprimer</button>
        </div>
      </td>
    </tr>
  )
}
