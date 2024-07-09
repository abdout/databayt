// Header.tsx
"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import HamburgerMenu from "@/components/hamburger/hamburger";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { header } from "./constant";
import Toggle from "@/components/theme/toggle";
import Link from "next/link";
import MobileHeader from "@/components/root/header/mobile";
import { UserButton } from "@/components/auth/user-button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <MobileHeader />
      <div className="hidden md:flex gap-4 h-20 items-center justify-center" dir="ltr">
        <ul className="flex space-x-8">
          {header.map((link) => (
            <li
              key={link.key}
              className={
                (
                  link.label === "Detail"
                    ? pathname === link.href
                    : pathname === link.href
                )
                  ? "hover:opacity-100"
                  : "opacity-50 hover:opacity-100"
              }
            >
              <Link href={link.href} className="text-lg group relative flex justify-center">
                <Icon icon={link.icon} width={35} className="flex-shrink-0" />
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-3">{link.label}</div>
              </Link>
            </li>
          ))}
          <li className="opacity-50 hover:opacity-100">
            <div className="text-lg group relative flex justify-center pt-1">
              <Toggle />
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-2">ثيم</div>
            </div>
          </li>
          <li className="opacity-50 hover:opacity-100 pt-[4px]">
          <UserButton /> 
        </li>
          <li className="opacity-50 hover:opacity-100 z-50">
            <div className="text-lg group relative flex justify-center -ml-2 -mt-[7px]">
              <Hamburger size={22} distance="lg" toggled={open} toggle={setOpen} />
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-5">قائمة</div>
            </div>
          </li>
        </ul>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Header;