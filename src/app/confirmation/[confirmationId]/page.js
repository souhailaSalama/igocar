import React from 'react'
import Container from '@/components/Container';
import Image from 'next/image'
import DecorationBlock from '@/components/DecorationBlock';
import { bookingConfirmation } from '@/lib/api';
import moment from 'moment';
export default async function Confirmation({ params }) {
    const confirmationData = await bookingConfirmation(params.confirmationId)
    const { name, fromSlot, toSlot, brand, totalDays, carImage, totalAmount } = confirmationData.data
    return (
        <div className='pt-32 pb-32'>
            <DecorationBlock />
            <Container>
                <div className='max-w-2xl mx-auto'>
                    <div className="p-5 shadow-xl relative rounded-lg border border-slate-200">
                        <h1 className='text-xl font-semibold text-black text-primary text-center mb-10'>Booking Confirmation</h1>
                        <h2 className='text-lg font-semibold text-black text-center mb-10'>Your are booked : {name}, {brand}</h2>
                        <div className="mb-10">
                            <Image src={carImage} alt={name} width="634" height="423"></Image>
                        </div>
                        <p className='text-xl text-center'>from: <b className='text-primary'>{moment(fromSlot).format("DD/MM/YYYY")}</b>, to: <b className='text-secondary'>{moment(toSlot).format("DD/MM/YYYY")}</b></p>
                        <p className='text-xl text-center'>total Days: <b className='text-primary'>{totalDays}</b>, total Amount: <b className='text-secondary'>{totalAmount}$</b></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
