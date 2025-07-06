'use client';

import { useLocale } from "@/hooks/use-locale";

export default function PageHeader() {
  const { t } = useLocale();
  
  return (
    <div className="flex w-full max-w-4xl flex-col gap-2 text-center">
      <h2 className="font-heading font-extrabold text-3xl sm:text-3xl md:text-6xl rtl:font-black rtl:leading-tight">
        {t("pages.automated.title")}
      </h2>
      <p className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7 rtl:text-base rtl:leading-7 rtl:font-medium">
        {t("pages.automated.description")}
      </p>
    </div>
  )
} 