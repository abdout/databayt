'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"

export default function PricingPlans() {
  const { t } = useLocale();
  
  const pricingPlans = [
    {
      key: "oneProject",
      title: t("components.pricing.plans.oneProject.title"),
      description: t("components.pricing.plans.oneProject.description"),
      price: t("components.pricing.plans.oneProject.price"),
      billing: t("components.pricing.plans.oneProject.billing"),
      buttonText: t("components.pricing.plans.oneProject.buttonText")
    },
    {
      key: "strategicPartner",
      title: t("components.pricing.plans.strategicPartner.title"),
      description: t("components.pricing.plans.strategicPartner.description"),
      price: t("components.pricing.plans.strategicPartner.price"),
      billing: t("components.pricing.plans.strategicPartner.billing"),
      buttonText: t("components.pricing.plans.strategicPartner.buttonText")
    },
    {
      key: "productAccess",
      title: t("components.pricing.plans.productAccess.title"),
      description: t("components.pricing.plans.productAccess.description"),
      price: t("components.pricing.plans.productAccess.price"),
      billing: t("components.pricing.plans.productAccess.billing"),
      buttonText: t("components.pricing.plans.productAccess.buttonText")
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full pt-8 px-2">
        {pricingPlans.map((plan) => (
          <div key={plan.key} className="flex flex-col w-full items-center justify-between gap-10 rounded-lg border p-10 text-center">
            <div className="grid gap-6">
              <h3 className="text-lg font-bold sm:text-xl rtl:font-black">
                {plan.title}
              </h3>
              <p className="font-light rtl:font-medium rtl:text-base">
                {plan.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h4 className="text-7xl font-bold rtl:font-black">{plan.price}</h4>
                <p className="text-sm font-medium text-muted-foreground rtl:text-base">
                  {plan.billing}
                </p>
              </div>
              <Link href="/login" className={cn(buttonVariants({ size: "lg" }), "bg-muted text-foreground hover:bg-muted/80")}>
                {plan.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-[62rem] flex-col gap-6 text-center pt-16">
        <p className="text-lg leading-relaxed text-muted-foreground rtl:text-base rtl:font-medium rtl:leading-8">
          {t("components.pricing.plans.footer.notSure")}
        </p>
        <div className="flex justify-center">
          <Link href="/docs/community/support" className={cn(buttonVariants({ size: "lg" }), "")}>
            {t("components.pricing.plans.footer.contactUs")}
          </Link>
        </div>
      </div>
    </>
  )
} 