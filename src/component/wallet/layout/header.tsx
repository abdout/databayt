"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Header = () => {
  
  const pathname = usePathname();

  const links = [
    { href: `/wallet`, label: "Detail" },
    { href: `/wallet/account`, label: "Account" },
    { href: `/wallet/timesheet`, label: "Timesheet" },
    { href: `/wallet/petty`, label: "Petty" },
    { href: `/wallet/invoice`, label: "Invoice" },
    { href: `/wallet/doc`, label: "Docs" },
    { href: `/wallet/quote`, label: "Quote" },
  ];

  return (
    <div>
      <nav className="flex justify-between p-4 absolute top-1 w-full">
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li
              key={link.href}
              className={
                (
                  link.label === "Detail"
                    ? pathname === link.href
                    : pathname.startsWith(link.href)
                )
                  ? ""
                  : "opacity-50"
              }
            >
              <Link href={link.href} className="text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;