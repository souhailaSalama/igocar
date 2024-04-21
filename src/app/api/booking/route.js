import { getUserFromCookie } from "@/lib/auth";
import Booking from "@/models/bookingModel";
import { NextResponse } from "next/server";
import User from "@/models/userModel";

export async function POST(request) {
    try {
        const user = await getUserFromCookie(request.cookies)
        const userId = user?._id
        const reqBody = await request.json();
        reqBody.user = userId;
        // create Booking
        const bookingData = await Booking.create(reqBody);
        return NextResponse.json({
            message: "Booking created successfully",
            id: bookingData._id
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const user = searchParams.get("user");
        const userData = await User.findById(user, 'isAdmin')
        let Bookings = []
        if (userData.isAdmin)
            Bookings = await Booking.find()
        else
            Bookings = await Booking.find({ user: userData._id })
        return NextResponse.json({ data: Bookings });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}