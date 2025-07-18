"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Translation cache to avoid multiple loads
const translationCache = {};

// Load translation file for a specific language
const loadTranslations = async (language) => {
  if (translationCache[language]) {
    return translationCache[language];
  }

  try {
    const translations = await import(`@/data/translations/${language}.json`);
    translationCache[language] = translations.default || translations;
    return translationCache[language];
  } catch (error) {
    console.warn(`Failed to load translations for ${language}:`, error);
    // Fallback to English if available
    if (language !== 'en') {
      return loadTranslations('en');
    }
    return {};
  }
};

// Helper function to get nested object value by path
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
};

// Helper function to interpolate variables in text
const interpolate = (text, variables = {}) => {
  if (!text || typeof text !== 'string') return text;
  
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key] !== undefined ? variables[key] : match;
  });
};

// Custom hook for translations
export function useTranslation() {
  const pathname = usePathname();
  const { currentLanguage, isLoading: langLoading } = useLanguage();
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract locale from pathname (e.g., /fr/tarifs -> 'fr')
  const pathLocale = pathname.split('/')[1];
  const activeLanguage = ['en', 'fr'].includes(pathLocale) ? pathLocale : currentLanguage;

  // Load translations when language changes
  useEffect(() => {
    const loadLanguageTranslations = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const translationData = await loadTranslations(activeLanguage);
        setTranslations(translationData);
      } catch (err) {
        console.error('Error loading translations:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageTranslations();
  }, [activeLanguage]);

  // Translation function
  const t = (key, variables = {}) => {
    if (!key) return '';
    
    const value = getNestedValue(translations, key);
    
    if (value === null || value === undefined) {
      console.warn(`Translation missing for key: ${key} in language: ${activeLanguage}`);
      return key; // Return the key itself as fallback
    }

    // Handle arrays (for lists)
    if (Array.isArray(value)) {
      return value;
    }

    // Handle objects (return as-is for complex data)
    if (typeof value === 'object') {
      return value;
    }

    // Interpolate variables in string values
    return interpolate(value, variables);
  };

  // Helper function to safely render HTML content
  const tHtml = (key, variables = {}) => {
    const translatedText = t(key, variables);
    return { __html: translatedText };
  };

  // Helper function to check if translation exists
  const hasTranslation = (key) => {
    return getNestedValue(translations, key) !== null;
  };

  return {
    t,
    tHtml,
    hasTranslation,
    currentLanguage: activeLanguage,
    isLoading: isLoading || langLoading,
    error,
    translations
  };
}

// Helper hook for simple translations (for components that only need t function)
export function useT() {
  const { t } = useTranslation();
  return t;
} 