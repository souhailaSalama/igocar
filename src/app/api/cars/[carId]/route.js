import Car from "@/models/carModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const car = await Car.findById(params.carId);
        return NextResponse.json({ data: car });
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
        await Car.findByIdAndUpdate(params.carId, reqBody);
        return NextResponse.json({ message: "car updated successfully" });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}