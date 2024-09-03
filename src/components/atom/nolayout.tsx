// components/no-layout.tsx (Client Component)
"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/root/footer/ui";
import Header from "@/components/root/header/ui";
import { ModalProvider } from "@/components/modal/context";
import { UploadProvider } from "@/components/upload/context";
import { ArticleProvider } from "@/components/root/article/context";
import { ThemeProvider } from "@/components/theme/provider";

export default function NoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // List of paths that should not use the layout
  const noLayoutPaths = ["/article/add"];

  return (
    <ModalProvider>
      <UploadProvider>
        <ArticleProvider>
          <ThemeProvider>
            <div className="container min-h-0 max-h-0">
              <div className="wrapper">
                {!noLayoutPaths.includes(pathname) && <Header />}
                {children}
                {!noLayoutPaths.includes(pathname) && <Footer />}
              </div>
            </div>
          </ThemeProvider>
        </ArticleProvider>
      </UploadProvider>
    </ModalProvider>
  );
}
