"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  // Show loading state until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 px-0"
        disabled
      >
        <SunIcon className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 px-0"
      onClick={toggleTheme}
    >
      <SunIcon className="h-4 w-4 hidden dark:block" />
      <MoonIcon className="h-4 w-4 block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}