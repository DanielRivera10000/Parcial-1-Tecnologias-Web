import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"] as const;
const COOKIE_NAME = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest) {

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale === "es" || cookieLocale === "en") return cookieLocale;

 
  const header = request.headers.get("accept-language") ?? "";
  return header.toLowerCase().startsWith("es") ? "es" : "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const currentLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (currentLocale) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, currentLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 año
    });
    return res;
  }

  const preferred = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};