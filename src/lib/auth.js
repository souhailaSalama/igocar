import { connectDB } from "@/config/dbConfig";
import { validateJWT } from "@/helpers/helpers";
import User from "@/models/userModel";

connectDB();

// Getting the JWT from cookies:
export const getUserFromCookie = async (cookies) => {
    const jwt = cookies.get("token");
    if (!jwt) return null
    const { _id } = await validateJWT(jwt.value);

    const user = await User.findOne({ _id: _id });

    return user;
};
