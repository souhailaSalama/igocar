import moment from 'moment'
import React from 'react'
import SelectbookingStatus from './SelectbookingStatus'
import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'

export default async function ProfilBooking({ bookingData }) {
    const user = await getUserFromCookie(cookies())
    const isAdminUser = user?.isAdmin
    const { _id, fromSlot, toSlot, totalDays, totalAmount, status } = bookingData
    const currentStatus = (status == "approved" ? "Approuvé" : status == "rejected" ? "Rejeté" : "En attente")
    return (
        <tr>
            <td className='border border-slate-300 text-left p-2 overflow-hidden'>
                {_id}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {moment(fromSlot).format("DD/MM/YYYY")}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {moment(toSlot).format("DD/MM/YYYY")}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalDays}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalAmount / totalDays}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalAmount} MAD
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {
                    isAdminUser ?
                        <SelectbookingStatus status={status} bookingId={_id} /> :
                        currentStatus

                }
            </td>
        </tr>
    )
}

