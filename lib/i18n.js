export const locales = ['en', 'fr'];
export const defaultLocale = 'en';

export const localeNames = {
  en: {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    direction: "ltr"
  },
  fr: {
    code: "fr", 
    name: "Français",
    flag: "🇫🇷",
    direction: "ltr"
  }
};

export function getLocaleFromPath(pathname) {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

export function getPathWithoutLocale(pathname) {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (locales.includes(firstSegment)) {
    return '/' + pathSegments.slice(1).join('/');
  }
  
  return pathname;
}

export function getLocalizedPath(pathname, locale) {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  
  // Always include locale in path for our [locale] structure
  return `/${locale}${pathWithoutLocale}`;
} 