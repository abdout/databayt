'use client';

import { useLocale } from "@/hooks/use-locale";
import enDocs from '@/app/docs/docs-en.json';
import arDocs from '@/app/docs/docs-ar.json';

/**
 * A custom hook that extends the existing useLocale hook to handle docs-specific translations.
 * This preserves backward compatibility with the existing i18n system.
 */
export function useDocsTranslation() {
  const { locale, t: appT, ...rest } = useLocale();

  // Extend the t function to check docs translations first
  const t = (id: string, values?: { defaultMessage?: string }) => {
    // Only handle docs. prefixed keys
    if (id.startsWith('docs.')) {
      try {
        // Split the key to get the sections (remove the 'docs.' prefix)
        const keyPath = id.substring(5).split('.');
        
        // Get translations based on current locale
        const docsTranslations = locale === 'ar' ? arDocs : enDocs;
        
        // Navigate through the nested docs object
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let result: any = docsTranslations;
        for (const key of keyPath) {
          if (result && typeof result === 'object' && key in result) {
            result = result[key];
          } else {
            // Key path not found in translations
            return values?.defaultMessage || id.split('.').pop() || id;
          }
        }
        
        return typeof result === 'string' ? result : values?.defaultMessage || id.split('.').pop() || id;
      } catch (error) {
        console.warn(`Docs translation error for key: ${id}`, error);
        return values?.defaultMessage || id.split('.').pop() || id;
      }
    }
    
    // Fall back to regular app translations for non-docs keys
    return appT(id, values);
  };

  return {
    ...rest,
    locale,
    t
  };
}
