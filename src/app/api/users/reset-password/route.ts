import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { token, newPassword } = await request.json();

    const user = await User.findOne({
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // Compare provided token with hashed token in DB
    const isValid = await bcryptjs.compare(user._id.toString(), token);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid reset token" },
        { status: 400 }
      );
    }

    // Hash and save new password
    const hashPassword = await bcryptjs.hash(newPassword, 10);
    user.password = hashPassword;

    // Clear reset token fields
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;

    await user.save();
    return NextResponse.json(
      { message: "Password reset successful" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
