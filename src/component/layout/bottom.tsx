"use client";
import { bottomItem } from "@/constant/side";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottom = () => {
  const pathname = usePathname();

  return (
    <div>
      {bottomItem.map((item, index) => (
        <Link key={index} href={item.path}>
          <div
            className={`flex  space-x-3 items-center pl-4 p-2 ${
              pathname.includes(item.path)
                ? "bg-black text-white "
                : " hover:bg-gray-200"
            }
            `}
          >
            <Icon icon={item.icon} width={28} />
            <span className="text-lg flex">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Bottom;
