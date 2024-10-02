"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (href: string) =>
    pathname === href
      ? "opacity-100"
      : "opacity-50 hover:opacity-100 transition-opacity";

  return (
    <>
      <nav className="flex justify-center items-center px-4 py-7">
        <div className="flex text-[16px] font-medium gap-x-10">
          <Link href="/server" className={linkStyle("/server")}>
            Server
          </Link>
          <Link href="/client" className={linkStyle("/client")}>
            Client
          </Link>
          <Link href="/admin" className={linkStyle("/admin")}>
            Admin
          </Link>
          <Link href="/setting" className={linkStyle("/setting")}>
            Setting
          </Link>
        </div>
      </nav>
      <div className="absolute top-7 right-10">
        <UserButton />
      </div>
    </>
  );
};
