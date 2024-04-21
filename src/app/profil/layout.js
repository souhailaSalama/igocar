
import React from 'react'
import Container from '@/components/Container'
import { cookies } from 'next/headers'
import ProfilTabs from '@/components/ProfilTabs'
import { getUserFromCookie } from '@/lib/auth'

export default async function ProfilLayout({ children }) {

    // get user
    const user = await getUserFromCookie(cookies())
    const isAdminUser = user?.isAdmin

    return (
        <>
            <div className='pt-32 pb-32'>
                <Container>
                    <ProfilTabs isAdminUser={isAdminUser} />
                    <hr className='mb-10' />
                    {children}
                </Container>
            </div>
        </>
    )
}
