import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
// connectDB();

export async function PUT(request, { params }) {
    try {
        const reqBody = await request.json();
        const updatedUser = await User.findByIdAndUpdate(params.userId, reqBody, { new: true });
        return NextResponse.json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
