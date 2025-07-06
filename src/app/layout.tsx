// RootLayout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import {IntlProvider} from "@/i18n/provider";

export const metadata: Metadata = {
  title: "Databayt",
  description: "Business automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          GeistSans.className,
          GeistMono.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem={true}
        >
          <IntlProvider>
          <div className="layout-container">
            <Toaster position="bottom-right" />
            {children}
          </div>
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
