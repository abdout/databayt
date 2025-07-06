'use client'

import Link from "next/link";
import NewsLetter from "./newsletter";
import { footerSections } from "./constant";
import { Logo } from "@/components/atom/icons";
import { useLocale } from "@/hooks/use-locale";

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="bg-muted py-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="w-full px-1 sm:px-2 lg:px-8 pt-6 pb-3 max-w-7xl mx-auto">
        {/* Newsletter and Links Section */}
        <div className="flex flex-col lg:flex-row rtl:lg:flex-row-reverse gap-8 lg:gap-0 mb-16">
          {/* Newsletter Section */}
          <div className="w-full lg:w-[25%] mb-8 lg:mb-0 flex justify-center lg:justify-start rtl:lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-none">
              <NewsLetter />
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:pl-20 rtl:lg:pl-0 rtl:lg:pr-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-20 lg:flex lg:items-start px-0 text-center lg:text-left rtl:lg:text-right">
              {footerSections.map((section) => (
                <div key={section.title} className="w-full lg:flex-1">
                  <h3 className="text-sm font-medium mb-4 rtl:font-bold rtl:text-base">
                    {t(`footer.sections.${section.key}.title`)}
                  </h3>
                  <ul className="space-y-2 rtl:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs font-normal lg:text-sm text-primary/70 hover:text-primary transition-colors rtl:leading-6"
                        >
                          {t(`footer.sections.${section.key}.links.${link.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col lg:flex-row rtl:lg:flex-row-reverse items-start lg:items-center gap-4 lg:gap-10">
            <div className="flex items-center gap-2 rtl:gap-4">
              <Logo width={32} height={32} className="text-foreground" />
              <h1 className="text-2xl font-bold rtl:text-3xl rtl:font-black">Databayt</h1>
            </div>
            <div className="w-full lg:w-[75%] text-xs text-primary/70 rtl:text-sm rtl:leading-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-1 rtl:gap-3 mt-2">
                <span>{t('footer.copyright')}</span>
                <span className="hidden sm:inline">•</span>
                <Link href="/terms-of-use" className="hover:text-primary transition-colors">
                  {t('footer.links.terms')}
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  {t('footer.links.privacy')}
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link href="/safety" className="hover:text-primary transition-colors">
                  {t('footer.links.safety')}
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link href="/status" className="hover:text-primary transition-colors">
                  {t('footer.links.status')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
