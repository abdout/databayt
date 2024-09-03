"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from 'hamburger-react';
import HamburgerMenu from "@/components/hamburger/hamburger";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { header } from "./constant";
import Toggle from "@/components/theme/toggle";
import Link from "next/link";
import MobileHeader from "@/components/root/header/mobile";
import { UserButton } from "@/components/auth/user-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Delay the render by 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="h-20 flex justify-center items-center"
        dir="ltr"
        initial={{ opacity: 0 }} // Initial state: hidden
        animate={{ opacity: isVisible ? 1 : 0 }} // Animate to visible state
        transition={{ duration: 1 }} // Adjust the duration as needed
      >
        <ul className="hidden md:flex space-x-8">
          {header.map((link) => (
            <li
              key={link.key}
              className={
                link.href === '/' ? (pathname === '/' ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100') : (pathname.startsWith(link.href) ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100')
              }
            >
              <TooltipProvider>
                <Tooltip>
                  <Link href={link.href} className="text-lg group relative flex justify-center">
                    <TooltipTrigger asChild>
                      <Icon icon={link.icon} width={35} className="flex-shrink-0" />
                    </TooltipTrigger>
                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block">
                      <TooltipContent>
                        {link.label}
                      </TooltipContent>
                    </div>
                  </Link>
                </Tooltip>
              </TooltipProvider>
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
        <ul className="md:hidden flex space-x-8">
          {header.filter((link, index) => [0, 2, 3].includes(index)).map((link) => (
            <li
              key={link.key}
              className={
                link.href === '/' ? (pathname === '/' ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100') : (pathname.startsWith(link.href) ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100')
              }
            >
              <TooltipProvider>
                <Tooltip>
                  <Link href={link.href} className="text-lg group relative flex justify-center">
                    <TooltipTrigger asChild>
                      <Icon icon={link.icon} width={35} className="flex-shrink-0" />
                    </TooltipTrigger>
                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block">
                      <TooltipContent>
                        {link.label}
                      </TooltipContent>
                    </div>
                  </Link>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
          <li className="opacity-50 hover:opacity-100 z-50">
            <div className="text-lg group relative flex justify-center -ml-2 -mt-[7px]">
              <Hamburger size={22} distance="lg" toggled={open} toggle={setOpen} />
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-5">قائمة</div>
            </div>
          </li>
        </ul>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Header;