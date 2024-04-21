'use client'
import { updateUser } from '@/lib/api'
import React, { useState } from 'react'

export default function SelectActive({ userId, isActive }) {
    async function handlechange(e) {
        const value = e.target.value == "true" ? true : false
        await updateUser({ isActive: value }, userId)
    }
    return (
        <div>
            <select onChange={handlechange}>
                <option selected={isActive && "true"} value="true">Active</option>
                <option selected={!isActive && "true"} value="false">Inactive</option>
            </select>
        </div>
    )
}
