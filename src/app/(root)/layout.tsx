// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import NoLayout from "@/components/atom/nolayout";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "الحركة الوطنية",
  description: "الحركة الوطنية للبناء والتنمية - المجتمع اولا",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={rubik.className} dir="rtl">
          <NoLayout>{children}</NoLayout>
        </body>
      </html>
    </SessionProvider>
  );
}
