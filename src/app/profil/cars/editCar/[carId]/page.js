'use client'
import { addCar, getCar, updateCar } from '@/lib/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const initialValue = { name: "", brand: "", fuelType: "", seatingCapacity: "", transmission: "", rentPerDay: "", carImage: "" }
export default function EditCar({ params }) {
  const router = useRouter()
  const [formState, setFormState] = useState(initialValue)
  useEffect(() => {
    async function getCarData() {
      const carData = await getCar(params.carId)
      const expectedData = { name: carData.data.name, brand: carData.data.brand, fuelType: carData.data.fuelType, seatingCapacity: carData.data.seatingCapacity, transmission: carData.data.transmission, rentPerDay: carData.data.rentPerDay, carImage: carData.data.carImage }
      setFormState(expectedData)
    }
    getCarData()
  }, [])
  async function handelSubmit(event) {
    event.preventDefault()

    await updateCar(formState, params.carId)
    router.push('/profil/cars')
  }

  return (
    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center mx-auto">
      <form className="text-center" onSubmit={handelSubmit}>
        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
          Modifier la voiture
        </h1>
        <div className="py-2 text-left">
          <input type="text" name="name" value={formState.name} onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Car Name" />
        </div>
        <div className="py-2 text-left">
          <input type="text" name="brand" value={formState.brand} onChange={(e) => setFormState(s => ({ ...s, brand: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Car brand" />
        </div>
        <div className="py-2 text-left">
          <input type="text" name="fuelType" value={formState.fuelType} onChange={(e) => setFormState(s => ({ ...s, fuelType: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Fuel Type" />
        </div>
        <div className="py-2 text-left">
          <input type="number" name="seatingCapacity" value={formState.seatingCapacity} onChange={(e) => setFormState(s => ({ ...s, seatingCapacity: +e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Seating Capacity" />
        </div>
        <div className="py-2 text-left">
          <input type="text" name="transmission" value={formState.transmission} onChange={(e) => setFormState(s => ({ ...s, transmission: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="transmission" />
        </div>
        <div className="py-2 text-left">
          <input type="number" name="rentPerDay" value={formState.rentPerDay} onChange={(e) => setFormState(s => ({ ...s, rentPerDay: +e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Price Par Day" />
        </div>
        <div className="py-2 text-left">
          <input type="text" name="carImage" value={formState.carImage} onChange={(e) => setFormState(s => ({ ...s, carImage: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Car Image Url" />
        </div>
        <div className="py-2">
          <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
            Modifier
          </button>
          <Link href="/profil/cars" className="border-2 border-gray-100 focus:outline-none bg-red-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-red-700">
            Annuler
          </Link>
        </div>
      </form>
    </div>
  )
}