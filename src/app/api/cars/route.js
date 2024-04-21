import { connectDB } from "@/config/dbConfig";
import { getUserFromCookie } from "@/lib/auth";
import Car from "@/models/carModel";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
connectDB();

export async function POST(request) {
    try {
        const user = await getUserFromCookie(cookies())
        const userId = user?._id
        const reqBody = await request.json();
        reqBody.addedBy = userId;
        // create user
        await Car.create(reqBody);

        return NextResponse.json({
            message: "car created successfully",
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const max = searchParams.get("max");
        let cars
        if (max !== "null") {
            cars = await Car.find().limit(max)
        } else {
            cars = await Car.find()
        }
        return NextResponse.json({ data: cars });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
