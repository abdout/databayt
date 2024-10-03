import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../../globals.css";
import Sidebar from "@/components/x/layout/sidebar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "x",
  description: "Full stack x clone",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" >
      <body className={rubik.className} dir="rtl">
        <div className="h-screen">
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />
              <div className="col-span-3 lg:col-span-2 border-x-[1px] border-slate-400">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
