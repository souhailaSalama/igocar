import React from 'react'
import ProfilBooking from '@/components/ProfilBooking'
// import { booking } from '@/helpers/data'
import { bookings } from '@/lib/api'
import { cookies } from 'next/headers'
import { getUserIdFromCookie } from '@/helpers/helpers'

export default async function BookingList() {
    const userId = await getUserIdFromCookie(cookies())
    const bookingsData = await bookings(userId)
    return (
        <div>
            <table className="table-fixed w-full border border-slate-400">
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-slate-300 text-left p-2'>Réservation ID</th>
                        <th className='border border-slate-300 text-left p-2'>De</th>
                        <th className='border border-slate-300 text-left p-2'>À</th>
                        <th className='border border-slate-300 text-left p-2'>Nombre des jours</th>
                        <th className='border border-slate-300 text-left p-2'>Prix/jour</th>
                        <th className='border border-slate-300 text-left p-2'>Total payé</th>
                        <th className='border border-slate-300 text-left p-2'>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingsData.data.map((booked) => <ProfilBooking key={booked._id} bookingData={booked} />)}
                </tbody>
            </table>
        </div>
    )
}
