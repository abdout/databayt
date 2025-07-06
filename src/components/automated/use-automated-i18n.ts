'use client'

import { useLocale } from "@/hooks/use-locale"
import { automated } from "./constant"
import { Automated } from "./type"

/**
 * Hook that provides internationalized automated project data
 * @returns Translated automated projects
 */
export function useAutomatedI18n(): Automated[] {
  const { t } = useLocale()
  
  return automated.map(project => {
    // Use project.id directly for the translation key - ensure it matches exactly what's in the locale files
    // Including spaces and special characters
    // This is critical for IDs with spaces like "public party"
    const translationKey = project.id;
    
    return {
      ...project,
      name: t(`projects.automated.${translationKey}.name`, { defaultMessage: project.name }),
      description: t(`projects.automated.${translationKey}.description`, { defaultMessage: project.description }),
      body: t(`projects.automated.${translationKey}.body`, { defaultMessage: project.body }),
      // Keep other fields as they are (src, images, technologies, features, price, livePreview, github)
      features: project.features.map((feature, index) => 
        t(`projects.automated.${translationKey}.features.${index}`, { defaultMessage: feature })
      )
    };
  })
}
