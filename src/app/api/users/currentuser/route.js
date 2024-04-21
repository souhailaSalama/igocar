import { getUserIdFromCookie } from "@/helpers/helpers";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    const id = await getUserIdFromCookie(request.cookies);
    const user = await User.findById(id).select("-password");
    return NextResponse.json(
      {
        data: { name: user.name, email: user.email, id: user._id },
        message: "Current user fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
