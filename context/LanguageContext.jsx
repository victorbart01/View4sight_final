"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Language Context
const LanguageContext = createContext();

// Available languages
export const LANGUAGES = {
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

// Detect browser language with fallback
const detectBrowserLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  
  // Check navigator.language and navigator.languages
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Return supported language or default to English
  return Object.keys(LANGUAGES).includes(langCode) ? langCode : 'en';
};

// Language Provider Component
export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        // Check localStorage first
        const savedLanguage = localStorage.getItem('view4sight_language');
        
        if (savedLanguage && Object.keys(LANGUAGES).includes(savedLanguage)) {
          setCurrentLanguage(savedLanguage);
        } else {
          // Fall back to browser detection
          const detectedLanguage = detectBrowserLanguage();
          setCurrentLanguage(detectedLanguage);
          localStorage.setItem('view4sight_language', detectedLanguage);
        }
              } catch (error) {
          console.warn('Error initializing language:', error);
          setCurrentLanguage('en'); // Safe fallback to English
        } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, []);

  // Change language function
  const changeLanguage = (languageCode) => {
    if (Object.keys(LANGUAGES).includes(languageCode)) {
      setCurrentLanguage(languageCode);
      localStorage.setItem('view4sight_language', languageCode);
      
      // Update document language attribute
      document.documentElement.lang = languageCode;
      document.documentElement.dir = LANGUAGES[languageCode].direction;
    }
  };

  // Get current language info
  const getCurrentLanguageInfo = () => LANGUAGES[currentLanguage];

  const contextValue = {
    currentLanguage,
    changeLanguage,
    getCurrentLanguageInfo,
    availableLanguages: LANGUAGES,
    isLoading
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
} 