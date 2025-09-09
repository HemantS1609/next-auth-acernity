import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicRoute =
    path === "/login" || path === "/signup" || path === "/verifyemail";
  const token = request.cookies.get("token");

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/service/:path*",
    "/about",
    "/profile",
    "/profile/:path*",
    "/verifyemail",
  ],
};
