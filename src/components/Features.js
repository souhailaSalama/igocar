import React from 'react'
import Container from './Container'

export default function Features() {
    return (
        <div id="features">
            <Container>
                <div className="md:w-2/3 lg:w-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                    </svg>

                    <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
                        Explorez Nos Principales Fonctionnalités
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">Découvrez nos fonctionnalités de location de voiture : réservation en ligne facile, prise en charge à distance, paiement sécurisé, et bien plus encore. Simplifiez votre voyage avec iGo Car.</p>
                </div>
                <div
                    className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
                >
                    <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5
                                    className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                >
                                    Réservation en ligne
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Expérimentez la commodité et l'autonomisation des réservations en ligne sans couture dès aujourd'hui.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5
                                    className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                >
                                    Pas de frais cachés
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Sachez exactement ce que vous payez.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5
                                    className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                >
                                    Nous alignons nos tarifs
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Vous avez trouvé la même offre pour moins cher ? Nous ajusterons notre tarif en conséquence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
                    >
                        <div
                            className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5
                                    className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                >
                                    Locations flexibles
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Vous pouvez annuler ou modifier la plupart des réservations gratuitement jusqu’à 48 heures avant la prise en charge du véhicule.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
