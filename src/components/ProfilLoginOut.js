'use client'
import React, { useEffect } from 'react'
import LoginRegisterBtn from './LoginRegisterBtn'
import ProfileBtn from './ProfileBtn'

export default function ProfilLoginOut({ user }) {
    return (
        user ? <ProfileBtn userName={user.name} /> : <LoginRegisterBtn />
    )
}
