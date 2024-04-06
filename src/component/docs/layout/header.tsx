"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Params {
  id: string;
}

const Header = ({ params }: { params: Params }) => {
  const { id } = params;
  const pathname = usePathname();

  const links = [
    { href: `/project/${id}`, label: "Detail" },
    { href: `/project/${id}/itp`, label: "ITP" },
    { href: `/project/${id}/mos`, label: "MOS" },
    { href: `/project/${id}/plan`, label: "Plan" },
    { href: `/project/${id}/report`, label: "Report" },
    { href: `/project/${id}/doc`, label: "Docs" },
    { href: `/project/${id}/quote`, label: "Quote" },
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