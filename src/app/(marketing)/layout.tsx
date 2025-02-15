import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import Footer from "@/components/atom/footer"
import { ModeSwitcher } from "@/components/mode-switcher"


interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col ">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6 ">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-2">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
            <ModeSwitcher />
          </nav>
          
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
