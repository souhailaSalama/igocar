'use client'
import React, { useEffect, useState } from 'react'
import { getCurrentUser, updateUser } from '@/lib/api'
const initialValues = { name: "", email: "", newpassword: "", confirmpassword: "" }
export default function Profil() {
    const [formState, setFormState] = useState(initialValues)
    const [updateData, setUpdateData] = useState(false)

    useEffect(() => {
        async function getUser() {
            const user = await getCurrentUser()
            setFormState({ ...initialValues, ...user.data })
        }
        getUser()
    }, [updateData])

    async function handleSubmit(event) {
        event.preventDefault()
        if (formState.newpassword === formState.confirmpassword) {
            const body = { name: formState.name, email: formState.email, password: formState.password }
            await updateUser(body, formState.id)
            setUpdateData(!updateData)
        }
    }
    return (
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center mx-auto">
            <form className="text-center" onSubmit={handleSubmit}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                    Compte
                </h1>
                <div className="py-2 text-left">
                    <input type="text" name="name" required value={formState.name} onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Name" />
                </div>
                <div className="py-2 text-left">
                    <input type="email" name="email" required value={formState.email} onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                </div>
                <div className="py-2 text-left">
                    <input type="password" name='newpassword' required value={formState.newpassword} onChange={(e) => setFormState(s => ({ ...s, newpassword: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="New Password" />
                </div>
                <div className="py-2 text-left">
                    <input type="password" name='confirmpassword' required value={formState.confirmpassword} onChange={(e) => setFormState(s => ({ ...s, confirmpassword: e.target.value }))} className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Confirm Password" />
                </div>
                <div className="py-2">
                    <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                        Actualiser
                    </button>
                </div>
            </form>
        </div>
    )
}
