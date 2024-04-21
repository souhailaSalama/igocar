'use client'
import { updateBookinStatus } from '@/lib/api'
import React from 'react'

export default function SelectbookingStatus({ status, bookingId }) {
    async function handlechange(e) {
        const value = e.target.value
        await updateBookinStatus({ status: value }, bookingId)
    }
    return (
        <div>
            <select onChange={handlechange}>
                <option selected={status == "approved" && "true"} value="approved">Approuvé</option>
                <option selected={status == "pending" && "true"} value="pending">En attente</option>
                <option selected={status == "rejected" && "true"} value="rejected">Rejeté</option>
            </select>
        </div>
    )
}
