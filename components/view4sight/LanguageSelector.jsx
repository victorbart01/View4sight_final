"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { localeNames, getLocalizedPath, getPathWithoutLocale } from "@/lib/i18n";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Extract current language from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLanguage = ['en', 'fr'].includes(pathSegments[0]) ? pathSegments[0] : 'en';
  const getCurrentLanguageInfo = () => localeNames[currentLanguage];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle language change
  const handleLanguageChange = (languageCode) => {
    if (languageCode !== currentLanguage) {
      const pathWithoutLocale = getPathWithoutLocale(pathname);
      const newPath = getLocalizedPath(pathWithoutLocale, languageCode);
      router.push(newPath);
    }
    setIsOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  const currentLangInfo = getCurrentLanguageInfo();
  const availableLanguages = Object.values(localeNames);

  return (
    <div className="language-selector position-relative d-inline-block">
      {/* Language Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-sm btn-outline-secondary hstack gap-2 border-0 text-gray-300 hover:text-white transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        onKeyDown={handleKeyDown}
      >
        <i className="unicon-earth icon-1" />
        <span className="fw-medium">{currentLangInfo.name}</span>
        <i 
          className={`unicon-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ fontSize: '0.75rem' }}
        />
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="language-dropdown position-absolute start-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg"
          style={{ 
            minWidth: '180px', 
            zIndex: 1050,
            bottom: '100%',
            marginBottom: '8px'
          }}
          role="menu"
          aria-label="Language options"
          onKeyDown={handleKeyDown}
        >
          <div className="py-2">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-100 text-start px-3 py-2 border-0 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors d-flex align-items-center gap-3 ${
                  currentLanguage === language.code 
                    ? 'bg-gray-50 dark:bg-gray-700 text-primary' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                role="menuitem"
                aria-label={`Switch to ${language.name}`}
              >
                <span className="fw-medium flex-grow-1">{language.name}</span>
                {currentLanguage === language.code && (
                  <i className="unicon-checkmark text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Custom CSS for enhanced styling */}
      <style jsx>{`
        .language-selector .btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: transparent;
        }
        
        .language-dropdown {
          animation: fadeInUp 0.15s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .language-dropdown button:first-child {
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
        }
        
        .language-dropdown button:last-child {
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }
        
        .transition-transform {
          transition: transform 0.2s ease-in-out;
        }
        
        .transition-colors {
          transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        }
        
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
} 