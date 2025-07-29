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

// Import translations dynamically
async function loadTranslations(locale) {
  try {
    const translations = await import(`@/data/translations/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.warn(`Could not load translations for locale: ${locale}`);
    return {};
  }
}

// Get translations function for server-side use
export function getTranslations(locale) {
  const translations = require(`@/data/translations/${locale}.json`);
  
  return function t(key) {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${locale}`);
        return key; // Return the key if translation is missing
      }
    }
    
    return value;
  };
} 