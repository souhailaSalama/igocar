import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await User.find();
        return NextResponse.json({ data: users });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}