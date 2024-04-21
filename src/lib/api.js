const fetcher = async ({ url, method, body = false, json = true }) => {
    const res = await fetch(url, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    if (res.status === 400) {
        const data = await res.json();
        throw new Error(data.message)
    }
    if (!res.ok) {
        throw new Error("something went wrong")
    }

    if (json) {
        const data = await res.json();
        return data
    }
};

export const register = async (user) => {
    return fetcher({
        url: "/api/users/register",
        method: "POST",
        body: user,
        json: true
    })
}
export const login = async (user) => {
    return fetcher({
        url: "/api/users/login",
        method: "POST",
        body: user,
        json: true
    })
}

export const logout = async () => {
    return fetcher({
        url: "/api/users/logout",
        method: "GET",
        json: true
    })
}

export const addCar = async (car) => {
    return fetcher({
        url: "/api/cars",
        method: "POST",
        body: car,
        json: true
    })
}

export const getCars = async (max = null) => {
    return fetcher({
        url: `${process.env.NEXT_PUBLIC_domain}api/cars/?max=${max}`,
        method: "GET",
        json: true
    })
}
export const getCar = async (id) => {

    return fetcher({
        url: `${process.env.NEXT_PUBLIC_domain}/api/cars/${id}`,
        method: "GET",
        json: true
    })
}
export const deleteCar = async (id) => {

    return fetcher({
        url: `/api/cars/${id}`,
        method: "DELETE",
        json: true
    })
}
export const updateCar = async (car, id) => {

    return fetcher({
        url: `/api/cars/${id}`,
        method: "PUT",
        body: car,
        json: true
    })
}

export const updateUser = async (user, id) => {

    return fetcher({
        url: `/api/users/update/${id}`,
        method: "PUT",
        body: user,
        json: true
    })
}
export const getCurrentUser = async () => {
    return fetcher({
        url: "/api/users/currentuser",
        method: "GET",
        json: true
    })
}
export const getUsers = async () => {
    return fetcher({
        url: `${process.env.NEXT_PUBLIC_domain}api/users/getusers`,
        method: "GET",
        json: true
    })
}
// booking
export const bookCar = async (book) => {
    return fetcher({
        url: "/api/booking",
        method: "POST",
        body: book,
        json: true
    })
}
export const bookingConfirmation = async (id) => {
    return fetcher({
        url: `${process.env.NEXT_PUBLIC_domain}api/booking/${id}`,
        method: "GET",
        json: true
    })
}
export const bookings = async (userId) => {

    return fetcher({
        url: `${process.env.NEXT_PUBLIC_domain}api/booking/?user=${userId}`,
        method: "GET",
        json: true
    })
}
export const updateBookinStatus = async (status, id) => {

    return fetcher({
        url: `/api/booking/${id}`,
        method: "PUT",
        body: status,
        json: true
    })
}
export default fetcher;