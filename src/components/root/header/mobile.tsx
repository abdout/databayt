// Header.tsx
"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { mobile } from "./constant";
import Link from "next/link";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex gap-3 h-20 items-center justify-center md:hidden" dir="ltr">
      <ul className="flex space-x-8">
        {mobile.map((link) => (
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
              <Icon icon={link.icon} width={40} className="flex-shrink-0" />
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-3">{link.label}</div>
            </Link>
          </li>
        ))}
        <li className="opacity-50 hover:opacity-100">
          <div className="text-lg group relative flex justify-center pt-1">
            {/* <Toggle /> */}
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-2">ثيم</div>
          </div>
        </li>
        <li className="opacity-50 hover:opacity-100 z-50">
          <div className="text-lg group relative flex justify-center -mt-[6px]">
            <Hamburger size={23} distance="lg" toggled={open} toggle={setOpen} />
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-5">قائمة</div>
          </div>
        </li>
      </ul>
      {/* <HamburgerMenu open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default MobileHeader;