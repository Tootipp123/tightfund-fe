import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "8.8.8.8"; // fallback IP for local dev

  const geoRes = await fetch(`https://ipinfo.io/${ip}?token=YOUR_TOKEN_HERE`);
  const geoData = await geoRes.json();

  const country = geoData.country || "US";

  const response = NextResponse.next();
  response.cookies.set("country", country);

  return response;
}
