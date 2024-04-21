'use client'
import { addCar } from '@/lib/api'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const initialValue = { name: "", brand: "", fuelType: "", seatingCapacity: "", transmission: "", rentPerDay: "", carImage: "" }
export default function CarNewEdit({ type, setAction, setUpadate, updateCarAction }) {
    const router = useRouter()
    const [formState, setFormState] = useState(initialValue)
    if (updateCarAction.updateCar && type == "edit") {
        setFormState(updateCarAction.updateCar)
    }
    // const [updateData, setUpdateData] = [...setUpadate]
    async function handelSubmit(event) {
        event.preventDefault()

        await addCar(formState)
        setAction(false)
        setFormState(initialValue)
        setUpadate.setUpdateData(!setUpadate.updateData)
    }
    return (
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center mx-auto">
            <form className="text-center" onSubmit={handelSubmit}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                    {type === 'edit' ? "Modifier la voiture" : "Ajouter une nouvelle voiture"}
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
                        {type === 'edit' ? "Actualiser" : "Ajouter"}
                    </button>
                    <button onClick={() => { setAction(false); updateCarAction.setUpdateCar(null); setFormState(initialValue) }} className="border-2 border-gray-100 focus:outline-none bg-red-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-red-700">
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    )
}
