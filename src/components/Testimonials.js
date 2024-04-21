import React from 'react'
import Container from './Container'
import Image from 'next/image'

export default function Testimonials() {
    return (
        <div className="text-gray-600 dark:text-gray-300" id="testimonials">
            <Container>
                <div className="mb-20 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        Nous avons des fans.
                    </h2>
                </div>
                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <Image className="w-12 h-12 rounded-full" src="/images/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy"></Image>
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                            </div>
                        </div>
                        <p className="mt-8">Un service exceptionnel ! La voiture était en parfait état et le processus de réservation était simple et rapide. Je recommande vivement iGo Car.</p>
                    </div>
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <Image className="w-12 h-12 rounded-full" src="/images/avatar-1.webp" alt="user avatar" width="200" height="200" loading="lazy"></Image>
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                            </div>
                        </div>
                        <p className="mt-8"> J'ai adoré mon expérience avec iGo Car. Les véhicules sont impeccables et le personnel est très professionnel. Je réserverai à nouveau sans hésitation.</p>
                    </div>
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <Image className="w-12 h-12 rounded-full" src="/images/avatar-2.webp" alt="user avatar" width="200" height="200" loading="lazy"></Image>
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                            </div>
                        </div>
                        <p className="mt-8">Le choix de voitures est incroyable, et les prix sont très compétitifs. C'était un plaisir de louer chez iGo Car.</p>
                    </div>
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <Image className="w-12 h-12 rounded-full" src="/images/avatar-3.webp" alt="user avatar" width="200" height="200" loading="lazy"></Image>
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                            </div>
                        </div>
                        <p className="mt-8">Le service clientèle est impeccable. J'ai eu une urgence pendant mon voyage et l'équipe d'iGo Car a été extrêmement serviable et réactive.</p>
                    </div>
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <Image className="w-12 h-12 rounded-full" src="/images/avatar-4.webp" alt="user avatar" width="200" height="200" loading="lazy"></Image>
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                            </div>
                        </div>
                        <p className="mt-8"> Les voitures iGo sont tout simplement géniales. J'ai eu une conduite confortable et sans souci tout au long de mon voyage. Merci pour cette expérience mémorable !</p>
                    </div>
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <Image className="w-12 h-12 rounded-full" src="/images/avatar-2.webp" alt="user avatar" width="400" height="400" loading="lazy"></Image>
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                            </div>
                        </div>
                        <p className="mt-8">Je suis un client fidèle d'iGo Car depuis des années, et ils ne cessent de me surprendre par leur qualité de service. Je ne louerais nulle part ailleurs.</p>
                    </div>

                </div>
            </Container>
        </div>
    )
}
