import Car from "@/models/carModel";
import Booking from "@/models/bookingModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const bookingData = await Booking.findById(params.bookingId, ["car", "fromSlot", "toSlot", "totalDays", "totalAmount"])
        const carData = await Car.findById(bookingData.car, ["carImage", "name", "brand"]);
        const resData = { car: bookingData.car, fromSlot: bookingData.fromSlot, toSlot: bookingData.toSlot, totalDays: bookingData.totalDays, totalAmount: bookingData.totalAmount, brand: carData.brand, name: carData.name, carImage: carData.carImage }
        return NextResponse.json({ data: resData });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
export async function DELETE(request, { params }) {
    try {
        const car = await Car.findByIdAndDelete(params.carId);
        return NextResponse.json({ data: car });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
export async function PUT(request, { params }) {
    try {
        const reqBody = await request.json();
        const res = await Booking.findByIdAndUpdate(params.bookingId, reqBody, { new: true });
        return NextResponse.json({ message: "car updated successfully" });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}