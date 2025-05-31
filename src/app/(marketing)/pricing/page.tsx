import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export const metadata = {
  title: "Pricing",
}

const pricingPlans = [
  {
    title: "One Project",
    description: "Perfect for businesses looking to automate a particular process or solve a focused challenge. We'll deliver a tailored solution built with precision — one project, one powerful outcome.",
    price: "$40",
    billing: "starting from"
  },
  {
    title: "Strategic Partner", 
    description: "Ideal for businesses to outsource development, tap into specialized talent, or co-build long-term solutions. We become your tech partner — agile, reliable, and aligned with your vision.",
    price: "$10",
    billing: "per hours"
  },
  {
    title: "Product Access",
    description: "Access a growing library of deployable tools designed to solve common business problems — from workflow automation to intelligent integrations. Configure, connect, and go.",
    price: "$19", 
    billing: "Billed Monthly"
  }
]

export default function PricingPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:pb-12 lg:pb-24">
      <div className="flex w-full max-w-4xl flex-col gap-4 text-center">
        <div className="flex justify-center">
          <Badge className="bg-muted text-foreground">ROI Guaranteed</Badge>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-3xl md:text-6xl">
          Simple. Transparent.
        </h2>
        <p className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock a horizon of possibilities with flexible pricing options.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full pt-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col w-full items-center justify-between gap-10 rounded-lg border p-10 text-center">
            <div className="grid gap-6">
              <h3 className="text-lg font-bold sm:text-xl">
                {plan.title}
              </h3>
              <p className="font-light">
                {plan.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h4 className="text-7xl font-bold">{plan.price}</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  {plan.billing}
                </p>
              </div>
              <Link href="/login" className={cn(buttonVariants({ size: "lg" }), "bg-muted text-foreground hover:bg-muted/80")}>
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-[62rem] flex-col gap-6 text-center pt-16">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Not sure about these plans? Try us for your first video. You will want us for your next. And if you don&apos;t like working with us, we will even refund the money... or something... I don&apos;t know, we&apos;ve never been there before.
        </p>
        <div className="flex justify-center">
          <Link href="/docs/community/support" className={cn(buttonVariants({ size: "lg" }), "")}>
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="flex w-full max-w-4xl flex-col gap-4">
        {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Taxonomy is a demo app.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p> */}
      </div>
    </section>
  )
}
