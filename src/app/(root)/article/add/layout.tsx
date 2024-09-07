import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../../../globals.css";
import { ModalProvider } from "@/components/modal/context";
import { UploadProvider } from "@/components/upload/context";
import { ArticleProvider } from "@/components/root/article/context";
import { ThemeProvider } from "@/components/theme/provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Footer from "@/components/root/footer/ui";
import Header from "@/components/root/header/ui";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "الحركة الوطنية",
  description: "الحركة الوطنية للبناء والتنمية - المجتمع اولا",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={rubik.className} dir="rtl">
          <div className="container min-h-0 max-h-0">
            <div className="wrapper">
              <ModalProvider>
                <UploadProvider>
                  <ArticleProvider>
                    <ThemeProvider>
                      
                      {children}
                      
                    </ThemeProvider>
                  </ArticleProvider>
                </UploadProvider>
              </ModalProvider>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
