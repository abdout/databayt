"use client"

import { useLocale } from "@/hooks/use-locale"

const faqKeys = [
  "oneProjectPlan",
  "strategicPartner",
  "switchPlans",
  "enterpriseSolutions"
]

export default function PricingFAQs() {
  const { t } = useLocale()
  
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="flex w-full max-w-6xl">
        <div className="grid gap-y-12 gap-x-32 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-start rtl:lg:text-end">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              {t('components.pricing.faqs.title')} <br className="hidden lg:block" /> 
            </h2>
            <p>{t('components.pricing.faqs.subtitle')}</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-2xl lg:mx-0">
            {faqKeys.map((key, index) => (
              <div key={index} className={index === 0 ? "pb-6" : "py-6"}>
                <h3 className="font-medium">{t(`components.pricing.faqs.questions.${key}.question`)}</h3>
                <p className="text-muted-foreground mt-4">{t(`components.pricing.faqs.questions.${key}.answer`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 