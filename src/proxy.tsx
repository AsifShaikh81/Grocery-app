// THIS PROXY IS TO PROTECT PRIVATE ROUTE

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicRoutes = [
    "/login",
    "/register",
    "/api/auth",
    "/favicon.ico",
    "/_next"
  ];

  if (publicRoutes.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Role restriction
  const role=token.role
  if(pathname.startsWith("/user") && role!=='user'){
    return NextResponse.redirect(new URL('/unauthorized',request.url))
  }
  if(pathname.startsWith("/delivery") && role!=='deliveryBoy'){
    return NextResponse.redirect(new URL('/unauthorized',request.url))
  }
  if(pathname.startsWith("/admin") && role!=='admin'){
    return NextResponse.redirect(new URL('/unauthorized',request.url))
  }

  return NextResponse.next();
}
export const config = {
    matcher:[
        // Exclude all files in the public folder and other static assets
         '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
}

// req---->middleware--->server

//public route
// login register api auth

//private route
//home 