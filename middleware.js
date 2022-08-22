import { NextRequest, NextResponse } from "next/server";
export const config = { matcher: "/settings" };
export function middleware(req) {
  // return NextResponse.rewrite(new URL("/", req.url));
}
