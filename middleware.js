import { NextResponse } from 'next/server';
import { locales, defaultLocale, getLocaleFromPath } from './lib/i18n';

// Matcher configuration to exclude static files
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|assets|[\\w-]+\\.\\w+).*)',
    // Match root
    '/'
  ]
};

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has a locale
  const localeFromPath = getLocaleFromPath(pathname);
  const hasLocale = locales.includes(pathname.split('/')[1]);
  
  // If no locale in path, redirect to detected or default locale
  if (!hasLocale) {
    const locale = getLocaleFromRequest(request) || defaultLocale;
    const localizedPath = `/${locale}${pathname === '/' ? '' : pathname}`;
    
    return NextResponse.redirect(new URL(localizedPath, request.url));
  }
  
  // Add locale info to headers for the application
  const response = NextResponse.next();
  response.headers.set('x-locale', localeFromPath);
  
  return response;
}

function getLocaleFromRequest(request) {
  // Try to get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Parse Accept-Language header to find best match
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, q = '1'] = lang.trim().split(';q=');
        return { code: code.split('-')[0].toLowerCase(), quality: parseFloat(q) };
      })
      .sort((a, b) => b.quality - a.quality);
    
    // Find first supported locale
    for (const { code } of languages) {
      if (locales.includes(code)) {
        return code;
      }
    }
  }
  
  return defaultLocale;
} 