import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req:any) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) return NextResponse.redirect(new URL("/auth/signin", req.url));

    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    if (isAdminRoute && token.role !== "admin") return NextResponse.redirect(new URL("/", req.url));

    return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
