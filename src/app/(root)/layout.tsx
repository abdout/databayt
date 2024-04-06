'use client';
import { Inter } from "next/font/google";
import "./../globals.css";
import Side from "@/component/layout/side";
import Header from "@/component/layout/header";
import { MainProvider } from "@/provider/main";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const NoLayout = ['/', '/error', '/password', '/verification', '/join', '/reset']
  if (NoLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <MainProvider>
      <html lang="en">
        <body className={`${inter.className} flex`}>
        <div className="flex w-full">
        <div className="w-1/5">
          <Side />
        </div>
        <div className="w-4/5 flex flex-col">
          <Header />
          {children}
        </div>
        </div>
        </body>
      </html>
    </MainProvider>
  );
}
