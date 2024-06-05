import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from './app/i18n/settings';

// Set the supported languages for acceptLanguage
acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|icons|images|assets|favicon.ico|sw.js|static|fonts|videos|sitemap.xml|scripts).*)',
  ],
};

export function middleware(req: NextRequest): NextResponse {
  // Skip middleware for specific paths
  if (
    req.nextUrl.pathname.includes('icon') ||
    req.nextUrl.pathname.includes('chrome')
  ) {
    return NextResponse.next();
  }

  let lng: string | null = null;

  // Try to get language from Accept-Language header
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  }

  // Use fallback language if none found
  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if language in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  const response = NextResponse.next();

  // const currentLocale = req.nextUrl.pathname.split('/')[1];

  // response.cookies.set({
  //   name: GOOGLE_COOKIE_NAME,
  //   value: '/ru/' + currentLocale,
  //   sameSite: 'none',
  //   secure: true,
  //   path: '/'
  // });


  return response;
}
