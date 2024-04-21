const cars = [
    { carName: "DACIA DUSTER ", price: "56", transmission: "Manual", passengers: "5", brand: "Dacia", feul: "Diesel", btnUrl: "#", imageUrl: "https://cdn.sanity.io/images/np2gumla/production/bd396684de62b1e8cd541e13b6925942ac2628a8-1620x1080.png", id: 1 },
    { carName: "DACIA DUSTER ", price: "56", transmission: "Manual", passengers: "5", brand: "Dacia", feul: "Diesel", btnUrl: "#", imageUrl: "https://cdn.sanity.io/images/np2gumla/production/bd396684de62b1e8cd541e13b6925942ac2628a8-1620x1080.png", id: 2 },
    { carName: "DACIA DUSTER ", price: "56", transmission: "Manual", passengers: "5", brand: "Dacia", feul: "Diesel", btnUrl: "#", imageUrl: "https://cdn.sanity.io/images/np2gumla/production/bd396684de62b1e8cd541e13b6925942ac2628a8-1620x1080.png", id: 3 },
    { carName: "DACIA DUSTER ", price: "56", transmission: "Manual", passengers: "5", brand: "Dacia", feul: "Diesel", btnUrl: "#", imageUrl: "https://cdn.sanity.io/images/np2gumla/production/bd396684de62b1e8cd541e13b6925942ac2628a8-1620x1080.png", id: 4 },
    { carName: "DACIA DUSTER ", price: "56", transmission: "Manual", passengers: "5", brand: "Dacia", feul: "Diesel", btnUrl: "#", imageUrl: "https://cdn.sanity.io/images/np2gumla/production/bd396684de62b1e8cd541e13b6925942ac2628a8-1620x1080.png", id: 5 },
    { carName: "DACIA DUSTER ", price: "56", transmission: "Manual", passengers: "5", brand: "Dacia", feul: "Diesel", btnUrl: "#", imageUrl: "https://cdn.sanity.io/images/np2gumla/production/bd396684de62b1e8cd541e13b6925942ac2628a8-1620x1080.png", id: 6 }
]

export const users = [
    {
        _id: 1,
        name: 'nabil',
        email: 'nabil@mail.com',
        password: '123456',
        createdAt: '03/09/2023 09:17 PM',
        updatedAt: '03/09/2023 09:17 PM',
        isActive: 'active',
        isAdmin: true,

    },
    {
        id: 2,
        name: 'client',
        email: 'client@mail.com',
        password: '123456',
        createdAt: '03/09/2023 09:17 PM',
        updatedAt: '03/09/2023 09:17 PM',
        isActive: 'active',
        isAdmin: false,
    }
]

export const booking = [
    {
        _id: 1,
        carName: 'dacia duster',
        fromSlot: '03/09/2023',
        toSlot: '10/09/2023',
        totalDay: 7,
        dayPrice: 56,
        totalPaid: 7 * 56,
        status: 'approved'
    }
]

export default cars;