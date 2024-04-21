import React from 'react'
import Profiluser from '@/components/Profiluser'
import { getUsers } from '@/lib/api'
export default async function ProfilUsers() {
    const usersData = await getUsers()
    const users = usersData.data
    return (
        <div>
            <table className="table-fixed w-full border border-slate-400">
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-slate-300 text-left p-2'>Nom</th>
                        <th className='border border-slate-300 text-left p-2'>Email</th>
                        <th className='border border-slate-300 text-left p-2'>Créé le</th>
                        <th className='border border-slate-300 text-left p-2'>Mis à jour le</th>
                        <th className='border border-slate-300 text-left p-2'>statut</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <Profiluser key={user.id} userData={user} />)}
                </tbody>
            </table>
        </div>
    )
}
