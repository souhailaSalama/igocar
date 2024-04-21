import React from 'react'
import Container from './Container'
import Link from 'next/link'
import DecorationBlock from './DecorationBlock'
export default function Banner() {
    return (
        <div className='Banner'>
            <DecorationBlock></DecorationBlock>
            <Container>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Rêvons ensemble avec <span className="text-primary dark:text-white">iGo Car.</span></h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">Explorez le monde avec facilité grâce à notre service de location de voitures exceptionnel. Chez iGo Car, nous mettons à votre disposition une flotte de véhicules de qualité, prêts à vous emmener vers de nouvelles aventures. Réservez dès maintenant et laissez-vous emporter par la liberté de la route.</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <Link
                                href="/cars"
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <span className="relative text-base font-semibold text-white"
                                >Commencer</span>
                            </Link>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Le prix le plus bas</h6>
                                {/* <p className="mt-2 text-gray-500">Some text here</p> */}
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Le plus rapide sur le marché</h6>
                                {/* <p className="mt-2 text-gray-500">Some text here</p> */}
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Le plus apprécié</h6>
                                {/* <p className="mt-2 text-gray-500">Some text here</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
